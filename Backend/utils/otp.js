const generateOTP = () => Math.floor(100000 + Math.random() * 900000);
const otpExpiry = () => Date.now() + 10 * 60 * 1000;

module.exports = { generateOTP, otpExpiry };
