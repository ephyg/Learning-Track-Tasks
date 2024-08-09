"use client";
import { getMostRecentJobs } from "@/server-actions/jobs-action";
import { JobDetailType } from "@/types/page";
import React from "react";
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
