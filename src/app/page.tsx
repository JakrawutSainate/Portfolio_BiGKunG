"use client";

import Navbar from "@/app/component/navbar";
import InkBrushCursor from "@/app/component/InkBrushCursor";
import { useEffect } from "react";

export default function Home() {
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

  useEffect(() => {
    const typeWriter = (
      element: HTMLElement,
      text: string,
      speed: number,
      callback?: () => void
    ) => {
      let index = 0;
      element.innerHTML = ""; // ล้างเนื้อหาของ element ก่อนเริ่มพิมพ์
      const interval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
        } else {
          clearInterval(interval);
          if (callback) callback();
        }
      }, speed);
    };

    const startTyping = () => {
      const section = document.getElementById("home");
      if (section && !section.dataset.initialized) {
        section.dataset.initialized = "true"; // ป้องกันการเรียกซ้ำ
        section.innerHTML = ""; // ล้างเนื้อหาเดิม

        const h1 = document.createElement("h1");
        h1.textContent = "Welcome to My Portfolio";
        section.appendChild(h1);
        console.log("Added h1");

        const p1 = document.createElement("p");
        section.appendChild(p1);
        console.log("Added p1");
        typeWriter(p1, "I am Jakrawut Sainate", 100, () => {
          const p2 = document.createElement("p");
          p2.id = "p2"; // กำหนด id ให้ p2
          section.appendChild(p2);
          console.log("Added p2");
          typeWriter(p2, "Programmer & Web Developer", 100, () => {
            setTimeout(() => {
              section.dataset.initialized = ""; // รีเซ็ต dataset.initialized
              startTyping(); // เริ่มพิมพ์ใหม่
            }, 6000);
          });
        });
      }
    };

    startTyping();
  }, []); // ตรวจสอบว่า dependencies เป็น [] เพื่อให้เรียกใช้เพียงครั้งเดียว

  return (
    <div
      className="h-screen w-full bg-center bg-cover 2xl:bg-contain bg-[#EEDAAE] overflow-hidden background"
      style={{ backgroundImage: "url('/assets/bk.png')" }}
    >
      <InkBrushCursor />
      <Navbar>
        <div className="p-4 text-center">
          <section
            id="home"
            className="mt-32 ml-[30%] md:ml-0 space-y-4 text-base md:text-3xl "
          >
            <h1>Welcome to My Portfolio</h1>
            <p>I am Jakrawut Sainate</p>
            <p>Programmer & Web Developer</p>
          </section>
        </div>
      </Navbar>
    </div>
  );
}
