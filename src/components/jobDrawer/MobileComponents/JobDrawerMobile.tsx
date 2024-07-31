

import { useEffect, useState } from "react";

import JobListingCardMobile from "./JobListingCardMobile";
import JobInformationDisplay from "../JobInformationDisplay";
import { useNavigate } from "react-router-dom";
import FilterBottomSheet from "./FilterBottomSheet";

export default function JobDrawerMobile() {
    const [activeTab, setActiveTab] = useState<string>("All");
    const [isFixedOpen, setFixedOpen] = useState(false);
    const [isFilterFixedOpen, setFilterFixedOpen] = useState(false);

    const [jobData, setJobData] = useState<any[]>([]);
    const [selectedJob, setSelectedJob] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const [groupedJobData, setGroupedJobData] = useState<any[]>([]);
    const [facets, setFacets] = useState<any>({});


    const handleClick = (label: string) => {
        setActiveTab(label);
        if (label !== "All") {
            setFilterFixedOpen(!isFilterFixedOpen);
        }
    };

    useEffect(() => {
        const FetchAllJobData = async () => {
            const url = 'https://pagaar-backend.azurewebsites.net/search';
            const payload = {
                "filter": "locations/any(location: location eq 'MUMBAI')",
                "facets": [
                    "category",
                    "sub_category",
                    "company",
                    "locations"
                ],
                "skip": 0,
                "order_by": "date_posted desc",
                "top": 35
            };

            const headers = {
                'X-User-Id': 'pratik',
                'X-Request-Id': '1111',
                'Content-Type': 'application/json'
            };

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setJobData(data.result);

                setFacets(data.facets);
                const groupedData = groupByCategory(data.result);
                console.log(groupedData, "---------------------------")
                setGroupedJobData(groupedData);

            } catch (error: any) {
                setError(error.message ? error.message : String(error));
                console.error('Error fetching job data:', error);
            } finally {
                setLoading(false);
            }
        };

        FetchAllJobData();


    }, []);



    const groupByCategory = (data: any[]) => {
        const groupedData: { [key: string]: any[] } = {};

        data.forEach(item => {
            const category = item.category;
            if (!groupedData[category]) {
                groupedData[category] = [];
            }
            groupedData[category].push(item);
        });

        const groupedArray = Object.keys(groupedData).map(category => ({
            category,
            count: groupedData[category].length,
            jobs: groupedData[category]
        }));

        return groupedArray;
    };


    const navigate = useNavigate();

    return (
        <div className="z-50">

            <div className="w-full px-6 mt-[3.125rem] mb-[1.25rem]" onClick={() => navigate(-1)}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.875 16.875H30.375C30.6734 16.875 30.9595 16.9935 31.1705 17.2045C31.3815 17.4155 31.5 17.7016 31.5 18C31.5 18.2984 31.3815 18.5845 31.1705 18.7955C30.9595 19.0065 30.6734 19.125 30.375 19.125H7.875C7.57663 19.125 7.29048 19.0065 7.07951 18.7955C6.86853 18.5845 6.75 18.2984 6.75 18C6.75 17.7016 6.86853 17.4155 7.07951 17.2045C7.29048 16.9935 7.57663 16.875 7.875 16.875Z" fill="black" />
                    <path d="M8.34081 18.0004L17.6716 27.3289C17.8828 27.5402 18.0015 27.8267 18.0015 28.1254C18.0015 28.4242 17.8828 28.7107 17.6716 28.9219C17.4603 29.1332 17.1738 29.2519 16.8751 29.2519C16.5763 29.2519 16.2898 29.1332 16.0786 28.9219L5.95356 18.7969C5.84879 18.6924 5.76567 18.5683 5.70895 18.4316C5.65224 18.2949 5.62305 18.1484 5.62305 18.0004C5.62305 17.8525 5.65224 17.7059 5.70895 17.5693C5.76567 17.4326 5.84879 17.3084 5.95356 17.2039L16.0786 7.07894C16.2898 6.8677 16.5763 6.74902 16.8751 6.74902C17.1738 6.74902 17.4603 6.8677 17.6716 7.07894C17.8828 7.29019 18.0015 7.5767 18.0015 7.87544C18.0015 8.17419 17.8828 8.4607 17.6716 8.67194L8.34081 18.0004Z" fill="black" />
                </svg>
            </div>

            <div className="w-full h-[4.75rem] flex justify-start px-6 items-center py-3">
                <div className="w-full h-full py-1 flex scrollbar-hide overflow-auto gap-4">
                    {[
                        "All",
                        "Category",
                        "Role",
                        "Company",
                        "Locations",
                    ].map((label) => (
                        <div
                            key={label}
                            className={`px-6 py-2 flex poppins-regular justify-center text-nowrap items-center rounded-xl border-[1.6px] border-[#000]  ${activeTab === label ? "bg-[#C5C2F2] shadow-navbar-button" : ""
                                } cursor-pointer`}
                            onClick={() => handleClick(label)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>

            {/* Listing section */}
            <div className="w-full h-fit p-6 mb-32">
                <div className="w-full h-full">
                    <div className="poppins-semibold text-[1.25rem] leading-[1.875rem] text-[#28293D]">
                        {`${jobData.length} `}
                        <span>Openings</span>
                    </div>
                    <div className="mt-6 flex flex-col gap-6">
                        {loading ? (
                            <div>Loading...</div> // Show loading state
                        ) : error ? (
                            <div>Error: {error}</div> // Show error message if any
                        ) : jobData && jobData.length > 0 ? (
                            jobData.map((job, index) => (
                                <JobListingCardMobile
                                    key={index}
                                    onClick={() => {
                                        setSelectedJob(job);
                                        setFixedOpen(true);
                                    }}
                                    jobTitle={job.title}
                                    companyName={job.company}
                                    location={job.locations.join(", ")}
                                    time={job.date_posted}
                                    jobIcon={job.image_url}
                                />
                            ))
                        ) : (
                            <div>No job data available</div> // Show no data message
                        )}
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <div className={`w-full h-screen fixed inset-0 z-10 ${isFixedOpen ? 'flex bg-[#22222252]' : 'hidden'}`}
                    onClick={() => setFixedOpen(false)}></div>

                <div
                    onClick={() => setFixedOpen(false)}
                    className={`w-full h-[20px] bg-transparent z-20 fixed flex justify-center items-center transition-all duration-700  ${isFixedOpen ? 'bottom-[650px]' : 'bottom-[-650px]'}`}>
                    <span className="bg-[#FFFFFF99] rounded-full p-1 w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4037 13.7144L17.9534 8.04492" stroke="#868686" stroke-width="2.62518" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.04785 17.9525L12.8607 13.1396" stroke="#868686" stroke-width="2.62518" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.9535 17.9506L8.04785 8.04492" stroke="#868686" stroke-width="2.62518" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                <div className={`w-full h-[600px] bg-white z-30 fixed transition-all duration-500 ${isFixedOpen ? 'bottom-0' : 'bottom-[-600px]'}`}>
                    {selectedJob && (
                        <JobInformationDisplay
                            jobIcon={selectedJob.image_url}
                            jobTitle={selectedJob.title}
                            company={selectedJob.company}
                            location={selectedJob.locations.join(", ")}
                            timePosted={selectedJob.date_posted}
                            description={selectedJob.descriptions.join(", ")}
                            applyLink={selectedJob.link}
                        />
                    )}
                </div>
            </div>



            <div className="lg:hidden">
                <div className={`w-full h-screen fixed inset-0 z-10 ${isFilterFixedOpen ? 'flex bg-[#22222252]' : 'hidden'}`}
                    onClick={() => setFilterFixedOpen(false)}></div>

                <div
                    onClick={() => setFilterFixedOpen(false)}
                    className={`w-full h-[20px] bg-transparent z-20 fixed flex justify-center items-center transition-all duration-700  ${isFilterFixedOpen ? 'bottom-[490px]' : 'bottom-[-650px]'}`}>
                    <span className="bg-[#FFFFFF99] rounded-full p-1 w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4037 13.7144L17.9534 8.04492" stroke="#868686" stroke-width="2.62518" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.04785 17.9525L12.8607 13.1396" stroke="#868686" stroke-width="2.62518" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.9535 17.9506L8.04785 8.04492" stroke="#868686" stroke-width="2.62518" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                <div className={`w-full h-[450px]  bg-white z-30 fixed rounded-lg border border-black transition-all duration-500 ${isFilterFixedOpen ? 'bottom-0' : 'bottom-[-600px]'}`}>
                    <FilterBottomSheet
                        activeTab={activeTab}
                        facets={facets}
                    />
                </div>
            </div>
        </div>
    );
}
