import React from "react";
import Comment from "@/app/components/Comment";
import { MostPopularBlogs } from "@/app/components/MostPopularBlogs";

const getBlogDetails = async (slug) => {
  const res = await fetch(`${process.env.API_URL}/posts/${slug}`);

  if (!res.ok) {
    throw new Error("failed to get details");
  }
  return res.json();
};
const PostDetail = async ({ params }) => {
  const { slug } = params;
  const blogDetails = await getBlogDetails(slug);
  return (
    <div>
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-12">
            {blogDetails?.title}
          </h1>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 relative">
              <img
                src={blogDetails?.user?.image}
                alt=""
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 text-gray-400">
              <span className="text-xl font-bold">
                {blogDetails?.user?.name}
              </span>
              <span>{blogDetails?.createdAt?.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex  h-[350px] relative">
          <img src={blogDetails?.img} className="object-cover" alt="" />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex-[5] mt-16">
          <div>
            <p className="text-lg mb-5">{blogDetails?.desc}</p>
          </div>
          <Comment slug={slug} />
        </div>
        <MostPopularBlogs />
      </div>
    </div>
  );
};
export default PostDetail;
