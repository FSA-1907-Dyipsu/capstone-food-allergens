/* load configs */
require('dotenv').config();
const cors = require('cors')

/* app setup */
const express = require('express')
const app = express()
const path = require('path')
const cookieSession = require('cookie-session')
const passportSetup = require('./config/passport')
const passport = require('passport')
const db = require('./db/');

// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [process.env.SESSION_KEY]
// }))

app.use('*', function(req, res, next) {
  //replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

  //enable pre-flight
  app.options('*', cors());

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json());

app.use('/', express.static('dist'));
app.get('/', (req,res,next) =>{
  console.log('hit')
})

// API Routes
app.use('/api/auth', require('./api/auth'));
app.use('/api/test', require('./api/test'));
app.use('/api/user', require('./api/user'));

app.use(({ message }, req, res, next) => {
  res.status(500).send({ message });
});

const PORT = process.env.PORT || 8000;

db.sync()
  .then(app.listen(PORT, () => console.log(`\nApplication running on port ${PORT}\n`)))
  .catch(e => console.error(`Failed to load app on port ${PORT} with error: ${e}`));