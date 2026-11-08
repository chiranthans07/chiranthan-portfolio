"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Detect touch/mobile devices
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor], [data-cursor-text]"
      );
      if (interactive) {
        setIsHovering(true);
        const text = interactive.getAttribute("data-cursor-text");
        setCursorText(text || "");
      }
    };

    const handleElementLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor], [data-cursor-text]"
      );
      if (interactive) {
        setIsHovering(false);
        setCursorText("");
      }
    };

    // Animation loop with lerp
    const animate = () => {
      const lerp = 0.15;
      circlePos.current.x +=
        (mousePos.current.x - circlePos.current.x) * lerp;
      circlePos.current.y +=
        (mousePos.current.y - circlePos.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;
      }

      if (circleRef.current) {
        const size = isHovering ? 60 : 40;
        circleRef.current.style.transform = `translate(${circlePos.current.x - size / 2}px, ${circlePos.current.y - size / 2}px)`;
        circleRef.current.style.width = `${size}px`;
        circleRef.current.style.height = `${size}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseout", handleElementLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseout", handleElementLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, isHovering]);

  if (isTouchDevice) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Small dot — follows precisely */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#111111",
          willChange: "transform",
        }}
      />

      {/* Larger circle — follows with delay */}
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(17, 17, 17, 0.5)",
          backgroundColor: isHovering
            ? "rgba(17, 17, 17, 0.08)"
            : "transparent",
          willChange: "transform, width, height",
          transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cursorText && (
          <span
            style={{
              fontSize: 10,
              fontWeight: 500,
              color: "#111111",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
