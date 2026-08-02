const Service = require("../models/Service");

// Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1 });

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch services",
      error: error.message,
    });
  }
};

// Get one service by slug
const getServiceBySlug = async (req, res) => {
  try {
    const service = await Service.findOne({
      slug: req.params.slug,
      isActive: true,
    });

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch service",
      error: error.message,
    });
  }
};

// Create Service
const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create service",
      error: error.message,
    });
  }
};

module.exports = {
  getAllServices,
  getServiceBySlug,
  createService,
};