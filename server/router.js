const User = require('./models/User')
const Location = require('./models/Location')
const Notification = require('./models/Notification')

module.exports = function(app) {
  // create new user
  app.post('/join', (req, res) => {
    //create a new user in the database
    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
      id: req.body.id,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      homeAddress: req.body.homeAddress,
      notifications: req.body.notifications
    })

    // if user wants to be a receiver, create a new location
    if (
      req.body.dropOffInstructions &&
      req.body.isAcceptingCompost &&
      req.body.dropOffCoordinates
    ) {
      let newLocation = new Location({
        dropOffInstructions: req.body.dropOffInstructions,
        isAcceptingCompost: req.body.isAcceptingCompost,
        dropOffCoordinates: req.body.dropOffCoordinates
      })

      newUser.location = newLocation

      // Only save if the user doesn't exist yet
      User.findOne({ username: newUser.username }, function(err, foundUser) {
        if (!foundUser) {
          newUser.save((err, user) => {
            if (err) {
              console.error(err)
            } else {
              res.send({ success: true, user: user })
            }
          })

          newLocation.save((err, location) => {
            if (err) {
              console.error(err)
            } else {
              res.send({ success: true, location: location })
            }
          })
        } else {
          console.error('The user already exists in the database')
        }
      })
    } else {
      // Only save if the user doesn't exist yet
      User.findOne({ username: newUser.username }, function(err, foundUser) {
        if (!foundUser) {
          newUser.save((err, user) => {
            if (err) {
              console.error(err)
            } else {
              res.send({ success: true, user: user })
            }
          })
        } else {
          console.error('The user already exists in the database')
        }
      })
    }
  })
  app.post('/notifications', (req, res, next) => {
    // create new notification
    let newNotification = new Notification(req.body)

    newNotification.onWay = req.body.onWay
    newNotification.delivered = req.body.delivered
    newNotification.giverId = req.body.giverId
    newNotification.receiverId = req.body.receiverId
    newNotification.timeSent = req.body.timeSent

    // add the notification to the receiver
    req.user.notifications.push(newNotification)

    req.user.save((err, user) => {
      if (err) {
        console.error(err)
      } else {
        res.send({ success: true, product: product })
      }
    })
  })
  // get all notifications for the receiver
  app.get('/notifications/:user', (req, res, next) => {
    Notification.find({ receiverId: req.params.user })
      .populate('user')
      .exec((err, notifications) => {
        if (err) {
          console.error(err)
        } else {
          res.send(notifications.map(notification => notification))
        }
      })
  })
  // get all the locations actively accepting compost
  app.get('/locations', (req, res) => {
    Location.find({ isAcceptingCompost: 'true' })
      .populate('user')
      .exec((err, locations) => {
        if (err) {
          console.error(err)
        } else {
          res.send(locations.map(location => location))
        }
      })
  })
  app.post('/auth/signin')
  app.post('/auth/signup')
}
