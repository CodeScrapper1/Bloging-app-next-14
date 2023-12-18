"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const Pagination = ({ prev, next, page }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className="flex gap-2 p-4 bg-amber-700 text-white disabled:cursor-not-allowed"
        disabled={!prev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        {"<"}
        <span>Previous</span>
      </button>
      <button
        className="flex gap-2 p-4 bg-amber-700 text-white disabled:cursor-not-allowed"
        disabled={!next}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        <span>Next</span>
        {">"}
      </button>
    </div>
  );
};
