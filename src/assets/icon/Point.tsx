import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Portis: React.FC<IconProps> = ({
  iColor = "#0177FB",
  iSize = { x: 24, y: 24 },
}) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        fill={iColor}
      />
    </svg>
  );
};
export default Portis;
