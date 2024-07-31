import LOGO from "../../assets/dashboard/LogoFinal.png";
import Search from "../../assets/dashboard/search-normal.svg";
import Cross from "../../assets/dashboard/cross.svg";

import Coins from "../../assets/dashboard/Coins.svg";
import Alerts from "../../assets/dashboard/alert.svg";

import TommyVercetti from "../../assets/dashboard/carlo.png";



import { useLocation } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {

  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';


  return (

      <div className="w-screen h-[72px] bg-[#F5F1FF] rounded-b-[1.5rem] px-[1.375rem] sm:px-[3.75rem] py-4">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full h-full flex">
            <div className="w-[105px] h-10">
              <img src={LOGO} alt="" className="w-full h-full" />
            </div>

            <div className="flex-1 h-full flex justify-end">
              <div className="flex gap-[1.5rem]">

                {/* Searchbar */}
                <div className={`flex-1 h-full items-center  ${isDashboard ? "hidden" : "flex"}`}>
                  <div className="hidden lg:w-[360px] h-10 bg-white rounded-lg border-[#000] border-[1px] lg:flex items-center">
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



                <div className="w-[5.75rem] hidden h-[2.5rem] bg-white sm:flex justify-center items-center border-[#28293D] border-[1px] gap-2 rounded-lg satoshi-variable font-bold text-[#555770] ">
                  <span className=" w-5 h-5">
                    <img src={Alerts} alt="" />
                  </span>
                  <span>Alerts</span>
                </div>

                {/* Coins */}
                <div className="w-[5.75rem] h-[2.5rem] bg-white flex justify-center items-center border-[#28293D] border-[1px] gap-2 rounded-lg poppins-bold text-[#555770] ">
                  <span className=" w-[2.3125rem] h-[1.875rem]">
                    <img src={Coins} alt="" />
                  </span>
                  <span>10</span>
                </div>

              </div>
              <div className="hidden sm:flex w-10 h-[90%] ml-8 rounded-[100%] self-center border-[#28273C] border-[1px] shadow-navbar-icon">
                <img
                  src={TommyVercetti}
                  alt=""
                  className="w-full h-full rounded-[100%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
