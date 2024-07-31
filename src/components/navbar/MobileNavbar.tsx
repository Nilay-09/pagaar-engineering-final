import { NavLink, useLocation } from "react-router-dom";
import BackgroundImage from './BackgroundNav.svg';

import DEFAULT_HOME from './mobileNavbarAssets/default/home.svg';
import DEFAULT_ALERTS from './mobileNavbarAssets/default/alert.svg';
import DEFAULT_PROFILE from './mobileNavbarAssets/default/profile.svg';

import ACTIVE_HOME from './mobileNavbarAssets/active/home.svg';
import ACTIVE_ALERTS from './mobileNavbarAssets/active/alert.svg';
import ACTIVE_PROFILE from './mobileNavbarAssets/active/profile.svg';

const MobileNavbar = () => {

    const { pathname } = useLocation();

    const navItems = [
        { defaultImg: DEFAULT_HOME, activeImg: ACTIVE_HOME, label: 'Home', path: '/dashboard' },
        { defaultImg: DEFAULT_ALERTS, activeImg: ACTIVE_ALERTS, label: 'Alerts', path: '/alerts' },
        { defaultImg: DEFAULT_PROFILE, activeImg: ACTIVE_PROFILE, label: 'Profile', path: '/about' },
    ];
    const positions = ['left-4', 'left-1/2 transform -translate-x-1/2', 'right-4'];

    if (pathname.includes('/jobs') && pathname === '/jobs') {
        return null;
    }

    return (
        <div className="fixed sm:hidden bottom-0 w-full h-[140px] flex z-10 px-8 justify-between">
            <img src={BackgroundImage} alt="" className='absolute w-full h-full inset-0 object-cover' />
            {navItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) => `
                        absolute ${positions[index]} ${isActive ? 'border-[6px] border-[#C7C4FF] shadow-menu-bottom-button' : 'border-[#D9E3FF] border'}
                        rounded-full z-10 bg-white ${!isActive ? 'translate-y-3' : ''} 
                        ${index === 1 && isActive ? '-translate-y-4' : ''} 
                        transition-all duration-300 cursor-pointer flex justify-center items-center flex-col gap-2
                    `}
                    style={({ isActive }) => ({
                        width: isActive ? '98px' : '80px',
                        height: isActive ? '98px' : '80px'
                    })}
                >
                    {({ isActive }) => (
                        <>
                            <img src={isActive ? item.activeImg : item.defaultImg} alt={item.label} />
                            {!isActive && (
                                <div className="poppins-regular text-[0.75rem] leading-[1.125rem]">{item.label}</div>
                            )}
                        </>
                    )}
                </NavLink>
            ))}
        </div>
    );
};

export default MobileNavbar;
