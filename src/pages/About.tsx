import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
      <div className="bg-white pt-12 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section with Image */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Hero Content */}
              <div className="space-y-6">
                <h1 className="font-playfair font-bold text-oxford-blue" style={{ fontSize: '48px', lineHeight: '56px' }}>
                  Meet <span className="text-gradient">Surya Prakash</span>
                </h1>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-charcoal-grey font-inter">
                    AI-driven Product Leader | Transforming Lending with Innovation
                  </h2>
                  <p className="text-lg text-charcoal-grey font-inter leading-relaxed">
                    <em>"Problem Solver, Storyteller, Thinker and a Newbie martial artist who enjoys being challenged and accepts his mistakes and usually loves exploring why a mistake happened in the first place."</em>
                  </p>
                  <p className="text-xl text-charcoal-grey mb-8 font-inter font-medium leading-relaxed">
                    With 4 years of experience as a Product Manager at Wipro Gallagher Solutions, I specialize in leveraging Generative AI to build impactful B2B SaaS products in the lending domain. My passion lies in bridging cutting-edge technology with strategic business outcomes.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="/PORTFOLIO/surya_image.png" 
                      alt="Surya Prakash playing guitar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
<div className="max-w-6xl mx-auto my-20 px-4">
  <Card className="bg-white text-black p-10 rounded-xl shadow-md">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold font-playfair">My Product Philosophy</h2>
      <p className="text-xl font-inter italic">
        "I consider myself as someone who is passionate about creating scalable and accessible products using various business technological and design aspects."
      </p>
      <p className="text-lg font-inter">
        <strong>
          Doing research, creating scalable products and processes that sustains creativity in an organization: this is my Ikigai.
        </strong>
      </p>
    </div>
  </Card>
</div>


          {/* Problem-Solving Approach */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-8 text-center font-playfair">How I Approach Problems</h2>
            <p className="text-lg text-charcoal-grey mb-8 text-center font-inter max-w-3xl mx-auto">
              "My life experiences says that if you are capable of looking into a problem neutrally or without any bias, that problem is already 20% solved."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal-grey mb-2 font-inter">Neutral Analysis</h3>
                <p className="text-charcoal-grey font-inter text-sm">Looking at problems without bias</p>
                <div className="mt-4 text-2xl font-bold text-oxford-blue">20%</div>
              </Card>

              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-burnt-umber rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal-grey mb-2 font-inter">Problem Definition</h3>
                <p className="text-charcoal-grey font-inter text-sm">Defining the problem correctly</p>
                <div className="mt-4 text-2xl font-bold text-burnt-umber">20%</div>
              </Card>

              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-charcoal-grey rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal-grey mb-2 font-inter">Brainstorming</h3>
                <p className="text-charcoal-grey font-inter text-sm">Collaborative ideation process</p>
                <div className="mt-4 text-2xl font-bold text-charcoal-grey">30%</div>
              </Card>

              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal-grey mb-2 font-inter">Implementation</h3>
                <p className="text-charcoal-grey font-inter text-sm">Executing the solution effectively</p>
                <div className="mt-4 text-2xl font-bold text-oxford-blue">30%</div>
              </Card>
            </div>
          </div>

          {/* Journey & Impact */}
          <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Journey */}
            <div className="space-y-6">
              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h2 className="text-2xl font-bold text-charcoal-grey mb-4 font-inter">MY JOURNEY</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-oxford-blue pl-4">
                    <h3 className="font-semibold text-oxford-blue font-inter">From Code to Product Leadership</h3>
                    <p className="text-charcoal-grey leading-relaxed font-inter">
                      Started as a Software Developer (.NET, Angular), gaining a strong technical foundation that now informs my product decisions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-burnt-umber pl-4">
                    <h3 className="font-semibold text-burnt-umber font-inter">Entrepreneurial Spirit</h3>
                    <p className="text-charcoal-grey leading-relaxed font-inter">
                      Co-founded OVIS - A Complete Fitness Solution during college, learning the art of building products from ideation to execution.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-oxford-blue pl-4">
                    <h3 className="font-semibold text-oxford-blue font-inter">Wipro Gallagher Solutions (4 Years)</h3>
                    <p className="text-charcoal-grey leading-relaxed font-inter">
                      Evolved into a strategic Product Manager, specializing in AI-driven lending solutions and leading 750+ application screens with measurable impact.
                    </p>
                  </div>
                </div>
              </Card>
              </div>

              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-4 font-inter">CORE EXPERTISE</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Product Discovery',
                    'Generative AI Integration',
                    'B2B SaaS Strategy',
                    'Credit Risk Analysis',
                    'User Experience Research',
                    'Agile & Scrum',
                    'Content Strategy',
                    'Brainstorming & Innovation'
                  ].map((skill) => (
                    <div key={skill} className="text-sm font-medium text-charcoal-grey bg-ivory-white p-3 rounded-lg border border-light-grey-border hover:bg-oxford-blue hover:text-white transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Impact & Results */}
            <div className="space-y-6">
              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-4 font-inter">QUANTIFIED IMPACT</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-oxford-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">30%</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal-grey font-inter">Loan Closure Rate Improvement</p>
                      <p className="text-sm text-charcoal-grey font-inter">Through Generative AI integration in real estate lending</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-burnt-umber rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">25%</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal-grey font-inter">Revenue Growth</p>
                      <p className="text-sm text-charcoal-grey font-inter">Through tailored financial product recommendations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-oxford-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">20%</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal-grey font-inter">Developer Efficiency</p>
                      <p className="text-sm text-charcoal-grey font-inter">Through optimized NetOxygen Launchpad processes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-charcoal-grey rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">750+</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal-grey font-inter">B2B SaaS Screens</p>
                      <p className="text-sm text-charcoal-grey font-inter">Led UX design and wireframing for enhanced user interaction</p>
                    </div>
                  </div>
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
                    <span>B2B SaaS Platforms & AI Integration</span>
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
                    <span>Fitness & Health Tech (OVIS Co-founder)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Background & Education */}
          <div className="max-w-6xl mx-auto mb-16">
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
                  <h3 className="text-lg font-semibold text-oxford-blue mb-3 font-inter">Leadership & Innovation</h3>
                  <ul className="space-y-2 text-charcoal-grey font-inter">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                      <span>Former President, Robotics Society – NIT Jalandhar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                      <span>Award-winning Electric Vehicle Team Member – ESVC 2019</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                      <span>Co-founder, OVIS - Complete Fitness Solution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <div className="flex justify-center mt-6">
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

          </div>
          

          {/* Contact CTA - Preserved as requested */}
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

