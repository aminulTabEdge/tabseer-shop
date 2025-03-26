/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const registerUser = async (values:any) => {
  console.log('hooks clg=>',values);
  const res = await fetch(
    `https://data-tabseershop.vercel.app/api/v1/user/signup`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      cache: "no-cache",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
