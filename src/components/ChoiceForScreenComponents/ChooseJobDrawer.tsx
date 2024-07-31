
import JobDrawerMobile from '../jobDrawer/MobileComponents/JobDrawerMobile';
import JobDrawer from '../jobDrawer/JobDrawer';

import { useMediaQuery } from 'react-responsive'

const ChooseJobDrawer = () => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 599px)' })
  const isTabletOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })

  return (
    <>
      {isMobileScreen && <JobDrawerMobile/> }
      {isTabletOrLaptop && <JobDrawer/>}
    </>
  )
}

export default ChooseJobDrawer;