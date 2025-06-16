/** @format */

import SurajResume from "./SurajResume.pdf";

function Profile({ mySkills }) {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center  px-4 lg:justify-center "
      id={mySkills}
    >
      <div className="max-w-3xl lg:px-10 px-4 md:px-6 flex flex-col items-center mt-10 lg:mt-4 justify-center gap-4 ">
        <h1 className="text-gray-200 text-3xl md:text-4xl font-bold shadow-2xl text-center">
          Frontend Developer
        </h1>
        <p className="text-lg font-semibold">
          I am a fresher web developer with strong skills in CSS, JavaScript,
          and HTML, developed through personal projects, academic work, and
          continuous learning. I also have a solid understanding of
          object-oriented programming principles and am eager to apply my skills
          in a professional setting.
        </p>
        <a
          class=" bg-red-400 px-4 py-2 text-white rounded-md hover:shadow-2xl  hover:px-5 hover:py-3 hover:shadow-yellow-500/95"
          href={SurajResume}
          target="_blank"
        >
          Download Resume
        </a>
      </div>
      <div className="  max-w-96 aspect-square shrink-0 border-4 border-white rounded-full">
        <img
          className="w-72 h-72 rounded-full bg-gray-400 shadow-lg shadow-yellow-400/95 hover:shadow-2x hover:shadow-red-500/95 lg:aspect-square lg:w-full border-4 border-blue-500"
          src="/DSC_0443 (4).JPG"
          alt="My Image"
        />
      </div>
    </div>
  );
}

export default Profile;
