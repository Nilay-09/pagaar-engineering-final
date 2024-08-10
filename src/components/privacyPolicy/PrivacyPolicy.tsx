
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function PrivacyPolicy() {
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
                    <div className="w-full poppins-semibold text-[1.875rem] text-[#141416] tracking-[-2%]">Pagaar Privacy Policy</div>
                    <div className="w-full mt-4 poppins-regular text-[1rem] text-[#29292C] tracking-[-2%]">
                        <p>Pagaar.ai (Unbook Solutions Pvt. Ltd.) is a job-listing platform created for the convenience of job-seekers in the IT Sector. Your privacy is of the utmost importance to us. We, at Pagaar.ai are committed to protect the privacy of your personally-identifiable information (PII) as used by you on this website. In furtherance of our commitment to protect your privacy, we share that:</p>
                        <br />


                        <ul className="w-full mx-6 list-disc list-outside mt-2">
                            <li>The platform only requires the users to submit their registered mobile number and/or any email address on a voluntary basis for the purpose of accessing the services on the application. We shall, at all times, keep this information confidential, subject to this Privacy Policy and the Terms and Condition of this website.</li>
                            <li className='mt-2'>We shall, at all times, take all the precautions and reasonable care to protect your personal data. However, if your personal data such as name, contact number, email id is also available publicly on social media platforms like LinkedIn, Facebook, Instagram, Twitter etc., or has been shared by you publicly on other users’ profiles in social media platforms, then we shall have no responsibility for any usage/misuse by any third party regarding your publicly shared data.</li>
                            <li className='mt-2'>Personal data shall be limited to the information relevant for identifying you as an individual, such as your name, contact number, e-mail address etc. Any non-personal information shared by the user shall not require any protection from our side.</li>
                            <li className='mt-2'>Information supplied by the user must be bonafide and true. The platform does not verify the authenticity of the information supplied and any/all consequences will be on the user supplying such information.</li>
                            <li className='mt-2'>Information supplied by the user will be stored with the platform and will be used for professional purposes only.</li>
                            <li className='mt-2'>We do not claim to verify any third-party job postings and links available on our website and application. Users shall personally verify the third party job postings accessible through the platform. Pagaar.ai is not liable for any third-party information available on the platform. The users are made fully aware of the same through the disclaimer on the platform and thereby absolve Pagaar.ai from any and all liabilities arising from the same.</li>
                        </ul>

                        <p className="mt-3">We reserve our rights to update, change and/or modify our Privacy Policy at any time. All such changes shall be immediately reflected on our website.</p>

                        <p className="mt-3">We are bound by the legal regulations applicable within the jurisdiction of India and shall, if required, be legally compelled to share your personal information in response to a court order, subpoena, search warrant, law or regulation.</p>
                    </div>

                    <div className="w-full poppins-regular text-[1rem] leading-6 text-[#29292C] underline flex gap-10 mt-10 poppins-semibold">
                        <NavLink to="/contact-us">
                            <span>Contact us</span>
                        </NavLink>
                        <NavLink to="/about-us">
                            <span>About Us</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
