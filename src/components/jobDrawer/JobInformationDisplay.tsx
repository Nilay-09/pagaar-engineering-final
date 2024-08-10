import React, { useEffect, useRef } from "react";
import LINE from "./Line.svg";
import ThreeDots from "./ThreeDots.svg";

import CARD from "./MobileComponents/personalcard.svg"
import { calculateTimeAgo } from "../GenericComponents/ScrollToTop";

interface JobInformationDisplayProps {
  jobIcon: string;
  jobTitle: string;
  company: string;
  location: string[];
  timePosted: string;
  description: string[];
  qualifications: string[];
  skills_required: string[];
  applyLink: string;
}

const JobInformationDisplay: React.FC<JobInformationDisplayProps> = ({
  jobIcon,
  jobTitle,
  company,
  location,
  timePosted,
  description,
  applyLink,
  qualifications,
  skills_required,
}) => {



  return (
    <div
      className="flex-1 border-[1px] border-[#373737] shadow-job-box rounded-lg h-full overflow-y-auto scrollbar-hide
                    p-6 py-0 relative"
    >
      <div className="mt-6">
        {/* Introduction */}
        <div className="">
          <div className="flex justify-between">
            <img
              src={jobIcon}
              alt="Job Icon"
              className="w-[4.375rem] border-2 rounded"
            />
            <img src={ThreeDots} alt="More Options" />
          </div>
          <div className="mt-4 poppins-bold text-[1.125rem] text-[#000] leading-[1.625rem] tracking-[0.0175rem]">
            {jobTitle}
          </div>
          <div className="mt-2 poppins-semibold text-[1rem] text-[#28293D] leading-[1.5rem] tracking-[0.0175rem]">
            {company}
          </div>

          <div className="mt-2 flex justify-between items-center poppins-regular text-[1rem] text-[#555770] leading-[1.5rem] tracking-[0.0175rem]">
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              {location.length > 2
                ? `${location.slice(0, 2).join(", ")}...`
                : location.join(", ")}
            </div>
            <div className="border-[#06C270] w-fit poppins-medium bg-[#F0FFF2] text-[#06C270] tracking-[0.0175rem] rounded-sm h-fit border-[1px] py-[2px] px-[8px] poppins-medium text-[1rem] leading-[1.5rem]">
              {calculateTimeAgo(timePosted)}
            </div>
          </div>


          <div className="w-fit flex gap-4 poppins-regular text-[16px] leading-6 text-[#555770] py-2 px-4 bg-[#FBF9FF] border rounded-2xl border-[#F0F0F0] mt-2">
          <img src={CARD} alt="" /><span>Experience: 1-3 yrs</span>
          </div>


        </div>

        {/* Line */}
        <img src={LINE} alt="Line Separator" className="mt-6" />

        <div className="mt-4">
          <div className="poppins-semibold text-[1rem] leading-6 tracking-[0.0175rem] text-[#28293D]">
            Job Description
          </div>
          <div className="mt-2 poppins-regular text-[0.75rem] leading-4 tracking-[0.0175rem] text-[#555770]">
            {description.map((desc, index) => (
              <div key={index} className="mb-2">
                {desc}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="poppins-semibold text-[1rem] leading-6 tracking-[0.0175rem] text-[#28293D]">
            Qualification
          </div>
          <ul className="mt-2 poppins-regular text-[0.75rem] leading-4 tracking-[0.0175rem] text-[#555770] list-disc pl-5">
            {qualifications.map((desc, index) => (
              <li key={index} className="mb-2">
                {desc}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <div className="poppins-semibold text-[1rem] leading-6 tracking-[0.0175rem] text-[#28293D]">
            Location
          </div>
          <div className="mt-2 poppins-regular text-[0.75rem] leading-4 tracking-[0.0175rem] text-[#555770]">
            {location.map((location, index) => (
              <div key={index} className="mb-2">
                {location}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 mb-10">
          <div className="poppins-semibold text-[1rem] leading-6 tracking-[0.0175rem] text-[#28293D]">
            Skills Required
          </div>
          <div className="mt-4 poppins-regular flex  flex-wrap gap-2 text-[0.75rem] leading-4 tracking-[0.0175rem] text-[#555770]">
            {skills_required.map((skills, index) => (
              <div key={index} className="py-2 rounded px-4 bg-[#F6F6F6] border-[#D4D4D4] border mb-2">
                {skills}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full sticky bottom-0 bg-white h-[6rem] mt-2">
          <div className="border-[#373737] border-[0.0025rem]"></div>
          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-10 mt-4 flex justify-center items-center bg-[#BDA6FF] border-[0.0838rem] border-[#000] 
                          rounded text-[#000] text-[1rem] poppins-regular leading-6"
          >
            Apply
          </a>
        </div>


        
      </div>
    </div>
  );
};

export default JobInformationDisplay;
