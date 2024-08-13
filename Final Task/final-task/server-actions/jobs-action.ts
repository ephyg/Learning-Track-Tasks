"use server";
import { JobDetailType } from "@/types/page";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// get all jobs
export const getJobsList = async () => {
  const res = await fetch(`${apiUrl}/search`);
  const data = await res.json();
  return data;
};

// get single job detail
export const getJobDetail = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}`);
  const data = await res.json();
  return data;
};

// sort jobs by most recent
export const getMostRecentJobs = async () => {
  const res = await fetch(`${apiUrl}/search`);
  const data = await res.json();

  return data;
};

export const getMostRelevantJobs = async () => {
  const route = apiUrl + "/search";
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;
  const res = await fetch(`${route}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getBookmarkedJobs = async () => {
  const route = apiUrl + "/search";
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;
  const res = await fetch(`${route}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  const result = data.data.filter(
    (jobs: JobDetailType) => jobs.isBookmarked == true
  );
  console.log(result);
  return result;
};
