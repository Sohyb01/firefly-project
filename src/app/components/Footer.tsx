"use client";

import { useFormik } from "formik";
import { contactFormSchema } from "../validations/contactform";

interface messageFormData {
  name: string;
  email: string;
  message: string;
}

const Footer = () => {
  const onSubmit = async (values: messageFormData, actions: any) => {
    console.log(values);
    const data = {
      writer: values.name,
      content: values.message,
      email: values.email,
    };
    const body = JSON.stringify(data);
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
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
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit,
  });

  //   console.log(errors);

  return (
    <>
      {/* Wave */}
      <svg
        className="aspect-[10/1] w-full bg-transparent translate-y-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 108"
        fill="none"
      >
        <g clipPath="url(#clip0_515_2077)">
          <path
            opacity="0.25"
            d="M1080 108V66.339C1036.99 46.359 986.769 37.386 937.8 41.139C874.476 45.972 815.103 71.118 751.68 74.889C685.224 78.813 618.894 59.697 555.3 43.155C492.957 26.955 430.83 20.763 366.84 31.383C334.305 36.783 303.975 47.439 272.835 57.789C189.459 85.5 78.3 120.861 0 60.777V108L1080 108Z"
            fill="#166534"
          />
          <path
            opacity="0.7"
            d="M1080 108V93.771C1068.3 74.772 1055.12 56.826 1037.08 43.155C990.531 7.85699 931.5 8.09999 877.878 25.578C849.843 34.713 823.797 49.041 797.175 61.398C760.347 78.498 720.918 102.798 679.428 106.101C646.794 108.666 615.618 97.623 590.688 77.697C562.095 54.846 534.6 21.897 497.421 11.997C461.025 2.286 424.206 18.018 390.204 33.849C356.202 49.68 322.56 68.949 284.976 72.594C231.219 77.859 183.024 52.002 132.966 37.638C105.786 29.844 79.866 32.085 54.5851 44.388C34.3981 54.189 11.385 68.625 0 88.704V108L1080 108Z"
            fill="#166534"
          />
          <path
            d="M1080 108V102.933C945.063 54.9 797.319 43.812 651.753 69.687C613.053 76.563 575.946 87.795 536.904 93.501C483.804 101.268 435.672 82.485 387.9 61.641C334.863 38.502 282.6 22.284 223.92 27C146.043 33.3 68.706 68.139 0 103.329V108L1080 108Z"
            fill="#166534"
          />
        </g>
      </svg>
      <div className="bg-green-800">
        <section
          className="section__styles flex flex-col gap-8 sm:gap-16"
          id="footer"
        >
          {/* h1, form, links, and socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-green-50 font-bold text-2xl text-center md:text-start xl:text-3xl">
              — Contact Us —{/* Form and Socials */}
            </h1>
            {/* Form, Links, and Socials */}
            <div className="flex flex-col items-center gap-16 w-full md:flex-row md:items-start md:gap-8">
              {/* Form and submit */}
              <form
                className="flex flex-col grid-flow-row items-center gap-4 md:gap-8 w-full"
                onSubmit={handleSubmit}
              >
                {/* name and email */}
                <div className="flex items-end gap-4 md:gap-8 w-full">
                  {/* name input */}
                  <div className="w-full">
                    {errors.name && touched.name && (
                      <label className="label">
                        <span className="label-text-alt text-md text-red-400">
                          {errors.name}
                        </span>
                      </label>
                    )}
                    <input
                      className="green-effect p-2 text-center bg-green-50 text-neutral-800 rounded-md w-full"
                      type="text"
                      id="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      placeholder="Enter your name"
                    />
                  </div>
                  {/* email input */}
                  <div className="w-full">
                    {errors.email && touched.email && (
                      <label className="label">
                        <span className="label-text-alt text-md text-red-400">
                          {errors.email}
                        </span>
                      </label>
                    )}
                    <input
                      className="green-effect p-2 text-center bg-green-50  text-neutral-800 rounded-md w-full"
                      type="email"
                      id="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                {/* message */}
                <div className="w-full h-fit">
                  <textarea
                    className="p-2 text-start bg-green-50 text-neutral-800 rounded-md w-full green-effect resize-none"
                    id="message"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                    rows={5}
                    placeholder="Enter your message..."
                  />
                  {errors.message && touched.message && (
                    <label className="label p-0">
                      <span className="label-text-alt text-md text-red-400">
                        {errors.message}
                      </span>
                    </label>
                  )}
                </div>
                <button
                  disabled={
                    Object.keys(errors).length > 0 || isSubmitting
                      ? true
                      : false
                  }
                  type="submit"
                  className="text-md rounded-leaf-2 bg-green-600 disabled:bg-neutral-800  text-green-50 text-center px-8 py-2 w-full"
                >
                  Submit
                </button>
              </form>
              {/* Links and socials */}
              <div className="flex flex-col gap-4 w-full md:flex-row md:w-fit md:gap-16 md:h-full xl:w-[427px] xl:justify-center xl:gap-32">
                {/* links */}
                <div className="flex justify-between sm:gap-8 md:flex-col md:justify-between md:h-full w-full md:w-[100px]">
                  <a
                    href="#hero"
                    className="text-green-50 hover:text-green-500 duration-200"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-green-50 hover:text-green-500 duration-200"
                  >
                    About
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-green-50 hover:text-green-500 duration-200"
                  >
                    How it Works
                  </a>
                  <a
                    href="#faq"
                    className="text-green-50 hover:text-green-500 duration-200"
                  >
                    FAQ
                  </a>
                </div>
                {/* socials */}
                <div className="flex gap-8 items-center justify-center md:flex-col md:justify-between">
                  <a
                    className=" fill-green-50 duration-200 hover:fill-green-500"
                    href="https://www.facebook.com/profile.php?id=100003393718419"
                    target="_blank"
                    id="facebook"
                  >
                    <svg
                      className=" h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10.0609C20 4.50304 15.5242 0 10 0C4.47581 0 0 4.50304 0 10.0609C0 15.0824 3.65685 19.2446 8.4375 20V12.9692H5.89718V10.0609H8.4375V7.84422C8.4375 5.32292 9.92944 3.93022 12.2145 3.93022C13.3089 3.93022 14.4532 4.12657 14.4532 4.12657V6.60122H13.1919C11.95 6.60122 11.5625 7.37688 11.5625 8.17241V10.0609H14.3359L13.8923 12.9692H11.5625V20C16.3431 19.2446 20 15.0824 20 10.0609Z" />
                    </svg>
                  </a>
                  <a
                    className=" fill-green-50 duration-200 hover:fill-green-500"
                    href="https://www.instagram.com/sohyb_imm/"
                    target="_blank"
                    id="instagram"
                  >
                    <svg
                      className=" h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 20"
                    >
                      <path d="M10.5022 4.87225C7.66453 4.87225 5.37563 7.16166 5.37563 10C5.37563 12.8383 7.66453 15.1277 10.5022 15.1277C13.3399 15.1277 15.6288 12.8383 15.6288 10C15.6288 7.16166 13.3399 4.87225 10.5022 4.87225ZM10.5022 13.3337C8.66843 13.3337 7.16927 11.8387 7.16927 10C7.16927 8.16133 8.66397 6.6663 10.5022 6.6663C12.3405 6.6663 13.8352 8.16133 13.8352 10C13.8352 11.8387 12.336 13.3337 10.5022 13.3337ZM17.0343 4.6625C17.0343 5.32746 16.4989 5.85853 15.8385 5.85853C15.1737 5.85853 14.6428 5.32299 14.6428 4.6625C14.6428 4.00201 15.1782 3.46647 15.8385 3.46647C16.4989 3.46647 17.0343 4.00201 17.0343 4.6625ZM20.4297 5.87638C20.3539 4.27424 19.988 2.85507 18.8146 1.68582C17.6456 0.516568 16.2267 0.150619 14.6249 0.070289C12.9741 -0.0234297 8.02593 -0.0234297 6.37507 0.070289C4.77775 0.146156 3.3589 0.512105 2.18544 1.68136C1.01199 2.85061 0.650586 4.26978 0.570273 5.87192C0.476576 7.52315 0.476576 12.4724 0.570273 14.1236C0.646124 15.7258 1.01199 17.1449 2.18544 18.3142C3.3589 19.4834 4.77328 19.8494 6.37507 19.9297C8.02593 20.0234 12.9741 20.0234 14.6249 19.9297C16.2267 19.8538 17.6456 19.4879 18.8146 18.3142C19.9835 17.1449 20.3494 15.7258 20.4297 14.1236C20.5234 12.4724 20.5234 7.52761 20.4297 5.87638ZM18.297 15.8953C17.949 16.7701 17.2752 17.4439 16.3963 17.7965C15.08 18.3186 11.9568 18.1981 10.5022 18.1981C9.04769 18.1981 5.91997 18.3142 4.6082 17.7965C3.73369 17.4484 3.05996 16.7745 2.70747 15.8953C2.18544 14.5788 2.30591 11.4549 2.30591 10C2.30591 8.54513 2.18991 5.41671 2.70747 4.10465C3.05549 3.22995 3.72922 2.55606 4.6082 2.2035C5.92443 1.68136 9.04769 1.80185 10.5022 1.80185C11.9568 1.80185 15.0845 1.68582 16.3963 2.2035C17.2708 2.5516 17.9445 3.22548 18.297 4.10465C18.819 5.42118 18.6985 8.54513 18.6985 10C18.6985 11.4549 18.819 14.5833 18.297 15.8953Z" />
                    </svg>
                  </a>
                  <a
                    className=" fill-green-50 duration-200 hover:fill-green-500"
                    href="#"
                    target="_blank"
                    id="tiktok"
                  >
                    <svg
                      className="h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17.5 8.20169C15.7798 8.2058 14.1017 7.66934 12.7029 6.6681V13.6511C12.7024 14.9444 12.3071 16.2068 11.5698 17.2694C10.8325 18.332 9.78832 19.1442 8.57694 19.5974C7.36555 20.0505 6.04469 20.1231 4.79095 19.8053C3.53722 19.4876 2.41038 18.7946 1.56111 17.8192C0.711837 16.8437 0.180616 15.6323 0.0384769 14.3468C-0.103663 13.0613 0.150055 11.763 0.765703 10.6256C1.38135 9.48819 2.32959 8.56583 3.48361 7.98185C4.63764 7.39788 5.94246 7.18013 7.22358 7.35772V10.8699C6.63734 10.6855 6.00781 10.6911 5.42491 10.8858C4.84201 11.0805 4.33554 11.4544 3.97783 11.9541C3.62012 12.4539 3.42946 13.0538 3.43308 13.6684C3.4367 14.2829 3.63442 14.8806 3.99799 15.376C4.36156 15.8715 4.8724 16.2394 5.45755 16.4272C6.04271 16.6151 6.67225 16.6132 7.25629 16.4219C7.84032 16.2306 8.34897 15.8597 8.70961 15.3621C9.07025 14.8645 9.26442 14.2657 9.26441 13.6511V0H12.7029C12.7005 0.290363 12.7248 0.580329 12.7756 0.866235C12.8951 1.50447 13.1435 2.11163 13.5057 2.65057C13.8679 3.1895 14.3362 3.64889 14.8821 4.00062C15.6586 4.51407 16.569 4.78774 17.5 4.78754V8.20169Z" />
                    </svg>
                  </a>
                  <a
                    className=" fill-green-50 duration-200 hover:fill-green-500"
                    href="https://www.linkedin.com/in/sohyb-mansour-b237961ba/"
                    target="_blank"
                    id="linkedin"
                  >
                    <svg
                      className=" h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* copyright text */}
          <p className="text-center text-lg md:text-start">
            Copyright © 2023 Firefly — All Rights Reserved <br />
            Design & Code by Sohyb Mansour
          </p>
        </section>
      </div>
    </>
  );
};

export default Footer;
