import React from "react";
import Tabs from "../components/Tabs";
import AddBlog from "../components/AddBlog";
import AddCategory from "../components/AddCategory";

const getCategories = async () => {
  const res = await fetch(`${process.env.API_URL}/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
const Dashboard = async ({ searchParams }) => {
  const categories = await getCategories();
  const index = parseInt(searchParams.index) || 1;
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <Tabs index={index} />
        <div className="w-full md:w-3/4 bg-slate-100">
          {index == 1 && <AddBlog categories={categories} />}
          {index == 2 && <AddCategory />}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
