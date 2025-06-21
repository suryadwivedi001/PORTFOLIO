import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const CaseStudyDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from your CMS/database
  const caseStudyData = {
    'streetkhana': {
      title: 'StreetKhana: AI-Powered Food Discovery',
      subtitle: 'Connecting food lovers with authentic street vendors through intelligent recommendations',
      tags: ['AI Product', 'Mobile App', 'Location Services', 'User Research'],
      duration: '3 months',
      team: 'Product Manager, 2 Developers, 1 Designer',
      outcome: 'Increased vendor discovery by 65%',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
      overview: 'StreetKhana aimed to solve the discovery problem for street food enthusiasts by creating an AI-powered platform that connects users with local vendors based on preferences, location, and real-time availability.',
      problem: 'Street food lovers struggled to discover new vendors and authentic local cuisine. Existing food apps focused primarily on restaurants, leaving a gap in the street food market. Users had no reliable way to find quality street vendors nearby or discover new authentic cuisines.',
      research: [
        'Conducted 50+ user interviews with street food enthusiasts',
        'Analyzed competitor landscape and identified market gaps',
        'Surveyed 200+ street food vendors about their challenges',
        'Created detailed user personas and journey maps'
      ],
      personas: [
        {
          name: 'Food Explorer Maya',
          description: 'Young professional who loves discovering authentic local cuisine',
          goals: ['Find new street vendors', 'Ensure food quality', 'Save time searching'],
          frustrations: ['Unreliable vendor information', 'Language barriers', 'Safety concerns']
        },
        {
          name: 'Busy Professional Raj',
          description: 'Working professional looking for quick, quality street food',
          goals: ['Fast service', 'Consistent quality', 'Convenient locations'],
          frustrations: ['Long queues', 'Unpredictable timing', 'Limited payment options']
        }
      ],
      solution: [
        'AI-powered recommendation engine based on taste preferences and past orders',
        'Real-time vendor tracking with live availability status',
        'Integrated rating system with photo reviews from customers',
        'Multi-language support for diverse vendor base',
        'Secure payment integration with digital wallet support'
      ],
      results: [
        '65% increase in vendor discovery rate',
        '40% improvement in user retention after first week',
        '3.2x increase in average session duration',
        '85% user satisfaction score in post-launch surveys',
        '150+ vendors onboarded in first month'
      ]
    },
    'hinge-ratings': {
      title: 'Hinge App Store Ratings Recovery',
      subtitle: 'Strategic UX intervention to recover from declining app store ratings',
      tags: ['UX Strategy', 'App Store Optimization', 'Growth', 'A/B Testing'],
      duration: '2 months',
      team: 'Product Manager, UX Designer, Data Analyst',
      outcome: 'Improved ratings from 2.8 to 4.2 stars',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
      overview: 'Hinge faced declining app store ratings due to user experience issues in their onboarding flow and matching algorithm. This case study details the systematic approach to identifying and resolving core user friction points.',
      problem: 'Hinge app ratings had declined to 2.8 stars with users complaining about poor matching quality, complicated onboarding, and lack of meaningful connections. The declining ratings were affecting organic discovery and user acquisition.',
      research: [
        'Analyzed 1000+ negative app store reviews to identify patterns',
        'Conducted usability testing with 30 users on current onboarding flow',
        'Deep-dive analytics review of user drop-off points',
        'Competitive analysis of dating app onboarding experiences'
      ],
      personas: [
        {
          name: 'Sarah, 28',
          description: 'Marketing professional looking for serious relationships',
          goals: ['Find meaningful connections', 'Efficient matching', 'Safe platform'],
          frustrations: ['Poor match quality', 'Complex profile setup', 'Spam messages']
        }
      ],
      solution: [
        'Simplified onboarding flow reducing steps from 12 to 6',
        'Enhanced matching algorithm with better preference weighting',
        'Introduced smart prompts to improve profile quality',
        'Implemented feedback loops for match quality improvement',
        'Added safety features and improved reporting mechanisms'
      ],
      results: [
        'App store rating improved from 2.8 to 4.2 stars',
        '45% reduction in onboarding abandonment',
        '30% increase in daily active users',
        '25% improvement in first-week retention',
        '60% increase in meaningful conversations (measured by message length and response rate)'
      ]
    },
    'bookmyshow': {
      title: 'BookMyShow Ticketing UX Redesign',
      subtitle: 'Optimizing high-demand event booking flow for better conversion',
      tags: ['UX Design', 'Conversion Optimization', 'High Traffic', 'Performance'],
      duration: '4 months',
      team: 'Product Manager, 2 UX Designers, 3 Developers',
      outcome: 'Reduced booking abandonment by 40%',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=600&fit=crop',
      overview: 'BookMyShow needed to optimize their ticket booking flow for high-demand events where server load and user urgency created friction points that led to booking abandonment and user frustration.',
      problem: 'During high-demand events, BookMyShow experienced significant booking abandonment due to slow loading times, complex navigation, and unclear seat availability. Users were frustrated with the multi-step process during peak traffic periods.',
      research: [
        'Performance analysis during 10 high-demand events',
        'User session recordings analysis of abandoned bookings',
        'Heat map analysis of booking flow pages',
        'Customer service ticket analysis for booking-related issues'
      ],
      personas: [
        {
          name: 'Concert Fan David',
          description: 'Music enthusiast trying to book tickets for popular concerts',
          goals: ['Secure good seats', 'Quick booking process', 'Reliable platform'],
          frustrations: ['Website crashes', 'Losing selected seats', 'Payment failures']
        }
      ],
      solution: [
        'Progressive loading with skeleton screens for better perceived performance',
        'Seat hold timer with clear countdown to create urgency without pressure',
        'One-click checkout for returning users with saved payment methods',
        'Real-time seat availability updates to prevent false hope',
        'Fallback options when preferred shows are sold out'
      ],
      results: [
        '40% reduction in booking abandonment rate',
        '25% faster average booking completion time',
        '50% reduction in customer service tickets related to booking issues',
        '35% increase in mobile conversion rate',
        '20% improvement in overall customer satisfaction scores'
      ]
    },
    'ai-insurance-claims': {
      title: 'AI Assistant for Health Insurance Claims',
      subtitle: 'Automating claims processing with GPT-4 and OCR technology',
      tags: ['AI Assistant', 'GPT-4', 'OCR', 'Insurance', 'Automation'],
      duration: '5 months',
      team: 'Product Manager, AI Engineer, Backend Developer, QA Engineer',
      outcome: 'Reduced claim processing time by 37%',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
      overview: 'Built an intelligent claims processing system that combines GPT-4 natural language processing, OCR document scanning, and CRM integration to streamline health insurance claim reviews and approvals.',
      problem: 'Health insurance claim processing was slow, manual, and error-prone. Claims officers spent hours reviewing documents, cross-referencing policies, and making approval decisions. This led to customer frustration, high operational costs, and inconsistent decision-making across the organization.',
      research: [
        'Analyzed 500+ claim processing workflows and identified bottlenecks',
        'Interviewed 25 claims officers about their daily challenges',
        'Reviewed customer support tickets related to claim delays',
        'Benchmarked processing times against industry standards'
      ],
      personas: [
        {
          name: 'Sarah, Claims Officer',
          description: '8-year veteran processing 50+ claims daily',
          goals: ['Process claims accurately', 'Meet daily quotas', 'Reduce manual data entry'],
          frustrations: ['Poor document quality', 'Complex policy rules', 'Repetitive tasks']
        },
        {
          name: 'Michael, Customer',
          description: 'Submitted claim for surgery expenses',
          goals: ['Quick claim approval', 'Clear status updates', 'Fair settlement'],
          frustrations: ['Long wait times', 'Unclear rejection reasons', 'Multiple follow-ups needed']
        }
      ],
      solution: [
        'GPT-4 integration for intelligent document analysis and policy interpretation',
        'OCR engine to extract structured data from medical bills and receipts',
        'Automated eligibility checking against customer policy terms',
        'Smart routing system to prioritize high-value and urgent claims',
        'Real-time dashboard for claims officers with AI-generated insights'
      ],
      results: [
        '37% reduction in average claim processing time',
        '25% improvement in accuracy of initial claim decisions',
        '60% reduction in manual data entry tasks',
        '45% increase in customer satisfaction scores',
        '$2.1M annual savings in operational costs'
      ]
    },
    'zero-code-lead-scoring': {
      title: 'Zero-Code Lead Scoring Engine for SaaS',
      subtitle: 'Intelligent lead prioritization using semantic search and CRM data',
      tags: ['Lead Scoring', 'Semantic Search', 'HubSpot', 'SaaS', 'Sales Optimization'],
      duration: '3 months',
      team: 'Product Manager, Data Scientist, Sales Operations Manager',
      outcome: 'Increased sales team close rate by 22%',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      overview: 'Developed an intelligent lead scoring system that leverages semantic search technology and HubSpot integration to automatically prioritize sales leads without requiring traditional coding or complex ML model development.',
      problem: 'The sales team was overwhelmed with inbound leads but had no systematic way to prioritize them. They were spending equal time on high-intent enterprise prospects and low-value tire-kickers, resulting in missed opportunities and inefficient resource allocation.',
      research: [
        'Analyzed 2 years of lead conversion data to identify patterns',
        'Surveyed sales team about current lead qualification process',
        'Mapped customer journey touchpoints and engagement signals',
        'Benchmarked against industry lead scoring best practices'
      ],
      personas: [
        {
          name: 'Alex, Sales Rep',
          description: 'Account executive handling 200+ leads monthly',
          goals: ['Focus on high-value prospects', 'Meet monthly quotas', 'Reduce time on unqualified leads'],
          frustrations: ['No lead prioritization system', 'Manual research required', 'Inconsistent lead quality']
        }
      ],
      solution: [
        'Semantic search analysis of lead form responses and website behavior',
        'HubSpot API integration for automatic data synchronization',
        'Machine learning model trained on historical conversion data',
        'Real-time scoring dashboard with actionable insights',
        'Automated lead routing based on score thresholds'
      ],
      results: [
        '22% increase in sales team close rate',
        '35% reduction in time spent on unqualified leads',
        '50% improvement in lead response time',
        '28% increase in average deal size',
        'ROI of 340% within first 6 months'
      ]
    },
    'generative-ui-prototyping': {
      title: 'Generative UI Prototyping Tool',
      subtitle: 'AI-powered wireframe generation for rapid product development',
      tags: ['Generative UI', 'OpenAI', 'Figma Plugin', 'Prototyping', 'Design Automation'],
      duration: '4 months',
      team: 'Product Manager, Frontend Developer, AI Engineer, UX Designer',
      outcome: 'Enabled 10x faster prototype creation',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=600&fit=crop',
      overview: 'Created an AI-powered prototyping tool that allows early-stage founders and product managers to generate professional wireframes and UI mockups through natural language prompts, dramatically reducing the time from idea to testable prototype.',
      problem: 'Early-stage founders and non-technical product managers struggled to quickly visualize and test their product ideas. Traditional prototyping tools required design skills and significant time investment, creating a barrier between concept and validation.',
      research: [
        'Interviewed 40 early-stage founders about prototyping challenges',
        'Analyzed time spent on initial design iterations vs. development',
        'Studied existing no-code design tools and their limitations',
        'Researched AI-generated design capabilities and best practices'
      ],
      personas: [
        {
          name: 'Emma, Solo Founder',
          description: 'Non-technical founder with limited design budget',
          goals: ['Validate ideas quickly', 'Create investor-ready mockups', 'Minimize upfront costs'],
          frustrations: ['Steep learning curve for design tools', 'Expensive freelancers', 'Slow iteration cycles']
        }
      ],
      solution: [
        'Natural language processing to interpret design requirements',
        'OpenAI GPT-4 integration for intelligent layout generation',
        'Figma plugin for seamless design workflow integration',
        'Component library with modern UI patterns and Tailwind CSS',
        'Version control and collaboration features for team feedback'
      ],
      results: [
        '10x faster prototype creation (2 hours vs. 20 hours)',
        '85% reduction in design costs for early-stage startups',
        '92% user satisfaction score in beta testing',
        '1,200+ prototypes generated in first 3 months',
        'Featured in 5 major product design publications'
      ]
    }
  };

  const study = caseStudyData[id as keyof typeof caseStudyData];

  if (!study) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/case-studies">Back to Case Studies</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="portfolio-gradient py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <Button asChild variant="outline" className="mb-6">
                <Link to="/case-studies">← Back to Case Studies</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-dm-sans font-extrabold mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {study.subtitle}
            </p>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="minimal-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Duration</h4>
                  <p className="text-muted-foreground">{study.duration}</p>
                </CardContent>
              </Card>
              <Card className="minimal-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Team</h4>
                  <p className="text-muted-foreground">{study.team}</p>
                </CardContent>
              </Card>
              <Card className="minimal-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Key Outcome</h4>
                  <p className="text-primary font-medium">{study.outcome}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-16 max-w-6xl mx-auto minimal-shadow">
            <img 
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.overview}
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                The <span className="text-gradient">Problem</span>
              </h2>
              <Card className="minimal-shadow">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed">
                    {study.problem}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Research */}
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                Research & <span className="text-gradient">Discovery</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="minimal-shadow">
                  <CardHeader>
                    <CardTitle>Research Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {study.research.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  {study.personas.map((persona, index) => (
                    <Card key={index} className="minimal-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{persona.name}</CardTitle>
                        <CardDescription>{persona.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-green-600 mb-1">Goals</h5>
                            <ul className="text-sm space-y-1">
                              {persona.goals.map((goal, i) => (
                                <li key={i}>• {goal}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-600 mb-1">Frustrations</h5>
                            <ul className="text-sm space-y-1">
                              {persona.frustrations.map((frustration, i) => (
                                <li key={i}>• {frustration}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                The <span className="text-gradient">Solution</span>
              </h2>
              <Card className="minimal-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {study.solution.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                        </div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                Results & <span className="text-gradient">Impact</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.results.map((result, index) => (
                  <Card key={index} className="text-center minimal-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary-foreground font-bold">✓</span>
                      </div>
                      <p className="font-medium">{result}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-dm-sans font-extrabold mb-4">
                    Interested in <span className="text-gradient">Similar Results?</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Let's discuss how I can help transform your product with strategic 
                    UX improvements and AI integration.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="hover-lift minimal-shadow">
                      <Link to="/contact">Start a Project</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="hover-lift">
                      <Link to="/case-studies">View More Cases</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
