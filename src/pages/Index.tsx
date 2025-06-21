
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedCaseStudies from '@/components/FeaturedCaseStudies';
import OngoingProjects from '@/components/OngoingProjects';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCaseStudies />
      <OngoingProjects showOnHomepage={true} limit={2} />
    </Layout>
  );
};

export default Index;
