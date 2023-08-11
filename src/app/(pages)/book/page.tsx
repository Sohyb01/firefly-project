"use client";

import React from "react";

const BookingPage = () => {
  return (
    <div className="container-all pt-[120px]">
      <section className="section__styles flex flex-col items-center gap-4 xl:gap-y-16 xl:gap-x-8">
        <h1 className="text-3xl text-green-950 text-center font-bold">
          Book a Trip
        </h1>
        {/* Form */}
        <div className="flex flex-col xl:flex-row shadow-lg xl:w-fit">
          {/* mountain view image */}
          <div className="view-image"></div>
          {/* Form */}
          <form className="flex flex-col gap-8 text-neutral-800 p-4 xl:justify-between">
            {/* Inputs area */}
            <div className="flex flex-col gap-4">
              {/* Trip type */}
              <div className="flex flex-col">
                <p>Trip type:</p>
                <select className="select bg-slate-200 text-sm rounded-xl text-center">
                  <option>Hike (1 Day)</option>
                  <option>Camping (2 Days)</option>
                  <option>Camping (3 Days)</option>
                  <option>Camping (4 Days)</option>
                  <option>Camping (5 Days)</option>
                </select>
              </div>
              {/* Choose a trip */}
              <div className="flex flex-col">
                <p>Choose a trip:</p>
                <select className="select bg-slate-200 text-sm rounded-xl text-center">
                  <option disabled selected>
                    Pick a Destination
                  </option>
                  <option>Mountains 1</option>
                  <option>Mountains 2</option>
                  <option>Mountains 3</option>
                </select>
              </div>
              {/* Date and People */}
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                <div className="flex flex-col w-full">
                  <p>Date:</p>
                  <input
                    type="date"
                    id="date"
                    className="bg-slate-200 text-sm rounded-xl py-2 px-8 text-center custom-datepicker :"
                  ></input>
                </div>
                <div className="flex flex-col min-w-[134px] w-full">
                  <p>No. of People</p>
                  <select className="select bg-slate-200 text-sm rounded-xl text-center">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col text-center">
              <p className="text-sm">Total Checkout Price:</p>
              <h2 className="text-5xl">$249.99</h2>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className=" bg-green-600 rounded-xl py-2 px-8 text-green-50"
            >
              Purchase & Confirm Trip
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
