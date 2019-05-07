// const Authentication = require('./controllers/authentication')
// const passportService = require('./services/passport')
// const passport = require('passport')

// const requireAuth = passport.authenticate('jwt', { session: false })
// const requireSignin = passport.authenticate('local', { session: false })
const User = require('./models/User')
// const Notification = require('./models/Notification')
// const Receiver = require('./models/Receiver')

module.exports = function(app) {
  app.post('/join', (req, res) => {
    //create a new Giver in the database
    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
      giverId: req.body.giverId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      profileType: req.body.profileType,
      notifications: req.body.notifications
    })

    //Only save if the user doesn't exist yet
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
  })
  app.post('/auth/signin')
  app.post('/auth/signup')
}
