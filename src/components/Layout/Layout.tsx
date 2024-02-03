import React, { ReactNode, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import NavigationBar from "../Navbar/NavigationBar";
import NavigationContactInfo from "../Navbar/NavigationContactInfo";
import WhatsappRedirect from "../Custom/WhatsappRedirect";
import useIsMobile from "../hooks/useIsMobile";
import MobileDrawer from "../Custom/MobileDrawer";
import IconWrapper from "../Wrapper/IconWrapper";
import Footer from "../Footer";
import useScrollVisibility from "../hooks/useScrollVisibility";
import CustomCursor from "../Custom/Cursor";
import CursorComponent from "../Custom/Cursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobileDevice = useIsMobile();
  const isHeaderVisible = useScrollVisibility();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const iconSpring = useSpring({
    transform: isMobileNavOpen ? "rotate(90deg)" : "rotate(0deg)",
  });

  const headerSpring = useSpring({
    transform: isHeaderVisible ? "translateY(0%)" : "translateY(-100%)",
  });


  return (
    <section className="flex flex-col relative h-full min-h-screen">
   {!isMobileDevice ?  <CustomCursor />:null}  
      
      <animated.div style={headerSpring} className="w-full h-max  fixed z-30 flex flex-col bg-cover bg-center">
      <div  className="absolute inset-0  bg-gradient-to-tl backdrop-blur-sm  from-black to-transparent sm:from-gray-900/60 sm:to-transparent h-22 sm:h-26"></div>

        <div className="flex flex-col gap-2 z-10">
          <NavigationContactInfo />
          {!isMobileDevice && (
              <NavigationBar />
          )}
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
      </animated.div>
      <div className=" min-h-screen">{children}</div>
      {isMobileNavOpen ? (
        <MobileDrawer>
          <NavigationBar
            onNavClick={() => setMobileNavOpen(false)}
            isMobileNavOpen={isMobileNavOpen}
          />
        </MobileDrawer>
      ) : null}
      <WhatsappRedirect />
      <div className="mt-8">
        <Footer showAnimation={isHeaderVisible} />
      </div>
    </section>
  );
};

export default Layout;
