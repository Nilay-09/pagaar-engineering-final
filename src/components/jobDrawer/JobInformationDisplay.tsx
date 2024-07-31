import React from 'react';
import LINE from "./Line.svg";
import ThreeDots from './ThreeDots.svg';

interface JobInformationDisplayProps {
  jobIcon: string;
  jobTitle: string;
  company: string;
  location: string;
  timePosted: string;
  description: string;
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
}) => {
  return (
    <div className="flex-1 border-[1px] border-[#373737] shadow-job-box rounded-lg h-full overflow-y-auto scrollbar-hide
                    p-6 py-0 relative">
      <div className="mt-6">
        {/* Introduction */}
        <div className="">
          <div className="flex justify-between">
            <img src={jobIcon} alt="Job Icon" className='w-[4.375rem] border-2 rounded' />
            <img src={ThreeDots} alt="More Options" />
          </div>
          <div className="mt-4 poppins-bold text-[1.125rem] text-[#000] leading-[1.625rem] tracking-[0.0175rem]">
            {jobTitle}
          </div>
          <div className="mt-2 poppins-semibold text-[1rem] text-[#28293D] leading-[1.5rem] tracking-[0.0175rem]">
            {company}
          </div>
          <div className="mt-2 flex justify-between poppins-regular text-[1rem] text-[#555770] leading-[1.5rem] tracking-[0.0175rem]">
            <div>{location}</div>
            <div className="border-[#06C270] w-fit poppins-medium bg-[#F0FFF2] text-[#06C270] tracking-[0.0175rem] rounded-sm h-fit border-[1px] py-[2px] px-[8px] poppins-medium text-[1rem] leading-[1.5rem]">
              {timePosted}
            </div>
          </div>
        </div>

        {/* Line */}
        <img src={LINE} alt="Line Separator" />

        {/* About Section */}
        <div className="">
          <div className="poppins-semibold text-[1rem] leading-6 tracking-[0.0175rem] text-[#28293D]">About</div>
          <p className="mt-2 poppins-regular text-[0.75rem] leading-4 tracking-[0.0175rem] text-[#555770]">Write a short and catchy paragraph about your company. Make sure to provide information about the company’s culture, perks, and benefits. Include office hours, remote working possibilities, and anything else you think makes your company interesting.</p>
        </div>

        <div className="mt-6">
          <div className="poppins-semibold text-[1rem] leading-6 tracking-[0.0175rem] text-[#28293D]">
            Job Description
          </div>
          <p className="mt-2 poppins-regular text-[0.75rem] leading-4 tracking-[0.0175rem] text-[#555770]">
            {description}
          </p>
        </div>

        <div className="mt-6">
          <div className="poppins-semibold text-[1rem] leading-6 tracking-[0.0175rem] text-[#28293D]">
            More responsibilities in detail:
          </div>
          <p className="mt-2 poppins-regular text-[0.75rem] leading-4 tracking-[0.0175rem] text-[#555770]">
            By partnering with cross-functional teams and customers, you will turn your insights into delightful products in a creative environment that requires proven leadership skills and the ability to execute a creative vision.
            Set design requirements based on information from internal teams and user research.
            Identify new product improvement opportunities.
            Analyze how a new product satisfies market needs and consumer preferences.
            Stay up to date on current industry trends and market conditions.
            Coordinate with other design team members to ensure consistent and accurate communication.

            Modify and revise existing designs to meet changing customer preferences.
            Work closely with product engineers to suggest improvements for products and processes. Present product design ideas to cross-functional teams and senior leadership.
          </p>
        </div>

        <div className="w-full sticky bottom-0 bg-white h-[6rem] mt-2">
          <div className="border-[#373737] border-[0.0025rem]"></div>
          <a href={applyLink} target="_blank" rel="noopener noreferrer" className="w-full h-10 mt-4 flex justify-center items-center bg-[#BDA6FF] border-[0.0838rem] border-[#000] 
                          rounded text-[#000] text-[1rem] poppins-regular leading-6">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobInformationDisplay;
