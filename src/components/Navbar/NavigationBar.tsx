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
      } tracking-wider font-light justify-evenly items-center`}
    >
      {navLinks?.map((link, index) => (
        <Link
          key={index}
          to={link?.to}
          onClick={() => onNavClick?.()}
          className={`${
            isMobileNavOpen
              ? "block w-full font-semibold text-gray-700 text-center py-3"
              : "hover:font-semibold"
          }`}
        >
          {link?.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
