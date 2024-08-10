import { calculateTimeAgo } from "../GenericComponents/ScrollToTop";



interface JobCardProps {
  jobTitle: string;
  company: string;
  location: string;
  experience: string;
  jobIcon: string;
  locationIcon: string;
  jobBagIcon: string;
  bookmarkIcon: string;
  timePosted: string;
  onClick: () => void;
}


const JobCard: React.FC<JobCardProps> = ({ jobTitle, company, location, experience, jobIcon, locationIcon, jobBagIcon, bookmarkIcon,onClick,timePosted }) => {
  return (
    <div 
    onClick={onClick}
    className="min-w-[17.625rem] h-fit rounded-lg border-[1px] border-[#28293D] p-4 shadow-box">
      <div className="w-full h-fit flex gap-2">
        <div className="w-11 h-11 border-2 rounded">
          <img src={jobIcon} alt="" className="w-full h-full object-cover rounded" />
        </div>
        <div className="flex-1 flex flex-col">
          <span className="ellipsis-multiline-1 poppins-semibold text-[0.875rem] text-[#28293D] leading-5">
            {jobTitle}
          </span>
          <span className="poppins-medium text-[0.75rem] text-[#30283D] leading-[1.125rem]">
            {company}
          </span>
        </div>
      </div>

      {/* Location */}
      <div className="mt-2 px-3 pt-1 pb-[6px] flex items-center gap-[0.625rem]">
        <span>
          <img src={locationIcon} alt="" className="w-full h-full" />
        </span>
        <span className="poppins-regular text-[#28293D] text-[12px] leading-[1.125rem]">
          {location}
        </span>
      </div>

      {/* Work Experience */}
      <div className="mt-[6px] px-3 pt-1 pb-[6px] flex justify-between items-center gap-[0.625rem]">
        <div className="flex gap-[0.625rem]">
          <span>
            <img src={jobBagIcon} alt="" className="w-full h-full" />
          </span>
          <span className="poppins-regular text-[#28293D] text-[12px] leading-[1.125rem]">
            {experience}
          </span>
        </div>
        <span className="poppins-bold text-[#06C270] text-[12px] leading-[1.125rem]">{calculateTimeAgo(timePosted)}</span>
      </div>

      {/* Buttons */}
      <div className="mt-6 gap-3 w-full h-[2.125rem] flex justify-between items-center poppins-regular text-[12px] leading-[18px]">
        <div className="flex-1 bg-[#3D3D41] h-full border-[#3D3D41] text-[0.75rem] text-white border-[1px] flex justify-center items-center rounded">
          Set Alert
        </div>
        <div className="">
          <img src={bookmarkIcon} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
