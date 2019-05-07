const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  dropOffInstructions: String,
  isAcceptingCompost: Boolean,
  homeAddress: { lat: Number, lng: Number },
  dropOff: { lat: Number, lng: Number }
})

const Location = mongoose.model('location', LocationSchema)

module.exports = Location
