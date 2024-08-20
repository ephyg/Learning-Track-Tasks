"use client";
import Image from "next/image";
import Login from "./auth/signIn/page";
import { signIn, signOut, useSession } from "next-auth/react";
import NavBar from "@/components/Nav Bar/NavBar";
import Button from "@/components/Button/Button";
import { useState } from "react";

export default function Home() {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="">
      <NavBar />
      <main className="min-h-screen flex pt-20 px-20">
        <div className="flex-1 flex flex-col  justify-center">
          <h1 className="text-headertext1 font-epilogue900 text-primary w-4/5 mb-5">
            Find the right job that fits your career goals.
          </h1>
          <p className="text-headertext3 mb-20">
            Explore thousands of job opportunities in various industries.{" "}
          </p>
          <Button
            isLoading={isLoading}
            name="Get Started"
            classname="w-64 "
            typ="submit"
            loadingText="Loading..."
            onClick={async () => {
              setIsLoading(true);
              await signIn("credentials", {
                callbackUrl: "http://localhost:3000/posts",
              });
            }}
          />
        </div>
        <div className="flex-1 flex relative">
          <Image src="/landing-page.png" alt="" fill />
        </div>
      </main>
    </div>
  );
}
