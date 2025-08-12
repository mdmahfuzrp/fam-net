import { hero_discover_way } from "@/lib/data";
import Image from "next/image";
import React from "react";
import star from "@/assets/brand/star.png";
import heroImg from "@/assets/brand/hero-img.svg";
import heroImgMobile from "@/assets/brand/hero-img-mobile.svg";
import { HeroRightArrowIcon } from "@/lib/icons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-10 w-full">
      <div className="cs-container w-full relative">
        <div className="w-full flex  flex-col-reverse md:flex-row items-start">
          {/* left section */}
          <div className="w-full md:max-w-[540px] mt-[-10px] md:!pt-[57px]">
            <p className="text-[25px] md:text-[35px] inline-block text-center sm:text-left leading-[27px] md:leading-[40px] font-bold font-urbanist">
              Want to Turn Social Media Into a Profitable Career?
            </p>
            <p className="hero-highlight-text inline-block text-center sm:text-left mt-[5px] text-[25px] md:text-[35px] leading-[27px] md:leading-[40px] md:mt-2 font-bold font-urbanist">
              Discover your way to success with Fametonic:
            </p>
            <ul className="mt-4 flex flex-col gap-[8px] md:gap-[13px]">
              {hero_discover_way?.map((way) => (
                <li
                  key={way?.id}
                  className="flex items-center gap-[10px] md:leading-[22px] font-semibold"
                >
                  <Image src={star} alt="start fame tonic" /> {way?.title}
                </li>
              ))}
            </ul>
            <div className="flex flex-col-reverse md:flex-col w-full">
              <div className="flex flex-col items-center w-full sm:w-fit gap-[10px] mt-[30px] px-1 md:my-[30px]">
                <button className="flex items-center gap-[10px] rounded-[10px] px-5 justify-center hero-btn-shadow bg-[#FC004E] py-2 w-full md:min-w-[313px] md:max-w-[313px] cursor-pointer text-[20px] font-bold text-white">
                  GET STARTED <HeroRightArrowIcon />
                </button>
                <p className="text-[12px]">
                  1-minute quiz for personalized Insights
                </p>
              </div>
              <div className="md:mt-0 text-center mx-auto sm:mx-0 w-full sm:text-left max-w-[300px] lg:max-w-full mt-[22px] text-[#ABABAB] font-medium hero-footer-style flex flex-col gap-[12px]">
                <p className="text-[12px] max-w-[95%] sm:max-w-full lg:max-w-[95%]">
                  By clicking <Link href={"/"}>{`"Get Started"`}</Link>, you
                  agree with Terms and Conditions, Privacy Policy, Subscription
                  Terms
                </p>
                <p className="text-[10px]">
                  Fametonic {new Date().getFullYear()} &copy;All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="px-5 sm:px-0 lg:w-1/2 min-h-[320px]">
            <Image
              src={heroImg}
              alt="hero image fame tonic"
              className="lg:max-w-[666px] hidden sm:block lg:absolute right-[-110px] top-0 z-[-1]"
            />
            <Image
              src={heroImg}
              alt="hero image fame tonic"
              className="w-full block sm:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
