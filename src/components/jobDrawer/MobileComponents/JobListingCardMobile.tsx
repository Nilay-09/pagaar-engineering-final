import React from 'react';
import SaveIcon from './save.svg';
import { formatDistanceToNow, parseISO } from 'date-fns';

interface JobListingCardMobileProps {
  onClick: () => void;
  jobTitle: string;
  companyName: string;
  location: string;
  time: string;
  jobIcon: string;
}

const JobListingCardMobile: React.FC<JobListingCardMobileProps> = ({ onClick, jobTitle, companyName, location, time, jobIcon }) => {


  const timeAgo = formatDistanceToNow(parseISO(time), { addSuffix: false });
  return (
    <div
      className="w-full max-h-[126px] rounded border-[0.0938rem] border-[#E8E8E8] px-5 py-[0.9375rem]"
      onClick={onClick}
    >
      <div className="w-full h-full flex gap-6">

        <div className="min-w-[41px] h-[41px] p-[0.125rem] rounded border overflow-hidden">
          <img src={jobIcon} alt="Job Icon" className='w-full h-full overflow-hidden rounded object-cover' />
        </div>


        
        <div className="flex-1">
          <div className=' flex flex-col w-[160px] items-start'>
            <div className="ellipsis-multiline  text-wrap poppins-bold text-[1.25rem] leading-6 tracking-[0.28px] text-[#3A2A2A]">
              {jobTitle}
            </div>
            <div className="poppins-bold mt-[0.48rem] text-[0.8394rem] leading-4 tracking-[0.28px] text-[#28293D]">
              {companyName}
            </div>
            <div className="poppins-regular mt-[0.2rem] text-[0.9375rem] leading-[1.1513rem] tracking-[0.28px] text-[#555770]">
              {location}
            </div>
          </div>
        </div>

        <div className="justify-self-end">
        <div className="flex flex-col min-w-16 h-full justify-between">
          <img src={SaveIcon} alt="Save Icon" className='w-fit  self-center' />
          <div className="poppins-bold text-[#06C270] text-[0.9594rem] leading-[1.1469rem] tracking-[0.0175rem]">
            {timeAgo}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingCardMobile;
