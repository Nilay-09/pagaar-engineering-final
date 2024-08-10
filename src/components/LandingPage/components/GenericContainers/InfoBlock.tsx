import React from 'react';

interface Props {
  iconSrc: string;
  title: string;
  description: string;
}

const InfoBlock: React.FC<Props> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex items-center gap-[15px]">
      <img src={iconSrc} alt="" className="w-[65px] object-cover" />
      <div className="flex flex-col gap-[3px]">
        <span className="poppins-bold text-[18px] text-[#201C2D] leading-[30px]">{title}</span>
        <span className="poppins-semibold text-[16px] text-[#403B4E] leading-[25px]">{description}</span>
      </div>
    </div>
  );
}

export default InfoBlock;
