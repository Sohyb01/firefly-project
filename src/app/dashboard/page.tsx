import { NextRequest, NextResponse } from "next/server";
import prisma from "../lib/prisma";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

async function getAllUsers() {
  const res = await fetch(`http://localhost:3000/api/users`, {
    cache: "no-cache",
  });
  return res.json();
}

async function getAllTrips() {
  const res = await fetch(`http://localhost:3000/api/trips`, {
    cache: "no-cache",
  });
  return res.json();
}

async function getAllMessages() {
  const res = await fetch(`http://localhost:3000/api/messages`, {
    cache: "no-cache",
  });
  return res.json();
}

const Dashboard = async () => {
  const session = await getServerSession(options);
  if (!session || session.user.role != "ADMIN") {
    redirect("/SigninPage?callbackUrl=/dashboard");
  }

  // Get all the user data
  const usersData = await getAllUsers();
  const allUsersData = usersData.allUsers; //This is what will be rendered on the page

  // Get all the trips data
  const tripsData = await getAllTrips();
  const allTripsData = tripsData.allTrips; //This is what will be rendered on the page

  // Get all the trips data
  const messagesData = await getAllMessages();
  const allMessagesData = messagesData.allMessages; //This is what will be rendered on the page

  return (
    <div className="section__styles flex flex-col gap-16 bg-neutral-200">
      {/* Users table and label */}
      <div className="">
        <h1 className="text-neutral-800 text-2xl">Users</h1>
        <div className="p-4 bg-white shadow-lg rounded-2xl">
          <div className="overflow-x-auto text-neutral-800">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead className="bg-white">
                <tr className="bg-white">
                  <th className="bg-white">1</th>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Password</td>
                  <td>User ID</td>
                  <td>Role</td>
                  <td>Balance</td>
                  <td>Date Joined</td>
                  <td></td>
                  <td></td>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allUsersData.map((user: any, key: number) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td>{user.firstName}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.id}</td>
                    <td>{user.role}</td>
                    <td>${user.balance}</td>
                    <td>{user.joinedAt}</td>
                    <th className="text-neutral-200"></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Trips table and label */}
      <div className="">
        <h1 className="text-neutral-800 text-2xl">Trips</h1>
        <div className="p-4 bg-white shadow-lg rounded-2xl">
          <div className="overflow-x-auto text-neutral-800">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead className="bg-white">
                <tr className="bg-white">
                  <th className="bg-white">1</th>
                  <td>Departure Date</td>
                  <td>Duration</td>
                  <td>Number of People</td>
                  <td>Destination</td>
                  <td>Price</td>
                  <td>Trip ID</td>
                  <td>Booked by</td>
                  <td>Time of booking</td>
                </tr>
              </thead>
              <tbody>
                {allTripsData.map((trip: any, key: number) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td>{trip.departureDate}</td>
                    <td>{trip.duration}</td>
                    <td>{trip.numberOfPeople}</td>
                    <td>{trip.destination}</td>
                    <td>${trip.price}</td>
                    <td>{trip.id}</td>
                    <td>{trip.userId}</td>
                    <td>{trip.bookedAt}</td>
                    <th className="text-neutral-200"></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Messages table and label */}
      <div className="">
        <h1 className="text-neutral-800 text-2xl">Messages</h1>
        <div className="flex flex-col gap-5 items-center justify-center w-fit mx-auto">
          {allMessagesData.map((message: any, key: number) => (
            <div
              key={key}
              className="p-4 w-full bg-white shadow-lg rounded-2xl"
            >
              <div className="overflow-x-auto text-neutral-800">
                <table className="table table-xs table-pin-rows table-pin-cols w-full">
                  <thead className="bg-white">
                    <tr className="bg-white">
                      <th className="bg-white">1</th>
                      <td>Writer</td>
                      <td>Writer email</td>
                      <td>Message ID</td>
                      <td>Sent At</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={key}>
                      <th>{key + 1}</th>
                      <td>{message.writer}</td>
                      <td>{message.email}</td>
                      <td>{message.id}</td>
                      <td>{message.sentAt}</td>
                      <th className="text-neutral-200"></th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h1 className="text-sm text-neutral-600 mt-2">
                Message content:
              </h1>
              <p className="text-neutral-800">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
