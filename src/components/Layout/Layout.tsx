import React, { ReactNode, useEffect, useRef } from "react";
import NavigationBar from "../Navbar/NavigationBar";
import NavigationContactInfo from "../Navbar/NavigationContactInfo";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section>
      {/* <CustomCursor /> */}
      {/* NAV */}
      <div className="relative flex flex-col bg-cover bg-center">
        {/* gray gradient from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent  h-32"></div>
        <div className="relative z-10">
          <NavigationContactInfo />
          <NavigationBar />
        </div>
      </div>
      {children}
    </section>
  );
};

export default Layout;
