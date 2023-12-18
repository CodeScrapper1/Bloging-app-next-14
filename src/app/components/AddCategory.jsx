"use client";
import { UploadButton } from "@/utils/uploadthing";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddCategory = () => {
  const router = useRouter();
  const [newCat, setNewCat] = useState({
    img: null,
    title: "",
  });
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
    const res = await fetch("http://localhost:3000/api/categories", {
      method: "POST",
      body: JSON.stringify({
        ...newCat,
        slug: slugify(newCat.title),
      }),
    });
    if (res.status == 200) {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="grid grid-cols-1 w-full max-w-[700px] gap-5">
        <input
          type="text"
          placeholder="title"
          className="p-3 text-xl border-none outline-none bg-slate-300 text-black"
          onChange={(e) => setNewCat({ ...newCat, title: e.target.value })}
        />
        <UploadButton
          endpoint="imageUploader"
          appearance={{
            button:
              "ut-uploading:cursor-not-allowed bg-slate-600 w-full text-xl after:bg-orange-400 max-w-[700px]",
            allowedContent: "hidden",
          }}
          onClientUploadComplete={(res) => {
            setNewCat({ ...newCat, img: res[0]?.url });
          }}
          onUploadError={(error) => {
            alert(`ERROR ${error.message}`);
          }}
        />
        {newCat.img && (
          <>
            <img src={newCat.img} className="object-cover w-full" alt="" />
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
export default AddCategory;
