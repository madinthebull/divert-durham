const User = require('./models/User')
const Location = require('./models/Location')
const Notification = require('./models/Notification')

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}
module.exports = function(app) {
  // create new user
  app.post(
    '/join',
    asyncMiddleware(async (req, res, next) => {
      //create a new user in the database
      let newUser = await new User({
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
        req.body.receiverType &&
        req.body.dropOffLocation &&
        req.body.dropOffInstructions &&
        req.body.isAcceptingCompost &&
        req.body.dropOffCoordinates
      ) {
        let newLocation = new Location({
          receiverType: req.body.receiverType,
          dropOffLocation: req.body.dropOffLocation,
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
  ) // to test: send user object with location object in body of postman

  app.post(
    '/notifications',
    asyncMiddleware(async (req, res, next) => {
      // create new notification
      let newNotification = await new Notification({
        onWay: req.body.onWay,
        delivered: req.body.delivered,
        giverId: req.body.giverId,
        receiverId: req.body.receiverId,
        timeSent: req.body.timeSent
      })

      newNotification.save((err, notification) => {
        if (err) {
          console.error(err)
        } else {
          res.send({ success: true, notifcation: notification })
        }
      })
    })
  ) // to test: send notification object in body of postman

  // get all notifications for the receiver
  app.get('/notifications/:user', (req, res, next) => {
    Notification.find({ receiverId: req.params.user })
      // .populate('receiverId')
      // .populate('giverId')
      .exec((err, notifications) => {
        if (err) {
          console.error(err)
        } else {
          res.send(notifications.map(notification => notification))
        }
      })
  }) // to test: in the browser

  // get all the locations actively accepting compost
  app.get('/locations', (req, res, next) => {
    Location.find({ isAcceptingCompost: 'true' })
      .populate('user')
      .exec((err, locations) => {
        if (err) {
          console.error(err)
        } else {
          res.send(locations.map(location => location))
        }
      })
  }) // to test: in the browser

  // edit profile
  // app.put('/profile', (req, res, next) => {})
  // app.post('/auth/signin')
  // app.post('/auth/signup')
}
