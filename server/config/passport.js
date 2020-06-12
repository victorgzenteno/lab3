const passportJWT = require("passport-jwt");
const passport = require('passport');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require('mongoose').model('users'); 

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey   : 'PrivateKey'
},
function (jwtPayload, cb) {
  console.log(jwtPayload._id)
  //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
  return UserModel.findById({_id: jwtPayload._id})
      .then(user => {
          return cb(null, user);
      })
      .catch(err => {
          return cb(err);
      });
}
));
