
import { useNavigate } from 'react-router-dom';
import MANAGE_COINS from './MobileAssets/Profile/coins.svg';
import SAVED_JOBS from './MobileAssets/Profile/archive-tick.svg';
import ISSUES from './MobileAssets/Profile/haveissue.svg';
import PRIVACY_POLICY from './MobileAssets/Profile/privacypolicy.svg';
import ABOUT_US from './MobileAssets/Profile/aboutus.svg';
import LOGOUT from './MobileAssets/Profile/logout.svg';



import LINKEDIN from './MobileAssets/Profile/LinkedIn.svg'
import INSTAGRAM from './MobileAssets/Profile/Instagram.svg'
import X from './MobileAssets/Profile/Twitter.svg'
import ARROW_RIGHT from './arrow-right.svg';

const menuItems = [
    { icon: MANAGE_COINS, heading: 'Manage Coins', onClickLink: '/profile/manage-coins' },
    { icon: SAVED_JOBS, heading: 'Saved Jobs', onClickLink: '/saved-jobs' },
    { icon: ISSUES, heading: 'Have issues? Raise here', onClickLink: '/issues' },
    { icon: PRIVACY_POLICY, heading: 'Privacy Policy', onClickLink: '/privacy-policy' },
    { icon: ABOUT_US, heading: 'About Us', onClickLink: '/about-us' },
    { icon: ABOUT_US, heading: 'Contact Us', onClickLink: '/contact-us' },
    { icon: ABOUT_US, heading: 'Sign Out', onClickLink: '/about-us' },
    { icon: LOGOUT, heading: 'Delete Account', onClickLink: '/logout' },
];

export default function AboutMenuMobile() {
    const navigate = useNavigate();

    return (
        <>
            <div className="p-6 w-full h-fit">
                <div className="w-full h-full flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-full h-[3.5rem] rounded-lg border border-[#EEE8FF] px-6 py-4 flex justify-between items-center cursor-pointer"
                            onClick={() => navigate(item.onClickLink)}
                        >
                            <div className="flex gap-4 items-center">
                                <img src={item.icon} alt={item.heading} />
                                <span className='poppins-regular text-[1rem] leading-[1.25rem] tracking-[0.0156rem]'>{item.heading}</span>
                            </div>
                            <div>
                                <img src={ARROW_RIGHT} alt="arrow right" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mb-[150px] h-[3.5rem] px-[3rem] py-4 flex justify-between mt-[1.875rem]">

                <span className='poppins-regular text-[1rem] leading-[1.25rem] tracking-[0.0156rem]'>Follow Us</span>
                <div className="flex w-[7.5rem] h-full justify-between">
                    <img src={X} alt="" />
                    <img src={INSTAGRAM} alt="" />
                    <img src={LINKEDIN} alt="" />
                </div>

            </div>
        </>
    );
}
