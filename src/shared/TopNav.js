import { top_nav_data } from "@/lib/data";
import React from "react";

const TopNav = () => {
  return (
    <div className="top-nav-gradient py-[20px] md:py-[10px] sticky top-0">
      <div className="cs-container">
        <h1 className="font-extrabold text-base text-center md:text-[22px]">
          <span className="text-[#00E7F9]">{top_nav_data?.title}:</span>{" "}
          <span className="font-semibold">{top_nav_data?.description}</span>
        </h1>
      </div>
    </div>
  );
};

export default TopNav;
