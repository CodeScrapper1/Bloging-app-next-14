import prisma from "@/provider/connection";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true, cat: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "blog details not found" }, { status: 500 })
    );
  }
};
