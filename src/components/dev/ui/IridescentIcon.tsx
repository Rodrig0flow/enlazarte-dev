"use client";

import { useRef, useState } from "react";

export function LiquidMetalJaguar({
  size = 220,
  duration = 8,
  animated = true,
}: {
  size?: number;
  duration?: number;
  animated?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent) => {
    if (!animated) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src="/circulo.png"
        className="absolute inset-0 w-full h-full object-contain z-10"
      />

      <img
        src="/jaguar.png"
        className="absolute inset-0 w-full h-full object-contain z-20 opacity-30"
      />

      <div className="absolute inset-0 z-30 pointer-events-none liquid-mask">
        <div
          className="liquid-gradient"
          style={{
            backgroundPosition: `${pos.x}% ${pos.y}%`,
          }}
        />
      </div>

      <div className="absolute inset-0 z-40 pointer-events-none liquid-mask">
        <div
          className="specular"
          style={{
            background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.7), transparent 40%)`,
          }}
        />
      </div>

      <div className="absolute inset-0 z-0 blur-2xl opacity-40 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-400 animate-pulse" />

      <style jsx>{`
        .liquid-mask {
          -webkit-mask-image: url("/jaguar.png");
          mask-image: url("/jaguar.png");
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
        }

        .liquid-gradient {
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 30% 30%, #00f0ff, transparent 40%),
            radial-gradient(circle at 70% 60%, #ff00cc, transparent 40%),
            radial-gradient(circle at 50% 80%, #7b2cbf, transparent 40%),
            linear-gradient(120deg, #00b4d8, #7b2cbf, #f472b6, #3b82f6);

          background-blend-mode: screen;
          mix-blend-mode: lighten;
          ${animated ? `animation: flow ${duration}s ease-in-out infinite;` : ""}
          filter: blur(8px) contrast(1.2) saturate(1.4);
          ${animated ? "will-change: background-position;" : ""}
        }

        .specular {
          width: 100%;
          height: 100%;
          mix-blend-mode: screen;
          opacity: 0.6;
          ${animated ? "transition: background 0.1s ease-out;" : ""}
        }

        ${animated ? `
        @keyframes flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }` : ""}
      `}</style>
    </div>
  );
}
