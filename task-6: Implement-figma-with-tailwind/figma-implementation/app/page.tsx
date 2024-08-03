import React from "react";
import Link from "next/link";
import { job_postings } from "./data/JobListData";
import { JobListType } from "./types/page";
import JobCard from "./_components/job-card";

const Home = () => {
  return (
    <div className="flex flex-col px-4 md:px-52 pt-10 gap-8">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-headertext2 font-poppins900 md:text-headertext1">Opportunities</h1>
          <h1 className="text-gray font-epilogue">
            showing {job_postings.length} results
          </h1>
        </div>
        <div className="flex">
          <span className="text-gray font-epilogue">Sort by:</span>
          <select className="outline-none border-none bg-transparent font-epilogue font-epilogue600 px-2">
            <option className="">Most relevant</option>
            <option className="">Most recent</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        {job_postings.map((job: JobListType, index: number) => (
          <Link key={index} href={`/jobposts/detail/${index + 1}`}>
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              company={job.company}
              location={job.about.location}
              categories={job.about.categories}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
