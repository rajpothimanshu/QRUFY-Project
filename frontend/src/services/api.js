import axios from "axios";

const api = axios.create({
  baseURL: "https://qrufy-project.onrender.com",
});

export default api;
