"use client";

import { useFormik } from "formik";
import { contactFormSchema } from "../validations/contactform";
import { newsletterSchema } from "../validations/newsletter";

const NewsletterComponent = () => {
  const onSubmit = async (values: Object, actions: any) => {
    console.log(values);
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
      email: "",
    },
    validationSchema: newsletterSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col text-center gap-2 items-start w-fit">
      <p className="text-green-50 text-md w-full text-start">
        Sign up to our Newsletter
      </p>
      {/* Email input and subscribe button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-2 gap-x-4 justify-center md:justify-start w-fit"
      >
        <input
          type="text"
          id="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          placeholder="Enter your Email"
          className="w-[196px] green-effect rounded-leaf px-8 py-2 text-center text-sm bg-green-50 text-green-900 placeholder:text-green-900 placeholder:text-opacity-60 max-w-[238px] md:max-w-none"
        />
        <button className="rounded-leaf-2 bg-green-600 text-green-50 text-center text-sm xl:text-md px-8 py-2 w-[196px]">
          Subscribe
        </button>
        {errors.email && touched.email && (
          <label className="label p-0">
            <span className="label-text-alt text-md text-red-400">
              {errors.email}
            </span>
          </label>
        )}
      </form>
    </div>
  );
};

export default NewsletterComponent;
