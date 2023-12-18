import Link from "next/link";
import React from "react";

const getCategories = async () => {
  const res = await fetch(`${process.env.API_URL}/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

export const CategoryList = async () => {
  const categories = await getCategories();
  const colors = [
    "bg-[#ebfceb]",
    "bg-[#fcf9e8]",
    "bg-[#fcebeb]",
    "bg-[#ebfbfc]",
    "bg-[#f6ebfc]",
    "bg-[#fcebf7]",
  ];
  return (
    <div>
      <h1 className=" my-12 text-3xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {categories.map((category, index) => (
          <Link
            href={`/blog?cat=${category.slug}`}
            className={`text-sm flex items-center justify-center gap-2.5 capitalize w-full sm:w-1/5 md:w-1/4 lg:w-[15%] h-20 rounded-md text-black ${colors[index]}`}
            key={index}
          >
            <img
              src={category.img}
              width={40}
              height={40}
              className="rounded-md"
              alt=""
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
