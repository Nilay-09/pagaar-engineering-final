import React from 'react';
import SaveIcon from './save.svg';

interface JobListingCardMobileProps {
  onClick: () => void;
  jobTitle: string;
  companyName: string;
  location: string;
  time: string;
  jobIcon: string;
}

const JobListingCardMobile: React.FC<JobListingCardMobileProps> = ({ onClick, jobTitle, companyName, location, time, jobIcon }) => {

  const calculateTimeAgo = (time: string) => {
    const now = new Date();
    const postedTime = new Date(time);
    const diffInSeconds = Math.floor((now.getTime() - postedTime.getTime()) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hr' : 'hrs'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
    } else {
      return 'just now';
    }
  };

  const timeAgo = calculateTimeAgo(time);

  return (
    <div
      className="w-full min-h-[126px] rounded border-[0.0938rem] border-[#E8E8E8] px-5 py-[0.9375rem]"
      onClick={onClick}
    >
      <div className="w-full h-full flex gap-6">

        <div className="min-w-[41px] h-[41px] p-[0.125rem] rounded border overflow-hidden">
          <img src={jobIcon} alt="Job Icon" className='w-full h-full overflow-hidden rounded object-cover' />
        </div>

        <div className="flex-1">
          <div className=' flex flex-col max-w-[160px] items-start'>
            <div className="ellipsis-multiline text-wrap poppins-bold text-[1.25rem] leading-6 tracking-[0.28px] text-[#3A2A2A]">
              {jobTitle}
            </div>
            <div className="poppins-bold mt-[0.48rem] text-[0.8394rem] leading-4 tracking-[0.28px] text-[#28293D]">
              {companyName}
            </div>
            <div className="ellipsis-multiline poppins-regular mt-[0.2rem] text-[14px] leading-[1.1513rem] tracking-[0.28px] text-[#555770]">
              {location}
            </div>
          </div>
        </div>

        <div className="justify-self-end w-[50px]">
          <div className="flex w-full flex-col h-full justify-between items-end ">
            <img src={SaveIcon} alt="Save Icon" className='w-fit  self-end' />
            <div className="w-full self-center text-right poppins-bold text-[#06C270] text-[0.9594rem] leading-[1.1469rem] tracking-[0.0175rem]">
              {timeAgo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingCardMobile;
