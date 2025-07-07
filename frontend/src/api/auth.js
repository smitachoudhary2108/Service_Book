 import axios from "./axiosInstance";

export const loginUser = (data) => axios.post("/auth/login", data).then(res => res.data);
export const registerUser = (data) => axios.post("/auth/register", data).then(res => res.data);
