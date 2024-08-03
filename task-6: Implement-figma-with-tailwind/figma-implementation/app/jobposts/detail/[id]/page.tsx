import Image from "next/image";
import React from "react";
import {
  postedOn,
  calendar,
  deadline,
  location,
  calendartick,
  CiLocationOn,
  GoDotFill,
  LuCheckCircle2,
} from "../../../assets/icons";
import { job_postings } from "@/app/data/JobListData";

// Now you can use these icons in your components
interface Jobparams {
  params: {
    id: number;
  };
}
const JobDetail = ({ params }: Jobparams) => {
  const jobDetail = job_postings[params.id - 1];
  const styles = ["bg-[#56cdad1a] text-green", "bg-[#EB85331a] text-orange"];
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-8 py-10 gap-8">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-headertext2 font-poppins900">Description</h1>
          <p className="font-epilogue font-epilogue400">
            {jobDetail.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-headertext2 font-poppins900">Responsibilities</h1>
          <ul className="flex gap-2 flex-col">
            {jobDetail.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex gap-2 ">
                <div className="w-6 h-6 flex justify-center items-center">
                  <LuCheckCircle2 color="#56CDAD" size={20} />
                </div>
                <p>{responsibility}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-headertext2 font-poppins900">Ideal Candidate</h1>
          <div className="flex flex-col items-start gap-2">
            {jobDetail.ideal_candidate.traits.map((trait, index) => (
              <div key={index} className="flex gap-1">
                <div>
                  <div className=" flex justify-center items-center h-5 w-5">
                    <GoDotFill size={10} className="" />
                  </div>
                </div>
                <p className="font-epilogue font-epilogue400">{trait}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-headertext2 font-poppins900">When & Where</h1>
          <div className="flex gap-2  items-center">
            <div className="p-2 border rounded-full border-[#D6DDEB]">
              <CiLocationOn size={20} color="#26A4FF" />
            </div>
            <p className="font-epilogue font-epilogue400">
              {jobDetail.when_where}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-80">
        <div className=" border-[#D6DDEB] border-b">
          <h1 className="text-headertext2 font-poppins900">About</h1>
          <div className=" py-4 flex flex-col gap-4">
            {/* posted on */}
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full border h-fit w-fit border-[#D6DDEB]">
                <div className="relative w-6 h-6 ">
                  <Image src={postedOn} alt="" fill />
                </div>
              </div>
              <div className="">
                <h1 className="text-gray font-epilogue">Posted on</h1>
                <p className="font-epilogue600 font-epilogue">
                  {jobDetail.about.posted_on}
                </p>
              </div>
            </div>
            {/* deadline */}
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full border h-fit w-fit border-[#D6DDEB]">
                <div className="relative w-6 h-6 ">
                  <Image src={deadline} alt="" fill />
                </div>
              </div>
              <div className="">
                <h1 className="text-gray font-epilogue">Deadline</h1>
                <p className="font-epilogue600 font-epilogue">
                  {jobDetail.about.deadline}
                </p>
              </div>
            </div>
            {/* location */}
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full border h-fit w-fit border-[#D6DDEB]">
                <div className="relative w-6 h-6 ">
                  <Image src={location} alt="" fill />
                </div>
              </div>
              <div className="">
                <h1 className="text-gray font-epilogue">Location</h1>
                <p className="font-epilogue600 font-epilogue">
                  {jobDetail.about.location}
                </p>
              </div>
            </div>
            {/* start-date */}
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full border h-fit w-fit border-[#D6DDEB]">
                <div className="relative w-6 h-6 ">
                  <Image src={calendar} alt="" fill />
                </div>
              </div>
              <div className="">
                <h1 className="text-gray font-epilogue">Start Date</h1>
                <p className="font-epilogue600 font-epilogue">
                  {jobDetail.about.start_date}
                </p>
              </div>
            </div>
            {/* End-date */}
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full border h-fit w-fit border-[#D6DDEB]">
                <div className="relative w-6 h-6 ">
                  <Image src={calendartick} alt="" fill />
                </div>
              </div>
              <div className="">
                <h1 className="text-gray font-epilogue">End Date</h1>
                <p className="font-epilogue600 font-epilogue">
                  {jobDetail.about.end_date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5  border-[#D6DDEB] border-b gap-5 flex flex-col">
          <h1 className="text-headertext2 font-poppins900">Categories</h1>
          <div className="flex gap-2">
            {jobDetail.about.categories.map((category, index) => (
              <span key={index}
                className={`${
                  styles[index % styles.length]
                } flex px-[1rem] py-[6px] text-smalltext font-epilogue rounded-3xl font-semibold `}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className=" py-5 gap-2 flex flex-col">
          <h1 className="text-headertext2 font-poppins900">Required Skills</h1>
          <div className="flex gap-x-4 flex-wrap">
            {jobDetail.about.required_skills.map((skill, index) => (
              <div key={index} className="font-epilogue text-blue ">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
