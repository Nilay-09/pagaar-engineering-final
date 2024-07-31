import { useState } from "react";
import CHECK_RIGHT from '../Assets/lets-icons_done-ring-round.svg';

export default function LinkedInPostSubmit() {
    const instructions = [
        "Write about your experience with the Pagaar App on LinkedIn.",
        "Once posted, please share your LinkedIn ID with us.",
        "Our team will verify your post and provide you with 30 Pagaar Coins."
    ];

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div className="overflow-y-scroll scrollbar-hide w-full h-full">
            <div className="px-6">
                <div className="poppins-medium text-[1.25rem] leading-[2.625rem] text-[#28293D]">
                    How does LinkedIn share work?
                </div>
                <div className="poppins-regular mt-6 text-[#28293D] text-[0.875rem] leading-6">
                    {instructions.map((instruction, index) => (
                        <div key={index} className="flex gap-1 mt-4">
                            <div>{index + 1}.</div>
                            <div>{instruction}</div>
                        </div>
                    ))}
                    <div className="flex gap-2 items-baseline mt-2">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.218621" y="0.218621" width="7.43313" height="7.43313" rx="3.71656" fill="black" stroke="black" stroke-width="0.437243" />
                        </svg>
                        <div>Note: You can only place a request once every 15 days.</div>
                    </div>
                </div>
            </div>


            {isSubmitted ? (
                <div className="px-4 w-full">
                    <div className="w-full h-fit bg-[#EEEEEE] border-black border mt-10 py-4">
                        <div className="flex items-center">
                            <div className="mx-4">
                                <img src={CHECK_RIGHT} alt="" className="border-black border" />
                            </div>
                            <div className="poppins-medium text-[1.25rem] leading-6 text-[#28293D]">Your request has been submitted. </div>
                        </div>
                        <div className="mt-[0.5rem] text-center poppins-regular text-[#28293D]">Our team will confirm your post on Linkedin about Pagaar, and will provide you with 30 Pagaar coins.</div>
                    </div>
                </div>
            ) : (
                <div className="mt-6">
                    <div className="poppins-medium text-[1.25rem] px-6 leading-[2.625rem] text-[#28293D]">
                        Enter your LinkedIn ID:
                    </div>
                    <div className="mt-6 px-[calc(1.5rem-4px)] py-2 w-full h-[4.875rem]">
                        <input
                            type="text"
                            placeholder="www.linkedin.com/in/name"
                            className="w-full h-full poppins-regular shadow-linkedIn-button rounded border-black border-[3.11px] px-6 py-5 focus:outline-none placeholder-[#979797] text-[1rem] leading-6"
                        />
                        <div
                            onClick={handleSubmit}
                            className="w-full h-[3.9375rem] mb-1 bg-[#BDA6FF] border-[0.125rem] border-black flex justify-center items-center 
                                    poppins-medium mt-[60px] text-[1.25rem] text-black leading-7">Verify my post</div>
                    </div>
                </div>
            )}
        </div>
    );
}
