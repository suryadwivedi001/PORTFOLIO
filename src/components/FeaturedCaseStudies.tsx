
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import InteracticeCaseStudies from '@/components/InteracticeCaseStudies';

const FeaturedCaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies = [
    {
      id: 'wipro-credit-origination',
      title: 'Credit Card Origination Platform',
      description: 'End-to-end credit card origination workflow including KYC, fraud checks, and credit scoring for B2B SaaS financial platform at Wipro Gallagher Solutions.',
      tags: ['B2B SaaS', 'Credit Risk', 'KYC Integration'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      outcome: 'Increased loan volume by 30%',
      duration: '6 months'
    },
    {
      id: 'genai-lending',
      title: 'GenAI Real Estate Lending',
      description: 'Integrated Generative AI for real estate recommendations and credit risk analysis, leveraging ChatGPT and LangChain for automated decision-making.',
      tags: ['GenAI Integration', 'Real Estate', 'Credit Analysis'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      outcome: 'Boosted loan closure rates by 30%',
      duration: '4 months'
    },
    {
      id: 'demo-optimization',
      title: 'Product Demo Acceleration',
      description: 'Streamlined B2B SaaS product demo processes and reduced time-to-market through strategic workflow optimization and stakeholder alignment.',
      tags: ['Process Optimization', 'B2B SaaS', 'Time-to-Market'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      outcome: 'Reduced demo TAT from 6-9 months to 1 month',
      duration: '3 months'
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
    <section className="section-spacing bg-ivory-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-deep-blue mb-6" style={{ fontSize: '36px', lineHeight: '44px' }}>
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto font-inter" style={{ lineHeight: '1.5' }}>
            Explore how I've driven measurable growth in B2B SaaS and lending technology through 
            strategic AI integration, process optimization, and innovative product development at 
            Wipro Gallagher Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className={`bg-white border border-light-grey-border shadow-sm rounded-xl hover-lift animate-fade-in cursor-pointer group`} style={{animationDelay: `${index * 200}ms`}}>
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover scale-on-hover"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-ivory-white text-burnt-umber border-light-grey-border">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="group-hover:text-burnt-umber transition-colors font-inter font-bold text-charcoal-grey">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-charcoal-grey font-inter">{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium text-burnt-umber mb-4 font-inter">
                  {study.outcome}
                </div>
                <Button 
                  onClick={() => openStudy(study)}
                  variant="outline" 
                  className="w-full brand-button-secondary"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="brand-button-primary hover-lift">
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
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
    </section>
  );
};

export default FeaturedCaseStudies;
