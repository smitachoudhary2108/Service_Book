import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  date: String,
  time: String,
  status: { type: String, default: "pending" },
});
const booking = mongoose.model("Booking", bookingSchema);
export default booking;
