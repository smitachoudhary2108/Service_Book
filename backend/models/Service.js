// models/Service.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    availableTime: { type: String, required: true },
    mobile: { type: String, required: true },
    serviceCharge: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);

