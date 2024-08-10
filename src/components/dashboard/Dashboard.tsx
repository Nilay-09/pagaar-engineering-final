import "./dashboard.css";

import JobIcon from "../../assets/dashboard/adobe-icon.svg";
import LocationIcon from "../../assets/dashboard/location.svg";
import JobBagIcon from "../../assets/dashboard/JobBagIcon.svg";
import Bookmark from "../../assets/dashboard/Save.svg";

import SearchIcon from "../../assets/dashboard/search-bar-icon.svg";
import BackgroundImage from "../../assets/dashboard/homepagebackground.svg";
import FilterIcon from "../../assets/Mobile/dashboard/Filter.svg";

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import JobCard from "./JobCard";
import JobRoleCardOnLanding from "./JobRoleCardOnLanding";
import JobInformationDisplay from "../jobDrawer/JobInformationDisplay";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [jobData, setJobData] = useState<any[]>([]);

  const [isFixedOpen, setFixedOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const { searchTerm, setSearchTerm } = useSearch();

  useEffect(() => {
    const fetchJobData = async () => {
      let filterString = "";

      // Determine filter based on activeTab
      switch (activeTab) {
        case "Product":
          filterString = "search.in(category, 'PRODUCT')";
          break;
        case "Design":
          filterString = "search.in(category, 'DESIGN')";
          break;
        case "Tech":
          filterString = "search.in(category, 'TECH')";
          break;
        default:
          filterString = "";
          break;
      }

      try {
        console.log(filterString);
        const response = await axios.post(
          "https://pagaar-backend.azurewebsites.net/search",
          {
            filter: filterString,
            facets: ["sub_category"],
            skip: 0,
            top: 10,
            order_by: "date_posted desc",
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-User-Id": "pratik",
              "X-Request-Id": "1111",
            },
          }
        );

        
        console.log(response , "@@@@@@@@@@@@@@@@@@@@@@")

        const fetchedData = response.data.result.map((job: any) => ({
          jobTitle: job.title,
          company: job.company,
          location: job.locations,
          experience: `${job.yoe} Years`,
          jobIcon: job.image_url || JobIcon,
          locationIcon: LocationIcon,
          jobBagIcon: JobBagIcon,
          bookmarkIcon: Bookmark,
          description: job.descriptions, 
          applyLink: job.link,
          qualifications:job.qualifications,
          skills_required:job.skills_required,
          timePosted: job.date_posted,
        }));

        setJobData(fetchedData);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [activeTab]);

  const handleClick = (label: string) => {
    setActiveTab(label);
  };

  const handleJobCardClick = (job: any) => {
    setSelectedJob(job);
    setFixedOpen(true);
  };

  const RoleJobData = [
    { numOfJobs: 16, jobTitle: "Front end Engineer" },
    { numOfJobs: 8, jobTitle: "Back end Developer" },
    { numOfJobs: 10, jobTitle: "Full Stack Developer" },
    { numOfJobs: 5, jobTitle: "UI/UX Designer" },
    { numOfJobs: 12, jobTitle: "Data Scientist" },
  ];

  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // setSearchTerm(e.currentTarget.value);
      navigate("/jobs");
    }
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="relative w-screen h-fit sm:h-[526px] px-[11.0625rem] flex flex-col items-center border-b-[1px] border-b-[#E9E9E9]">
        <img
          src={BackgroundImage}
          alt=""
          className="hidden sm:flex w-full h-full absolute -z-10 object-cover"
        />

        {/* Heading */}
        <div className="hidden sm:block mt-[6.25rem] w-screen text-[3.375rem] leading-[5.0625rem] text-center poppins-bold text-[#2E2F3D]">
          Search your job across <div>the internet</div>
        </div>

        <div className="w-screen h-[6.75rem] flex sm:hidden p-6">
          <div className="h-full w-full flex items-center border-[#000] border-[2px] rounded-lg shadow-search-button">
            <img src={SearchIcon} alt="" className="mx-4" />
            <input
              type="text"
              className="flex-1 h-full outline-none focus:none focus:none placeholder:text-[#979EC2] poppins-semibold"
              placeholder="Search Jobs, Company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              className="w-[3.75rem] flex justify-center items-center h-full bg-[#926CFF]"
              onClick={() => navigate("/jobs")}
            >
              <img src={FilterIcon} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* Laptop Searchbox */}
        <div className="hidden sm:flex w-screen justify-center">
          <div className="mt-[3.25rem] pl-[1.5rem] pr-5 w-[90%] md:w-[72.41%] h-[4.75rem] rounded-lg shadow-search-button flex items-center gap-5 border-[1px] border-[#000] bg-white">
            <img src={SearchIcon} alt="" className="" />
            <input
              type="text"
              className="flex-1 h-full outline-none focus:none focus:none placeholder:text-[#979EC2] poppins-semibold"
              placeholder="Enter skills / designations / companies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
             onClick={() => navigate("/jobs")}
              className="w-[7.625rem] cursor-pointer h-[2.5rem] bg-[#926CFF] rounded-lg border-[#000] border-[1px] shadow-search-button 
                          flex justify-center items-center poppins-bold text-[15.38px] text-[#FFFFFF] leading-[1.25rem]"
            >
              Search
            </div>
          </div>
        </div>

        <div className="w-screen h-[3.75rem] px-[1.5rem] scrollbar-hide sm:px-[54px] flex mt-0 py-2 sm:py-2 sm:mt-[1.5rem] mb-3 md:mb-0 overflow-auto justify-start sm:justify-center gap-4">
          {["All", "Product", "Design", "Tech"].map((label) => (
            <div
              key={label}
              className={`poppins-regular px-6 py-3 flex justify-center items-center rounded-2xl transition-colors duration-300 ease-in
                        ${
                          activeTab === label
                            ? "bg-[#C5C2F2] shadow-navbar-button border-[2px] border-[#000] "
                            : "bg-white border-[1.6px] border-[#BFBFBF] "
                        } cursor-pointer`}
              onClick={() => handleClick(label)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* JOB Section */}
      <div className="w-full h-fit px-[1.5rem] lg:pl-[3.375rem] lg:pr-[46px]">
        <div className="w-full h-full mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="poppins-semibold text-[18px] text-[#28293D] leading-[1.375rem]">
              Most Recent
            </span>
            <span
              className="poppins-medium text-[1rem] text-[#28293D] leading-[1.375rem]"
              onClick={() => navigate("/jobs")}
            >
              View all
            </span>
          </div>

          <div className="overflow-x-scroll flex gap-4 pb-8 scrollbar-hide">
            {jobData.map((job, index) => (
              <JobCard
                key={index}
                jobTitle={job.jobTitle}
                company={job.company}
                location={job.location}
                experience={job.experience}
                jobIcon={job.jobIcon}
                locationIcon={job.locationIcon}
                jobBagIcon={job.jobBagIcon}
                bookmarkIcon={job.bookmarkIcon}
                timePosted={job.timePosted}
                onClick={() => handleJobCardClick(job)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Jobs */}
      <div className="w-full h-fit px-[1.5rem] lg:pl-[3.375rem] lg:pr-[46px]">
        <div className="flex justify-between items-center mb-4">
          <span className="poppins-semibold text-[18px] text-[#28293D] leading-[1.375rem]">
            Most Recent
          </span>
          <span
            className="poppins-medium text-[1rem] text-[#28293D] leading-[1.375rem]"
            onClick={() => navigate("/jobs")}
          >
            View all
          </span>
        </div>
        <div className="overflow-x-scroll flex gap-4 pb-8 scrollbar-hide">
          {RoleJobData.map((job, index) => (
            <JobRoleCardOnLanding
              key={index}
              numOfJobs={job.numOfJobs}
              jobTitle={job.jobTitle}
            />
          ))}
        </div>
      </div>

      {/* Internship section */}
      <div className="w-full h-fit mb-[9.375rem] px-[1.5rem] lg:pl-[3.375rem] lg:pr-[46px]">
        <div className="w-full h-full mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="poppins-semibold text-[18px] text-[#28293D] leading-[1.375rem]">
              Most Recent
            </span>
            <span className="poppins-medium text-[1rem] text-[#28293D] leading-[1.375rem]">
              View all
            </span>
          </div>
          <div className="overflow-x-scroll flex gap-4 pb-8 scrollbar-hide">
            {jobData.map((job, index) => (
              <JobCard
                key={index}
                jobTitle={job.jobTitle}
                company={job.company}
                location={job.location}
                experience={job.experience}
                jobIcon={job.jobIcon}
                locationIcon={job.locationIcon}
                jobBagIcon={job.jobBagIcon}
                bookmarkIcon={job.bookmarkIcon}
                timePosted={job.timePosted}
                // onClick={handleJobCardClick}
                onClick={() => handleJobCardClick(job)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div
          className={`w-full h-screen fixed inset-0 z-10 ${
            isFixedOpen ? "flex bg-[#22222252]" : "hidden"
          }`}
          onClick={() => setFixedOpen(!isFixedOpen)}
        ></div>

        <div
          onClick={() => setFixedOpen(!isFixedOpen)}
          className={`w-full h-[20px] bg-transparent z-20 fixed flex justify-center items-center transition-all duration-700  ${
            isFixedOpen ? "bottom-[650px]" : "bottom-[-650px]"
          }`}
        >
          {/* <span className="bg-[#FFFFFF99] rounded-full px-4 py-2">X</span> */}

          <span className="bg-[#FFFFFF99] rounded-full p-1 w-[2.5rem] h-[2.5rem] flex justify-center items-center">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4037 13.7144L17.9534 8.04492"
                stroke="#868686"
                stroke-width="2.62518"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.04785 17.9525L12.8607 13.1396"
                stroke="#868686"
                stroke-width="2.62518"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.9535 17.9506L8.04785 8.04492"
                stroke="#868686"
                stroke-width="2.62518"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div
          className={`w-full h-[600px] bg-white z-30 fixed transition-all duration-500 ${
            isFixedOpen ? "bottom-0" : "bottom-[-600px]"
          }`}
        >
          {selectedJob && (
            <JobInformationDisplay
              jobIcon={selectedJob.jobIcon}
              jobTitle={selectedJob.jobTitle}
              company={selectedJob.company}
              location={selectedJob.location}
              timePosted={selectedJob.timePosted}
              description={selectedJob.description}
              applyLink={selectedJob.applyLink}
              qualifications={selectedJob.qualifications}
              skills_required={selectedJob.skills_required}
            />
          )}
        </div>
      </div>
    </div>
  );
}
