import React, { CSSProperties, ReactNode } from "react";

interface IconWrapperProps {
  iconPath?: string;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  iconPath,
  width,
  height,
  children,
}) => {
  const iconStyle: CSSProperties = {
    width: width ?? 30,
    height: height ?? 30,
  };

  return (
    <div className="hover:-translate-y-0.5 " style={iconStyle}>
      {iconPath ? <img src={iconPath} alt="icon" /> : children}
    </div>
  );
};

export default IconWrapper;
