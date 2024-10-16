const mongoose= require('mongoose') ;
const bcrypt =require ('bcrypt');



const passwordValidator = (password) => {
  return /^[A-Z]/.test(password);
};


const UserSchema = new mongoose.Schema({
  username: { 
    type: String,  
    maxlength: [30, 'Username cannot exceed 50 characters'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    maxlength: [50, 'Email cannot exceed 100 characters'],
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'], 
    maxlength: [50, 'Password cannot exceed 100 characters'],
    unique: true,
    validate: {
      validator: passwordValidator,
      message: 'Password must start with an uppercase letter'
    }
  }
});




const User = mongoose.model('User', UserSchema);


module.exports =User

