import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET (All Users)
export async function GET(request: NextRequest) {
  // Gets the search params from the url = /users?userId=[user id here]
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  // If the user id exists in the url
  if (userId !== null) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (user) return NextResponse.json({ user });
    else {
      throw Error(`No User Found with ID ${userId}`);
    }
  }
  const allUsers = await prisma.user.findMany({});
  return NextResponse.json({ allUsers });
}

// CREATE A NEW USER!
export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = await prisma.user.create({ data: body });
  return NextResponse.json({ newUser });
}

// DELETE A USER
export async function DELETE(request: NextRequest) {
  const email = await request.json();
  const deletedUser = await prisma.user.delete({
    where: {
      email: email,
    },
  });
  return NextResponse.json({ deletedUser });
}
