import { useState } from 'react';
import OngoingProjects from '@/components/OngoingProjects';
import InteracticeCaseStudies from '@/components/InteracticeCaseStudies';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import caseStudiesData from '@/data/caseStudies.json'; // ✅ Import your JSON directly

interface AllCaseStudies {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  duration: string;
  team: string;
  outcome: string;
  image: string;
  overview: string;
  problem: string;
  research: string[];
  personas: {
    name: string;
    description: string;
    goals: string[];
    frustrations: string[];
  }[];
  solution: string[];
  results: string[];
  featured: boolean;
}

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<AllCaseStudies | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allCaseStudies: AllCaseStudies[] = [...caseStudiesData].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  const openStudy = (study: AllCaseStudies) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const closeStudy = () => {
    setIsModalOpen(false);
    setSelectedStudy(null);
  };

  return (
    <>
      <div className="bg-white section-spacing">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-oxford-blue mb-6" style={{ fontSize: '48px', lineHeight: '56px' }}>
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-grey font-inter" style={{ lineHeight: '1.5' }}>
              Deep dives into B2B SaaS transformations, AI implementations, 
              and strategic product improvements that delivered measurable business results.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {allCaseStudies.map((study, index) => (
              <Card
                key={study.id}
                className={`hover-lift animate-fade-in cursor-pointer group h-full flex flex-col bg-white border border-light-grey-border shadow-sm rounded-xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover scale-on-hover"
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.featured && (
                      <Badge className="bg-oxford-blue text-white border-oxford-blue">Featured</Badge>
                    )}
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-ivory-white text-charcoal-grey border-light-grey-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="mb-2 group-hover:text-burnt-umber transition-colors font-inter font-bold text-charcoal-grey">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="flex-1 text-charcoal-grey font-inter">
                    {study.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-charcoal-grey font-inter">Duration:</span>
                      <span className="font-medium text-charcoal-grey font-inter">{study.duration}</span>
                    </div>
                    <div className="text-sm font-medium text-burnt-umber font-inter">
                      {study.outcome}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-4"
                    >
                      <Link to={`/case-studies/${study.id}`}>
                        View Full Case Study
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Ongoing Projects */}
      <div className="bg-ivory-white">
        <OngoingProjects />
      </div>

      {/* CTA */}
      <div className="bg-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardContent className="p-8">
                <h2 className="font-inter font-bold mb-4 text-charcoal-grey" style={{ fontSize: '36px', lineHeight: '44px' }}>
                  Have a <span className="text-gradient">Project</span> in Mind?
                </h2>
                <p className="text-charcoal-grey mb-6 font-inter" style={{ lineHeight: '1.5' }}>
                  Let's discuss how I can help transform your B2B SaaS product with AI 
                  integration and strategic product improvements.
                </p>
                <Button asChild size="lg" className="border-2 border-oxford-blue hover-lift bg-oxford-blue text-white hover:bg-oxford-blue/90">
                  <Link to="/contact">Start a Conversation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedStudy && (
        <InteracticeCaseStudies
          study={selectedStudy}
          isOpen={isModalOpen}
          onClose={closeStudy}
        />
      )}
    </>
  );
};

export default CaseStudies;
