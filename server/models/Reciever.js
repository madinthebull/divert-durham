const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceiverSchema = new Schema({
  username: String,
  password: String,
  receiverId: Number,
  email: String,
  firstName: String,
  lastName: String,
  address: Object,
  profileType: String,
  activelyAccepting: Boolean,
  notifications: [{ type: Schema.Types.ObjectId, ref: 'notifcation' }]
})

const Receiver = mongoose.model('receiver', ReceiverSchema)

module.exports = Receiver
