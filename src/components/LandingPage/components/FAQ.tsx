import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons
import _FAQ from "../assets/FAQ.png";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="w-full">
      <div
        className={`poppins-semibold text-[20px] leading-[30px] text-[#555770] cursor-pointer h-fit flex items-center justify-between ${
          isOpen ? "pb-4" : ""
        }`}
        onClick={onClick}
      >
        <span>{question}</span>
        <div className=" self-start">{isOpen ? <FaMinus /> : <FaPlus />}</div>
      </div>
      {isOpen && (
        <div className="mt-2 poppins-regular text-[18px] leading-[27px] text-[#555770]">
          {answer}
        </div>
      )}
      <hr className="my-4" />
    </div>
  );
};
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Can I customise the frequency of job alert notifications?",
      answer:
        "What is the advantage of setting job alerts on your platform What is the advantage of setting job alerts on your platform.",
    },
    {
      question: "Can I customise the frequency of job alert notifications?",
      answer:
        "What is the advantage of setting job alerts on your platform What is the advantage of setting job alerts on your platform.",
    },
    {
      question: "Can I customise the frequency of job alert notifications?",
      answer:
        "What is the advantage of setting job alerts on your platform What is the advantage of setting job alerts on your platform.",
    },
    {
      question: "Can I customise the frequency of job alert notifications?",
      answer:
        "What is the advantage of setting job alerts on your platform What is the advantage of setting job alerts on your platform.",
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full xl:h-[778px] px-5 md:px-[60px] xl:px-[112px] xl:py-[70px]">
      <div className="w-full h-full outline outline-4 outline-black rounded-2xl flex flex-col xl:flex-row xl:gap-[87px] items-center justify-center py-7 xl:py-[56px]">
        <div className="w-full xl:w-[250px] px-6 xl:px-0 flex flex-col gap-6">
          <img src={_FAQ} alt="" className="w-[240px] h-[240px] self-center md:self-start" />
          <div className="flex-grow w-full">
            <h3 className="w-full poppins-semibold text-[32px] leading-[36.25px] text-[#4D4D4D]">
              <span className="block lg:inline">Any questions?</span>
              <span className="block lg:inline">We got you.</span>
            </h3>

            <p className="poppins-regular text-[16px] leading-[24px] mt-4 text-[#555770]">
              What is the advantage of setting job alerts on your platform.
            </p>
            <div className="poppins-medium text-[20px] leading-[30px] mt-6 text-[#4D4D4D]">
              More FAQs
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[600px] h-full flex flex-col justify-center p-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
