import Navbar from "../navbar/Navbar";
import Search from "../../assets/dashboard/search-normal.svg";
import Cross from "../../assets/dashboard/cross.svg";
import { useEffect, useState } from "react";
import './JobDrawer.css';
import JobListingCard from "./JobListingCard";
import JobInformationDisplay from "./JobInformationDisplay";
import { useNavigate } from "react-router-dom"

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useSearch } from "../../contexts/SearchContext";

type Filter = { label: string; value: string };

export default function JobDrawer() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [jobData, setJobData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [facets, setFacets] = useState<any>({});
  const [filterString, setFilterString] = useState<string>("locations/any(location: location eq 'MUMBAI')");
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);



  // const { searchTerm } = useSearch();
  const navigate = useNavigate();




  const { searchTerm, setSearchTerm } = useSearch();

  const handleClick = (event: React.MouseEvent<HTMLElement>, label: string) => {
    if (label === "All") {
      setActiveTab(label);
      setAnchorEl(null); // Ensure no dropdown opens for "All"
    } else {
      if (anchorEl && activeTab === label) {
        handleMenuClose(); // Close the menu if it's already open for the same label
      } else {
        setActiveTab(label);
        setAnchorEl(event.currentTarget); // Open the menu
        setMenuWidth(event.currentTarget.clientWidth); // Set the width to prevent glitch
      }
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleMenuItemClick = (label: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentSelections = prev[label] || [];
      if (currentSelections.includes(value)) {
        return { ...prev, [label]: currentSelections.filter((item) => item !== value) };
      } else {
        return { ...prev, [label]: [...currentSelections, value] };
      }
    });
  };

  useEffect(() => {
    const FetchAllJobData = async () => {
      const url = "https://pagaar-backend.azurewebsites.net/search";

      const payload = {
        search: searchTerm,
        facets: ["locations", "yoe", "sub_category", "category", "company,count:100", "tag", "type", "date_posted"],
        count: true,
        order_by: "date_posted desc",
        query_type: "simple",
        search_mode: "any",
        skip: 0,
        top: 55,
      };

      console.log("Payload being sent to API:", payload);

      const headers = {
        "X-User-Id": "pratik",
        "X-Request-Id": "1111",
        "Content-Type": "application/json",
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error! status: ${response.status}`, errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setJobData(data.result);

        // Automatically select the first job
        if (data.result && data.result.length > 0) {
          setSelectedJob(data.result[0]);
        }

        setFacets((prevFacets: any) => {
          const mergedFacets = { ...prevFacets };
          Object.keys(data.facets).forEach((key) => {
            mergedFacets[key] = { ...mergedFacets[key], ...data.facets[key] };
          });
          return mergedFacets;
        });
      } catch (error: any) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    };

    FetchAllJobData();
  }, [filterString, searchTerm]);

  const dropdownOptions: {
    Category: string[];
    Role: string[];
    Company: string[];
    Locations: string[];
  } = {
    Category: ["Category1", "Category2", "Category3"],
    Role: ["Role1", "Role2", "Role3"],
    Company: ["Company1", "Company2", "Company3"],
    Locations: ["Location1", "Location2", "Location3"],
  };

  return (
    <div>
      <Navbar />

      {/* SearchBar */}
      <div className="w-full h-[5.3125rem] px-6 py-4 flex lg:hidden">
        <div className="w-full h-full items-center flex">
          <div className="w-full h-full flex rounded-lg border-[#000] border-[1px] items-center">
            {/* Search Icon */}
            <img src={Search} alt="Search" className="ml-[25px]" />

            {/* Input */}
            <input
              type="text"
              className="flex-1 py-2 px-4 bg-transparent outline-none font-bold text-[#555770] satoshi-variable"
              placeholder="Search Company, Job"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Clear Button */}
            <img src={Cross} alt="Clear" className="mr-[10px]"  onClick={(e) => setSearchTerm("")} />
          </div>
        </div>
      </div>

      <div className="w-full h-[6.5rem] flex justify-start px-6 lg:px-0 md:justify-center items-center py-7">
        <div className="w-full h-full py-1 flex md:justify-center scrollbar-hide overflow-auto gap-4">
          {["All", "Category", "Role", "Company", "Locations"].map((label) => (
            <Box
              key={label}
              sx={{
                px: 2,
                py: 1,
                gap: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '8px',
                border: '1.6px solid #000',
                cursor: 'pointer',
                bgcolor: activeTab === label ? '#C5C2F2' : 'transparent',
                boxShadow: activeTab === label ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                width: 'auto',
              }}
              onClick={(event) => handleClick(event, label)}
            >
              <span>{label}</span>
              {label !== 'All' && (
                <KeyboardArrowDown sx={{ ml: 1 }} />
              )}
              {label !== 'All' && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && activeTab === label}
                  onClose={handleMenuClose}
                  PaperProps={{
                    style: {
                      width: menuWidth, // Keep the width consistent to avoid the glitch
                    },
                  }}
                  keepMounted
                >
                  {(dropdownOptions[label as keyof typeof dropdownOptions] || []).map((option, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleMenuItemClick(label, option)}
                    >
                      <Checkbox
                        checked={selectedFilters[label]?.includes(option) || false}
                        onChange={() => handleMenuItemClick(label, option)}
                      />
                      <ListItemText primary={option} />
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ))}
        </div>
      </div>

      <div className="w-full h-[600px] flex gap-6 px-[1.5rem] lg:px-[3.75rem] mb-6">
        {/* Job listing */}
        <div className="w-[37%] flex h-full overflow-y-auto scrollbar-hide flex-col gap-4">
          {loading ? (
            <div>Loading...</div>
          ) : jobData.length > 0 ? (
            jobData.map((job, index) => (
              <JobListingCard
                key={index}
                onClick={() => {
                  setSelectedJob(job);
                }}
                jobTitle={job.title}
                companyName={job.company}
                location={job.locations}
                time={job.date_posted}
                jobIcon={job.image_url}
              />
            ))
          ) : (
            <div>No jobs found.</div>
          )}
        </div>

        {/* Job Information Display */}
        {selectedJob && (
          <JobInformationDisplay
            jobIcon={selectedJob.image_url}
            jobTitle={selectedJob.title}
            company={selectedJob.company}
            location={selectedJob.locations}
            timePosted={selectedJob.date_posted}
            description={selectedJob.descriptions}
            applyLink={selectedJob.link}
            qualifications={selectedJob.qualifications}
            skills_required={selectedJob.skills_required}
          />
        )}
      </div>
    </div>
  );
}
