import JobIcon from './jobIcon.svg';
import LocationIcon from '../../assets/dashboard/location.svg';
import JobBagIcon from '../../assets/dashboard/JobBagIcon.svg';

export default function JobListingCard() {
    return (
        <div className="w-[99%] bg-[#FDFCFF] p-4 flex flex-col rounded-lg shadow-job-box border-[1px] border-[#28293D]">


            <div className="flex justify-between flex-col lg:flex-row ">
                <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
                    <div className="w-fit">
                        <img src={JobIcon} alt="" className='rounded' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className='poppins-semibold text-[0.875rem] text-[#28293D] leading-[1.3125rem]'>Software Developer I</span>
                        <span className='poppins-medium text-[0.75rem] text-[#30283D] leading-[1.125rem]'>BU Tech</span>
                    </div>
                </div>
                <div className="border-[#06C270] w-fit mt-2 lg:mt-0 bg-[#F0FFF2] text-[#06C270] tracking-[0.0175rem] rounded-sm h-fit border-[1px] py-[2px] px-[8px] poppins-medium text-[0.75rem] leading-[1.125rem]">
                    4hr ago.
                </div>
            </div>

            <div className="mt-[1rem] flex items-start lg:items-center flex-col lg:flex-row">
                <div className="px-3 flex items-center gap-[0.625rem]">
                    <span>
                        <img src={LocationIcon} alt="" className="" />
                    </span>
                    <span className="poppins-regular text-[#28293D] text-[12px] leading-[1.125rem]">
                        Pune, Maharashtra.
                    </span>
                </div>

                <div className="mt-2 lg:mt-0 px-3 pt-1 pb-[6px] flex justify-between items-baseline gap-[0.625rem]">
                    <div className="flex items-center gap-[0.625rem]">
                        <span>
                            <img src={JobBagIcon} alt="" className="w-full h-full" />
                        </span>
                        <span className="poppins-regular text-[#28293D] text-[12px] leading-[1.125rem]">
                            1-2 Years
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}