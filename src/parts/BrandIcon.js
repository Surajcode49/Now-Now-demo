import React from "react";
import logo from "../assets/images/hero/nownowlogo-DPwXecS-.webp";

export default function BrandIcon() {
  return (
    <div>
      <img
        src={logo}
        alt="Now Now Logo"
        className="h-12 w-auto"
        onError={(e) => {
          console.error("Failed to load logo image", e);
          e.target.src = "https://www.nownowinc.com/assets/nownowlogo-DPwXecS-.webp"; // Fallback image
        }}
      />
    </div>
  );
}
