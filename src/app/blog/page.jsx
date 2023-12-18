import React from "react";
import { BlogList } from "../components/BlogList";
import { MostPopularBlogs } from "../components/MostPopularBlogs";

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div>
      <h1 className="text-center capitalize text-4xl font-bold">
        {cat.replaceAll("-", " ")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-12">
        <BlogList page={page} cat={cat} />
        <MostPopularBlogs />
      </div>
    </div>
  );
};

export default Blog;
