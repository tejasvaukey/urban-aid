const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  contactDetails: {
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
    address: {
      type: String,
      trim: true,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be at least 6 characters long."],
  },
  servicesOffered: [
    {
      type: String,
      required: [true, "At least one service must be specified."],
      trim: true,
    },
  ],
  description: {
    type: String,
    maxlength: [500, "Description cannot exceed 500 characters."],
  },
  availability: {
    type: Boolean,
    default: true,
  },
  rating: {
    average: {
      type: Number,
      min: [0, "Rating cannot be less than 0."],
      max: [5, "Rating cannot exceed 5."],
      default: 0,
    },
    numberOfRatings: {
      type: Number,
      default: 0,
    },
  },
  documents: [
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  otp: {
    type: String,
    default: null,
  },
  otpExpires: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    enum: ["Pending", "Active", "Suspended"],
    default: "Pending",
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Create a model from the schema
const ServiceProvider = mongoose.model("ServiceProvider", serviceProviderSchema);

module.exports = ServiceProvider;
