import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ 1. Type Definitions
interface SkillGroup {
  label: string;
  items: string[];
}

interface Skill {
  title: string;
  groups?: SkillGroup[];
}

export default function SkillProfile() {
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollByCard = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 0;
      return cardWidth + 16; // include gap (gap-4 = 1rem = 16px)
    }
    return 0;
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByCard(), behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByCard(), behavior: "smooth" });
    }
  };

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
      {/* Desktop Grid */}
      <div className="hidden lg:grid gap-6 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-md text-red-500 shadow-lg border border-white border-opacity-20"
          >
            <h2 className="mb-6 text-2xl font-bold text-center uppercase tracking-wider">
              {skill.title}
            </h2>
            {renderSkillContent(skill)}
          </div>
        ))}
      </div>

      {/* Mobile Scrollable */}
      <div className="lg:hidden relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent pointer-events-none z-10" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="min-w-[80%] snap-center shrink-0 p-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-md text-red-500 shadow-lg border border-white border-opacity-20 transition-all duration-300 ease-in-out"
            >
              <h2 className="mb-6 text-2xl font-bold text-center uppercase tracking-wider">
                {skill.title}
              </h2>
              {renderSkillContent(skill)}
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 z-20">
          <button
            onClick={handlePrev}
            className="bg-black bg-opacity-40 backdrop-blur-sm p-2 rounded-full text-[#EEDAAE] hover:text-white transition"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="bg-black bg-opacity-40 backdrop-blur-sm p-2 rounded-full text-[#EEDAAE] hover:text-white transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
