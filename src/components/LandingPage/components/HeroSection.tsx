import { useState, useEffect } from "react";
import MAIN from "../assets/MainImage.svg";
import EXTENDED from "../assets/hero.svg";
import COMPANY from "../assets/Company.svg";

import SMALL_HERO from '../assets/Mobile/illustrations.svg'
import TABLET_HERO from '../assets/Tablet/TabletHero.png';

export default function HeroSection() {
  const [imageSrc, setImageSrc] = useState(MAIN);
  const [imageWidth, setImageWidth] = useState("750px");

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth > 1300) {
        setImageSrc(EXTENDED);
        setImageWidth("840px");
      } else {
        setImageSrc(MAIN);
        setImageWidth("750px");
      }
    };

    updateImageSrc();

    window.addEventListener("resize", updateImageSrc);   
    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);

  return (
    <>
    <div className="w-screen xl:h-[618px] flex flex-col xl:flex-row justify-center xl:justify-between px-4 md:px-[80px] lg:px-[190px] xl:pl-[112px]">
      {/* Left Container */}
      <div className="w-full xl:w-[40%] h-full flex justify-center xl:justify-start">
        <div className="w-full xl:w-[416px] h-[426px] flex flex-col mt-[56px]">
          <div className="flex justify-center xl:justify-start flex-col gap-[30px]">
            <div className="flex flex-col gap-4">
              <h1 className="poppins-bold text-center xl:text-left text-[40px] text-[#28293D] leading-[56px]">
                Get all jobs of the internet in one place.
              </h1>
              <h2 className="poppins-medium text-[20px] text-center xl:text-left text-[#403B4E] leading-[28px]">
                Find your dream job or recruit the best talent in the industry
                effortlessly.
              </h2>
            </div>
            <div className="poppins-semibold self-center xl:self-start w-[195px] text-[18px] leading-7 flex justify-center bg-[#926CFF] items-center p-[10px] rounded-lg text-white border-2 border-[#201C2D] shadow-Landing-button">
              Try for free
            </div>
          </div>

          <div className="flex self-center xl:self-start mt-[32px] gap-4">
            <div className="">⭐⭐⭐⭐⭐</div>
            <div className="poppins-semibold text-[1rem] text-[#201C2D] leading-6">
              Five star rating
            </div>
          </div>

          <div className="flex self-center xl:self-start mt-[22px]">
            <img src={COMPANY} alt="" />
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-[60%] h-full hidden xl:flex justify-end items-end">
        <img src={imageSrc} alt="Hero" style={{ width: imageWidth }} className="h-full self-end object-cover" />
      </div>
    </div>
    
    <div className="w-full md:hidden">
      <img src={SMALL_HERO} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full hidden md:flex lg:hidden ">
      <img src={TABLET_HERO} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full hidden lg:flex xl:hidden">
      <img src={TABLET_HERO} alt="" className="w-full h-full object-cover" />
    </div>
    </>
  );
}
