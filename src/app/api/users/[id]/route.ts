import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET (All Users)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId !== null) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return NextResponse.json({ user });
  }
}
