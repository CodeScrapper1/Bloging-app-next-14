import React from "react";

const About = () => {
  return (
    <div className="h-[70vh]">
      <div className="relative overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ;g:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>
            <main className="mt-10 mx-auto max-w-7xl px-4 lg:px-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="my-6 text-2xl tracking-tight text-gray-900 font-extrabold sm:text-3xl md:text-4xl">
                  About me
                </h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate, quam nisi magni ea laborum inventore voluptatum
                  laudantium repellat ducimus unde aspernatur fuga. Quo,
                  accusantium quisquam! Harum unde sit culpa debitis.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="https://www.uobgroup.com/web-resources/in/images/carousel/about-us/about-us-472x332.jpg"
            alt=""
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
