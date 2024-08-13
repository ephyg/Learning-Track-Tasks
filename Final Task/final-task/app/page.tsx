"use client";
import Image from "next/image";
import Login from "./auth/signIn/page";
import { signIn, signOut, useSession } from "next-auth/react";
import NavBar from "@/components/Nav Bar/NavBar";

export default function Home() {
  const session = useSession();
  // console.log(session);

  return (
    <div className="">
      <NavBar />
      <main className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <button
            className="bg-[#22744b]  text-white  font-bold py-2 px-10 rounded-full"
            onClick={() =>
              signIn("credentials", {
                callbackUrl: "http://localhost:3000/posts",
              })
            }
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
