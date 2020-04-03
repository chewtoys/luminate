import path from 'path'
require('dotenv').config({
  path: path.join(process.cwd(), '../..', '.env'),
})
import {ApolloServer, CorsOptions} from 'apollo-server-express'
import {ApolloGateway, RemoteGraphQLDataSource} from '@apollo/gateway'
import {createMongoConnection} from '@luminate/mongo'
import {parseTokenFromRequest, Token} from '@luminate/graphql-utils'
import cookieParser from 'cookie-parser'
import express from 'express'
const app = express()

app.use(cookieParser())

const PORT = process.env.PORT || 3000
const USER_AUTH_TOKEN = process.env.USER_AUTH_TOKEN || 'localsecrettoken'
const DEPLOY_ENV = process.env.DEPLOY_ENV || 'development'

export interface Context {
  req: express.Request
  res: express.Response
  user: Token | null
}

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  // add x-auth-user header to all service requests
  willSendRequest({request, context}: {request: any; context: any}) {
    const userString = JSON.stringify(context.user)
    if (userString) {
      request.http.headers.set('x-auth-user', Buffer.from(userString).toString('base64'))
    }
  }

  // forward set-cookie headers to final response
  async process({request, context}: {request: any; context: any}) {
    const response = await super.process({request, context})
    const setCookieHeader = response.http?.headers.get('set-cookie')
    if (setCookieHeader) {
      context.res.set('set-cookie', setCookieHeader)
    }
    return response
  }
}

const startServer = async () => {
  await createMongoConnection(process.env.MONGO_URL)
  //configure cors
  const whitelist = [
    `http://localhost:${PORT}`,
    'http://localhost:8001',
    'https://luminate.coffee',
    'http://api.luminate.coffee',
    'http://staging.luminate.coffee',
    'http://staging.api.luminate.coffee',
    'https://api.luminate.coffee',
    'https://staging.luminate.coffee',
    'https://staging.api.luminate.coffee',
  ]

  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)
      // allow cors from deployment branches in netlify
      const originSplitForStaging = origin.split('--')
      const parsedOrigin = originSplitForStaging.length > 1 ? `https://${originSplitForStaging[1]}` : origin
      if (whitelist.includes(parsedOrigin)) return callback(null, true)

      callback(new Error('Request rejected by CORS'))
    },
    credentials: true,
  }

  const buildHostname = (env: string) => {
    switch (env.toLowerCase()) {
      case 'production':
        return 'https://api.luminate.coffee'
      case 'staging':
        return 'https://staging.api.luminate.coffee'
      default:
        return 'http://localhost'
    }
  }

  const gateway = new ApolloGateway({
    serviceList: [
      {
        name: 'auth',
        url: 'http://localhost:3001/graphql',
        // url: `http://server-auth${false ? buildHostname(DEPLOY_ENV) : ''}:${process.env.SERVER_AUTH_PORT ||
        //   3001}/graphql`,
      },
      {
        name: 'encyclopedia',
        url: 'http://localhost:3002/graphql',
        //   // url: `http://server-encyclopedia${false ? buildHostname(DEPLOY_ENV) : ''}:${process.env
        //   //   .SERVER_ENCYCLOPEDIA_PORT || 3002}/graphql`,
      },
      {
        name: 'sensory-eval',
        url: 'http://localhost:3003/graphql',
        // url: `http://server-sensory-eval${false ? buildHostname(DEPLOY_ENV) : ''}:${process.env
        //   .SERVER_SENSORY_EVAL_PORT || 3003}/graphql`,
      },
    ],
    buildService: ({url}) => {
      return new AuthenticatedDataSource({url})
    },
  })

  const server = new ApolloServer({
    gateway,
    subscriptions: false,
    context: async ({req, res}) => {
      let user = null
      try {
        user = parseTokenFromRequest(req, USER_AUTH_TOKEN)
      } catch {}

      return {
        res,
        user,
      }
    },
    introspection: true,
    engine: process.env.NODE_ENV === 'production' ? {apiKey: process.env.ENGINE_API_KEY} : false,
    playground:
      process.env.NODE_ENV !== 'production' || DEPLOY_ENV !== 'production'
        ? {
            settings: {
              'request.credentials': 'include',
            },
          }
        : false,
  })

  server.applyMiddleware({app, cors: corsOptions})

  app.listen({port: PORT}, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`))
}

startServer()
