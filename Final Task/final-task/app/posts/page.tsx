import React, { use } from "react";
import Filter from "@/components/Filter/filter";
import JobCard from "@/components/JobCard/job-card";
import { JobDetailType } from "@/types/page";
import { getMostRelevantJobs } from "@/server-actions/jobs-action";
import NavBar from "@/components/Nav Bar/NavBar";

const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/search";
const Home = async () => {
  const data = await getMostRelevantJobs();
  console.log(data);
  return (
    <>
      <NavBar />
      <div className="flex flex-col px-4 md:px-52 py-24 gap-8 z-0 ">
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
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              company={job.orgName}
              location={job.location}
              categories={job.categories}
              optype={job.opType}
              logoUrl={job.logoUrl}
              route={`/posts/detail/${job.id}`}
              id={job.id}
              isBookmarked={job.isBookmarked}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
