const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile, verifyOTP,SendOtp, logoutUser, forgotPassword, resetPassword, loginWithPhoneNumber, loginWithEmailAndPassword}= require('../controllers/authController.js');
const { authenticateJWT } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/', registerUser);
router.post("/send-otp",SendOtp);
router.post('/login-otp', loginWithPhoneNumber);
router.post('/login-email-password', loginWithEmailAndPassword);
router.post('/verifyOTP', verifyOTP);
router.get('/profile', authenticateJWT, getUserProfile);
router.put('/profile', authenticateJWT, updateUserProfile);
router.post('/logout', authenticateJWT, logoutUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);


module.exports = router;


