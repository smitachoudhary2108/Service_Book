import Booking from "../models/Booking.js";

export const bookService = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("service");
  res.json(bookings);
};
