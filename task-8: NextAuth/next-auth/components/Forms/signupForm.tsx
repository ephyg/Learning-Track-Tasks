"use client";
import { signup } from "@/server-actions/auth";
import Button from "@/components/Button/Button";
import { SignUpSchema } from "@/schema/schemavalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { sign } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import InputFIeld from "../InputField/InputField";
import { useSession } from "next-auth/react";
interface SignUpInputType {
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
}
const SignupForm = () => {
    const session = useSession();
    const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { formState, register, handleSubmit } = useForm<SignUpInputType>({
    resolver: zodResolver(SignUpSchema),
  });

  const { errors } = formState;

  const onSubmit = async (data: SignUpInputType) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.fullname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", "user");
    const result = await signup(formData);
    if (result.success) {
      router.push(`/auth/signup/verify/${data.email}`);
    } else {
      setErrorMessage(result.message);
    }
    setLoading(false);
  };

  if (session.data) {
    router.push("/posts");
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      <p className="text-center text-red-600 text-sm">{errorMessage}</p>

      <div className="flex flex-col w-full gap-6">
        <InputFIeld
          id="fullname"
          name="fullname"
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
          register={register}
          error={errors.fullname?.message}
        />
        <InputFIeld
          id="email"
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <InputFIeld
          id="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <InputFIeld
          id="confirmpassword"
          name="confirmpassword"
          label="Confirm Password"
          placeholder="Confirm password"
          type="password"
          register={register}
          error={errors.confirmpassword?.message}
        />
      </div>
      <Button
        name="Continue"
        typ="submit"
        isLoading={loading}
        loadingText="Loading..."
      />
      {/* <Link href="/signup/verify">Verify</Link> */}
    </form>
  );
};

export default SignupForm;
