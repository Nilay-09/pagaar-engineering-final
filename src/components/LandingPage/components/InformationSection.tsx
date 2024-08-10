
import InfoBlock from '../components/GenericContainers/InfoBlock';
import FIRST_FRAME_IMAGE from '../assets/f1.svg';
import FIRST_ICON from '../assets/i1.svg';
import SECOND_ICON from '../assets/i2.svg';
import BG_GRID from '../assets/grid.svg';



export default function InformationSection() {
  const infoData = [
    {
      iconSrc: FIRST_ICON,
      title: 'Upload your contacts',
      description: 'Import all your contacts at once through a CSV or with one of our easy integrations.',
    },
    {
      iconSrc: SECOND_ICON,
      title: 'Segment your list',
      description: 'Stay organized by segmenting your contacts into groups or tags to make texting the right audience a breeze.',
    },
  ];

  return (
    <div className='w-screen h-full lg:h-[495px] flex items-center relative'>
      <img src={BG_GRID} alt="" className='absolute top-0 -left-[65px] -z-10' />
      <div className="w-full h-full px-6 md:px-[60px] lg:px-[100px] xl:pl-[112px] xl:pr-[78px] xl:py-[72px]">
        <div className="w-full h-full flex justify-center pt-[44px] md:pt-[60px] xl:pt-0 lg:justify-between flex-col lg:flex-row ">
          <div className="py-2 w-full lg:w-[437px] flex flex-col mb-4 lg:mx-0 gap-[20px]">
            <h3 className='poppins-bold text-[32px] text-[#201C2D] leading-[48px] '>Track your jobs across internet</h3>
            {infoData.map((data, index) => (
              <InfoBlock 
                key={index} 
                iconSrc={data.iconSrc} 
                title={data.title} 
                description={data.description} 
              />
            ))}
          </div>
          <div className="md:mt-[56px] xl:mt-0 xl:w-[662px] w-full xl:h-full">
            <img src={FIRST_FRAME_IMAGE} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
}
