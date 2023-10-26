import axios from "axios";
import { decryptValue } from "@/helpers";
import { LocalStorageKey } from "@/types";
import { handleRedirectNotLogin } from "../handleNotLogin";

const API_URL = "http://localhost:3000/api/v1";
export const getToken = () => {
  // decrypt token
  const encryptedToken = localStorage.getItem(LocalStorageKey.Token);
  if (encryptedToken) {
    const decryptedToken = decryptValue(encryptedToken);
    return JSON.parse(decryptedToken);
  }
  return null;
};

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      handleRedirectNotLogin();
    }
    return Promise.reject(error);
  }
);
