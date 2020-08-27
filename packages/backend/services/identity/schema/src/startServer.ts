import path from 'path'
require('dotenv').config({
  path: path.join(process.cwd(), '../..', '.env'),
})
import {ApolloServer} from 'apollo-server-express'
import {buildFederatedSchema} from '@apollo/federation'
import express from 'express'

import {schemas} from './schema'
import {AccountService, RoleService, UserService} from './services'
import {seedDatabase} from './seedDatabase'
import {Container} from './utils'
import {createMongoConnection, Token} from '@luminate/mongo-utils'
import {parseUserFromRequest} from '@luminate/graphql-utils'
import {KafkaClient, Consumer, Producer} from 'kafka-node'
import {AccountsAggregate, IAccountsAggregate} from './aggregates'
const PORT = process.env.PORT || 3001
import {TYPES} from './utils/types'

export interface Context {
  res: express.Response
  container: Container
  services: {
    account: AccountService
    role: RoleService
    user: UserService
  }
}

class Server {
  private app = express()
  private port = process.env.PORT || 3001
  private container = new Container()

  public async start() {
    await createMongoConnection(process.env.MONGO_URL)
    await seedDatabase()

    this.registerServices()

    const client = new KafkaClient({
      kafkaHost: process.env.KAFKA_HOST || 'http://localhost:9092',
      autoConnect: true,
      connectTimeout: 1000,
    })

    await new Promise<Producer>((resolve, reject) => {
      client.createTopics([{topic: 'accounts', partitions: 1, replicationFactor: 1}], async err => {
        if (err) {
          console.error({err})
          reject(err)
        }
        const producer = new Producer(client)

        this.container.bind<Producer>(TYPES.KafkaProducer, producer)
        resolve()
      })
    })

    this.container.bind<KafkaClient>(TYPES.KafkaClient, client)

    this.container.bind<IAccountsAggregate>(TYPES.AccountsAggregate, new AccountsAggregate(client))

    const server = new ApolloServer({
      schema: buildFederatedSchema(schemas),
      context: ({req, res}): Context => {
        this.container.bind<Token | null>(TYPES.User, parseUserFromRequest(req))

        const services = {
          account: this.container.resolve<AccountService>(TYPES.AccountService),
          role: this.container.resolve<RoleService>(TYPES.RoleService),
          user: this.container.resolve<UserService>(TYPES.UserService),
        }

        return {
          res,
          services,
          container: this.container,
        }
      },
      introspection: true,
      engine: false,
      playground:
        process.env.NODE_ENV === 'production'
          ? false
          : {
              settings: {
                'request.credentials': 'include',
              },
            },
    })

    server.applyMiddleware({app: this.app, cors: true})

    this.app.listen({port: this.port}, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`),
    )
  }

  private registerServices() {
    this.container.bind<AccountService>(
      TYPES.AccountService,
      resolver =>
        new AccountService(
          resolver.resolve(TYPES.KafkaProducer),
          resolver.resolve(TYPES.KafkaClient),
          resolver.resolve(TYPES.User),
        ),
    )

    this.container.bind<RoleService>(TYPES.RoleService, resolver => new RoleService(resolver.resolve(TYPES.User)))

    this.container.bind<UserService>(TYPES.UserService, resolver => new UserService(resolver.resolve(TYPES.User)))
  }
}

const server = new Server()
server.start()
