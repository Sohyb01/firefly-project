"use client";

import { useFormik } from "formik";
import { tripFormSchema } from "../validations/tripform";
import { startTransition, useEffect, useState, useTransition } from "react";
import { getSession } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { tripFormData } from "../typings";
import { addTripToDatabase } from "../actions/ServerActions";

const BookTripForm = () => {
  let [isPending, startTransition] = useTransition();

  const onSubmit = async (values: tripFormData, actions: any) => {
    const session = await getSession();
    if (!session) return null;
    const fullValues = {
      duration: parseInt(values.duration.toString()),
      destination: values.destination,
      departureDate: values.departureDate,
      numberOfPeople: parseInt(values.numberOfPeople.toString()),
      price: tripPrice,
      userId: session.user.id,
    };
    // console.log(fullValues)
    const data = JSON.stringify(fullValues);
    startTransition(() => addTripToDatabase(data));
    await new Promise((res) => setTimeout(res, 1000));
    // actions.resetForm();
  };

  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      duration: 1,
      destination: "MOUNTAIN",
      departureDate: "",
      numberOfPeople: 1,
    },
    validationSchema: tripFormSchema,
    onSubmit,
  });

  const [tripPrice, setTripPrice] = useState(100);

  useEffect(() => {
    const price = Math.floor(
      (values.duration * values.numberOfPeople * 100) /
        (1 + values.duration * 0.05)
    );
    setTripPrice(price);
  }, [values]);

  return (
    <div className="flex flex-col lg:flex-row shadow-lg xl:w-fit">
      {/* mountain view image */}
      <div className="view-image"></div>
      {/* Form */}
      <form
        className="flex flex-col gap-8 text-neutral-800 p-4 lg:justify-between"
        onSubmit={handleSubmit}
        // action={addTripToDatabase}
      >
        {/* Inputs area */}
        <div className="flex flex-col gap-4">
          {/* Trip type */}
          <div className="flex flex-col">
            <p>Trip duration:</p>
            <select
              className="select bg-slate-200 text-sm rounded-xl text-center"
              id="duration"
              name="duration"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.duration}
            >
              {/* <option selected disabled>
                Pick a trip type
              </option> */}
              <option value={1}>Hike (1 Day)</option>
              <option value={2}>Camping (2 Days)</option>
              <option value={3}>Camping (3 Days)</option>
              <option value={4}>Camping (4 Days)</option>
              <option value={5}>Camping (5 Days)</option>
            </select>
          </div>
          {/* Choose a trip */}
          <div className="flex flex-col">
            <p>Choose a trip:</p>
            <select
              className="select bg-slate-200 text-sm rounded-xl text-center"
              id="destination"
              name="destination"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.destination}
            >
              {/* <option selected disabled>
                Pick a Destination
              </option> */}
              <option value={"Mountain"}>Mountain</option>
              <option value={"Lake"}>Lake</option>
              <option value={"River"}>River</option>
            </select>
          </div>
          {/* Date and People */}
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <div className="flex flex-col w-full">
              <p>Date:</p>
              <input
                type="date"
                className="bg-slate-200 text-sm rounded-xl py-2 px-8 text-center custom-datepicker"
                id="departureDate"
                name="departureDate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.departureDate}
              ></input>
              {errors.departureDate && (
                <p className="text-red-500">{errors.departureDate}</p>
              )}
            </div>
            <div className="flex flex-col min-w-[134px] w-full">
              <p>No. of People</p>
              <select
                className="select bg-slate-200 text-sm rounded-xl text-center"
                id="numberOfPeople"
                name="numberOfPeople"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.numberOfPeople}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col text-center">
          <p className="text-sm">Total Checkout Price:</p>
          <h2 className="text-5xl">${tripPrice}</h2>
        </div>
        {/* Submit button */}
        <button
          disabled={
            Object.keys(errors).length > 0 || isSubmitting ? true : false
          }
          type="submit"
          className=" bg-green-600 rounded-xl py-2 px-8 text-green-50  disabled:bg-neutral-800"
        >
          Purchase & Confirm Trip
        </button>
      </form>
    </div>
  );
};

export default BookTripForm;
function UseState(arg0: number): [any, any] {
  throw new Error("Function not implemented.");
}
