"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOption";
import useSWRMutation from "swr/mutation";
import {
  addBookmark,
  deleteBookmark,
} from "@/server-actions/bookmarks";
import { FaBookmark } from "react-icons/fa";
import { getJobsList, getMostRelevantJobs } from "@/server-actions/jobs-action";
interface BookmarkButtonProps {
  jobId: string;
  isBookmarked?: boolean;
}

const BookmarkButton = ({ jobId, isBookmarked }: BookmarkButtonProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleClick = async () => {
    const res = isBookmarked
      ? await deleteBookmark(jobId)
      : await addBookmark(jobId);
    setBookmarked(!bookmarked);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {bookmarked ? (
        <FaBookmark size={30} color="gray" />
      ) : (
        <CiBookmark size={30} color="gray" />
      )}
    </div>
  );
};

export default BookmarkButton;
