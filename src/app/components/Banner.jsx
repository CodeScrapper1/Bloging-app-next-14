import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div>
      <h1 className="font-extrabold text-center text-[36px] sm:text-[64px] md:text-[72px] lg:[96px]">
        Browse My Blogs
      </h1>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-lg font-medium text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="py-4 px-5 rounded w-36 border-gray-400 border">
            Read More
          </button>
        </div>
        <div className="h-96 md:h-[500px] relative">
          <Image src="/p1.jpg" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};
