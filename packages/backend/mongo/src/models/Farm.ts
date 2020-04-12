import mongoose from 'mongoose'
import extendSchema from '../utils/extendSchema'
import {AuthenticatedDocument} from '../abstract/documents'
import {BaseAuthenticatedSchema} from '../abstract/schemas'

export interface FarmDocument extends AuthenticatedDocument {
  name: string
  country?: string
  region?: string
}

const FarmZone = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

const Farm = extendSchema(
  BaseAuthenticatedSchema,
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: 'country',
    },
    region: {
      type: mongoose.Types.ObjectId,
      ref: 'region',
    },
    farmZones: [FarmZone],
  },
  {timestamps: true},
)

export const FarmModel = mongoose.model<FarmDocument>('farm', Farm)