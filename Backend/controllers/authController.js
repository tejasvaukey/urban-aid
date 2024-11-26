const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users.js');
const { otpExpiry } = require('../utils/otp.js');
const { sendOTP } = require('../utils/email.js');
const otpGenerator = require('otp-generator');





const registerUser = async (req, res) => {
  const { name, email, mobileNumber, stream, level, password } = req.body;

  // Validate input fields
  if (!name || !email || !mobileNumber || !stream || !level || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if a user with the same email or mobile number exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobileNumber }] });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email or mobile number already exists.' });
    }

    

    // Create a new user
    const newUser = new User({
      basicDetails: {
        name: name,
        stream: stream,
        level: level,
      },
      contactDetails: {
        email: email,
        mobileNumber: mobileNumber,
      },
      password: password,
    });


    await newUser.save();

    // Generate a JWT token for the new user
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Respond with success message and token
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    // Handle validation and server errors
    const errorMessage =
      error.name === 'ValidationError'
        ? Object.values(error.errors).map((err) => err.message).join('. ')
        : 'Server error, please try again later';
    res.status(500).json({ message: errorMessage });
    console.error(error);
  }
};



 const loginWithPhoneNumber = async (req, res) => {
  const { mobileNumber } = req.body;

  try {
    const user = await User.findOne({"contactDetails.mobileNumber":mobileNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const otp = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false });
    console.log("Generated OTP:", otp);
    user.otp = otp;
    user.otpExpires = otpExpiry();
    await user.save();

    try {
      await sendOTP(user.contactDetails.mobileNumber, otp);
    } catch (err) {
      return res.status(500).json({ message: 'Failed to send OTP. Please try again later.' });
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
      message: 'OTP sent to your Phone Number. Please verify it to complete the login process.',
      token,
    });

  } catch (error) {
    console.error('Error during login with email:', error);
    res.status(500).json({ message: 'Server error, please try again later.' });
    console.log(error);
  }
};

 const loginWithEmailAndPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ "contactDetails.email":email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful.',
      token,
    });

  } catch (error) {
    console.error('Error during login with email and password:', error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};


const SendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    // Find a single user document based on email
    const user = await User.findOne({ "contactDetails.email": email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User with the provided email does not exist.",
      });
    }

    // Generate a 6-digit numeric OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log("Generated OTP:", otp);

    // Update the user's OTP and expiry
    user.otp = otp;
    user.otpExpires = otpExpiry(); // Assuming otpExpiry() gives a Date object
    await User.updateOne(
      { _id: user._id },
      { 
        otp: otp,
        otpExpires: otpExpiry() // Assuming otpExpiry() returns a Date object
      }
    );
    // Send OTP email
    try {
      await sendOTP(email, otp); // sendOTP is your email-sending function
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email.",
        error: error.message,
      });
    }

    // Respond to the client
    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
      otp, // Remove in production for security
    });
  } catch (error) {
    console.error("SendOtp Error:", error);
    res.status(500).json({
      success: false,
      message: "Sorry, something went wrong.",
    });
  }
};


const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
  
    console.log("email",email);
    try {
      const user = await User.findOne({ 'contactDetails.email': email });
      
      // console.log(user);
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      if (user.otp !== otp || user.otpExpires < Date.now()) {
        return res.status(400).json({ message: 'Invalid or expired OTP' });
      }
  
      user.verified = true;
      user.otp = null;
      user.otpExpires = null;
      await User.updateOne(
        { _id: user._id },
        { 
          otp: otp,
          otpExpires: otpExpiry() // Assuming otpExpiry() returns a Date object
        }
      );
  
      res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error verifying OTP' });
    }
  };
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password -otp -otpExpires');
    console.log("user",user);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error while retrieving user profile' });
    console.log("error",error);
  }
};


 const updateUserProfile = async (req, res) => {
  const { name, email, mobileNumber, stream, level } = req.body;

  try {
    const user = await User.findById(req.user.userId);
    console.log(req.user.userId)
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(409).json({ message: 'Email is already in use' });
      }
      user.email = email;
    }

    if (mobileNumber && mobileNumber !== user.mobileNumber) {
      const mobileExists = await User.findOne({ mobileNumber });
      if (mobileExists) {
        return res.status(409).json({ message: 'Mobile number is already in use' });
      }
      user.mobileNumber = mobileNumber;
    }
    console.log(user.name)
    console.log(user);

    if (name) user.basicDetails.name = name;
    if (email) user.contactDetails.email=email;
    if(mobileNumber) user.contactDetails.mobileNumber=mobileNumber;
    if (stream) user.educationDetails.classXII.stream = stream;
    if (level) user.level = level;

    await user.save();

    console.log("updated",user)

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while updating profile' });
  }
};



 const logoutUser = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};

 const  forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({'contactDetails.email': email });
    if (!user) return res.status(404).json({ error: "User with this email does not exist." });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = Date.now() + 300000; 
    user.resetOtp = otp;
    user.resetOtpExpires = otpExpires;
    await user.save();
    res.json({ message: "OTP generated successfully.", otp });
    console.log(otp)
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
    console.log(error)
  }
};

 const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const user = await User.findOne({ 'contactDetails.email':email});

    console.log(user);
    if (!user) return res.status(400).json({ error: "Invalid or expired OTP." });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOtp = undefined;
    user.resetOtpExpires = undefined;
    await user.save();
    res.json({ message: "Password has been reset successfully." });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
    console.log(error);
  }
};


// pending


 
 
 




module.exports = {
  registerUser,
  verifyOTP,
  loginWithPhoneNumber,
  loginWithEmailAndPassword,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  SendOtp,
  forgotPassword,
  resetPassword,

};
