const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  id: Number,
  email: String,
  firstName: String,
  lastName: String,
  homeAddress: Object,
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  notifications: [{ type: Schema.Types.ObjectId, ref: 'notifications' }]
})

const User = mongoose.model('user', UserSchema)

module.exports = User
