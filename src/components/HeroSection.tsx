import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bold } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white min-h-[80vh] flex items-center section-spacing" role="main">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="font-playfair text-oxford-blue mb-6" style={{ fontSize: '48px', lineHeight: '56px' }}>
              <span className="text-gradient">B2B SAAS</span>
              <br />
              Product Manager
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-grey mb-8 max-w-3xl mx-auto font-inter" style={{ lineHeight: '1.5' }}>
              AI-focused Product Manager with expertise in B2B SaaS and lending technology products. 
              Specialized in Generative AI integration, workflow automation, and driving 30%+ business growth 
              through strategic product development at Wipro Gallagher Solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animate-delay-200">
            <Button 
              asChild 
              size="lg" 
              className="brand-button-primary hover-lift touch-target"
              aria-label="View Surya's portfolio and case studies"
            >
              <Link to="/case-studies">VIEW PORTFOLIO</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="brand-button-secondary hover-lift touch-target"
              aria-label="Read Surya's blog posts about AI and product management"
            >
              <Link to="/blog">READ MY BLOG</Link>
            </Button>
          </div>

          {/* Skills Showcase - Fixed with proper neutral colors */}
          <div className="animate-fade-in animate-delay-400">
            <p className="text-charcoal-grey mb-6 font-inter font-medium tracking-wide uppercase" style={{ fontSize: '20px', letterSpacing: '0.05em', fontWeight: "bold" }}>
              CORE EXPERTISE
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'ChatGPT & LangChain',
                'Figma & Balsamiq',
                'User Experience Design',
                'Python & SQL',
                'B2B SaaS Products',
                'Credit Risk Analysis',
                'Agile & Scrum',
                'GenAI Integration',
                'Lending Technology'
              ].map((skill) => (
                <Card key={skill} className="px-4 py-2 bg-ivory-white border border-light-grey-border hover-lift touch-target shadow-sm">
                  <span className="text-sm font-inter font-medium text-charcoal-grey">{skill}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
