import JobIcon from './jobIcon.svg';
import LocationIcon from '../../assets/dashboard/location.svg';
import JobBagIcon from '../../assets/dashboard/JobBagIcon.svg';
import { calculateTimeAgo } from '../GenericComponents/ScrollToTop';

type JobListingCardProps = {
  jobTitle: string;
  companyName: string;
  location: string;
  time: string;
  jobIcon: string;
  onClick: () => void;
};

export default function JobListingCard({
  jobTitle,
  companyName,
  location,
  time,
  jobIcon,
  onClick,
}: JobListingCardProps) {
  return (
    <div
      className="w-[99%] bg-[#FDFCFF] p-4 flex flex-col rounded-lg shadow-job-box border-[1px] border-[#28293D]"
      onClick={onClick}
    >
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
          <div className="w-fit items-start border-[#E7E7E7] border rounded">
            <img src={jobIcon || JobIcon} alt="Job Icon" className="rounded w-11 min-w-11 h-11 p-1 object-cover" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="poppins-semibold ellipsis-multiline text-[0.875rem] text-[#28293D] leading-[1.3125rem]">
              {jobTitle}
            </span>
            <span className="poppins-medium text-[0.75rem] text-[#30283D] leading-[1.125rem]">
              {companyName}
            </span>
          </div>
        </div>
        <div className="border-[#06C270] w-fit mt-2 lg:mt-0 bg-[#F0FFF2] text-[#06C270] text-nowrap tracking-[0.0175rem] rounded-sm h-fit border-[1px] py-[2px] px-[8px] poppins-medium text-[0.75rem] leading-[1.125rem]">
          {calculateTimeAgo(time)}
        </div>
      </div>

      <div className="mt-[1rem]  flex items-start lg:items-center flex-col lg:flex-row">
        <div className="px-3 min-w-[170px] flex items-center gap-[0.625rem]">
          <span>
            <img src={LocationIcon} alt="Location Icon" />
          </span>
          <span className="poppins-regular ellipsis-multiline-1 text-[#28293D] text-[12px] leading-[1.125rem]">
            {location}
          </span>
        </div>

        <div className="mt-2 lg:mt-0 px-3 pt-1 pb-[6px] flex justify-between items-baseline gap-[0.625rem]">
          <div className="flex items-center gap-[0.625rem]">
            <span>
              <img src={JobBagIcon} alt="Job Bag Icon" className="w-full h-full" />
            </span>
            <span className="poppins-regular text-[#28293D] text-[12px] leading-[1.125rem]">
              1-2 Years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
