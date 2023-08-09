import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET (All Emails)
export async function GET(request: NextRequest) {
  const allEmails = await prisma.email.findMany({});
  return NextResponse.json({ allEmails });
}

// Add a new email!
export async function POST(request: NextRequest) {
  const body = await request.json();
  const newEmail = await prisma.email.create({ data: body });
  return NextResponse.json({ newEmail });
}

// Delete an email
export async function DELETE(request: NextRequest) {
  const email = await request.json();
  const deletedEmail = await prisma.email.delete({
    where: {
      email: email,
    },
  });
  return NextResponse.json({ deletedEmail });
}
