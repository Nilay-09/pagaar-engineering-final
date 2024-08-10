
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function AboutUs() {

    const navigate = useNavigate();
    const handleBackClick = () => {

        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className='w-screen mb-[150px]'>

            <div className="w-full h-[5.625rem] flex justify-center items-center">
                <img src={
                    "https://res.cloudinary.com/dazyotvdk/image/upload/v1721222463/LogoFinal_pdlgek.png"
                } alt="" className='w-[7.75rem] h-[3.0625rem]'
                onClick={handleLogoClick} />
            </div>


            <div className="w-full h-fit flex flex-col items-center justify-center my-[3rem] px-8">
                <div className="flex gap-1 items-center justify-start w-full max-w-[1024px] min-w-[310px] cursor-pointer" onClick={handleBackClick}>
                    <IoChevronBack /> BACK
                </div>
                <div className="w-full max-w-[1024px] border rounded-lg border-[#000] min-w-[310px] h-full mt-10 px-8 py-9">

                    <>
                        <div className="w-full poppins-semibold text-[1.875rem] text-[#141416] tracking-[-2%]">About us</div>
                        <div className="w-full mt-4 poppins-regular text-[1rem] text-[#29292C] tracking-[-2%]">
                            Pagaar.ai aims to solve the discovery problem for job seekers in India. If you talk about the job hunt journey in today’s world, we see that each company has partnered with one of the job search platforms. Now if you consider a job seeker, to know about all the openings, they will have to get onboarded to all the job search platforms out there which is practically not possible. Moreover on the other hand, if a job seeker wants to keep track of the company’s career page directly, then that is also not feasible as there are tons of companies and each career page doesn't allow you to set alerts.
                            <br />
                            <br />

                            Hence, it becomes important that there is a centralised platform that aggregates all the openings on the different platforms, and this is what Team Pagaar is trying to achieve by solving the problem statement of job discovery. We fetch the openings directly from the company’s career page and send them real-time alerts.

                            <br />
                            <br />
                            We are a team of experienced IITians, having built and scaled several products for the past few years, and now want to solve the problem we faced during our job hunt.

                        </div>

                        <div className="w-full poppins-regular text-[1rem] leading-6 text-[#29292C] underline flex gap-10 mt-10 poppins-semibold">

                            <NavLink to="/contact-us">
                                <span>Contact us</span>
                            </NavLink>
                            <NavLink to="/privacy-policy">
                                <span>Privacy Policy</span>
                            </NavLink>

                        </div>
                    </>

                </div>
            </div>

        </div>
    )
}
