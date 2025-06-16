/** @format */

import React from "react";

function MySkills() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">My Skills</h1>
      <div className="flex flex-col items-center lg:justify-center basis-0 mt-10 md:flex-row ">
        <img
          className="h-24 animate-pulse lg:animate-bounce lg:mt-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QP4wG2DnJ7gi_F4OjFWO6PsrZQ1sjOrX4A&s"
        />
        <img
          className="h-24 animate-pulse lg:animate-bounce lg:mt-4 lg:ml-8 mt-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s"
        />
        <img
          className="h-24 lg:mt-4 animate-pulse lg:animate-bounce lg:ml-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4fkV1SpW6hK6fS7Ig7FAk6_y2ADAawey9Q&s"
        />
        <img
          className="h-24 mt-4 lg:ml-8 animate-pulse lg:animate-bounce"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <img
          className="h-24 mt-4 lg:ml-8 animate-pulse lg:animate-bounce"
          src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
        />
        <img
          className="h-24 lg:ml-8 animate-pulse lg:animate-bounce"
          src="https://img.icons8.com/color/512/express-js.png"
        />
        <img
          className="h-24 lg:ml-8 animate-pulse lg:animate-bounce"
          src="https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png"
        />
      </div>
    </div>
  );
}

export default MySkills;
