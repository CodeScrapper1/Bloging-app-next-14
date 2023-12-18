"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Tabs = ({ index }) => {
  const router = useRouter();
  return (
    <div className="w-full md:md:w-1/4 bg-slate-300 h-[calc(100vh-100px)]">
      <ul className="flex flex-col gap-4 p-5">
        <li
          className={`${
            index == 1 ? "text-white bg-black" : "text-gray-400 bg-white"
          } p-2.5 rounded-md font-bold cursor-pointer hover:opacity-[0.8] capitalize`}
          onClick={() => router.push("/dashboard?index=1")}
        >
          add Blog
        </li>
        <li
          className={`${
            index == 2 ? "text-white bg-black" : "text-gray-400 bg-white"
          } p-2.5 rounded-md font-bold cursor-pointer hover:opacity-[0.8] capitalize`}
          onClick={() => router.push("/dashboard?index=2")}
        >
          add Category
        </li>
      </ul>
    </div>
  );
};
export default Tabs;
