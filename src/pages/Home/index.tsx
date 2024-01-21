import React, { useRef } from "react";
import LandingScreen from "./components/LandingScreen";

const HomePage = () => {
  return (
    <div className="flex flex-col absolute top-0">
      <LandingScreen />
    </div>
  );
};

export default HomePage;
