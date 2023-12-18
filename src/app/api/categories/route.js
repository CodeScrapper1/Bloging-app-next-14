import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const category = await prisma.category.create({ data: body });
    return new NextResponse(JSON.stringify(category, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 400 })
    );
  }
};

// get categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 400 })
    );
  }
};
