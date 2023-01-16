import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-06k9.onrender.com",
});
