const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // generate new password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and respond
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json("User not found");
    }

    const validPassword = await bcrypt.compareSync(req.body.password, user.password);

    if (!validPassword) {
      res.status(400).json("Incorrect password");
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
