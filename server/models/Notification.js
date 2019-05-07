const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
  onWay: Boolean,
  delivered: Boolean,
  giver: { type: Schema.Types.ObjectId, ref: 'giver' },
  receive: { type: Schema.Types.ObjectId, ref: 'receiver' },
  timeSent: Number
})

const Notification = mongoose.model('notification', NotificationSchema)

module.exports = Notification
