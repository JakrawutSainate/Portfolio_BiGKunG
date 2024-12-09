"use client";
import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "hover" | "click" | "text";

export default function InkBrushCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleCursorMode = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setMode("text");
      } else if (target.closest("a, button, [onclick]")) {
        setMode("hover");
      } else {
        setMode("default");
      }
    };

    const handleMouseDown = () => setMode("click");
    const handleMouseUp = () => setMode(mode === "click" ? "default" : mode);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleCursorMode);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleCursorMode);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mode]);

  const getCursorStyles = () => {
    const baseStyles = {
      default: {
        width: "16px",
        height: "16px",
        borderColor: "rgba(0,0,0,0.5)",
        transformBase: "rotate(45deg) scale(1)",
        animation: "inkFlow 4s infinite",
      },
      hover: {
        width: "24px",
        height: "24px",
        borderColor: "rgba(0,0,0,0.7)",
        transformBase: "rotate(55deg) scale(1.2)",
        animation: "inkSpread 2s infinite",
      },
      click: {
        width: "32px",
        height: "32px",
        borderColor: "rgba(0,0,0,0.9)",
        transformBase: "rotate(65deg) scale(1.5)",
        animation: "inkPulse 1s infinite",
      },
      text: {
        width: "12px",
        height: "12px",
        borderColor: "rgba(0,0,0,0.3)",
        transformBase: "rotate(35deg) scale(0.8)",
        animation: "textCursor 0.5s infinite",
      },
    };

    return baseStyles[mode];
  };

  return (
    <>
      <style jsx>{`
        @keyframes inkFlow {
          0%,
          100% {
            transform: rotate(45deg) scale(1);
          }
          50% {
            transform: rotate(55deg) scale(1.1);
          }
        }
        @keyframes inkSpread {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.2);
          }
        }
        @keyframes inkPulse {
          0%,
          100% {
            transform: rotate(65deg) scale(1.5);
          }
          50% {
            transform: rotate(75deg) scale(1.7);
          }
        }
        @keyframes textCursor {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
      {isVisible && (
        <div
          ref={cursorRef}
          className={`fixed z-[9999] pointer-events-none 
            rounded-full border-4 transition-all duration-100 ease-out
            ${mode === "hover" ? "border-dashed" : "border-solid"}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(-50%, -50%) ${
              getCursorStyles().transformBase
            }`,
            width: getCursorStyles().width,
            height: getCursorStyles().height,
            borderColor: getCursorStyles().borderColor,
            animation: getCursorStyles().animation,
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-black/30"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )}
    </>
  );
}
