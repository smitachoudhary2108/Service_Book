import express from "express";
import { createService, getMyServices } from "../controllers/providerController.js";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/service", protect, authorizeRoles("provider"), createService);
router.get("/my-services", protect, authorizeRoles("provider"), getMyServices);

export default router;
