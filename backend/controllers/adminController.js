import User from "../models/User.js";
import Service from "../models/Service.js";
import Booking from "../models/Booking.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find().populate("user service");
  res.json(bookings);
};
