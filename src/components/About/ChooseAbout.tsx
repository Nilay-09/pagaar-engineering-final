import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileAbout from './MobileAbout';

const ChooseAbout = () => {
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery({ query: '(max-width: 599px)' });
  const isTabletOrLaptop = useMediaQuery({ query: '(min-width: 600px)' });

  useEffect(() => {
    if (isTabletOrLaptop) {
      navigate('/dashboard');
    }
  }, [isTabletOrLaptop, navigate]);

  return (
    <>
      {isMobileScreen && <MobileAbout />}
      {!isMobileScreen && !isTabletOrLaptop && <MobileAbout />} 
    </>
  );
}

export default ChooseAbout;
