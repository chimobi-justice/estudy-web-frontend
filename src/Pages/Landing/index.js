import HomeCourse from "./Courses";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import OurPlatform from "./Platform";
import BecomeMentor from "./BecomeInstructor";
import HomeSuccess from "./HomeSuccess";

const Landing = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <OurPlatform />
      <HomeCourse />
      <BecomeMentor />
      <HomeSuccess />
      <Footer />
    </>
  );
}

export default Landing