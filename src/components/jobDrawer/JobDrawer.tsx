import Navbar from "../navbar/Navbar";



import Search from "../../assets/dashboard/search-normal.svg";
import Cross from "../../assets/dashboard/cross.svg";

import { useState } from "react";

import './JobDrawer.css'
import JobListingCard from "./JobListingCard";
import JobInformationDisplay from "./JobInformationDisplay";

export default function JobDrawer() {

  const [activeTab, setActiveTab] = useState<string>("All");

  const handleClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div>
      <Navbar />


      {/* SearchBar */}
      <div className="w-full h-[5.3125rem] px-6 py-4 flex lg:hidden">
        <div className={`w-full h-full items-center flex `}>
          <div className="w-full h-full flex rounded-lg border-[#000] border-[1px] lg:flex items-center">
            {/* Search Icon */}
            <img src={Search} alt="" className="ml-[25px]" />

            {/* Input */}
            <input
              type="text"
              className="flex-1 py-2 px-4 bg-transparent outline-none font-bold text-[#555770] satoshi-variable"
              placeholder="Search Company, Job"
            />

            {/* Clear Button */}
            <img src={Cross} alt="" className="mr-[10px]" />
          </div>
        </div>
      </div>


      <div className="w-full h-[6.5rem] flex justify-start px-6 lg:px-0 md:justify-center items-center py-7">
        <div className="w-full h-full py-1 flex lg:justify-center scrollbar-hide overflow-auto gap-4">
          {[
            "All",
            "Category",
            "Design",
            "Tech",
            "Year of Experience",
            "Posting time",
          ].map((label) => (
            <div
              key={label}
              className={`px-6 h-full flex justify-center text-nowrap items-center rounded-xl border-[1.6px] border-[#000]  ${activeTab === label ? "bg-[#C5C2F2] shadow-navbar-button" : ""
                } cursor-pointer`}
              onClick={() => handleClick(label)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[600px] flex gap-6 px-[1.5rem] lg:px-[3.75rem] mb-6">

        {/* Job listing */}
        <div className="w-[37%] flex h-full overflow-y-auto scrollbar-hide flex-col gap-4">

          <JobListingCard/>
          <JobListingCard/>
          <JobListingCard/>
          <JobListingCard/>
          <JobListingCard/>
          <JobListingCard/>
          <JobListingCard/>

        </div>

        {/* sliderInfo */}
        <JobInformationDisplay/>
      </div>
    </div>
  );
}
