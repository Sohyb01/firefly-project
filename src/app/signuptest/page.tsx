const page = () => {
  return (
    <section className="section__styles flex flex-col gap-4">
      {/* H1 and subtext */}
      <div className="flex flex-col text-center w-full">
        <h1 className="text-green-950 text-2xl xl:text-3xl">Sign up</h1>
        <p className="text-neutral-800 text-sm xl:text-md">
          Already have an account? <span className="text-blue-600">Log in</span>
        </p>
      </div>
    </section>
  );
};

export default page;
