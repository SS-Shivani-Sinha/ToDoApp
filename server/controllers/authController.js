const bcrypt = require('bcryptjs');
const User = require('../models/User');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Scramble the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: 'User created successfully',
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = { signup };