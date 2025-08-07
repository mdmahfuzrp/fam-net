import React from "react";
import logo from "@/assets/brand/logo.svg";
import Image from "next/image";
import { nav_items } from "@/lib/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="cs-container">
      <div className="flex items-start justify-between pt-[35px]">
        {/* ------ logo icon ------------ */}
        <Image
          src={logo}
          className="w-full max-w-[107px] md:max-w-[170px]"
          alt="fame-tonic"
        />

        {/* -------- nav items --------- */}

        {nav_items?.length > 0 && (
          <div className="flex items-center gap-10">
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
  );
};

export default Navbar;
