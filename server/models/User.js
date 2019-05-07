const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  password: String,
  id: Number,
  email: String,
  firstName: String,
  lastName: String,
  location: { type: Schema.Types.ObjectId, ref: 'location' },
  activities: [{ type: Schema.Types.ObjectId, ref: 'activities' }]
})

const User = mongoose.model('user', UserSchema)

module.exports = User
