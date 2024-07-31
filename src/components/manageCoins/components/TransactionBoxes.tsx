
import GroupIcon from '../Assets/3User.svg';
import SingleCoin from '../Assets/SingleCoinImage.svg'

export default function TransactionBoxes() {
    return (
        <div className="w-full h-[4.375rem] py-1 px-[0.375rem]">
            <div className="w-full h-full flex items-center justify-between ">
                <div className="flex gap-4 items-center">
                    <img src={GroupIcon} alt="" className=''/>
                    <div className="">
                        <div className="poppins-medium text-[#121212] text-[1rem] leading-4">Linked In Post</div>
                        <div className="poppins-regular text-[#5A5A5A] text-[0.875rem] leading-4">20 Jan at 4:20 pm</div>
                    </div>
                </div>

                <div className="flex gap-1 items-center">
                    <span className='poppins-medium text-[1rem] leading-5 text-[#1CCB00]'>+30</span>
                    <img src={SingleCoin} alt="" />
                </div>
            </div>
        </div>
    )
}
