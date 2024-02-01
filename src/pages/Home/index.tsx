import React from "react";
import LandingScreen from "./components/LandingScreen";
import Screen2 from "./components/Screen2";
import VerticalCarousel from "../../components/Caraousel/VerticalCaraousel";
import { sliderImages } from "./components/home.config";


const HomePage = () => {
  return (
    <div className="flex flex-col h-full">
      <LandingScreen />
      <Screen2 />
      <VerticalCarousel items={sliderImages} />
    </div>
  );
};

export default HomePage;
