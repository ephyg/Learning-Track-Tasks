"use client";
import Image from "next/image";
import Login from "./auth/signIn/page";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      {session.data ? (
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="">
            <div className="flex gap-4">
              <h1>User: </h1>
              <p>{session.data?.user?.name}</p>
            </div>
            <div className="flex gap-4">
              <h1>Email: </h1>
              <p>{session.data?.user?.email}</p>
            </div>
          </div>
          <button
            className="bg-[#ec4c40]  text-white  font-bold py-2 px-10 rounded-full"
            onClick={() => {
              signOut({ callbackUrl: "http://localhost:3000/" });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
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
      )}
      {/* <button
        onClick={() =>
          signIn("credentials", { callbackUrl: "http://localhost:3000/posts" })
        }
      >
        Get Started
      </button>
      <button
        onClick={() => {
          signOut({ callbackUrl: "http://localhost:3000/" });
        }}
      >
        Logout
      </button> */}
    </main>
  );
}
