import { ZodType, z } from "zod";
const url = "https://66aba317636a4840d7cb6ef0.mockapi.io/contact-form";

const schema: ZodType = z.object({
  fullname: z
    .string()
    .nonempty({ message: "The fullname field is required." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "The fullname must contain only alphabetic characters.",
    })
    .max(20, { message: "The fullname must not exceed 20 characters." }),

  email: z
    .string()
    .nonempty({ message: "The email field is required." })
    .email({ message: "The email must be a valid email address." })
    .refine(
      async (email) => {
        const res = await fetch(`${url}?email=${email}`);
        const data = await res.json();
        return data === "Not found";
      },
      {
        message: "The email is already taken.",
      }
    ),

  message: z
    .string()
    .nonempty({ message: "The message field is required." })
    .max(100, { message: "The message must not exceed 100 characters." }),
});

export default schema;
