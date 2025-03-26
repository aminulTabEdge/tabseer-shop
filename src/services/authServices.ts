/* eslint-disable @typescript-eslint/no-explicit-any */


import { authKey } from "@/constant/auth";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { jwtDecode } from "jwt-decode";

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
    const authToken = localStorage.getItem(authKey);
    if (authToken) {
      const decodedInfo: any = jwtDecode(authToken);
      return {
        ...decodedInfo
      }
    }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};
