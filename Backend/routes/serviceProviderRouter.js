const express = require('express');
const router = express.Router();
const serviceProviderController = require('../controllers/serviceProvider');

// === ROUTES ===

// Get all service providers
router.get('/', serviceProviderController.getAllServiceProviders);

// Get a specific service provider by ID
router.get('/:id', serviceProviderController.getServiceProviderById);

// Create a new service provider
router.post('/', serviceProviderController.createServiceProvider);

// Update an existing service provider
router.put('/:id', serviceProviderController.updateServiceProvider);

// Delete a service provider
router.delete('/:id', serviceProviderController.deleteServiceProvider);

// Export the router
module.exports = router;
