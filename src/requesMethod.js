import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://shop-api-gules.vercel.app/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
const accessToken = Cookies.get("token");
const TOKEN = accessToken ? accessToken : "";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});