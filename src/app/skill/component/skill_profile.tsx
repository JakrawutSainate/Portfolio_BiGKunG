import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Skill() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    {
      title: "FULL-STACK",
      groups: [
        {
          label: "Frontend",
          items: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React (Vite)",
            "Next.js",
            "Tailwind CSS",
          ],
        },
        {
          label: "Backend",
          items: ["Node.js", "Express.js"],
        },
        {
          label: "Database",
          items: ["MySQL"],
        },
      ],
    },
    {
      title: "BACKEND",
      groups: [
        {
          label: "Framework & Language",
          items: ["PHP", "Python", "Golang", "Fastify"],
        },
        {
          label: "Auth / Security",
          items: ["JWT", "OAuth"],
        },
        {
          label: "Infrastructure & Server",
          items: ["Linux Server", "SSH", "Nginx"],
        },
      ],
    },
    {
      title: "DEVOPS",
      groups: [
        {
          label: "Cloud Hosting",
          items: ["AWS Lightsail", "DigitalOcean"],
        },
        {
          label: "Network & Security",
          items: ["DNS", "SSL"],
        },
        {
          label: "Version Control",
          items: ["Git", "GitHub"],
        },
        {
          label: "Dev/Test Tools",
          items: ["Postman", "FileZilla"],
        },
      ],
    },
  ];

  const handleNext = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentSkill((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const renderSkillContent = (skill) => (
    <div>
      {skill.groups?.map((group) => (
        <div key={group.label} className="mb-4">
          <h3 className="text-sm font-semibold text-yellow-400 mb-2">
            {group.label}
          </h3>
          <ul className="text-[#EEDAAE] text-sm space-y-1">
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Active Skill */}
        <div className="p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-md text-red-500 shadow-lg border border-white border-opacity-20">
          <h2 className="mb-6 text-2xl font-bold text-center uppercase tracking-wider">
            {skills[currentSkill].title}
          </h2>
          {renderSkillContent(skills[currentSkill])}
        </div>

        {/* BACKEND Column (Static for lg+) */}
        {skills
          .filter((s) => s.title === "BACKEND")
          .map((skill) => (
            <div
              key={skill.title}
              className="hidden lg:block p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-md text-red-500 shadow-lg border border-white border-opacity-20"
            >
              <h2 className="mb-6 text-2xl font-bold text-center uppercase tracking-wider">
                {skill.title}
              </h2>
              {renderSkillContent(skill)}
            </div>
          ))}

        {/* DEVOPS Column (Static for lg+) */}
        {skills
          .filter((s) => s.title === "DEVOPS")
          .map((skill) => (
            <div
              key={skill.title}
              className="hidden lg:block p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-md text-red-500 shadow-lg border border-white border-opacity-20"
            >
              <h2 className="mb-6 text-2xl font-bold text-center uppercase tracking-wider">
                {skill.title}
              </h2>
              {renderSkillContent(skill)}
            </div>
          ))}
      </div>

      {/* Mobile Carousel Controls */}
      <div className="lg:hidden flex justify-between mt-6 px-6">
        <button
          onClick={handlePrev}
          className="text-3xl text-[#EEDAAE] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-3xl text-[#EEDAAE] hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
