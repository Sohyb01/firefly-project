export default function Home() {
  return (
    <main className="container-all">
      {/* Hero Section */}
      <section className="hero-section flex flex-col lg:flex-row">
        {/* Hero section image */}
        <div className="lake-image"></div>
        {/* Hero section content */}
        <div className="green-bg px-4 py-10 gap-8 flex flex-col items-center hero-section-content z-10 lg:h-[720px] lg:w-[50%] lg:py-10 lg:pl-10 lg:pr-2 lg:pt-[120px] lg:gap-16 lg:flex lg:items-start xl:h-[968px] xl:py-[120px] xl:pt-[160px] xl:justify-between">
          {/* h1, paragraph, and sign up buttons */}
          <div className="hero-div-1 gap-4 flex flex-col">
            {/* h1 and paragraph */}
            <div className="gap-2 flex flex-col">
              <h1 className="text-green-50 text-left text-2xl xl:text-4xl">
                Enter the Wild, <br className="hidden sm:block" /> Create
                Unforgettable Memories
              </h1>
              <p className="text-neutral-200 text-md xl:text-lg">
                We specialize in organizing and launching trips to give you
                memorable experiences — Explore breathtaking views, see unique
                wildlife, visit special locations and trails, and take part in
                fun activities. What are you waiting for?
              </p>
            </div>
            {/* Sign up buttons */}
            <div className="gap-4 flex justify-center items-center flex-wrap w-fit mx-auto md:mx-0 lg:gap-8">
              <button className="rounded-leaf-2 bg-green-600 text-green-50 text-center px-8 py-2">
                Sign Up Today
              </button>
              <button className="rounded-leaf-2 bg-green-50 text-green-800 text-center px-8 py-2">
                Learn More
              </button>
            </div>
          </div>
          {/* Leaf stat container */}
          <div className="hero-div-2 gap-4 flex flex-wrap justify-center md:justify-start md:flex-col lg:gap-8 lg:flex-row">
            <div className="leaf-stat w-fit">
              <h2 className="text-sm xl:text-md">Trips</h2>
              <h1 className="text-2xl xl:text-3xl font-bold xl:font-black -my-[14px]">
                320+
              </h1>
              <h3 className="text-xs xl:text-sm">in 2023</h3>
            </div>
            <div className="leaf-stat w-fit">
              <h2 className="text-sm xl:text-md">Happy Clients</h2>
              <h1 className="text-2xl xl:text-3xl font-bold xl:font-black -my-[14px]">
                2,140+
              </h1>
              <h3 className="text-xs xl:text-sm">Using our service</h3>
            </div>
            <div className="leaf-stat w-fit">
              <h2 className="text-sm xl:text-md">Our Rating</h2>
              <h1 className="text-2xl  xl:text-3xl font-bold xl:font-black -my-[14px]">
                4.8 / 5
              </h1>
              <h3 className="text-xs xl:text-sm">Across different platforms</h3>
            </div>
          </div>
          {/* Newsletter and Socials container */}
          <div className="hero-div-3 gap-4 flex flex-col md:flex-row md:justify-center md:gap-16 lg:gap-4 w-full">
            {/* Newsletter input and label */}
            <div className="flex flex-col text-center gap-2 lg:w-full">
              <p className="text-green-50 text-md">Sign up to our Newsletter</p>
              <input
                type="text"
                placeholder="Enter your Email"
                className="green-effect rounded-leaf px-8 py-2 text-center text-sm bg-green-50 text-green-900 placeholder:text-green-900 placeholder:text-opacity-60"
              />
            </div>
            {/* Social media icons and label*/}
            <div className="flex flex-col text-center gap-2 lg:w-full">
              <p className="text-green-50 text-md">Follow us on social media</p>
              {/* Social Icons */}
              <div className="flex gap-8 items-center justify-center">
                <a
                  className=" fill-green-50 duration-200 hover:fill-orange-600"
                  href=""
                  target="_blank"
                  id="tiktok"
                >
                  <svg
                    className=" h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17.5 8.20169C15.7798 8.2058 14.1017 7.66934 12.7029 6.6681V13.6511C12.7024 14.9444 12.3071 16.2068 11.5698 17.2694C10.8325 18.332 9.78832 19.1442 8.57694 19.5974C7.36555 20.0505 6.04469 20.1231 4.79095 19.8053C3.53722 19.4876 2.41038 18.7946 1.56111 17.8192C0.711837 16.8437 0.180616 15.6323 0.0384769 14.3468C-0.103663 13.0613 0.150055 11.763 0.765703 10.6256C1.38135 9.48819 2.32959 8.56583 3.48361 7.98185C4.63764 7.39788 5.94246 7.18013 7.22358 7.35772V10.8699C6.63734 10.6855 6.00781 10.6911 5.42491 10.8858C4.84201 11.0805 4.33554 11.4544 3.97783 11.9541C3.62012 12.4539 3.42946 13.0538 3.43308 13.6684C3.4367 14.2829 3.63442 14.8806 3.99799 15.376C4.36156 15.8715 4.8724 16.2394 5.45755 16.4272C6.04271 16.6151 6.67225 16.6132 7.25629 16.4219C7.84032 16.2306 8.34897 15.8597 8.70961 15.3621C9.07025 14.8645 9.26442 14.2657 9.26441 13.6511V0H12.7029C12.7005 0.290363 12.7248 0.580329 12.7756 0.866235C12.8951 1.50447 13.1435 2.11163 13.5057 2.65057C13.8679 3.1895 14.3362 3.64889 14.8821 4.00062C15.6586 4.51407 16.569 4.78774 17.5 4.78754V8.20169Z" />
                  </svg>
                </a>
                <a
                  className=" fill-green-50 duration-200 hover:fill-orange-600"
                  href=""
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
                <a
                  className=" fill-green-50 duration-200 hover:fill-orange-600"
                  href=""
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
                  className=" fill-green-50 duration-200 hover:fill-orange-600"
                  href=""
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
