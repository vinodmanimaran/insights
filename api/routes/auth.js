const router = require ('express').Router ();
const User = require ('../models/User');
const bcrypt = require ('bcrypt');

// REGISTER
router.post ('/register', async (req, res) => {
  try {
    // Generate a salt to hash the password
    const salt = await bcrypt.genSalt (10);
    // Hash the password using the generated salt
    const hashedPass = await bcrypt.hash (req.body.password, salt);

    // Create a new user object with the hashed password
    const newUser = new User ({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // Save the new user to the database
    const user = await newUser.save ();
    res.status (200).json (user);
  } catch (err) {
    res.status (500).json (err);
  }
});

// LOGIN
router.post ('/login', async (req, res) => {
  try {
    // Find the user by their username
    const user = await User.findOne ({username: req.body.username});
    // If the user does not exist, return an error
    if (!user) {
      return res.status (400).json ('Wrong credentials!');
    }

    // Validate the provided password with the stored hashed password
    const validated = await bcrypt.compare (req.body.password, user.password);
    // If the password is incorrect, return an error
    if (!validated) {
      return res.status (400).json ('Wrong credentials!');
    }

    // Remove the password field from the user object before sending the response
    const {password, ...others} = user._doc;
    res.status (200).json (others);
  } catch (err) {
    res.status (500).json (err);
  }
});

module.exports = router;
