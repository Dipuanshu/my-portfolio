import React from "react";

function About() {
  return (
    <div class=" mt-12 bg-cyan-50 p-2 pb-8 sm:px-24">
      <div class=" flex sm:justify-between justify-center sm:p-3">
        <h1 class=" font-semibold text-center ">Recent Posts</h1>
        <a class=" hidden sm:block text-blue-500 text-xs ">View all</a>
      </div>
      <div class=" flex flex-col sm:flex-row ">
        <div class=" bg-white p-3 rounded-sm mt-4 sm:mt-0 sm:w-1/2">
          <h1 class=" font-bold text-xl">
            Making a design system from scratch
          </h1>
          <p class=" mt-4">
            12 Feb 2020 <span class=" ml-6">|</span>{" "}
            <span class=" ml-6">Design, Pattern</span>
          </p>
          <p class=" mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div class=" bg-white p-3 rounded-sm mt-4 sm:ml-4 sm:mt-0 sm:w-1/2">
          <h1 class=" font-bold text-xl">
            Creating pixel perfect icons in Figma
          </h1>
          <p class=" mt-4">
            12 Feb 2020 <span class=" ml-6">|</span>{" "}
            <span class=" ml-6">Design, Pattern</span>
          </p>
          <p class=" mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
