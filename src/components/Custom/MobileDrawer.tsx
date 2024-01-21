// MobileDrawer.tsx
import React, { ReactNode, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

interface MobileDrawerProps {
  children?: ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ children }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const springs = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: -2, opacity: 1 },
    leave: {
      x: 100,
      opacity: 0,
    },
  });

  return (
    <animated.div
      ref={drawerRef}
      style={{
        position: "fixed",
        top: 90,
        left: 0,
        width: "100%",
        zIndex: 20,
        height: "100%",
        background: "#E5E7EB",
        ...springs,
      }}
    >
      {children}
    </animated.div>
  );
};

export default MobileDrawer;
