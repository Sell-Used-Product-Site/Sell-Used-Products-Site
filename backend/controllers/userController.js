const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const editUser = async (req, res) => {
  const { email, password} = req.body;

  try {
    // Call the edit method from the User model
    const updatedUser = await User.edit( user._id, email, password );

    res.status(200).json({ success: true, message: 'User information updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
}
module.exports = { signupUser, loginUser, editUser }