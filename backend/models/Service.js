import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: Number,
});
const service = mongoose.model("Service", serviceSchema);
export default service;
