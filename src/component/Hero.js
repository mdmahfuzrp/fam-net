import { hero_discover_way } from "@/lib/data";
import Image from "next/image";
import React from "react";
import star from "@/assets/brand/star.png";
import heroImg from "@/assets/brand/hero-img.svg";

const Hero = () => {
  return (
    <div className="">
      <div className="cs-container relative">
        <div className="w-full flex">
          {/* left section */}
          <div className="w-full max-w-[540px] !pt-[57px]">
            <p className="text-[35px] inline-block leading-[40px] font-bold font-urbanist">
              Want to Turn Social Media Into a Profitable Career?
            </p>
            <p className="hero-highlight-text inline-block text-[35px] leading-[40px] mt-2 font-bold font-urbanist">
              Discover your way to success with Fametonic:
            </p>
            <ul className="mt-4 flex flex-col gap-[13px]">
              {hero_discover_way?.map((way) => (
                <li
                  key={way?.id}
                  className="flex items-start gap-[10px] leading-[22px] font-semibold"
                >
                  <Image src={star} alt="start fame tonic" /> {way?.title}
                </li>
              ))}
            </ul>
          </div>
          {/* right section */}
          <div>
            <Image
              src={heroImg}
              alt="hero image fame tonic"
              className="max-w-[666px] absolute right-[-110px] top-0 z-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
