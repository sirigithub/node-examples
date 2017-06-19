var login = require("./login");
var signup = require("./signup");
var user = require("../models/user");

module.exports = function(passport){
	passport.serializeUser(function(user, done) {
		console.log("serializing user");console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
  	console.log("deserialize user");console.log(user);
    done(err, user);
  });
});

login(passport);
signup(passport);
}