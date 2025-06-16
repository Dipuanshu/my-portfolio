/** @format */

import React from "react";
import Profile from "./Profile";
import Assignment from "./Assignment";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";
import { MdAssignment } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import MySkills from "./MySkills";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <div className="fixed bottom-10 right-5 md:right-10 z-10">
        <a href="https://wa.me/+919568618524" target="_blank">
          <HiOutlineChat className="md:text-5xl text-4xl text-white bg-green-800 rounded-full md:p-2 p-1" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row bg-blue-500 ">
        <div className="sticky top-0 z-10">
          <div className="flex justify-evenly lg:hidden bg-gray-200 py-4 border-b-2 border-b-blue-500 ">
            <a
              href="#Home"
              className="text-black font-extrabold border-2 rounded-md px-2 py-1"
            >
              Home
            </a>
            <a
              href="#MySkills"
              className="text-black font-extrabold border-2 rounded-md px-2 py-1"
            >
              Skills
            </a>
            <a
              href="#assignment"
              className="text-black font-extrabold  border-2 rounded-md px-2 py-1"
            >
              Assignment
            </a>
            <a
              href="#Contact"
              className="text-black font-extrabold  border-2 rounded-md px-2 py-1"
            >
              Contact Us
            </a>
          </div>
          <div className="lg:flex hidden flex-col px-4 bg-gray-200 border-r-4 gap-8 pt-8 lg:fixed left-0 top-0 bottom-0">
            <a href="#Home">
              <AiOutlineHome className=" text-3xl " />
            </a>
            <a href="#MySkills">
              <GiSkills className=" text-3xl" />
            </a>
            <a href="#assignment">
              <MdAssignment className=" text-3xl" />
            </a>
            <a href="#Contact">
              <BiPhone className=" text-3xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col border-t-2 border-t-white md:border-none ">
          <div id="Home">
            <div className="  flex flex-col w-full gap-10 lg:px-4 px-1 ">
              <div className="lg:px-20 px-4 md:px-6 lg:pt-4 pt-20 ">
                <h1 className="font-bold text-xl">HI THERE! I'M</h1>
                <h1 className="text-yellow-500 font-sans text-3xl md:text-4xl font-bold shadow-2xl">
                  DEEPANKAR JOSHI
                </h1>
              </div>
              <div>
                <Profile />
              </div>
              <div
                id="MySkills"
                className=" rounded-xl ring ring-blue-400 ring-offset-4 flex flex-col items-center bg-orange-50 self-center my-4 px-8 py-4"
              >
                <MySkills />
              </div>
            </div>
          </div>
          <div id="assignment">
            <Assignment />
          </div>
        </div>
      </div>
      <div id="Contact" className="flex justify-center">
        <Contact />
      </div>
      <p class=" text-center m-2">Copyright ©2023 All rights reserved </p>;
    </div>
  );
}

export default App;
