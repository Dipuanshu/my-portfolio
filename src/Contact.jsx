/** @format */

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";

function Contact() {
  return (
    <div className="flex flex-col  items-center my-10 md:my-20">
      <h1 className="text-xl font-bold rounded-md px-2 py-1 ">Contact</h1>
      <div className="flex gap-10 justify-center my-10">
        <a href="tel:+917455077400">
          <FiPhoneCall className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/joshi__ji_12?igsh=ZHVjYmtjcWM1eDhi"
          target="_blank"
        >
          <BsInstagram className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/hero.b.5872682" target="_blank">
          <BsFacebook className="text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/deepankar-joshi-ba31b2358/"
          target="_blank"
        >
          <BsLinkedin className="text-2xl" />
        </a>
        <a href="https://github.com/Dipuanshu" target="_blank">
          <BsGithub className="text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
