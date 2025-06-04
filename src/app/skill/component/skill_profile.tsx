import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Type Definitions
interface SkillGroup {
  label: string;
  items: string[];
}

interface Skill {
  title: string;
  groups?: SkillGroup[];
}

export default function SkillProfile() {
  // Type-aware useState
  const [currentSkill, setCurrentSkill] = useState<number>(0);

  const skills: Skill[] = [
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

  // ✅ 3. Explicit type on skill param
  const renderSkillContent = (skill: Skill) => (
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
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
        {/* กล่องแสดง Skill พร้อมปุ่มลูกศรด้านนอก */}
        <div className="relative w-full">
          {/* ปุ่มซ้าย (นอกกล่อง) */}
          <button
            onClick={handlePrev}
            className="lg:hidden absolute -left-6 top-1/2 -translate-y-1/2 text-3xl text-[#EEDAAE] hover:text-white transition z-50"
          >
            <FaChevronLeft />
          </button>

          {/* กล่อง Skill */}
          <div className="p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-md text-red-500 shadow-lg border border-white border-opacity-20">
            <h2 className="mb-6 text-2xl font-bold text-center uppercase tracking-wider">
              {skills[currentSkill].title}
            </h2>
            {renderSkillContent(skills[currentSkill])}
          </div>

          {/* ปุ่มขวา (นอกกล่อง) */}
          <button
            onClick={handleNext}
            className="lg:hidden absolute -right-6 top-1/2 -translate-y-1/2 text-3xl text-[#EEDAAE] hover:text-white transition z-50"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* BACKEND Static (เฉพาะ Desktop) */}
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

        {/* DEVOPS Static (เฉพาะ Desktop) */}
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
    </div>
  );
}