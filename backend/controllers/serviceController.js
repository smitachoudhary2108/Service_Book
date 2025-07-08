// controllers/serviceController.js
import Service from "../models/Service.js";
 export const createService = async (req, res) => {
  try {
    console.log("Received request to create service");
    const  form  = req.body;

    const {
      providerId,
      title,
      category,
      description,
      location,
      availableTime,
      mobile,
      serviceCharge,
    } = form;
    console.log("Creating service with data:", form);
    const newService = await Service.create({
      providerId,
      title,
      category,
      description,
      location,
      availableTime,
      mobile,
      serviceCharge,
    });

    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  console.log("Service created successfully:", form);
};


export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate("providerId", "name email");
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
