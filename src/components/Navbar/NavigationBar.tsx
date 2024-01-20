// NavigationBar.js

import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./nav.config";

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex w-full tracking-wider font-light justify-evenly  p-3">
      {navLinks?.map((link, index) => (
        <Link key={index} to={link?.to} className={"hover:font-semibold"}>
          {link?.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
