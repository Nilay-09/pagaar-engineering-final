import AboutMenuMobile from './AboutMenuMobile'
import PROFILE from './Miranda.png'
import PENCIL from './Pencil.svg'

export default function MobileAbout() {
  return (
    <div className="w-full">


      {/* Profile Image Section */}
      <div className="w-full h-[10.3125rem] bg-[#C7C4FF] flex justify-center items-end">
        <div className="w-[8.25rem] h-[8.25rem] rounded-full border-[0.07rem] border-[#28273C] translate-y-1/3 shadow-profile-icon overflow-hidden">
          <img src={PROFILE} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
        <div className="w-full h-[4.5rem] flex justify-center">
        <img src={PENCIL} alt="" className="w-12 h-12 z-20 object-cover translate-x-11 -translate-y-1" />
        </div>
        <div className="w-full text-center poppins-semibold text-[1.25rem] leading-[1.75rem]">Puerto Rico</div>



        {/* Menu Grid */}

        <AboutMenuMobile/>
    </div>
  )
}
