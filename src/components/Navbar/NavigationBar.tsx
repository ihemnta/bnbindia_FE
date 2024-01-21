import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./nav.config";

interface INavigationBarProps {
  isMobileNavOpen?: boolean;
  onNavClick?: () => void;
}

const NavigationBar: React.FC<INavigationBarProps> = ({
  isMobileNavOpen,
  onNavClick,
}) => {
  return (
    <nav
      className={`flex ${
        isMobileNavOpen ? "flex-col mt-6" : "flex-row"
      } tracking-wider text-lg font-light justify-evenly items-center`}
    >
      {navLinks?.map((link, index) => (
        <Link
          key={index}
          to={link?.to}
          onClick={() => onNavClick?.()}
          className={`${
            isMobileNavOpen
              ? "block w-full font-semibold text-white hover:shadow-lg text-center py-3"
              : "hover:font-semibold text-white"
          }`}
        >
          {link?.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
