import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const USDC: React.FC<IconProps> = ({ iSize = { x: 32, y: 32 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2.66675C23.364 2.66675 29.3334 8.63615 29.3334 16.0001C29.3334 23.3635 23.364 29.3335 16 29.3335C8.63609 29.3335 2.66669 23.3635 2.66669 16.0001C2.66669 8.63615 8.63609 2.66675 16 2.66675Z"
        fill="#2775CA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5014 25.2702C13.5014 25.5839 13.2558 25.7621 12.9524 25.6674C8.92105 24.3813 5.99817 20.6011 5.99817 16.1408C5.99817 11.6807 8.92105 7.90037 12.9524 6.61431C13.2558 6.52022 13.5014 6.69779 13.5014 7.01143V7.78567C13.5014 7.99446 13.3395 8.24022 13.1406 8.30825C9.95106 9.47946 7.6662 12.5436 7.6662 16.1355C7.6662 19.7275 9.95106 22.7922 13.1406 23.9628C13.3395 24.0362 13.5014 24.2765 13.5014 24.486V25.2702Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8312 22.3891C16.8312 22.6194 16.643 22.8076 16.413 22.8076H15.5815C15.3515 22.8076 15.1633 22.6194 15.1633 22.3891V21.0717C13.3436 20.8261 12.455 19.8062 12.2143 18.4208C12.1724 18.1852 12.3606 17.9709 12.6012 17.9709H13.5528C13.7515 17.9709 13.9189 18.1123 13.9607 18.3106C14.1386 19.1369 14.6144 19.7696 16.073 19.7696C17.1501 19.7696 17.9138 19.1682 17.9138 18.2693C17.9138 17.3696 17.4639 17.0299 15.8848 16.7682C13.5528 16.4546 12.4497 15.7485 12.4497 13.9185C12.4497 12.5068 13.5165 11.409 15.1686 11.1735V9.88199C15.1686 9.65183 15.3569 9.4635 15.5868 9.4635H16.4183C16.6483 9.4635 16.8365 9.65183 16.8365 9.88199V11.2102C18.1803 11.4511 19.0325 12.214 19.3098 13.4793C19.3619 13.7202 19.1738 13.9446 18.9281 13.9446H18.0495C17.8613 13.9446 17.7045 13.819 17.6471 13.6361C17.4118 12.8312 16.8365 12.4862 15.8377 12.4862C14.7345 12.4862 14.1645 13.0194 14.1645 13.767C14.1645 14.5565 14.4889 14.9537 16.1831 15.1999C18.473 15.5135 19.655 16.167 19.655 18.1178C19.655 19.5973 18.5568 20.7947 16.8365 21.0717V22.3891H16.8312Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0486 25.6675C18.7455 25.7622 18.4996 25.584 18.4996 25.2703V24.4967C18.4996 24.2665 18.6408 24.0523 18.8604 23.9735C22.0499 22.8023 24.3348 19.7382 24.3348 16.1462C24.3348 12.5543 22.0499 9.49016 18.8604 8.31895C18.6617 8.24561 18.4996 8.00531 18.4996 7.79576V7.02213C18.4996 6.70849 18.7455 6.52561 19.0486 6.6244C23.0799 7.91122 26.0028 11.6914 26.0028 16.1515C25.9978 20.6011 23.0799 24.3761 19.0486 25.6675Z"
        fill="white"
      />
    </svg>
  );
};
export default USDC;
