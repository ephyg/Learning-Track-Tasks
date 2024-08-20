import LoginForm from "@/components/Forms/loginForm";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      <div className="flex-1 flex relative">
        <Image src="/login-image.png" alt="" fill />
      </div>
      <div className=" flex-1 flex flex-col justify-center items-center w-full gap-3">
        <div className="flex flex-col items-center justify-center gap-6 px-28 w-full">
          <h1 className="font-epilogue900 text-headertext1 text-black">
            Welcome Back,
          </h1>
          <div className="w-full flex">
            <div className="flex-1 flex w-full h-[1px] bg-bordercolor"></div>
            <div className="flex flex-1"> </div>
            <div className="flex-1 flex w-full h-[1px] bg-bordercolor"></div>
          </div>
        </div>
        <LoginForm />
        <div className="flex gap-2 justify-start w-full items-center  px-28">
          <p>Don't have an account? </p>
          <Link
            href="/auth/signup"
            className="text-blue font-epilogue font-epilogue600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
