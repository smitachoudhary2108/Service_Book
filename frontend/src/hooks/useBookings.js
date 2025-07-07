import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/api/bookings");
      return data;
    },
  });
};
