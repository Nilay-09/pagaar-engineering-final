import { useNavigate } from "react-router-dom";
import BACK_ARROW from '../Assets/ep_back.svg';
import TransactionBoxes from "./TransactionBoxes";
import { useEffect } from "react";

export default function TransactionsList() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };
    return (
        <div className="relative">
            <div className="w-full relative h-[6rem] flex items-end px-6">
                <div className="absolute top-1/2" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
                    <img src={BACK_ARROW} alt="Go back" />
                </div>
            </div>

            <div className="py-8 w-full px-6 mb-[8.75rem]">
                <div className="w-full h-full">
                    <div className="text-[#28293D] poppins-semibold text-[1.25rem] leading-[1.875rem]">Transactions</div>
                    <div className="my-6">
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                        <TransactionBoxes />
                    </div>
                </div>
            </div>
        </div>
    )
}
