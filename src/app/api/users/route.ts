import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET (All Users)
export async function GET(request: NextRequest) {
  const allUsers = await prisma.user.findMany({
    include: {
      trips: true,
    },
  });
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
