const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const {Users} = require('../db/index').models;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy({
    clientID:'307708163444-gr53a33uvr0ls2hfsronn6vdpkfkg555.apps.googleusercontent.com',
    clientSecret:'H3fCNIoOTGsEVZ_yY2OP2Mhn',
    callbackURL:'/api/auth/google/redirect'
}, async (accessToken, refreshToken, profile, done)=>{
  let googleId = profile.id
  let user = await Users.findOne({
    where: {googleId}
  });
  if(!user){
    const name = profile.displayName;
    const email = profile.emails[0].value;
    user = await Users.create({name, email, googleId});
  }
  console.log(user)
  done(null, user)
})
)