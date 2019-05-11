const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
  onWay: Boolean,
  delivered: Boolean,
  giverId: { type: Schema.Types.ObjectId, ref: 'user' },
  receiverId: { type: Schema.Types.ObjectId, ref: 'user' },
  timeSent: Date
})

const Notification = mongoose.model('notification', NotificationSchema)

module.exports = Notification
