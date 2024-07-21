const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//Sign up
router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashpassword = bcrypt.hashSync(password);
    const user = new User({
      email: email,
      username: username,
      password: hashpassword,
    });
    await user.save().then(() => res.status(200).json({ user: user }));
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
});

//Sign In

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "Please Sign Up first" });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Icorrect Password!!" });
    }
    const { password, ...others } = user._doc; //password ke alawa baki sab dedo
    res.status(200).json({ others });
  } catch (error) {
    res.status(400).json({ message: "password or email Incorrect!!" });
  }
});

module.exports = router;
