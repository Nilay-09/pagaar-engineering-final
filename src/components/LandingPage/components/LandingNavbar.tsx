import React, { useState } from 'react';
import LOGO from '../assets/LOGO.svg';
import ShowRegistrationModal from './ShowRegistrationModal';

import MENU from '../assets/Mobile/menu.svg'

const LandingNavbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-screen h-[98px] flex justify-center xl:justify-start items-center xl:px-[112px] rounded-b-2xl md:rounded-none 2xl:px-28 bg-[#F5F1FF] md:bg-white">
        <div className="w-[90%] xl:w-[100%] h-full flex justify-between items-center">
          <div className="w-[124px] h-[49px]">
            <img src={LOGO} alt="Logo" />
          </div>


          <div className="w-fit h-full hidden md:flex justify-between items-center gap-8">
            <div className="flex justify-center items-center gap-6 poppins-medium text-[1rem] leading-7 text-[#201C2D]">
              <div>About</div>
              <div>Privacy Policy</div>
              <div>Features</div>
              <div>Jobs</div>
            </div>
            <div className="flex justify-center items-center gap-6 poppins-bold text-[1rem] leading-7">
              <div className="poppins-bold text-[#4D90F3]">Login</div>
              <div
                className="bg-gradient-to-r from-[#C7C4FF] to-[#926CFF] poppins-semibold text-white px-6 py-2 rounded-xl cursor-pointer"
                onClick={openModal}
              >
                Sign Up
              </div>
            </div>
          </div>

          <div className="w-[44px] md:hidden h-[44px]">
            <img src={MENU} alt="" />
          </div>

        </div>
      </div>
      {isModalOpen && <ShowRegistrationModal closeModalRegByClick={closeModal} />}
    </>
  );
};

export default LandingNavbar;
