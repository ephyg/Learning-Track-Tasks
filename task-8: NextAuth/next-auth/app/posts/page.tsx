import React from "react";
import Link from "next/link";
import Filter from "@/components/Filter/filter";
import JobCard from "@/components/JobCard/job-card";
import { JobDetailType } from "@/types/page";
import { getMostRelevantJobs } from "@/server-actions/jobs-action";

const Home = async () => {
  let data = await getMostRelevantJobs();
  console.log(data)
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
          <Link key={index} href={`/posts/detail/${job.id}`}>
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              company={job.orgName}
              location={job.location}
              categories={job.categories}
              optype={job.opType}
              logoUrl={job.logoUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
