"use server";
import { cookies } from "next/headers";

const deleteCookies = (keys: string[]) => {
  keys.forEach(async (key) => {
    (await cookies()).delete(key);
  });
};

export default deleteCookies;
