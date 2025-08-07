import Navbar from "@/shared/Navbar";
import TopNav from "@/shared/TopNav";
import React from "react";
import { Figtree } from "next/font/google";

const figtreeFont = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const PrimaryLayout = ({ children }) => {
  return (
    <div className={`${figtreeFont.variable}`}>
      {/* ------ Shared component list star --------- */}
      <TopNav />
      <Navbar />
      {/* ------ Shared component list end --------- */}

      {/* ------wrapped with the children component start ------ */}
      {children}
      {/* ------wrapped with the children component end ------ */}
    </div>
  );
};

export default PrimaryLayout;
