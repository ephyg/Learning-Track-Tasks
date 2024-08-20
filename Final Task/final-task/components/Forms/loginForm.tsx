"use client";
import { login } from "@/server-actions/auth";
import Button from "@/components/Button/Button";
import { LoginSchema } from "@/schema/schemavalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import InputFIeld from "../InputField/InputField";
import { signIn, useSession } from "next-auth/react";
interface LoginInputType {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const router = useRouter();
  const { formState, register, handleSubmit } = useForm<LoginInputType>({
    resolver: zodResolver(LoginSchema),
  });
  const { errors } = formState;
  const onSubmit = async (data: LoginInputType) => {
    setIsLoading(true);

    // console.log(data, "formdata");
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    // console.log(result, "resa");
    if (result?.ok) {
      router.push("/posts");
    } else {
      setErrorMessage("Invalid Credentials");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full justify-center gap-6 px-28"
    >
      <p className="text-center text-red-600 text-sm">{errorMessage}</p>
      <div className="w-full flex flex-col gap-6">
        <InputFIeld
          name="email"
          id="email"
          type="text"
          label="Email Address"
          placeholder="Enter email address"
          register={register}
          error={errors.email?.message}
        />
        <InputFIeld
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter password"
          register={register}
          error={errors.password?.message}
        />
      </div>

      <Button
        name="Login"
        typ="submit"
        isLoading={isLoading}
        loadingText="Loading..."
      />
    </form>
  );
};


export default LoginForm;
