"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { submittedData, tripFormData } from "../typings";
import prisma from "../lib/prisma";
import { error } from "console";

export async function addTripToDatabase(data: string) {
  const newTrip = await prisma.trip.create({ data: JSON.parse(data) });

  revalidatePath("/book");
}

export async function addMessageToDatabase(data: string) {
  const newMessage = await prisma.message.create({ data: JSON.parse(data) });
}
