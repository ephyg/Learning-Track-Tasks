"use client";
import React from "react";
import { getMostRecentJobs, getMostRelevantJobs } from "../api/jobsApi";
import { JobDetailType } from "@/types/page";
interface FilterProps {
  state: (data: JobDetailType) => void;
}
const Filter = () => {
  const handleMostRelevant = () => {
    // const data = getMostRelevantJobs();
  };

  const handleMostRecent = () => {
    console.log("most recent");
    console.log(getMostRecentJobs());
  };
  getMostRecentJobs();
  return (
    <select className="outline-none border-none bg-transparent font-epilogue font-epilogue600 px-2">
      <option onClick={handleMostRelevant} className="">
        Most relevant
      </option>
      <option onClick={handleMostRecent} className="">
        Most recent
      </option>
    </select>
  );
};

export default Filter;
