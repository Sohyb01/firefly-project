const page = () => {
  return (
    <section className="section__styles flex flex-col gap-4 items-center">
      {/* H1 and subtext */}
      <div className="flex flex-col text-center w-full">
        <h1 className="text-green-950 text-2xl xl:text-3xl">Sign In</h1>
        <p className="text-neutral-800 text-sm xl:text-md">
          Don&apos;t have an account?{" "}
          <span className="text-blue-600">Sign Up</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row shadow-lg w-full max-w-[776px]">
        {/* mountain view image */}
        <div className="lantern-image"></div>
        {/* Form */}
        <form
          className="flex flex-col gap-8 text-neutral-800 p-4 md:justify-between w-full"
          // onSubmit={handleSubmit}
        >
          {/* Inputs area */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col">
              <p>Email Address</p>
              <input
                className="bg-white border-solid border-neutral-300 border-[1px] text-sm rounded-xl text-center p-2"
                id="email"
                name="email"
                type="email"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.type}
              ></input>
            </div>
            {/* Password */}
            <div className="flex flex-col">
              <p>Password</p>
              <input
                className="bg-white border-solid border-neutral-300 border-[1px] text-sm rounded-xl text-center p-2"
                id="email"
                name="password"
                type="password"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.type}
              ></input>
            </div>
          </div>

          {/* Submit button */}
          <button
            // disabled={
            //   Object.keys(errors).length > 0 || isSubmitting ? true : false
            // }
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

export default page;
