import Image from "next/image";
import { Banner } from "./components/Banner";
import { CategoryList } from "./components/CategoryList";
import { BlogList } from "./components/BlogList";
import { MostPopularBlogs } from "./components/MostPopularBlogs";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main className="">
      <Banner />
      <CategoryList />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-12">
        <BlogList page={page} />
        <MostPopularBlogs />
      </div>
    </main>
  );
}
