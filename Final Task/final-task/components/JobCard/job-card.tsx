"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import BookmarkButton from "../Button/BookmarkButton";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
interface JobListType {
  title: string;
  description: string;
  company: string;
  location: string[];
  categories: string[];
  optype: string;
  logoUrl: string;
  route: string;
  id: string;
  isBookmarked?: boolean;
  mutate?: any;
}
const JobCard = ({
  title,
  description,
  company,
  location,
  categories,
  optype,
  logoUrl,
  route,
  id,
  isBookmarked,
  mutate,
}: JobListType) => {
  const styles = [
    "text-orange border-orange",
    "text-blue border-blue",
    "text-green border-green",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 px-2 md:px-9 py-2 md:py-6 border-[#d6ddeb] border rounded-3xl">
      <div className="">
        <Link href={route}>
          <div className="w-20 h-20 relative z-10">
            <Image
              src={logoUrl ? logoUrl : "/profile.jpg"}
              unoptimized
              fill
              alt=""
              className="rounded-full object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <Link href={route}>
            <h1 className="text-headertext3 font-epilogue  font-epilogue600">
              {title}
            </h1>
          </Link>
          <BookmarkButton
            jobId={id}
            isBookmarked={isBookmarked}
          />
        </div>
        <Link href={route}>
          <div className="font-epilogue font-epilogue200 text-gray flex items-center gap-3 ">
            <h1 className="font-epilogue font-epilogue200 text-gray">
              {company}
            </h1>
            <div className="bg-gray h-[4px] w-[4px] border rounded-full">
              <span className="w-full h-full"></span>
            </div>
            <h1 className="font-epilogue font-epilogue200 text-gray">
              {location.map((loc, index) => (
                <span key={index}>{loc}</span>
              ))}
            </h1>
          </div>
        </Link>
        <Link href={route}>
          <p className="font-epilogue font-epilogue400 mb-2 text-wrap">
            {description}
          </p>
        </Link>
        <Link href={route}>
          <div className="flex">
            <div className="border-r border-[#d6ddeb] pr-2 mr-2">
              <span className="flex px-[1rem] bg-[#56cdad1a] text-green py-[6px] text-smalltext font-epilogue rounded-3xl font-semibold ">
                {optype}
              </span>
            </div>
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex px-[1rem]  py-[6px] text-smalltext font-epilogue border rounded-3xl font-semibold ${
                    styles[index % styles.length]
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
