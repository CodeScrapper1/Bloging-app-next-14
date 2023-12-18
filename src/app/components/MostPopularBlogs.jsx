import Link from "next/link";
import React from "react";

const popularBlogs = async (cat = "") => {
  const res = await fetch(
    `${process.env.API_URL}/posts?cat=${cat || ""}&page=1&popular=true`
  );
  if (!res.ok) {
    throw new Error("failded to get popular blogs");
  }
  return res.json();
};
export const MostPopularBlogs = async () => {
  const { posts, count } = await popularBlogs();
  return (
    <div className="flex-[2]">
      <h1 className="text-2xl my-12 font-bold">Most Popular</h1>
      <div className="mt-5 mb-6 flex flex-col gap-9">
        {posts.map((item, index) => (
          <Link
            href={`/posts/web-develpment`}
            key={index}
            className="bg-[var(--card-bg)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] rounded-md p-5"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.img}
                alt=""
                className="w-16 h-16 w-max rounded-full object-cover"
              />
              <div>
                <span className="py-1 text-xl w-max font-bold">
                  {item.title}
                </span>
                <div className="text-md">
                  <span className="mr-2 text-amber-700">Publisher:</span>
                  <span>{item.user.name}</span>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-lg font-medium max-h-20 overflow-hidden relative">
                <span className="leading-5 after:content-[...] after:absolute after:bottom-0 after:right-0">
                  {item.desc}
                </span>
              </h3>
              <div className="text-md">
                <span>{item.createdAt}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
