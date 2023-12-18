"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = async (apiUrl) => {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("comments not found");
  }
  return res.json();
};
const Comment = ({ slug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const { data, mutate, isLoading } = useSWR(
    `/api/comments?blogSlug=${slug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug: slug }),
    });

    setDesc("");
    mutate();
  };
  return (
    <div className="mt-12">
      {status == "authenticated" ? (
        <div className="flex items-center justify-between gap-8">
          <textarea
            placeholder="write a comment ..."
            value={desc}
            className="p-5 text-xl border-none outline-none bg-slate-500 text-black w-full"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="py-4 px-5 bg-green-700 text-white font-bold border-none rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link className="font-bold" href="/login">
          Login to write a comment
        </Link>
      )}

      <div className="mt-12">
        {isLoading
          ? "loading"
          : data?.map((comment, index) => (
              <div className="mb-12" key={index}>
                <div className="flex items-center gap-5">
                  <img
                    src={comment.user.image}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1 text-slate-400">
                    <span className="font-semibold">{comment.user.name}</span>
                    <span>{comment.user.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <p className="text-lg mt-2">{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comment;
