import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("Email address is required.")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .nonempty("Password is required.")
    .min(6, "Password must be at least 6 characters long."),
});

export const SignUpSchema = z
  .object({
    fullname: z
      .string()
      .nonempty("Full name is required.")
      .regex(
        /^[A-Za-z\s]+$/,
        "Full name must contain only alphabetic characters and spaces."
      )
      .min(3, "Full name must be at least 3 characters long."),
    email: z
      .string()
      .nonempty("Email address is required.")
      .email("Please enter a valid email address."),
    password: z
      .string()
      .nonempty("Password is required.")
      .min(6, "Password must be at least 6 characters long."),
    confirmpassword: z
      .string()
      .nonempty("Confirmation password is required.")
      .min(6, "Confirmation password must be at least 6 characters long."),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match.",
    path: ["confirmpassword"],
  });
