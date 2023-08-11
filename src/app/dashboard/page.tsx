import { NextRequest, NextResponse } from "next/server";
import prisma from "../lib/prisma";

const Dashboard = async () => {
  const allUsers = await prisma.user.findMany({
    include: {
      trips: true,
    },
  });

  const deleteUser = async (userId: string) => {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  };

  return (
    <div className="section__styles flex flex-col gap-16 bg-neutral-200">
      {/* Table and Label */}
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
                  <td>Date Joined</td>
                  <td></td>
                  <td></td>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.id}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="text-red-500">Delete</button>
                    </td>
                    <th className="text-neutral-200"></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
