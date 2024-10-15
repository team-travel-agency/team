const User = require('../model/index.js');
const Signup = async (req, res) => {
  
    
    try {
      const { username, email, password } = req.body;
      
      const newUser = new User({ username, email, password });
      
      await newUser.save();
      res.status(201).send("ok");
    } catch (error) {
      res.status(400).send('Error creating user: ' + error.message);
    }
  }
  module.exports={Signup}