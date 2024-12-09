"use client";
import Navbar from "../component/navbar";
import { useEffect } from "react";
import InkBrushCursor from "@/app/component/InkBrushCursor";
import Image from "next/image";

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
  return (
    <div
      className="h-screen w-full bg-center bg-cover  bg-[#EEDAAE] text-[#EEDAAE] overflow-hidden background"
      style={{ backgroundImage: "url('/assets/bg_skill.jpg')" }}
    >
      <InkBrushCursor />
      <Navbar className="text-[#EEDAAE] ">
        <div className="flex justify-center p-4 h-full  ml-[20%]  md:mt-[10%] md:ml-[1%] lg:mt-[5%] lg:ml-[5%] xl:ml-0 xl:mt-0">
          <section className="space-y-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#EEDAAE] tracking-widest">
              Abouts us
            </h1>
            <div className="space-y-16">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10  max-h-[70vh] ">
                <Image
                  src="/assets/me.jpg"
                  alt="me"
                  width={200}
                  height={200}
                  className="rounded-full shrink-0"
                />
                <div className="text-left md:text-center">
                  <p className="text-lg font-semibold text-[#EEDAAE] flex justify-center md:justify-start ">
                    <span className="mr-2">👤</span>Name: Jakrawut Sainate
                  </p>
                  <p className="text-lg text-[#EEDAAE] flex md:justify-start ">
                    <span className="mr-2">🎓</span>Education: Suan Dusit
                    University
                  </p>
                  <p className="text-lg text-[#EEDAAE] flex md:justify-start ">
                    <span className="mr-2">💼</span>Experience: Web Developer
                  </p>
                  <p className="text-lg text-[#EEDAAE] flex  md:justify-start">
                    <span className="mr-2">🛠️</span>Skills: Reactjs, Nextjs,
                    PHP, Nodejs, MySQL
                  </p>
                  <p className="text-lg text-[#EEDAAE] flex  md:justify-start ">
                    <span className="mr-2">🎯</span>Goals: To be a Full-stack
                    and DevOps expert
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden mx-auto max-w-3xl md:block">
              <p className="text-lg text-[#EEDAAE] text-center">
                I aim to become a Full-Stack Developer, mastering frontend,
                backend, and database management to deliver top-notch user
                experiences. I&apos;m also passionate about DevOps, enhancing
                collaboration and efficiency between development and operations.
                My long-term goal is to merge these skills to create impactful
                tech solutions.
              </p>
            </div>
          </section>
        </div>
      </Navbar>
    </div>
  );
}
