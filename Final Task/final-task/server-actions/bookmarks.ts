"use server";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

const url = process.env.NEXT_PUBLIC_BASE_URL;


export const addBookmark = async (jobId: string) => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;

  const URL = `${url}/bookmarks/${jobId}`;

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  console.log("added", data);
  revalidatePath("/");
  return data;
};

export const deleteBookmark = async (jobId: string) => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;

  const URL = `${url}/bookmarks/${jobId}`;
  const res = await fetch(URL, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  console.log("deleted", data);
  revalidatePath("/");
  return data;
};
