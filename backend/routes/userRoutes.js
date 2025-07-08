// routes/userRoutes.js
 import express from "express";
import User from "../models/User.js";

const router = express.Router(); // ✅ You need this line to initialize router

// GET /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // exclude password
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user); // ✅ add status 200 for clarity
  } catch (err) {
    console.error("User fetch error:", err); // optional: helpful for debugging
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

export default router;
