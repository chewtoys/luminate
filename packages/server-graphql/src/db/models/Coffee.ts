import mongoose from 'mongoose'

const Coffee = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    region: {
      type: mongoose.Types.ObjectId,
      ref: 'region',
    },
  },
  {timestamps: true},
)

export default mongoose.model('coffee', Coffee)
