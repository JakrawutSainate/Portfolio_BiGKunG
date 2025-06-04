import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Skill() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
  {
    title: "FULL-STACK",
    items: [
      "React (Vite)", "Next.js", "Tailwind CSS", "Node.js", "Express.js",
      "HTML", "CSS", "JavaScript", "TypeScript", "MySQL"
    ]
  },
  {
    title: "BACKEND",
    items: [
      "Fastify", "PHP", "Python", "Golang",
      "JWT", "OAuth", "Linux Server", "SSH", "Nginx"
    ]
  },
  {
    title: "DEVOPS",
    items: [
      "AWS Lightsail", "DigitalOcean",
      "DNS", "SSL", "Git", "GitHub", "Postman", "FileZilla"
    ]
  }
]
;

  const handleNext = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentSkill((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <div className="relative">
      <div className="flex flex-row gap-4 mt-10 lg:grid lg:grid-cols-3">
        <div className="col-span-1 p-10 text-red-500 bg-white bg-opacity-10">
          <h2 className="mb-4 text-center truncate">
            {skills[currentSkill].title}
          </h2>
          <ul className="text-center text-[#EEDAAE]">
            {skills[currentSkill].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Preserve original grid layout for large screens */}
        <div className="hidden col-span-1 p-10 text-red-500 bg-white bg-opacity-10 lg:col-start-3 lg:block">
          <h2 className="mb-4 text-center">DESIGNING</h2>
          <ul className="text-center text-[#EEDAAE]">
            <li>GRAPHIC DESIGNING</li>
            <li>UI/UX DESIGNING</li>
            <li>VIDEO EDITING</li>
          </ul>
        </div>

        <div className="flex hidden col-span-1 justify-center items-center p-10 text-center text-red-500 bg-white bg-opacity-10 lg:col-start-2 lg:flex">
          <div>
            <h2 className="mb-4 text-center">PROBLEM SOLVING</h2>
            <ul className="text-[#EEDAAE]">
              <li>C++</li>
              <li>JAVA</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-2xl text-[#EEDAAE] hover:text-white lg:hidden"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-2xl text-[#EEDAAE] hover:text-white lg:hidden"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
