import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const { searchParams } = new URL(request.url);
  // const userId = searchParams.get("userId");
  // if (userId != null) {
  //   const userTrips = await prisma.trip.findMany({
  //     where: {
  //       userId: userId,
  //     },
  //   });
  //   return NextResponse.json({ userTrips });
  // }
  const allTrips = await prisma.trip.findMany({});
  return NextResponse.json({ allTrips });
}
