"use client";
import React, { useState } from "react";
import Navbar from "../component/navbar";
import { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import InkBrushCursor from "../component/InkBrushCursor";

// สร้าง type สำหรับ Experience
type Experience = {
  period: string;
  title: string;
  company: string;
  description: string;
};

// สร้าง array ของ experiences
const experiences: Experience[] = [
  {
    period: "15 July 2021 - 15 Aug 2021",
    title: "WEB-DEV INTERN",
    company: "Some Company Some Some",
    description:
      "Worked with the web dev team on internal projects involving the usage of languages like HTML, CSS, JS, and PHP with Bootstrap.",
  },
  {
    period: "1 Jan 2022 - 30 June 2022",
    title: "FRONTEND DEVELOPER",
    company: "Tech Innovations Ltd.",
    description:
      "Developed responsive web applications using React and Tailwind CSS, implemented state management with Redux, and collaborated with design team.",
  },
  {
    period: "15 Sept 2022 - 15 Dec 2022",
    title: "FULLSTACK DEVELOPER",
    company: "Digital Solutions Inc.",
    description:
      "Created full-stack web applications using Next.js, TypeScript, and PostgreSQL. Implemented authentication and developed RESTful APIs.",
  },
];

export default function Skill() {
  useEffect(() => {
    const sakuraImages = [
      "/assets/Vector-1.png",
      "/assets/Vector-2.png",
      "/assets/Vector-3.png",
      "/assets/Vector-4.png",
      "/assets/Vector-5.png",
      "/assets/Vector-6.png",
      "/assets/Vector-7.png",
      "/assets/Vector-8.png",
      "/assets/Vector-9.png",
      "/assets/Vector-10.png",
      "/assets/Vector-11.png",
      "/assets/Vector-12.png",
      "/assets/Vector-13.png",
      "/assets/Vector-14.png",
      "/assets/Vector-15.png",
      "/assets/Vector-16.png",
      "/assets/Vector-17.png",
      "/assets/Vector-18.png",
      "/assets/Vector-19.png",
      "/assets/Vector-20.png",
      "/assets/Vector-21.png",
      "/assets/Vector-22.png",
      "/assets/Vector-23.png",
      "/assets/Vector-24.png",
      "/assets/Vector-25.png",
      "/assets/Vector-26.png",
      "/assets/Vector-27.png",
      "/assets/Vector.png",
    ];

    const createSakura = () => {
      const sakura = document.createElement("div");
      sakura.className = "absolute w-2 h-2 sakura";
      sakura.style.backgroundImage = `url('${
        sakuraImages[Math.floor(Math.random() * sakuraImages.length)]
      }')`;
      sakura.style.backgroundSize = "contain";
      sakura.style.backgroundRepeat = "no-repeat";
      sakura.style.left = Math.random() * (window.innerWidth - 32) + "px";
      sakura.style.top = "-50px";
      sakura.style.zIndex = "1000";
      document.body.appendChild(sakura);

      let positionY = -50;
      let positionX = parseFloat(sakura.style.left);
      const speedX = (Math.random() - 0.5) * 2;
      const fallInterval = setInterval(() => {
        positionY += 1; // ลดความเร็วการลอยลง
        positionX += speedX;

        if (positionX < 0 || positionX > window.innerWidth - 32) {
          positionX = Math.max(0, Math.min(positionX, window.innerWidth - 32));
        }

        sakura.style.top = positionY + "px";
        sakura.style.left = positionX + "px";

        if (positionY > window.innerHeight - 50) {
          clearInterval(fallInterval);
          sakura.remove();
        }
      }, 30); // เพิ่มระยะเวลาใน setInterval
    };

    const interval = setInterval(createSakura, 1000);

    return () => clearInterval(interval);
  }, []);

  const [currentExperience, setCurrentExperience] = useState(0);

  // เพิ่มฟังก์ชัน handleNext
  const handleNext = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
  };

  // เพิ่มฟังก์ชัน handlePrev
  const handlePrev = () => {
    setCurrentExperience((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };
  return (
    <div
      className="h-screen w-full bg-center bg-cover bg-[#EEDAAE] overflow-hidden background"
      style={{ backgroundImage: "url('/assets/project_bk.png')" }}
    >
      <InkBrushCursor />
      <Navbar className="">
        <div className="flex justify-center p-4 h-full ml-[20%] mt-[35%] md:mt-[25%] md:ml-0 lg:mt-[15%] xl:mt-[10%]">
          <section className="space-y-16 text-center">
            <h1 className="text-4xl font-bold tracking-widest md:text-3xl">
              WORK EXPERIENCE
            </h1>
            <div className="space-y-6">
              <p className="text-lg md:text-2xl">
                {experiences[currentExperience].period}
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={handlePrev}
                  className="text-4xl text-red-600 md:text-6xl"
                >
                  <AiOutlineLeft />
                </button>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-red-600 md:text-4xl">
                    {experiences[currentExperience].title}
                  </h2>
                  <p className="text-lg text-red-600 md:text-2xl">
                    {experiences[currentExperience].company}
                  </p>
                </div>
                <button
                  onClick={handleNext}
                  className="text-4xl text-red-600 md:text-6xl"
                >
                  <AiOutlineRight />
                </button>
              </div>
              <p className="text-sm md:text-lg">
                {experiences[currentExperience].description}
              </p>
            </div>
          </section>
        </div>
      </Navbar>
    </div>
  );
}
