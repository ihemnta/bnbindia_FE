import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./nav.config";
import IconWrapper from "../Wrapper/IconWrapper";

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
        isMobileNavOpen ? "flex-col mt-6" : "flex-row bg-gradient-to-t bg-opacity-5"
      } tracking-wider text-lg font-light justify-evenly items-center `}
    >
      {navLinks?.map((link, index) => (
        <Link
          key={index}
          style={{fontFamily:"junicode-regular"}}
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
      {isMobileNavOpen?<div className='flex gap-6 mt-7'>
        <IconWrapper iconPath="/assets/svgs/pinterest.svg" />
          <IconWrapper iconPath="/assets/svgs/instagram.svg" />
          <IconWrapper iconPath="/assets/svgs/facebook.svg" />
          </div> :null}
    </nav>
  );
};

export default NavigationBar;
