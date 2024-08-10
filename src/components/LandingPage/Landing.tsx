import BlogsSection from "./components/BlogsSection";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import InformationSection from "./components/InformationSection";
import InvertedInformation from "./components/InvertedInformation";
import LandingFooter from "./components/LandingFooter";
import LandingNavbar from "./components/LandingNavbar";
import SearchInformation from "./components/SearchInformation";
import SliderTextSection from "./components/SliderTextSection";
import VideoSection from "./components/VideoSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Landing() {
  return (
    <div>

        {/* Part 1 */}
        <LandingNavbar/>
        <HeroSection/>
        <SliderTextSection/>


        {/* Part 2 */}
        <InformationSection/>
        <InvertedInformation/>

        {/* Part 3 */}
        <SearchInformation/>
        <VideoSection/>
        <WhyChooseUs/>



        {/* Part 4 */}
        <BlogsSection/>  
        <FAQ/>
        <LandingFooter/>


        
    </div>
  )
}
