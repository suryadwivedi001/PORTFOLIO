import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';

const About = () => {
  return (
      <div className="bg-white pt-12 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-oxford-blue mb-6" style={{ fontSize: '48px', lineHeight: '56px' }}>
              About <span className="text-gradient">Surya Prakash</span>
            </h1>
            <p className="text-xl text-charcoal-grey mb-8 font-inter font-medium leading-relaxed">
              AI-focused Product Manager with robust experience in B2B SaaS and lending technology. 
              Currently driving innovation at Wipro Gallagher Solutions through strategic GenAI integration 
              and product excellence.
            </p>
            <a href="resume.pdf" download="Surya_Prakash_Dwivedi_Resume.pdf">
             <Button 
              size="lg" 
              className="border-2 border-oxford-blue bg-oxford-blue text-white hover:bg-oxford-blue/90 font-medium rounded-lg px-8 py-3 transition-all duration-200 uppercase tracking-wide shadow-sm min-h-[44px] min-w-[44px]"
              aria-label="Download Surya's resume as PDF"
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
            </a>
            
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h2 className="text-2xl font-bold text-charcoal-grey mb-4 font-inter">MY JOURNEY</h2>
                <p className="text-charcoal-grey leading-relaxed mb-4 font-inter">
                  With over 3 years of experience in B2B SaaS product management, I've specialized 
                  in integrating Generative AI solutions into lending technology platforms. 
                  Currently at Wipro Gallagher Solutions, I lead product development for 750+ 
                  application screens and drive strategic AI implementations.
                </p>
                <p className="text-charcoal-grey leading-relaxed font-inter">
                  My journey began as a Software Developer working with .NET and Angular, 
                  but I quickly transitioned to product management where I found my passion 
                  for bridging technical capabilities with business outcomes. I've successfully 
                  launched credit card origination workflows, integrated AI for real estate 
                  lending, and consistently delivered 30%+ growth metrics.
                </p>
              </Card>

              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-4 font-inter">PRODUCT PHILOSOPHY</h3>
                <p className="text-charcoal-grey leading-relaxed font-inter">
                  I believe successful B2B SaaS products are built on three pillars: strategic AI integration 
                  that feels natural, data-driven decision making that drives measurable outcomes, and 
                  user-centric design that simplifies complex financial workflows. My approach combines 
                  rigorous technical understanding with business strategy to deliver products that scale.
                </p>
              </Card>
            </div>

            {/* Right Column - Skills & Expertise */}
            <div className="space-y-6">
              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-4 font-inter">CORE EXPERTISE</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'ChatGPT & LangChain',
                    'B2B SaaS Products',
                    'Credit Risk Analysis',
                    'Python (Basic)',
                    'SQL & Analytics',
                    'Agile/Scrum',
                    'Figma & Balsamiq',
                    'API Documentation'
                  ].map((skill) => (
                    <div key={skill} className="text-sm font-medium text-charcoal-grey bg-ivory-white p-3 rounded-lg border border-light-grey-border">
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-4 font-inter">INDUSTRY FOCUS</h3>
                <ul className="space-y-3 text-charcoal-grey font-inter">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>Financial Services & Lending Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>B2B SaaS Platforms & Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>Credit Card Origination Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>AI-Powered Risk Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>Fitness & Health Tech (Previous)</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-4 font-inter">CURRENT IMPACT</h3>
                <ul className="space-y-2 text-charcoal-grey font-inter">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>Leading 750+ B2B SaaS application screens at Wipro Gallagher Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>Driving 30% improvement in loan closure rates through AI integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span>Managing end-to-end credit card origination product development</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Background & Education */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
              <h2 className="text-2xl font-bold text-charcoal-grey mb-6 font-inter">BACKGROUND & EDUCATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-oxford-blue mb-3 font-inter">Education</h3>
                  <p className="text-charcoal-grey mb-2 font-inter">
                    <strong>Bachelor of Technology</strong><br />
                    Instrumentation and Control Engineering<br />
                    Dr. B.R. Ambedkar National Institute of Technology (NIT), Jalandhar<br />
                    <span className="text-charcoal-grey">2017 – 2021</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-oxford-blue mb-3 font-inter">Leadership</h3>
                  <ul className="space-y-2 text-charcoal-grey font-inter">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                      <span>Former President, Robotics Society – NIT Jalandhar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                      <span>Award-winning Electric Vehicle Team Member – ESVC 2019</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-playfair font-bold text-oxford-blue">LET'S BUILD TOGETHER</h2>
              <p className="text-charcoal-grey mb-6 leading-relaxed font-inter">
                Ready to drive your B2B SaaS product growth through strategic AI integration? 
                Let's discuss how my experience at Wipro Gallagher Solutions can help your organization 
                achieve measurable outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="hover-lift border-2 border-oxford-blue bg-oxford-blue text-white hover:bg-oxford-blue/90 font-medium rounded-lg px-8 py-3 transition-all duration-200 uppercase tracking-wide shadow-sm min-h-[44px] min-w-[44px]"
                  aria-label="Send email to Surya"
                >
                  <a href="mailto:surya.dwivedi01@outlook.com">EMAIL ME</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="hover-lift border-2 border-burnt-umber text-burnt-umber hover:bg-burnt-umber hover:text-white font-medium rounded-lg px-8 py-3 transition-all duration-200 uppercase tracking-wide min-h-[44px] min-w-[44px]"
                  aria-label="Call Surya"
                >
                  <a href="tel:+918847313113">CALL NOW</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
