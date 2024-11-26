const ServiceProvider = require('../models/serviceProviders');

const getAllServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find();
    res.status(200).json({
      success: true,
      data: serviceProviders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching service providers",
      error: error.message,
    });
  }
};

const getServiceProviderById = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findById(req.params.id);
    if (!serviceProvider) {
      return res.status(404).json({ success: false, message: "Service Provider not found" });
    }
    res.status(200).json({ success: true, data: serviceProvider });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching service provider",
      error: error.message,
    });
  }
};

const createServiceProvider = async (req, res) => {
  try {
    const { name, contactDetails, password, servicesOffered } = req.body;

    if (!name || !contactDetails?.phoneNumber || !contactDetails?.email || !password || !servicesOffered) {
      return res.status(400).json({ success: false, message: "All required fields must be provided" });
    }

    const newServiceProvider = new ServiceProvider(req.body);
    const savedProvider = await newServiceProvider.save();
    res.status(201).json({ success: true, data: savedProvider });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating service provider",
      error: error.message,
    });
  }
};

const updateServiceProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProvider = await ServiceProvider.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProvider) {
      return res.status(404).json({ success: false, message: "Service Provider not found" });
    }

    res.status(200).json({ success: true, data: updatedProvider });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating service provider",
      error: error.message,
    });
  }
};

const deleteServiceProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProvider = await ServiceProvider.findByIdAndDelete(id);

    if (!deletedProvider) {
      return res.status(404).json({ success: false, message: "Service Provider not found" });
    }

    res.status(200).json({ success: true, message: "Service Provider deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting service provider",
      error: error.message,
    });
  }
};

// Export all functions
module.exports = {
  getAllServiceProviders,
  getServiceProviderById,
  createServiceProvider,
  updateServiceProvider,
  deleteServiceProvider,
};
