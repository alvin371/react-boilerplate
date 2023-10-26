import { AES, enc } from "crypto-js";

export const encryptedPrefix = "encrypted-";

const VITE_APP_SECRET_KEY = 'secret-key'
export const encryptValue = (value: string) => {
  return encryptedPrefix + AES.encrypt(value, VITE_APP_SECRET_KEY).toString();
};

export const decryptValue = (value: string) => {
  return AES.decrypt(
    value.replace(encryptedPrefix, ""),
    VITE_APP_SECRET_KEY
  ).toString(enc.Utf8);
};
