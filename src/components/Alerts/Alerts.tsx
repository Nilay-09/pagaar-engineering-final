import PLAYSTORE from './Assets/mage_playstore.svg'
import APPSTORE from './Assets/ri_apple-fill.svg'
import QR from './Assets/QR.svg'


export default function Alerts() {

    return (
        <div className="fixed inset-0 bg-[#00000070] flex items-center justify-center -z-20">
            <div className="w-[320px] sm:w-[377px] h-fit bg-white  rounded-2xl flex flex-col items-center justify-center">
                <div className="w-full h-[17.5rem]"></div>
                <div className="p-[20px] poppins-bold text-[#28293D] text-[20.37px] leading-6 text-center">
                    Download the app to set an alert
                </div>
                <div className="w-full h-[78px] py-[1.25rem] px-7 flex justify-center gap-[0.375rem]">

                    <div className="w-full flex justify-center items-center rounded-[2.25rem] h-full
                                    poppins-medium text-[14px] leading-4 text-center gap-[7px]">
                        <img src={PLAYSTORE} alt="" />
                        <div className="">Playstore</div>
                    </div>
                    <div className="w-full flex justify-center items-center rounded-[2.25rem] h-full
                                    poppins-medium text-[14px] leading-4 text-center gap-[7px]">
                        <img src={APPSTORE} alt="" />
                        <div className="">App Store</div>
                    </div>
                </div>

                <div className="w-full h-[9rem] hidden sm:flex justify-center py-[0.625rem]">
                    <div className="w-[19.5rem] h-full border-[#E6DDFF] flex justify-start items-center rounded-2xl border">
                        <img src={QR} alt="" className='mx-4' />
                        <div className="text-[#28293D] poppins-bold text-[1rem] leading-5">Scan QR Code </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
