import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import COINS from "./Assets/Coins.svg";
import USERS from "./Assets/User.svg";
import LINKEDIN_ICON from "./Assets/information.svg";
import GOLDEN_BATCH from "./Assets/GoldenBatch.svg";
import BACK_ARROW from "./Assets/ep_back.svg";
import CLOSECROSS from "./Assets/close-circle.svg";

import TransactionBoxes from "./components/TransactionBoxes";
import BottomSheet from "./components/BottomSheet";
import LearnMoreReferal from "./components/LearnMoreReferal";
import LinkedInPostSubmit from "./components/LinkedInPostSubmit";

export default function MobileManageCoins() {
  const navigate = useNavigate();
  const [isFixedOpen, setFixedOpen] = useState(false);
  const [bottomSheetContent, setBottomSheetContent] =
    useState<React.ReactNode>(null);
  const [bottomSheetHeight, setBottomSheetHeight] = useState("650px");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleViewMoreClick = () => {
    navigate("/profile/manage-coins/transactions");
  };

  const openBottomSheet = (content: React.ReactNode, height: string) => {
    setBottomSheetContent(content);
    setBottomSheetHeight(height);
    setFixedOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeBottomSheet = () => {
    setFixedOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full">
      <div className="w-full relative bg-[#C7C4FF] h-[8.375rem] flex items-end px-6">
        <div
          className="absolute top-1/2"
          onClick={handleBackClick}
          style={{ cursor: "pointer" }}
        >
          <img src={BACK_ARROW} alt="Go back" />
        </div>
        <div className="flex justify-center items-baseline translate-y-1/2 w-full">
          <div className="w-[13.75rem] h-[4.5rem] bg-white border border-[#28293D] flex py-4 px-[0.9375rem] items-center rounded-lg">
            <img src={COINS} alt="Coins" />
            <div className="poppins-semibold w-[6rem] ml-4 text-[1rem] leading-[1.5rem] flex items-center text-[#5E5E6E]">
              Total Coin
            </div>
            <div className="poppins-bold text-[#7C3EFF] text-[1.625rem] leading-10">
              10
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[18.75rem] mt-[4.375rem] px-[1.5rem]">
        <div className="w-full h-full border border-[#30283D] rounded-[8px] px-[1rem] py-[0.625rem]">
          {/* Refer A Friend */}
          <div className="w-full flex justify-between items-center h-[3.25rem]">
            <div className="flex items-center gap-4">
              <img src={USERS} alt="Users" />
              <span className="poppins-regular text-[#30283D] text-[1.125rem] leading-[1.5rem]">
                Refer a friend.
              </span>
            </div>
            <div className="poppins-bold text-[#4DCA00] text-[1.5rem] leading-6">
              +30
            </div>
          </div>
          <div className="mt-2 w-full flex poppins-medium text-[#28293D] text-[0.9325rem] gap-[0.625rem] leading-[1.3987rem] justify-between">
            <div
              className="border border-[#000] w-full flex justify-center items-center h-[3.125rem] rounded shadow-profile-button"
              onClick={() => openBottomSheet(<LearnMoreReferal />, "450px")}
            >
              Learn More
            </div>
            <div
              className="border border-[#000] w-full flex justify-center items-center h-[3.125rem] bg-[#C5C2F2] rounded shadow-profile-button"
              onClick={() => openBottomSheet(<LinkedInPostSubmit />, "650px")}
            >
              Invite Others
            </div>
          </div>
          <div className="mt-7 mb-3 border border-[#E2E2E2]"></div>
          <div className="w-full flex justify-between items-center h-[3.25rem]">
            <div className="flex items-center gap-4">
              <img src={LINKEDIN_ICON} alt="LinkedIn Icon" />
              <span className="poppins-regular text-[#30283D] text-[1.125rem] leading-[1.5rem]">
                Add post on LinkedIn.
              </span>
            </div>
            <div className="poppins-bold text-[#4DCA00] text-[1.5rem] leading-6">
              +30
            </div>
          </div>
          <div className="mt-2 w-full flex poppins-medium text-[#28293D] text-[0.9325rem] gap-[0.625rem] leading-[1.3987rem] justify-between">
            <div
              className="border border-[#000] w-full flex justify-center items-center h-[3.125rem] bg-[#C5C2F2] rounded shadow-profile-button"
              onClick={() => openBottomSheet(<LinkedInPostSubmit />, "650px")}
            >
              Learn More
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit px-[1rem]">
        <div className="w-full h-[5rem] rounded-3xl border border-[#EAEAEA] mt-8 flex items-center p-4 gap-[0.625rem]">
          <img src={GOLDEN_BATCH} alt="Golden Batch" />
          <div className="poppins-regular w-full text-[0.875rem] leading-6 text-[#636363]">
            Pagaar provides you with 10 coins every month to continue your job
            hunt.
          </div>
        </div>
      </div>

      {/* Transaction Box */}
      <div className="py-8 w-full h-[22rem] px-6 mb-[8.75rem]">
        <div className="w-full h-full">
          <div className="text-[#28293D] poppins-semibold text-[1.25rem] leading-[1.875rem]">
            Transactions
          </div>
          <div className="my-6">
            <TransactionBoxes />
            <TransactionBoxes />
            <TransactionBoxes />
          </div>
          <div
            className="text-[#6D77EF] poppins-semibold text-[1rem] text-center w-full"
            onClick={handleViewMoreClick}
            style={{ cursor: "pointer" }}
          >
            View More
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div
          className={`w-full h-screen fixed inset-0 z-10 ${
            isFixedOpen ? "flex bg-[#22222252]" : "hidden"
          }`}
          onClick={closeBottomSheet}
        ></div>

        <div
          onClick={closeBottomSheet}
          className={`w-full bg-transparent z-20 fixed flex justify-center items-center transition-all duration-700 ${
            isFixedOpen
              ? bottomSheetHeight === "450px"
                ? "bottom-[450px]"
                : "bottom-[700px]"
              : "bottom-[-9650px]"
          }`}
        >
          <span className="bg-[#FFFFFF99] rounded-full p-1 w-[2.5rem] h-[2.5rem] flex justify-center items-center">
            <img
              src={CLOSECROSS}
              alt="Close"
              className="rounded-full object-cover"
            />
          </span>
        </div>

        <div
          className={`w-full bg-white z-30 fixed transition-all duration-500 ${
            isFixedOpen
              ? `h-[${bottomSheetHeight}] bottom-0`
              : "bottom-[-9600px]"
          }`}
        >
          <BottomSheet>{bottomSheetContent}</BottomSheet>
        </div>
      </div>
    </div>
  );
}
