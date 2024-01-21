import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { landingPageHeaders } from "./home.config";
import CTAButton from "../../../components/Custom/CTAButton";

const LandingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [springProps, api] = useSpring(() => ({
    opacity: 1,
    filter: "blur(0px)",
    config: { duration: 700 },
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % landingPageHeaders?.length
        );
        setIsVisible(true);
      }, 700);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      api.start({ opacity: 0, filter: "blur(5px)" });
    } else {
      api.start({ opacity: 1, filter: "blur(0px)" });
    }
  }, [isVisible, api]);

  return (
    <div className=" overflow-hidden">
      <div className="relative">
        <img
          className="h-screen w-screen object-cover"
          src="/assets/projects/landing.jpg"
          alt="living-room"
        />

        <div className="absolute top-[52%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-900 flex flex-col items-center justify-center">
          <div className="sm:text-4xl   flex flex-col justify-center items-center  text-2xl text-center">
            <span className="w-52 sm:w-full font-serif  m-auto block tracking-wider">
              Handmade for your
            </span>
            <animated.span
              className="font-extrabold sm:text-6xl text-4xl tracking-widest text-white block mt-2 w-max"
              style={{
                fontFamily: "Georgia, serif",
                ...springProps,
              }}
            >
              {landingPageHeaders?.[currentIndex]}
            </animated.span>
          </div>
          <div className="mt-4">
            <CTAButton buttonText="Get Inspired" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <img
            className="h-screen w-screen object-cover"
            src="/assets/projects/landing-furniture.jpg"
            alt="living-room"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingScreen;
