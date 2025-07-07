import Service from "../models/Service.js";

export const createService = async (req, res) => {
  try {
    const service = await Service.create({
      ...req.body,
      provider: req.user.id,
    });
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyServices = async (req, res) => {
  const services = await Service.find({ provider: req.user.id });
  res.json(services);
};
