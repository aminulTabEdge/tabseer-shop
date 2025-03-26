"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
