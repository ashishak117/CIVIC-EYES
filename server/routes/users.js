const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { name, email, photoURL } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, photoURL });
      await user.save();
    }
    res.status(200).json({ message: 'User saved or already exists' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error saving user' });
  }
});

module.exports = router;
