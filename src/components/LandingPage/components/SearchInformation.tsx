import React from 'react';
import SECOND from '../assets/Search_1.png';
import THIRD from '../assets/Search_1.png';
import FIRST from '../assets/Search_1.png';

interface JobCardProps {
  imageSrc: string;
  jobTitle: string;
  jobCount: number;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ imageSrc, jobTitle, jobCount, description }) => {
  return (
    <div className="min-w-[300px] max-w-min h-fit pb-2 flex mx-8 mb-4 flex-col gap-4 border border-black p-6 hover:outline hover:outline-4 hover:outline-black shadow-Landing-boxcard rounded-lg ">
      <div className="h-full flex flex-col">
        <div className="flex gap-[17px] items-center mt-4">
          <img src={imageSrc} alt="" className='bg-[#8D65FF29]' />
          <div className="poppins-semibold text-[24px] leading-[28px] text-[#28293D]">{jobTitle}</div>
        </div>
        <div className="w-full mt-4 h-[54px] flex items-center justify-center text-center poppins-bold text-[56px] leading-[28px] text-[#555770]">
          {jobCount}
        </div>
        <div className="w-full mt-4 h-[54px] flex items-center justify-center text-center poppins-semibold text-[16px] leading-[25px] text-[#403B4E]">
          {description}
        </div>
        <div className="w-full mt-6 h-[32px] border-[1.5px] flex justify-center items-center text-[#555770] text-[14px] poppins-medium cursor-pointer border-[#555770]">
          Apply Now
        </div>
      </div>
    </div>
  );
}

const SearchInformation: React.FC = () => {
  const jobData = [
    {
      imageSrc: SECOND,
      jobTitle: 'Jobs In Tech',
      jobCount: 453,
      description: 'Set Alert & Track Jobs In Top MNCs With Recruit.'
    },
    {
      imageSrc: FIRST,
      jobTitle: 'Jobs In Finance',
      jobCount: 289,
      description: 'Stay updated with the latest finance jobs in top companies.'
    },
    {
      imageSrc: THIRD,
      jobTitle: 'Jobs In Marketing',
      jobCount: 322,
      description: 'Explore the best marketing jobs across various industries.'
    }
  ];

  return (
    <div className="w-screen h-fit lg:h-[566px] relative flex justify-center items-center">

      <div className="w-full h-full">
        <div className="flex flex-col justify-center pt-[56px] md:pt-[90px] lg:pt-8 xl:pt-0 text-center gap-2">
          <h3 className="poppins-bold text-[32px] text-[#201C2D] leading-[48px]">
            Search by categories
          </h3>
          <div className="poppins-regular  text-[18px] text-[#403B4E] leading-[28px]">
            Our platform offers more than 25+ categories of job opportunities.
          </div>
        </div>

        <div className="w-full h-fit pb-[3px] mt-8 mb-[112px] lg:mb-0 flex flex-nowrap overflow-x-scroll scrollbar-hide py-2 justify-center">
          {jobData.map((job, index) => (
            <JobCard
              key={index}
              imageSrc={job.imageSrc}
              jobTitle={job.jobTitle}
              jobCount={job.jobCount}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchInformation;
