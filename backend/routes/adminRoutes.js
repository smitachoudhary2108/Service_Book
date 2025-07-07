import express from "express";
import { getAllUsers, getAllBookings } from "../controllers/adminController.js";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/users", protect, authorizeRoles("admin"), getAllUsers);
router.get("/bookings", protect, authorizeRoles("admin"), getAllBookings);

export default router;
