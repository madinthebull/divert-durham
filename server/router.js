// const Authentication = require('./controllers/authentication')
// const passportService = require('./services/passport')
// const passport = require('passport')

// const requireAuth = passport.authenticate('jwt', { session: false })
// const requireSignin = passport.authenticate('local', { session: false })
const Giver = require('./models/Giver')
// const Notification = require('./models/Notification')
// const Receiver = require('./models/Receiver')

module.exports = function(app) {
  app.post('/join', (req, res) => {
    //create a new Giver in the database
    let newGiver = new Giver({
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
    Giver.findOne({ name: newGiver.name }, function(err, foundGiver) {
      if (!foundGiver) {
        newGiver.save((err, giver) => {
          if (err) {
            console.error(err)
          } else {
            res.send({ success: true, giver: giver })
          }
        })
      } else {
        console.error('The giver already exists in the database')
      }
    })
  })
  app.post('/auth/signin')
  app.post('/auth/signup')
}
