import React from "react";
import { Blog } from "./Blog";
import { Pagination } from "./Pagination";

const getBlogs = async (page, cat) => {
  const res = await fetch(
    `${process.env.API_URL}/posts?page=${page}&cat=${cat || ""}`
  );

  if (!res.ok) {
    throw new Error(" failed to get posts");
  }
  return res.json();
};
export const BlogList = async ({ page, cat }) => {
  const { posts, count } = await getBlogs(page, cat);

  const posts_per_page = 2;
  const prev = posts_per_page * (page - 1) > 0;
  const next = posts_per_page * (page - 1) + posts_per_page < count;
  return (
    <div>
      <h1 className="my-12 text-2xl font-bold text-gray-400">Recent Blogs</h1>
      <div>
        {posts?.map((item, index) => (
          <Blog key={index} item={item} />
        ))}
      </div>
      <Pagination prev={prev} next={next} page={page} />
    </div>
  );
};
