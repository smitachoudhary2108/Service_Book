import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

// POST /api/services
router.post("/", async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const newService = new Service({ title, description, price });
    const saved = await newService.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to create service" });
  }
});

export default router;
