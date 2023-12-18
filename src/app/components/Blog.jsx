import Link from "next/link";
import React from "react";

export const Blog = ({ key, item }) => {
  return (
    <div
      key={key}
      className="mb-20 flex flex-col lg:flex-row items-center gap-7 md:gap-12 bg-[var(--card-bg)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] rounded-md p-5"
    >
      <div className="flex-1 relative">
        <img
          src={item.img}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex-[2] flex flex-col gap-3 md:gap-8">
        <div className="uppercase">
          <span className="text-gray-400">{item.createdAt}</span>
          <span>{item.slug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className="text-4xl font-bold">{item.title}</h1>
        </Link>
        <p className="text-md">{item.desc}</p>
        <Link
          href={`/posts/${item.slug}`}
          className="border-b border-amber-700 p-0.5 w-24"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
