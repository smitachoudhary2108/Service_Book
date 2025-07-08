 import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

// ✅ POST /api/services — Add a new service
router.post("/", async (req, res) => {
  try {
    const service = await Service.create(req.body);
    console.log("✅ Service created:", service);
    res.status(201).json(service);
  } catch (err) {
    console.error("❌ Error creating service:", err.message);
    res.status(400).json({ message: err.message || "Failed to create service" });
  }
});

// ✅ GET /api/services — Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    console.error("❌ Error fetching services:", err.message);
    res.status(500).json({ message: err.message || "Failed to fetch services" });
  }
});

// routes/serviceRoutes.js
 router.get(`/:providerId`, async (req, res) => {
  const { providerId } = req.params;
  console.log(`🔍 Fetching services for provider: ${providerId}`);
  const service = await Service.findOne({ providerId });
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
});



export default router;
