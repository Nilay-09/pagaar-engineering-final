import React from 'react';
import Navbar from "../navbar/Navbar";

import BACK from "./Assets/ep_back.svg";
import COINS from "./Assets/Coins.svg";
import BADGE from "./Assets/badge-coin.svg";
import COMMUNINITY from "./Assets/3User.svg";
import RIGHT_ICON from "./Assets/chevron-right.svg";
import LINKED_IN from "./Assets/information.svg";
import GOLDEN_BATCH from "./Assets/GoldenBatch.svg";
import { useNavigate } from 'react-router-dom';

// Define TypeScript interface for the transaction row props
interface TransactionRowProps {
  imageSrc: string;
  description: string;
  date: string;
  coins: string;
}

// Define the TransactionRow component
const TransactionRow: React.FC<TransactionRowProps> = ({ imageSrc, description, date, coins }) => (
  <div className="flex">
    <div className="flex-1 h-[72px] flex gap-2 items-center poppins-regular text-[16px] leading-[24px] tracking-[-1%] text-[#344055]">
      <img src={imageSrc} alt="" className="w-[32px] h-[32px]" />
      <div>{description}</div>
    </div>
    <div className="w-1/4 flex items-center poppins-regular text-[16px] leading-[24px] tracking-[-1%] text-[#344055] h-[72px]">{date}</div>
    <div className="w-1/4 h-[72px] flex items-center justify-end poppins-bold text-[16px] leading-[24px] tracking-[-1%] text-[#2B825C]">{coins}</div>
  </div>
);


interface Transaction {
  imageSrc: string;
  description: string;
  date: string;
  coins: string;
}

const TransactionList: React.FC = () => {

  const transactions: Transaction[] = Array.from({ length: 10 }).map(() => ({
    imageSrc: COMMUNINITY,
    description: 'Add post on linkedin',
    date: '08 July, 2024',
    coins: '+10',
  }));

  return (
    <div className="w-full h-full flex flex-col border border-[#000000] rounded-lg shadow-table-coin items-center">
      <div className="Header w-full flex min-h-[56px] px-12 bg-[#BDA6FF] rounded-lg">
        <div className="flex-1 h-full poppins-semibold text-[16px] items-center leading-[24px] tracking-[-1%] text-[#121212] flex">Transaction</div>
        <div className="w-1/4 h-full flex poppins-semibold text-[16px] items-center leading-[24px] tracking-[-1%] text-[#121212]">Date</div>
        <div className="w-1/4 h-full flex poppins-semibold text-[16px] items-center leading-[24px] justify-end tracking-[-1%] text-[#121212]">Coins</div>
      </div>

      <div className="w-full px-12 overflow-y-scroll scrollbar-hide">
        {transactions.map((transaction, index) => (
          <TransactionRow
            key={index}
            imageSrc={transaction.imageSrc}
            description={transaction.description}
            date={transaction.date}
            coins={transaction.coins}
          />
        ))}
      </div>
    </div>
  );
};

// Define the ManageCoins component
export default function ManageCoins() {


  const navigate = useNavigate();

  const handleBackClick = () => {
   
    if (window.history.length > 1) navigate(-1); 
    else navigate('/');
    
  };

  return (
    <div>
      <Navbar />

      <div className="w-full h-full flex flex-col px-[60px] pt-[55px]">
        <div>
          <img src={BACK} alt="Back" onClick={handleBackClick} 
            className="cursor-pointer"  />
        </div>

        <div className="w-[262px] h-[78px] rounded-lg mt-8 border-[#EAEAEA] border flex justify-center items-center">
          <div className="flex items-center gap-2 py-1">
            <span className="poppins-medium text-[20px] leading-[18px] text-[#30283D]">
              Total{" "}
            </span>
            <span className="poppins-bold text-[24px] leading-[18px] text-[#30283D]">
              100 <span className="poppins-regular">Coins</span>
            </span>
            <img src={COINS} alt="" />
          </div>
        </div>

        <div className="w-full h-[660px] mt-[24px] flex flex-col lg:h-[500px] lg:flex-row-reverse gap-8">

          <div className="w-full h-full lg:h-[330px] py-6 border flex flex-col items-center border-black rounded-lg shadow-Manage-coins">
            <div className="w-[90%] h-full">
              <div className="poppins-bold text-[20px] leading-[30px] text-[#344055] tracking-[-2.4%] flex justify-between items-center">
                <span>Earn More Coins</span>
                <span className="w-[52px] h-[52px] p-3 rounded-full border border-[#E2E8F0]">
                  <img src={BADGE} alt="" className="w-full h-full object-cover" />
                </span>
              </div>

              <div className="w-full h-[144px]">
                <div className="w-full h-1/2 flex justify-between gap-4 items-center">
                  <div className="flex h-full items-center">
                    <div className="w-1 h-[60%] bg-[#8D65FF]"></div>
                    <div className="ml-5 mr-[13px]">
                      <img src={COMMUNINITY} alt="" />
                    </div>
                    <div className="poppins-semibold text-[16px] leading-[24px] text-[#344055]">
                      Refer a friend.
                    </div>
                  </div>
                  <div className="w-6 h-6">
                    <img src={RIGHT_ICON} alt="" />
                  </div>
                </div>

                <div className="w-full h-1/2 flex justify-between gap-4 items-center">
                  <div className="flex h-full items-center">
                    <div className="w-1 h-[60%] bg-[#0072DC]"></div>
                    <div className="ml-5 mr-[13px]">
                      <img src={LINKED_IN} alt="" />
                    </div>
                    <div className="poppins-semibold text-[16px] leading-[24px] text-[#344055]">
                      Add post on linkedIn.
                    </div>
                  </div>
                  <div className="w-6 h-6">
                    <img src={RIGHT_ICON} alt="" />
                  </div>
                </div>
              </div>

              <div className="w-full h-fit">
                <div className="w-full mt-4 flex items-center gap-[0.625rem]">
                  <img src={GOLDEN_BATCH} alt="Golden Batch" />
                  <div className="poppins-regular w-full text-[0.875rem] leading-5 text-[#636363]">
                    Pagaar provides you with{" "}
                    <span className="poppins-bold text-[#926CFF]">
                      10 coins
                    </span>{" "}
                    every month to continue your job hunt.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TransactionList />
        </div>
      </div>
    </div>
  );
}
