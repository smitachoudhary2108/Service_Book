 import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// GET /api/bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

export default router;
// POST /api/bookings