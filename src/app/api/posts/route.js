import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const session = await getAuthSession();
  console.log(session);
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }));
  }
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 400 })
    );
  }
};

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const popular = searchParams.get("popular");

  const BLOG_PER_PAGE = 2;

  const query = {
    take: popular ? 4 : BLOG_PER_PAGE,
    include: { cat: true, user: true },
    skip: popular ? 0 : BLOG_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
