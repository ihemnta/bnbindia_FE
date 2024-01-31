import React, { useRef } from "react";
import LandingScreen from "./components/LandingScreen";
import Screen2 from "./components/Screen2";
import useScrollVisibility from "../../components/hooks/useScrollVisibility";
import VerticalCarousel from "../../components/Caraousel/VerticalCaraousel";


const HomePage = () => {

  return (
    <div className="flex flex-col h-full">
      <LandingScreen />

      <Screen2 />
      {/* <VerticalCarousel buttonLink="/"  buttonText="View more" images={["/assets/projects/kitchen-interior.jpg","/assets/projects/landing.jpg"]}/> */}

    </div>
  );
};

export default HomePage;
