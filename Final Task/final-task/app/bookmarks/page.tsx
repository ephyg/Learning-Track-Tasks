import JobCard from "@/components/JobCard/job-card";
import NavBar from "@/components/Nav Bar/NavBar";
import {
  getBookmarkedJobs,
  getMostRelevantJobs,
} from "@/server-actions/jobs-action";
import { JobDetailType } from "@/types/page";
// import { url } from "inspector";
import React from "react";

const Bookmarks = async () => {
  const data = await getBookmarkedJobs();
  console.log(data);
  return (
    <>
      <NavBar />
      <div className="flex flex-col px-4 md:px-52 py-24 gap-8 z-0 ">
        <div className="flex flex-col gap-9">
          {data.length === 0 && <h1>There is no Bookmarked Data</h1>}
          {data.map(
            (job: JobDetailType, index: number) =>
              job.isBookmarked && (
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
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
