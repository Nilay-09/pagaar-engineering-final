import { useState } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        const { firstName, email, message } = formData;

        try {
            const response = await fetch('https://pagaar-backend.azurewebsites.net/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Request-Id': 'hrt'
                },
                body: JSON.stringify({
                    name: firstName,
                    email,
                    feedback: message
                })
            });

            if (response.ok) {
                console.log(response);
                setSubmitted(true);
                setFormData({ firstName: '', email: '', message: '' });

            } else {
                alert('Failed to send feedback. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const handleBackClick = () => {
        if (submitted) {
            setSubmitted(false);
        } else {
            if (window.history.state && window.history.state.idx > 0) {
                navigate(-1);
            } else {
                navigate('/');
            }
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
                    {submitted ? (
                        <div>
                            <div className="w-full poppins-semibold text-[1.875rem] text-[#141416] tracking-[-2%]">Your response has been submitted.</div>
                            <div className="w-full mt-2 poppins-regular text-[1rem] text-[#29292C] tracking-[-2%]">
                                Team Pagaar will reach out to you in the next 24 to 48 hrs.
                            </div>
                            <button onClick={() => setSubmitted(false)} className="flex w-full h-[3rem] bg-[#141416] justify-center items-center rounded poppins-medium text-white mt-8">
                                Back To Form
                            </button>
                            <div className="w-full poppins-regular text-[1rem] flex gap-10 mt-6"> <span>About us</span> <span>Privacy Policy</span></div>
                        </div>
                    ) : (
                        <>
                            <div className="w-full poppins-semibold text-[1.875rem] text-[#141416] tracking-[-2%]">Get in touch</div>
                            <div className="w-full mt-4 poppins-regular text-[1rem] text-[#29292C] tracking-[-2%]">
                                You can help us with your email and reason for contacting us and someone from Team Pagaar will reach out to you in the next 24 to 48 hrs.
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4 text-black">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name*"
                                            className="w-full h-[47px] border border-[#42424233] focus:border-[#926CFF] active:border-[#926CFF] rounded px-3 py-4 placeholder:text-[#141416] text-[15px] leading-[22.5px] tracking-[-1%] poppins-regular"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="relative mt-[0.875rem]">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email*"
                                            className="w-full h-[47px] border border-[#42424233] focus:border-[#926CFF] active:border-[#926CFF] rounded px-3 py-4 placeholder:text-[#141416] text-[15px] leading-[22.5px] tracking-[-1%] poppins-regular"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="relative mt-[0.875rem]">
                                        <textarea
                                            name="message"
                                            placeholder="Message*"
                                            className="w-full resize-none h-[7.875rem] border border-[#42424233] focus:border-[#926CFF] active:border-[#926CFF] rounded px-3 py-4 placeholder:text-[#141416] text-[15px] leading-[22.5px] tracking-[-1%] poppins-regular focus:outline-none focus:ring-1 focus:ring-black"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="flex w-full h-[3rem] bg-[#141416] justify-center items-center rounded poppins-medium text-white mt-4">
                                        Send
                                    </button>
                                </div>
                            </form>

                            <div className="w-full poppins-regular text-[1rem] leading-6 text-[#29292C] underline flex gap-10 mt-10 poppins-semibold">

                                <NavLink to="/about-us">
                                    <span>About us</span>
                                </NavLink>
                                <NavLink to="/privacy-policy">
                                    <span>Privacy Policy</span>
                                </NavLink>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
