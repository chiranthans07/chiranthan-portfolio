"use client";

import { useEffect, useRef } from "react";

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // Node structure for 3D geometric web
    interface Node3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
    }

    const nodeCount = 38;
    const nodes: Node3D[] = [];
    const radius = Math.min(width, height) * 0.42;

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.sqrt(nodeCount * Math.PI) * theta;

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      nodes.push({ x, y, z, baseX: x, baseY: y, baseZ: z });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      angleY = (mouseX / width - 0.5) * 0.6;
      angleX = (mouseY / height - 0.5) * 0.6;

      ctx.clearRect(0, 0, width, height);

      const fov = 420;
      const centerX = width * 0.75; // Bias slightly to right behind hero photo
      const centerY = height * 0.48;

      const projected: { x: number; y: number; scale: number; alpha: number }[] = [];

      // 3D rotation math
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Rotate Y
        const x1 = node.baseX * cosY - node.baseZ * sinY;
        const z1 = node.baseZ * cosY + node.baseX * sinY;

        // Rotate X
        const y2 = node.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.baseY * sinX;

        // Perspective projection
        const depth = fov / (fov + z2 + 200);
        const px = centerX + x1 * depth;
        const py = centerY + y2 * depth;
        const alpha = Math.max(0.04, Math.min(0.22, (z2 + radius) / (2 * radius)));

        projected.push({ x: px, y: py, scale: depth, alpha });
      }

      // Draw hairline connection segments
      ctx.lineWidth = 0.65;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(17, 17, 17, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw subtle node vertices
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = `rgba(17, 17, 17, ${p.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-multiply"
      aria-hidden="true"
    />
  );
}

