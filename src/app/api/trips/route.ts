import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET (All trips)
export async function GET() {
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
