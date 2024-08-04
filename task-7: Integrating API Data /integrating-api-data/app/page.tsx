"use client"
import React from "react";
import Link from "next/link";
import { JobDetailType } from "../types/page";
import JobCard from "./_components/job-card";
import { getJobsList, getMostRelevantJobs } from "./api/jobsApi";
import Filter from "./_components/filter";

const Home = async () => {
  let data = await getMostRelevantJobs();


  return (
    <div className="flex flex-col px-4 md:px-52 pt-10 gap-8">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-headertext2 font-poppins900 md:text-headertext1">
            Opportunities
          </h1>
          <h1 className="text-gray font-epilogue">
            showing {data.data.length} results
          </h1>
        </div>
        <div className="flex">
          <span className="text-gray font-epilogue">Sort by:</span>
          <Filter />
        </div>
      </div>
      <div className="flex flex-col gap-9">
        {data.data.map((job: JobDetailType, index: number) => (
          <Link key={index} href={`/detail/${job.id}`}>
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              company={job.orgName}
              location={job.location}
              categories={job.categories}
              optype={job.opType}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
