import React from "react";
import PERSON_ON_HEAD from "../assets/PersonWithHead.svg";
import SHILD_TICK from "../assets/shield-tick.svg";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}


const Feature:React.FC<FeatureProps>=({ icon, title, description })=> {
  return (
    <div className="w-full h-full md:h-1/3 border-l py-[20px] xl:py-0 border-b border-black flex justify-center md:justify-start items-center px-4 xl:px-0">
      <div className="flex items-start gap-4">
        <img src={icon} alt="" className="w-[72px]" />
        <div className="w-full lg:w-[329px]">
          <div className="poppins-semibold text-[20px] text-[#28293D] leading-[36.25px]">{title}</div>
          <div className="poppins-medium text-[16px] text-[#4D4D4D] leading-[36.25px]">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: SHILD_TICK,
      title: "Your Fastest Job Alert Collection",
      description: "Protected against unauthorized access, data breaches, and cyber threats."
    },
    {
      icon: SHILD_TICK,
      title: "Your Fastest Job Alert Collection",
      description: "Protected against unauthorized access, data breaches, and cyber threats."
    },
    {
      icon: SHILD_TICK,
      title: "Your Fastest Job Alert Collection",
      description: "Protected against unauthorized access, data breaches, and cyber threats."
    }
  ];

  return (
    <div className="w-full xl:h-[716px] px-5 md:px-[60px] xl:px-[112px] py-8 xl:py-[72px]">
      <div className="w-full h-full outline outline-4 outline-black rounded-2xl flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2 h-full my-8 xl:my-0 px-6 md:px-8 xl:pl-[35px] pt-[55px] poppins-semibold text-[32px] flex flex-col justify-between leading-9 text-[#4D4D4D]">
          <h3>
            Why Choose <span className="text-gradient">Pagaar</span> Over Other
            Platforms?
          </h3>
          <img src={PERSON_ON_HEAD} alt="" className="self-center hidden xl:flex" />
        </div>
        <div className="w-full xl:w-1/2 h-full flex flex-col">
          {features.map((feature, index) => (
            <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
