"use client";
import SignupForm from "@/components/Forms/signupForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-2/5  py-10 my-5 rounded-lg  border-bordercolor">
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <h1 className="font-epilogue900 text-headertext1 text-black">
            Sign up Today!
          </h1>
          <button className="flex justify-center border w-full rounded-md items-center border-bordercolor py-3 gap-3">
            <Image src="/google.png" alt="google" height={16} width={16} />
            Sign up with Google
          </button>
          <div className="w-full flex items-center justify-center">
            <div className="flex-1 flex w-full h-[1px] bg-bordercolor"></div>
            <p className="flex flex-1 justify-center items-center font-epilogue font-epilogue400 text-gray">
              Or Sign Up with Email
            </p>
            <div className="flex-1 flex w-full h-[1px] bg-bordercolor"></div>
          </div>
        </div>
        <SignupForm />
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex gap-2 justify-start w-full">
            <p>Already have an account? </p>
            <Link
              href="/auth/signIn"
              className="text-blue font-epilogue font-epilogue600"
            >
              Login
            </Link>
          </div>
          <p className="w-full">
            By clicking Continue, you acknowledge that you have read and agree
            to our <span className="text-blue">Terms of Service</span> and{" "}
            <span className="text-blue">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
