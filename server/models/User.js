const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  home: String,
  homeAddress: Object,
  location: { type: Schema.Types.ObjectId, ref: 'location' }
})

const User = mongoose.model('user', UserSchema)

module.exports = User
