// CustomCursor.tsx
import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor absolute w-6 h-6 rounded-full pointer-events-none z-10 flex items-center justify-center text-white"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img src="/assets/svgs/gold-cursor.svg" alt="Design Icon" />
    </div>
  );
};

export default CustomCursor;
