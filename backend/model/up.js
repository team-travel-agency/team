import mongoose from 'mongoose';
import bcrypt from 'bcrypt';



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
    maxlength: [10, 'Password cannot exceed 100 characters'],
    validate: {
      validator: passwordValidator,
      message: 'Password must start with an uppercase letter'
    }
  }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
