"use client";
import { UploadButton } from "@/utils/uploadthing";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddBlog = ({ categories }) => {
  const router = useRouter();
  const [newBlog, setNewBlog] = useState({
    img: null,
    desc: "",
    title: "",
    catSlug: "",
  });
  const { status } = useSession();
  if (status == "loading") {
    return <div>Loading ...</div>;
  }

  if (status == "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        ...newBlog,
        slug: slugify(newBlog.title),
      }),
    });
    if (res.status == 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };
  return (
    <div className="flex justify-center items-center py-10">
      <div className="grid grid-cols-1 w-full max-w-[700px] gap-5">
        <input
          type="text"
          placeholder="title"
          className="p-3 text-xl border-none outline-none bg-slate-300 text-black"
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <div>
          <select
            value=""
            className="p-3 text-xl bg-slate-300 text-black w-full max-w-[700px]"
            onChange={(e) =>
              setNewBlog({ ...newBlog, catSlug: e.target.value })
            }
          >
            <option value="">Select Category</option>
            {categories?.map((cat, index) => (
              <option value={cat.slug} key={index}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
        <textarea
          type="text"
          placeholder="description"
          className="p-3 text-xl border-none outline-none bg-slate-300 text-black"
          onChange={(e) => setNewBlog({ ...newBlog, desc: e.target.value })}
        />
        <UploadButton
          endpoint="imageUploader"
          appearance={{
            button:
              "ut-uploading:cursor-not-allowed bg-slate-600 w-full text-xl after:bg-orange-400 max-w-[700px]",
            allowedContent: "hidden",
          }}
          onClientUploadComplete={(res) => {
            setNewBlog({ ...newBlog, img: res[0]?.url });
          }}
          onUploadError={(error) => {
            alert(`ERROR ${error.message}`);
          }}
        />
        {newBlog.img && (
          <>
            <img src={newBlog.img} className="object-cover w-full" alt="" />
            <button
              className="p-3 text-xl border-none w-full text-white bg-green-800 cursor-pointer rounded-lg"
              onClick={handleSubmit}
            >
              Publish
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default AddBlog;
