import QUOTE from "../assets/fa-solid_quote-left.png";

export default function VideoSection() {
  return (
    <div className="px-6 md:px-[60px] xl:px-[112px] w-full h-full xl:h-[730px] py-[70px]">
      <div className="flex flex-col justify-center gap-2">
        <h3 className="poppins-bold text-[32px] text-center text-[#201C2D] leading-[48px]">
          Trusted by over 100s
        </h3>
        <p className="poppins-regular text-[18px] text-center text-[#403B4E] leading-[28px] ">
          Our platform offers more than 25+ categories of job opportunities.
        </p>
      </div>

      <div className="w-full h-full xl:h-[506px] py-8">
        <div className="w-full h-full flex flex-col xl:flex-row rounded-2xl outline outline-4 outline-black">
          <div className="w-full xl:w-[60%] h-[370px] xl:h-full bg-yellow-200">



          </div>

          <div className="w-full xl:w-[40%] h-full p-6 xl:px-[53px] xl:py-[61px]">
            <div className="w-full h-full flex flex-col gap-6">
              <img src={QUOTE} alt="" className="w-[54px] h-[50px]" />
              <div className="w-full flex flex-col gap-6 h-full">
                <p className="poppins-medium text-[18px] leading-7 text-[#131313]">
                  has been a game-changer in my job search! The user-friendly
                  interface and powerful search features made it effortless to
                  find relevant job openings.
                </p>
                <h2 className="poppins-semibold text-[24px] leading-9 text-[#0F001A]">
                  Pam barnhill
                </h2>
              </div>
            </div>

            {/* Carausal Button */}
            <div className="w-full h-[40px] flex justify-between items-center">
              <div className="flex gap-3">
                <div className="">A</div>
                <div className="">B</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
