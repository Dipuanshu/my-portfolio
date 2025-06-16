import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

export default function Header() {
  return (
    <div>
      <div className="flex justify-evenly lg:hidden  bg-gray-200  py-4 border-b-2 border-b-blue-500 ">
        <a className="text-black font-extrabold border-2 rounded-md px-2 py-1">
          Home
        </a>
        <a className="text-black font-extrabold border-2 rounded-md px-2 py-1">
          Skills
        </a>
        <a className="text-black font-extrabold  border-2 rounded-md px-2 py-1">
          Assignment
        </a>
        <a className="text-black font-extrabold  border-2 rounded-md px-2 py-1">
          Contact Us
        </a>
      </div>
      <div className="lg:flex hidden flex-col px-4 bg-gray-200 border-r-4 gap-8 pt-8 lg:fixed left-0 top-0 bottom-0">
        <a href="#assignment">
          <AiOutlineHome className=" text-3xl " />
        </a>
        <GiSkills className=" text-3xl" />
        <MdAssignment className=" text-3xl" />
        <BiPhone className=" text-3xl" />
      </div>
    </div>
  );
}
