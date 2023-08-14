"use client";

import { useFormik } from "formik";
import { signUpFormSchema } from "../validations/signupform";
import { redirect } from "next/navigation";
import Link from "next/link";

interface signUpDetails {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  confirmPassword: String;
}

const SignupPage = () => {
  const onSubmit = async (values: signUpDetails, actions: any) => {
    const { confirmPassword, ...data } = values;
    // console.log(data);
    const body = JSON.stringify(data);
    await fetch(`/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    }).then((res) => {
      if (res.ok) {
        alert("Account created successfully!");
        redirect("/SigninPage");
      } else {
        alert(
          "An account with this email already exists, please log in or sign up with another Email!"
        );
      }
    });
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpFormSchema,
    onSubmit,
  });

  return (
    <section className="section__styles flex flex-col gap-4 items-center">
      {/* H1 and subtext */}
      <div className="flex flex-col text-center w-full">
        <h1 className="text-green-950 text-2xl xl:text-3xl">Sign up</h1>
        <p className="text-neutral-800 text-sm xl:text-md">
          Already have an account?{" "}
          <Link href="SigninPage" className="text-blue-600">
            Log in
          </Link>
        </p>
      </div>
      <div className="flex flex-col md:flex-row shadow-lg w-full max-w-[776px]">
        {/* mountain view image */}
        <div className="lantern-image"></div>
        {/* Form */}
        <form
          className="flex flex-col gap-8 text-neutral-800 p-4 md:justify-between w-full"
          onSubmit={handleSubmit}
        >
          {/* Inputs area */}
          <div className="flex flex-col gap-4">
            {/* Date and People */}
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <div className="flex flex-col w-full">
                <p>First Name</p>
                <input
                  type="text"
                  className="bg-white border-solid border-neutral-300 border-[1px] text-sm rounded-xl text-center p-2"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                ></input>
                {errors.firstName && touched.firstName && (
                  <label className="label">
                    <span className="label-text-alt text-md text-red-400">
                      {errors.firstName}
                    </span>
                  </label>
                )}
              </div>
              <div className="flex flex-col min-w-[134px] w-full">
                <p>Last Name</p>
                <input
                  type="text"
                  className="bg-white border-solid border-neutral-300 border-[1px] text-sm rounded-xl text-center p-2"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                ></input>
                {errors.lastName && touched.lastName && (
                  <label className="label">
                    <span className="label-text-alt text-md text-red-400">
                      {errors.lastName}
                    </span>
                  </label>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <p>Email Address</p>
              <input
                className="bg-white border-solid border-neutral-300 border-[1px] text-sm rounded-xl text-center p-2"
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              ></input>
              {errors.email && touched.email && (
                <label className="label">
                  <span className="label-text-alt text-md text-red-400">
                    {errors.email}
                  </span>
                </label>
              )}
            </div>
            {/* Password */}
            <div className="flex flex-col">
              <p>Password</p>
              <input
                className="bg-white border-solid border-neutral-300 border-[1px] text-sm rounded-xl text-center p-2"
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></input>
              {errors.password && touched.password && (
                <label className="label">
                  <span className="label-text-alt text-md text-red-400">
                    {errors.password}
                  </span>
                </label>
              )}
            </div>
            {/* Confirm Password */}
            <div className="flex flex-col">
              <p>Confirm Password</p>
              <input
                className="bg-white border-solid border-neutral-300 border-[1px] text-sm rounded-xl text-center p-2"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              ></input>
              {errors.confirmPassword && touched.confirmPassword && (
                <label className="label">
                  <span className="label-text-alt text-md text-red-400">
                    {errors.confirmPassword}
                  </span>
                </label>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            disabled={
              Object.keys(errors).length > 0 || isSubmitting ? true : false
            }
            type="submit"
            className=" bg-green-600 rounded-xl py-2 px-8 text-green-50  disabled:bg-neutral-800"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
