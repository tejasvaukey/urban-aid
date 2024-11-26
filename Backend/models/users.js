const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  age: {
    type: Number,
    min: [0, "Age must be a positive number."],
  },
  location: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required."],
    unique: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please provide a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be at least 6 characters long."],
  },
  otp: {
    type: String,
    default: null,
  },
  otpExpires: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

  



//mongoose pre hook to encrypt the password(before storing into db)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


// comparing the password
userSchema.methods.isPasswordCorrect = async function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.methods.isOtpValid = function() {
    return this.otp && this.otpExpiry > new Date();
};

module.exports = mongoose.model('User', userSchema);







