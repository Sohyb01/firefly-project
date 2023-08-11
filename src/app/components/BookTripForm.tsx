"use client";

import { useFormik } from "formik";
import { tripFormSchema } from "../validations/tripform";

interface tripFormData {
  type: string;
  trip: string;
  date: string;
  numberOfPeople: number;
}

const BookTripForm = () => {
  const onSubmit = async (values: tripFormData, actions: any) => {
    console.log(values);
    // const data = values;
    // const body = JSON.stringify(data);
    // await fetch("/api/trips", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: body,
    // });
    // await new Promise((res) => setTimeout(res, 1000));
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
      type: "Hike (1 Day)",
      trip: "Mountains 1",
      date: "",
      numberOfPeople: 1,
    },
    validationSchema: tripFormSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col lg:flex-row shadow-lg xl:w-fit">
      {/* mountain view image */}
      <div className="view-image"></div>
      {/* Form */}
      <form
        className="flex flex-col gap-8 text-neutral-800 p-4 lg:justify-between"
        onSubmit={handleSubmit}
      >
        {/* Inputs area */}
        <div className="flex flex-col gap-4">
          {/* Trip type */}
          <div className="flex flex-col">
            <p>Trip type:</p>
            <select
              className="select bg-slate-200 text-sm rounded-xl text-center"
              id="type"
              name="type"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
            >
              {/* <option selected disabled>
                Pick a trip type
              </option> */}
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
            <select
              className="select bg-slate-200 text-sm rounded-xl text-center"
              id="trip"
              name="trip"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.trip}
            >
              {/* <option selected disabled>
                Pick a Destination
              </option> */}
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
                className="bg-slate-200 text-sm rounded-xl py-2 px-8 text-center custom-datepicker"
                id="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              ></input>
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
