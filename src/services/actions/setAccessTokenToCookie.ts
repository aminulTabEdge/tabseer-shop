/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { authKey } from "@/constant/auth";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
const setAccessTokenToCookies = async (token: string, option?: any) => {
  (await cookies()).set(authKey, token);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};

export default setAccessTokenToCookies;
