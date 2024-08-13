"use client";
import { sign } from "crypto";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { use } from "react";
import { FaPowerOff } from "react-icons/fa";
import { mutate } from "swr";

const NavBar = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/search";

  const session = useSession();
  const params = usePathname();
  const pathname = params;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleClick = () => {
    signOut();
  };

  return (
    <div className="flex w-full fixed top-0 right-0 left-0  bg-white h-20 z-[1000] border-b ">
      <div className="flex justify-between items-center w-full px-52">
        <div className="relative h-8 w-24">
          <Image src="/logo.png" alt="" fill />
        </div>
        <div className="flex justify-center items-center gap-10">
          <ul className="flex gap-3 text-lg font-epilogue700">
            <Link
              href="/"
              className={` ${
                pathname === "/" ? "text-orange" : ""
              } cursor-pointer hover:text-orange`}
            >
              Home
            </Link>
            <Link
              href="/posts"
              
              className={` ${
                pathname.startsWith("/posts") ? "text-orange" : ""
              } cursor-pointer hover:text-orange`}
            >
              Posts
            </Link>
            <Link
              href="/bookmarks"
              
              className={` ${
                pathname === "/bookmarks" ? "text-orange" : ""
              } cursor-pointer hover:text-orange`}
            >
              Bookmark
            </Link>
          </ul>
          {session.data && (
            <div className="relative font-[sans-serif] w-max mx-auto">
              <button
                type="button"
                className=" flex items-center rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
              >
                <div
                  className="flex relative h-16 w-16 p-4"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Image
                    fill
                    alt="profile"
                    src="https://readymadeui.com/profile_6.webp"
                    className=" rounded-full shrink-0"
                    unoptimized
                  />
                </div>
              </button>

              {isMenuOpen && (
                <ul className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto">
                  <li className="py-1 px-5 flex items-center z-[1000] hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                    {session.data?.user?.name}
                  </li>
                  <li className="py-1 px-5 flex items-center z-[1000] hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                    {session.data?.user?.email}
                  </li>
                  <li
                    onClick={handleClick}
                    className="py-1 px-5 flex items-center z-[1000] bg-blue text-white hover:bg-gray-100 font-epilogue900 rounded-lg my-2 text-sm cursor-pointer gap-2"
                  >
                    <FaPowerOff />
                    Logout
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
