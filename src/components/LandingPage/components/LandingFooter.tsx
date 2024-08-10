import LOGO from "../assets/LOGO.svg";

interface MenuSectionProps {
  title: string;
  items: string[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => (
    <div className="flex flex-col gap-[13px]">
      <h3 className="poppins-bold text-[18px] leading-[28.8px] text-[#252A34]">
        {title}
      </h3>
      <div className="flex flex-col gap-[14px] flex-grow justify-evenly poppins-regular text-[14px] leading-5 text-[#0C121E]">
        {items.map((item, index) => (
          <span key={index} className="flex-grow">{item}</span>
        ))}
      </div>
    </div>
  );

export default function LandingFooter() {
  return (
    <div className="w-full xl:h-[445px] mt-[55px] px-5 md:px-[60px] xl:px-[112px]">
    <div className="rounded-t-lg border-black border-4 border-b-0 px-6 md:px-[64px]  pt-4 xl:pt-[57px] flex ">
      <div className="flex flex-col xl:flex-row  w-full h-fit pb-[83px] justify-between border-b-4 border-[#0C121E] ">
        <div className="w-full xl:w-[336px] h-fit flex flex-col gap-6 justify-start ">
          <img src={LOGO} alt="" className="w-[125px] h-[50px] " />
          <div className="poppins-regular text-[14px] leading-[22.6px] text-[#201C2D]">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </div>
        </div>

        <div className="flex flex-col mt-[44px] xl:mt-0 xl:flex-row gap-[45px]">
          <div className="flex gap-[44px] xl:gap-[83px] ">
            <MenuSection
              title="Company"
              items={[
                "About us",
                "Blogs",
                "Contact us",
                "Advice",
                "Privacy Policy",
              ]}
            />
            <MenuSection
              title="Resource"
              items={["Contact us", "Privacy policy", "Feedback", "Data securities",]}
            />
          </div>

          <div className="w-full xl:w-[324px] gap-[38px] flex flex-col">
            <div className="flex flex-col gap-[13px]">
              <div className="poppins-bold text-[18px] leading-[28.8px] text-[#252A34]">
                Get job notifications
              </div>
              <div className="poppins-regular text-[14px] leading-[22.5px] text-[#0C121E]">
                The latest job news, articles, sent to your inbox weekly.
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="Email address"
                className="w-2/3 xl:w-[199.77px] px-[14.33px] py-[10.75px] gap-[8.96px] rounded-tl-md border border-solid border-[#E7E7E8] placeholder-gray-600 placeholder-opacity-100 focus:outline-none placeholder:text-[14.33px] placeholder:leading-[22.93px] placeholder:poppins-regular placeholder:text-[#919191]"
              />

              <button className="w-1/3 xl:w-[117px] bg-[#0C121E] poppins-regular text-[14px] leading-[23px] rounded cursor-pointer text-[#fff] flex justify-center items-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
