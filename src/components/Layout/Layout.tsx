import React, { ReactNode, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import NavigationBar from "../Navbar/NavigationBar";
import NavigationContactInfo from "../Navbar/NavigationContactInfo";
import WhatsappRedirect from "../Custom/WhatsappRedirect";
import useIsMobile from "../hooks/useIsMobile";
import MobileDrawer from "../Custom/MobileDrawer";
import IconWrapper from "../Wrapper/IconWrapper";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobileDevice = useIsMobile();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const iconSpring = useSpring({
    transform: isMobileNavOpen ? "rotate(90deg)" : "rotate(0deg)",
  });

  return (
    <section>
      {/* <CustomCursor /> */}
      <div className="w-full  fixed z-30 flex flex-col bg-cover bg-center">
        <div className="absolute inset-0  backdrop-blur-sm bg-gradient-to-b from-gray-500 to-transparent  sm:from-gray-800 sm:to-transparent  h-22 sm:h-26"></div>
        <div className="relative flex flex-col gap-2 z-10">
          <NavigationContactInfo />
          {!isMobileDevice ? <NavigationBar /> : null}
          <button
            onClick={toggleMobileNav}
            className="lg:hidden absolute top-4 right-4 z-20"
          >
            <animated.div style={iconSpring}>
              <IconWrapper
                width={isMobileNavOpen ? 35 : 29}
                height={isMobileNavOpen ? 35 : 29}
                iconPath={`/assets/svgs/${
                  isMobileNavOpen ? "close.svg" : "menu.svg"
                }`}
              />
            </animated.div>
          </button>
        </div>
      </div>
      {children}
      {/* todo:add close animation */}
      {isMobileNavOpen ? (
        <MobileDrawer>
          <NavigationBar
            onNavClick={() => setMobileNavOpen(false)}
            isMobileNavOpen={isMobileNavOpen}
          />
        </MobileDrawer>
      ) : null}
      <WhatsappRedirect />
    </section>
  );
};

export default Layout;
