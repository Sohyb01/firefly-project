import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET a trip / all trips
export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId != null) {
    const userTrips = await prisma.trip.findMany({
      where: {
        userId: userId,
      },
    });
    return NextResponse.json({ userTrips });
  }
  const allTrips = await prisma.trip.findMany({});
  return NextResponse.json({ allTrips });
}

// CREATE A NEW trip!
export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTrip = await prisma.trip.create({ data: body });
  return NextResponse.json({ newTrip });
}

// DELETE A trip
export async function DELETE(request: NextRequest) {
  const tripId = await request.json();
  const deletedTrip = await prisma.trip.delete({
    where: {
      id: tripId,
    },
  });
  return NextResponse.json({ deletedTrip });
}
