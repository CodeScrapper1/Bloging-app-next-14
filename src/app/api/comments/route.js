import prisma from "@/provider/connection";
import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse({ message: "Not Authorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "comment not created" }, { status: 500 })
    );
  }
};

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const blogSlug = searchParams.get("blogSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(blogSlug && { postSlug: blogSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "comments not found" }, { status: 500 })
    );
  }
};
