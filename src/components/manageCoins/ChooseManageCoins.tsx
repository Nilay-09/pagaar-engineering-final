

import { useMediaQuery } from 'react-responsive'
import ManageCoins from './ManageCoins'
import MobileManageCoins from './MobileManageCoins'
// import { Outlet } from 'react-router-dom'


const ChooseManageCoins = () => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 599px)' })
  const isTabletOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })

  return (
    <>
      {isMobileScreen && <MobileManageCoins/> }
      {isTabletOrLaptop && <ManageCoins/>}
      {/* <Outlet /> */}
    </>
  )
}

export default ChooseManageCoins;