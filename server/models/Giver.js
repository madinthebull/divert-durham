const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GiverSchema = new Schema({
  username: String,
  password: String,
  giverId: Number,
  email: String,
  firstName: String,
  lastName: String,
  address: Object,
  profileType: String,
  notifications: [{ type: Schema.Types.ObjectId, ref: 'notifcation' }]
})

const Giver = mongoose.model('giver', GiverSchema)

module.exports = Giver
