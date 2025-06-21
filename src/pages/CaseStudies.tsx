import { useState } from 'react';
import OngoingProjects from '@/components/OngoingProjects';
import InteracticeCaseStudies from '@/components/InteracticeCaseStudies';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allCaseStudies = [
    {
      id: 'wipro-credit-origination',
      title: 'Credit Card Origination Platform',
      description: 'End-to-end credit card origination workflow including KYC, fraud checks, and credit scoring for B2B SaaS financial platform at Wipro Gallagher Solutions.',
      tags: ['B2B SaaS', 'Credit Risk', 'KYC Integration'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      outcome: 'Increased loan volume by 30%',
      duration: '6 months',
      featured: true
    },
    {
      id: 'genai-lending',
      title: 'GenAI Real Estate Lending',
      description: 'Integrated Generative AI for real estate recommendations and credit risk analysis, leveraging ChatGPT and LangChain for automated decision-making.',
      tags: ['GenAI Integration', 'Real Estate', 'Credit Analysis'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      outcome: 'Boosted loan closure rates by 30%',
      duration: '4 months',
      featured: true
    },
    {
      id: 'demo-optimization',
      title: 'Product Demo Acceleration',
      description: 'Streamlined B2B SaaS product demo processes and reduced time-to-market through strategic workflow optimization and stakeholder alignment.',
      tags: ['Process Optimization', 'B2B SaaS', 'Time-to-Market'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      outcome: 'Reduced demo TAT from 6-9 months to 1 month',
      duration: '3 months',
      featured: true
    },
    {
      id: 'lexis-nexis-integration',
      title: 'Third-Party KYC Integration',
      description: 'Led integration with Lexis Nexis, Experian PID, and CrossCore for comprehensive KYC and fraud prevention in lending workflows.',
      tags: ['KYC', 'Integration', 'Fraud Prevention'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      outcome: 'Enhanced fraud detection accuracy by 40%',
      duration: '5 months',
      featured: false
    },
    {
      id: 'netoxygen-portal',
      title: 'NetOxygen Launchpad Admin Portal',
      description: 'Optimized internal tooling and processes to enhance developer efficiency and streamline product development workflows.',
      tags: ['Internal Tools', 'Developer Experience', 'Process Optimization'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      outcome: 'Increased developer efficiency by 20%',
      duration: '4 months',
      featured: false
    },
    {
      id: 'ovis-crm',
      title: 'Ovis CRM for Fitness Coaches',
      description: 'Built comprehensive CRM platform for fitness trainers from scratch, including client management, workout planning, and business analytics.',
      tags: ['CRM', 'Fitness Tech', 'Startup'],
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
      outcome: 'Successfully launched MVP with 50+ fitness coaches',
      duration: '8 months',
      featured: false
    }
  ];

  const openStudy = (study: any) => {
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
                style={{animationDelay: `${index * 200}ms`}}
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
                  <CardTitle className="group-hover:text-burnt-umber transition-colors font-inter font-bold text-charcoal-grey">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="flex-1 text-charcoal-grey font-inter">{study.description}</CardDescription>
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
                      onClick={() => openStudy(study)}
                      variant="outline" 
                      className="w-full mt-4"
                    >
                      View Full Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="bg-ivory-white">
        <OngoingProjects />
      </div>

      {/* CTA Section - Fixed spacing and colors */}
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

      {/* Interactive Case Study Modal */}
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
