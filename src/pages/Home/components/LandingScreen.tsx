import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { landingPageHeaders } from './home.config';
import CTAButton from '../../../components/Custom/CTAButton';

const LandingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [springProps, api] = useSpring(() => ({
    opacity: 1,
    filter: 'blur(0px)',
    curtainTop: '0%',
    config: { duration: 700 },
  }));

  useEffect(() => {
    // Animate the curtain effect when the component mounts
    api.start({ curtainTop: '100%' });
  }, [api]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % landingPageHeaders?.length,
        );
        setIsVisible(true);
      }, 700);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      api.start({ opacity: 0, filter: 'blur(5px)' });
    } else {
      api.start({ opacity: 1, filter: 'blur(0px)' });
    }
  }, [isVisible, api]);

  return (
    <div className=" overflow-hidden">
      <div className="relative">
        <animated.div
          className="h-screen w-screen object-cover"
          style={{
            clipPath: springProps.curtainTop.to(
              (value) => `polygon(0 0, 100% 0, 100% ${value}, 0% ${value})`,
            ),
          }}
        >
          <img
            className="h-full w-full"
            src="/assets/projects/landing.jpg"
            alt="living-room"
          />
        </animated.div>

        <div className="absolute top-[52%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-900 flex flex-col items-center justify-center">
          <div className="sm:text-4xl   flex flex-col justify-center items-center  text-2xl text-center">
            <span
              style={{ fontFamily: 'custom-cursive-font' }}
              className="w-52 sm:w-full   m-auto block tracking-wider"
            >
              Handmade for your
            </span>
            <animated.span
              className="font-bold sm:text-6xl text-4xl tracking-widest text-white block mt-2 w-max"
              style={{
                fontFamily: 'junicode-bold',
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
    </div>
  );
};

export default LandingScreen;
