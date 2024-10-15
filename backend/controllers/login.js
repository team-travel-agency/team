const User = require('../model/index.js');
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send('Invalid email or password');
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).send('Invalid password');
      }
      res.status(200).send('Login successful');
    } catch (error) {
      res.status(500).send('Error logging in: ' + error.message);
    }
  };
  module.exports={login}