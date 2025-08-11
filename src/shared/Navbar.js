"use client";
import React, { Fragment } from "react";
import logo from "@/assets/brand/logo.svg";
import Image from "next/image";
import { nav_items } from "@/lib/data";
import Link from "next/link";
import { NavHumBurgerIcon } from "@/lib/icons";

const Navbar = () => {
  // --------- open menu functions
  const handleOpenMenu = () => {
    console.log("hi");
  };
  return (
    <div className="cs-container">
      <div className="max-w-[221px] sm:max-w-full sm:w-full ml-auto sm:ml-0 flex items-center sm:items-start justify-between pt-[16px] md:pt-[35px]">
        {/* ------ logo icon ------------ */}
        <Image
          src={logo}
          className="w-full max-w-[105px] md:max-w-[170px]"
          alt="fame-tonic"
        />
        {/* -------- nav items --------- */}
        <div>
          <button
            onClick={handleOpenMenu}
            className="sm:hidden flex cursor-pointer"
            type="button"
          >
            <NavHumBurgerIcon />
          </button>

          {nav_items?.length > 0 && (
            <div className="items-center gap-10 sm:flex hidden">
              {nav_items?.map((item, i) => (
                <Link
                  key={i}
                  href={item?.link}
                  className="text-[18px] nav-item font-semibold"
                >
                  {item?.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
