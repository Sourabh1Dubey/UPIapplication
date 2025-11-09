import axios from "axios";

//const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://upi-backend-t27y.onrender.com/";

export const api = axios.create({
  baseURL: BASE_URL,
});
