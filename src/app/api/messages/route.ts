import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET (All messages)
export async function GET(request: NextRequest) {
  const allMessages = await prisma.message.findMany({});
  return NextResponse.json({ allMessages });
}

// CREATE A NEW message!
export async function POST(request: NextRequest) {
  const body = await request.json();
  const newMessage = await prisma.message.create({ data: body });
  return NextResponse.json({ newMessage });
}

// DELETE A message
export async function DELETE(request: NextRequest) {
  const messageId = await request.json();
  const deletedMessage = await prisma.message.delete({
    where: {
      id: messageId,
    },
  });
  return NextResponse.json({ deletedMessage });
}
