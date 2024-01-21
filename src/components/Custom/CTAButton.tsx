import React from "react";
import { useSpring, animated } from "react-spring";

interface ICTAButtonProps {
  buttonText: string;
  btnColor?: string;
}

const CTAButton: React.FC<ICTAButtonProps> = ({
  buttonText,
  btnColor = "amber",
}) => {
  const [isHovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    height: isHovered ? "100%" : "0%",
    config: { tension: 190, friction: 20 },
  });

  return (
    <div
      className={`relative backdrop-blur-sm inline-block text-${btnColor}-400 uppercase py-1 font-semibold border-2 border-${btnColor}-400 px-6 rounded-sm overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div
        style={{
          height: springProps.height.to((height) => `${height}`),
          backgroundColor: "currentColor",
        }}
        className="absolute inset-0"
      />
      <animated.span
        className="relative z-10"
        style={{
          color: isHovered ? "white" : "currentColor",
        }}
      >
        {buttonText}
      </animated.span>
    </div>
  );
};

export default CTAButton;
