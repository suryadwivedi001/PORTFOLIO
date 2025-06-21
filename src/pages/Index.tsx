import HeroSection from '@/components/HeroSection';
import FeaturedCaseStudies from '@/components/FeaturedCaseStudies';
import OngoingProjects from '@/components/OngoingProjects';

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCaseStudies />
      <OngoingProjects showOnHomepage={true} limit={2} />
    </>
  );
};

export default Index;
