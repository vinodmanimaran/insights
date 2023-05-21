const router = require ('express').Router ();
const User = require ('../models/User');
const Post = require ('../models/Post');
const bcrypt = require ('bcrypt');

// UPDATE USER
router.put ('/:id', async (req, res) => {
  // Check if the requested user ID matches the user ID in the request body
  if (req.body.userId === req.params.id) {
    // Check if a new password is provided
    if (req.body.password) {
      // Generate a salt and hash the new password
      const salt = await bcrypt.genSalt (10);
      req.body.password = await bcrypt.hash (req.body.password, salt);
    }
    try {
      // Update the user with the new data
      const updatedUser = await User.findByIdAndUpdate (
        req.params.id,
        {
          $set: req.body,
        },
        {new: true}
      );
      res.status (200).json (updatedUser);
    } catch (err) {
      res.status (500).json (err);
    }
  } else {
    res.status (401).json ('You can update only your account!');
  }
});

// DELETE USER
router.delete ('/:id', async (req, res) => {
  // Check if the requested user ID matches the user ID in the request body
  if (req.body.userId === req.params.id) {
    try {
      // Find the user by ID
      const user = await User.findById (req.params.id);
      try {
        // Delete all posts by the user
        await Post.deleteMany ({username: user.username});
        // Delete the user
        await User.findByIdAndDelete (req.params.id);
        res.status (200).json ('User has been deleted...');
      } catch (err) {
        res.status (500).json (err);
      }
    } catch (err) {
      res.status (404).json ('User not found!');
    }
  } else {
    res.status (401).json ('You can delete only your account!');
  }
});

// GET USER
router.get ('/:id', async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findById (req.params.id);
    // Remove the password field from the user object before sending the response
    const {password, ...others} = user._doc;
    res.status (200).json (others);
  } catch (err) {
    res.status (500).json (err);
  }
});

module.exports = router;
