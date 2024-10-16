const mongoose= require('mongoose') ;
const bcrypt =require ('bcrypt');



const passwordValidator = (password) => {
  return /^[A-Z]/.test(password);
};


const UserSchema = new mongoose.Schema({
  username: { 
    type: String,  
    maxlength: [30, 'Username cannot exceed 30 characters'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    maxlength: [50, 'Email cannot exceed 50 characters'],
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'], 
    maxlength: [50, 'Password cannot exceed 50 characters'],
    unique: true, 
    validate: {
      validator: passwordValidator,
      message: 'Password must start with an uppercase letter'
    }
  }
});
UserSchema.pre('save',async function (next) {
  
  try{
    const pass=await bcrypt.genSalt(10)
    const hashedpass=await bcrypt.hash(this.password,pass)
    this.password=hashedpass
    next()

  }
  catch (error){
    next(error)

  }
  UserSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  }
  
})



const User = mongoose.model('User', UserSchema);


module.exports =User

