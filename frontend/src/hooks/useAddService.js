import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export const useAddService = () => {
  return useMutation({
    mutationFn: (newService) =>
      axiosInstance.post("/api/services", newService),
  });
};
