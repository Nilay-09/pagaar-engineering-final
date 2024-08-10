import React, { useState, useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function HavingIssues() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [customMessage, setCustomMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const navigate = useNavigate();

  const issues = [
    "Not able to find the preferred company to apply (Please put the company in the below textbox which you want to recieve the opening and we will notify you as soon as it's added on Pagaar)",
    "Facing a bug, not able to navigate through the app.",
    "I have sufficient coins, still not able to set an alert on the app",
    "I am getting too many notifications, please help me manage these notifications",
    "I am not getting any notification even after setting up the alert, please help me here.",
  ];

  useEffect(() => {
    // Enable submit button only if textarea is not empty
    setIsSubmitEnabled(
      customMessage.trim().length > 0 || selectedIssues.length > 0
    );
  }, [customMessage, selectedIssues]);

  const handleCheckboxChange = (issue: string) => {
    setSelectedIssues((prevIssues) => {
      if (prevIssues.includes(issue)) {
        return prevIssues.filter((i) => i !== issue);
      } else {
        return [...prevIssues, issue];
      }
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSubmitEnabled) return;

    // Future scope for submission logic
  };

  const handleBackClick = () => {
    if (submitted) {
      setSubmitted(false);
    } else {
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="w-screen mb-[50px]">
        <div className="w-full h-[5.625rem] flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dazyotvdk/image/upload/v1721222463/LogoFinal_pdlgek.png"
            alt=""
            className="w-[7.75rem] h-[3.0625rem]"
            onClick={handleLogoClick}
          />
        </div>

        <div className="w-full h-fit flex flex-col items-center justify-center my-[3rem] px-8">
          <div
            className="flex gap-1 items-center justify-start w-full max-w-[1024px] min-w-[310px] cursor-pointer"
            onClick={handleBackClick}
          >
            <IoChevronBack /> BACK
          </div>
          <div className="w-full max-w-[1024px] border rounded-lg border-[#000] shadow-having-issues min-w-[310px] h-full mt-10 px-8 py-9">
            <div className="poppins-medium text-[20px] md:font-semibold md:text-[30px] leading-[42px] md:leading-[45px] text-[#28293D]">
              Having issue in:
            </div>

            <div className="flex flex-col gap-[24px] mt-6">
              {issues.map((issue, index) => (
                <div key={index} className="flex gap-2 md:gap-4 items-start">
                  <input
                    type="checkbox"
                    name={`issue${index}`}
                    id={`issue${index}`}
                    className="mt-[5px] checkbox"
                    onChange={() => handleCheckboxChange(issue)}
                  />
                  <label
                    htmlFor={`issue${index}`}
                    className="poppins-regular text-[14px] md:text-[16px] leading-[24px] text-[#28293D]"
                  >
                    {issue}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-screen h-fit flex justify-center">
          <div className="mt-4 w-full flex flex-col px-8 lg:px-0 max-w-[1024px] self-start">
            <h3 className="poppins-medium text-[20px] leading-[42px] text-[#28293D]">
              Describe<span className="text-[#FD2256]">*</span>
            </h3>
            <textarea
              value={`${selectedIssues.join("\n")}${
                selectedIssues.length > 0 && customMessage ? "\n" : ""
              }${customMessage}`}
              placeholder="Describe in 100 characters..."
              className="w-full min-h-[134px] border border-[#000000] shadow-having-issues p-6 placeholder:text-[#8F90A6] placeholder:text-[16px] placeholder:leading-6 poppins-regular focus:ring-0 scrollbar-hide"
              onChange={handleTextAreaChange}
            />

            <button
              className={`mt-6 rounded w-full h-[64px] border-2 border-black text-[20px] leading-8 text-black poppins-medium justify-center items-center flex 
                                ${
                                  isSubmitEnabled
                                    ? "bg-[#BDA6FF] cursor-pointer"
                                    : "bg-[#BABABA] cursor-not-allowed"
                                }`}
              onClick={handleSubmit}
              disabled={!isSubmitEnabled}
            >
              Submit Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
