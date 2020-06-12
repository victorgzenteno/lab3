const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require("passport");
const jwt = require('jsonwebtoken');

// Load Input Validation

// Load User model
const User = require('../models/user');
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post("/register", async(req, res) => {
  //Given a request, validate the register fields then create a new user, the email should be the primary key and should be unique
  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email });
  if (user) {
      return res.status(400).send('That user already exisits!');
  } else {
      // Insert the new user if they do not exist yet
      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      if (!user.password || !user.email || !user.name ) {
        return res.status(400).send('Missing fields.');
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save().then((user) => {
        res.send(user);
      }).catch((err) => {
        res.send(500, {message: err})
      });
  }
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", async(req, res) => {
  //Given a Login request, authenticate the user and return a Json Web Token with the User Credentials (Id, name and email)
  const { error } = req.body;
  if (error) {
      return res.status(400).send(error.details[0].message);
  }

  //  Now find the user by their email address
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
      return res.status(400).send('Incorrect email or password.');
  }

  // Then validate the Credentials in MongoDB match
  // those provided in the request
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
      return res.status(400).send('Incorrect email or password.');
  }
  const token = jwt.sign({ _id: user._id }, 'PrivateKey');
  res.header('x-auth-token', token);
  res.send(token);
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Given a JWT return the current User
    delete req.user.password;
    delete req.user._id;
    res.send(req.user);
    res.status(200);
  }
);

module.exports = router;
