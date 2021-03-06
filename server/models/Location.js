const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  dropOffInstructions: String,
  isAcceptingCompost: Boolean,
  dropOffCoordinates: Object
})

const Location = mongoose.model('location', LocationSchema)

module.exports = Location
