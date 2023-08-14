import prisma from "@/app/lib/prisma";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import BookTripForm from "@/app/components/BookTripForm";

async function getUserData() {
  const session = await getServerSession(options);
  const res = await fetch(
    `http://localhost:3000/api/trips?userId=${session?.user.id}`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
}

const BookingPage = async () => {
  const session = await getServerSession(options);
  const tripData = await getUserData();
  // const tripData = await prisma.trip.findMany({
  //   where: {
  //     userId: session?.user.id,
  //   },
  // });
  console.log(tripData);

  return (
    <div className="container-all pt-[120px]">
      {/* Form Section */}
      <section className="section__styles flex flex-col items-center gap-4 xl:gap-x-8">
        <h1 className="text-3xl text-green-950 text-center font-bold">
          Book a Trip
        </h1>
        {/* Form */}
        <BookTripForm></BookTripForm>
      </section>
      {/* User Trips */}
      <section className="section__styles flex flex-col items-center gap-2 xl:gap-x-8">
        <h1 className="text-3xl text-green-950 text-center font-bold">
          Your Trips
        </h1>
        <h1 className="text-neutral-800">{session?.user.email}</h1>
        <div className="w-full">
          <div className="p-4 bg-white shadow-lg rounded-2xl">
            <div className="overflow-x-auto text-neutral-800">
              <table className="table table-xs table-pin-rows table-pin-cols">
                <thead className="bg-white">
                  <tr className="bg-white">
                    <th className="bg-white">1</th>
                    <td>Date</td>
                    <td>Duration</td>
                    <td>Number of people</td>
                    <td>Price</td>
                    <td>Trip ID</td>
                    <td>Time of Booking</td>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tripData.userTrips.map((trip: any, key: number) => (
                    <tr key={key}>
                      <th>{key + 1}</th>
                      <td>{trip.departureDate}</td>
                      <td>{trip.duration}</td>
                      <td>{trip.numberOfPeople}</td>
                      <td>${trip.price}</td>
                      <td>{trip.id}</td>
                      <td>{trip.bookedAt.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
