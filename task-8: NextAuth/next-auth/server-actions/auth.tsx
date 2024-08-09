"use server";

const url = process.env.BASE_URL;
interface LoginType {
  email: string;
  password: string;
}

export const login = async (formData: LoginType) => {
  const res = await fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const signup = async (formData: FormData) => {
  const res = await fetch(`${url}/signup`, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
};
interface VerifyEmail {
  email: string;
  OTP: string;
}
export const verify = async (formData: VerifyEmail) => {
  console.log(formData, "form");
  const res = await fetch(`${url}/verify-email`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};
