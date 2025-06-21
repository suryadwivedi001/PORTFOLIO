import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Resume = () => {
  const skills = [
    'ChatGPT & LangChain',
    'Python (Basic)',
    'SQL & Data Analysis',
    'B2B SaaS Products',
    'Credit Risk Analysis',
    'Agile/Scrum',
    'Figma & Balsamiq',
    'GenAI Integration',
    'Jira & Trello',
    'Google Analytics',
    'Postman',
    'Notion',
    'Lovable.dev',
    'Credit & Financial Data',
    'API Documentation'
  ];

  const experiences = [
    {
      title: 'Associate Product Manager - Consultant',
      company: 'Wipro Gallagher Solutions',
      location: 'Noida, India',
      period: 'July 2022 – Present',
      description: 'Leading B2B SaaS financial platform development with focus on AI integration and lending technology solutions.',
      achievements: [
        'Led UX design and wireframing for 750+ B2B SaaS application screens, enhancing client demo conversion',
        'Spearheaded GenAI integration for real estate lending, increasing loan closure rates by 30%',
        'Designed and launched credit card origination workflow including KYC, fraud checks, and credit scoring',
        'Reduced product demo time-to-market from 6-9 months to 1 month through strategic process optimization',
        'Developed cross-sell financial products using credit data, achieving 25% increase in customer retention',
        'Integrated third-party services (Lexis Nexis, Experian PID, CrossCore) for enhanced fraud prevention',
        'Led sprint planning and delivery, reducing operational investment by 30% while driving profit margins'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Wipro Gallagher Solutions',
      location: 'Noida, India',
      period: 'June 2021 – May 2022',
      description: 'Developed and optimized .NET and Angular-based product modules for enhanced functionality.',
      achievements: [
        'Built product modules using .NET, SQL, and Angular technologies',
        'Enhanced application speed, reliability, and user satisfaction',
        'Contributed to developer efficiency improvements through internal tooling optimization'
      ]
    },
    {
      title: 'Product Manager - Founding Member',
      company: 'Veefitt Ventures Pvt Ltd',
      location: 'Jalandhar, India',
      period: 'August 2019 – April 2021',
      description: 'Led product development for "Ovis" CRM platform designed for fitness coaches and trainers.',
      achievements: [
        'Directed end-to-end product creation from ideation through successful market launch',
        'Conducted comprehensive market research and user feedback analysis for feature optimization',
        'Systematized onboarding processes and user workflows using Notion and Figma',
        'Led customer interviews and coordinated feature development sprints'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Instrumentation and Control Engineering',
      institution: 'Dr. B.R. Ambedkar National Institute of Technology (NIT), Jalandhar',
      year: '2017 – 2021'
    }
  ];

  const certifications = [
    'Mastering AI Agents Bootcamp – Build Smart Chatbots & Tools (Udemy - Jet Drag Academy)',
    'The Product Management for AI & Data Science Course (Udemy - Danielle The)',
    'Prompt Engineering for Developers (OpenAI)'
  ];

  return (
    <>
      <div className="bg-white py-12">
        <div className="container mx-auto ">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-oxford-blue mb-6" style={{ fontSize: '48px', lineHeight: '56px' }}>
              <span className="text-gradient">Resume</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-grey mb-8 leading-relaxed font-inter">
              AI-focused Product Manager with expertise in B2B SaaS and lending technology. 
              Proven track record of driving 30%+ growth through strategic GenAI integration 
              and product innovation at Wipro Gallagher Solutions.
            </p>
            <Button 
              size="lg" 
              className="border-2 border-oxford-blue bg-oxford-blue text-white hover:bg-oxford-blue/90 font-medium rounded-lg px-8 py-3 transition-all duration-200 uppercase tracking-wide shadow-sm min-h-[44px] min-w-[44px]"
              aria-label="Download Surya's resume as PDF"
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Contact Info */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-charcoal-grey" aria-hidden="true" />
                    <a 
                      href="mailto:surya.dwivedi01@outlook.com"
                      className="text-charcoal-grey hover:text-oxford-blue transition-colors font-inter"
                    >
                      surya.dwivedi01@outlook.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-charcoal-grey" aria-hidden="true" />
                    <a 
                      href="tel:+918847313113"
                      className="text-charcoal-grey hover:text-oxford-blue transition-colors font-inter"
                    >
                      +91 8847313113
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-charcoal-grey" aria-hidden="true" />
                    <a 
                      href="https://www.linkedin.com/in/surya-prakash-dhar-dwivedi-32a89a165/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-oxford-blue hover:text-oxford-blue/80 underline transition-colors font-inter"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-charcoal-grey font-inter">Ghaziabad, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Summary */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-charcoal-grey font-inter">
                  AI-focused Product Manager with robust experience in leading B2B SaaS and lending technology 
                  products across their entire lifecycle. Demonstrated expertise in applying Generative AI, 
                  automation tools, and agile methodologies to optimize operations, improve user experience, 
                  and drive business growth. Skilled in designing intelligent workflows, building basic agents 
                  using ChatGPT and LangChain, and aligning product vision with strategic objectives in 
                  fast-paced, high-impact environments.
                </p>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-charcoal-grey font-inter"><strong>AI-Led Lending Innovation:</strong> Spearheaded Generative AI integration for real estate recommendation and credit risk analysis, boosting loan closure rates by 30%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-charcoal-grey font-inter"><strong>Agent-Driven Automation:</strong> Created basic AI agents using LangChain, ChatGPT, and Python to streamline workflows and automate tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-charcoal-grey font-inter"><strong>Reduced Demo TAT:</strong> Cut product demo time-to-market from 6–9 months to 1 month, significantly improving client acquisition speed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-charcoal-grey font-inter"><strong>Cross-Sell Personalization:</strong> Leveraged credit data for personalized product recommendations, increasing retention and revenue by 25%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-charcoal-grey font-inter"><strong>Developer Productivity:</strong> Enhanced developer efficiency by 20% via internal tooling optimization in the NetOxygen Launchpad Admin Portal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Core Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 bg-ivory-white text-charcoal-grey border-light-grey-border">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-oxford-blue pl-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-charcoal-grey">{exp.title}</h3>
                      <p className="text-lg text-oxford-blue font-medium">{exp.company}</p>
                      <p className="text-sm text-charcoal-grey">{exp.location} • {exp.period}</p>
                    </div>
                    <p className="text-charcoal-grey mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                          <span className="text-charcoal-grey">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Education</CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-oxford-blue pl-6">
                    <h3 className="text-xl font-bold text-charcoal-grey">{edu.degree}</h3>
                    <p className="text-lg text-oxford-blue font-medium">{edu.field}</p>
                    <p className="text-sm text-charcoal-grey">{edu.institution} • {edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Certifications & Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                      <span className="text-charcoal-grey font-inter">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal-grey font-inter">Leadership & Community</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-charcoal-grey font-inter">Former President, Robotics Society – NIT Jalandhar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 margin-dot flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-charcoal-grey font-inter">Part of the award-winning electric vehicle team at ESVC 2019</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-oxford-blue mb-4">
                    Ready to <span className="text-gradient">Collaborate?</span>
                  </h2>
                  <p className="text-charcoal-grey mb-6 leading-relaxed font-inter">
                    Let's discuss how I can help drive your B2B SaaS product growth 
                    through strategic AI integration and product management expertise.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="hover-lift border-2 border-oxford-blue bg-oxford-blue text-white hover:bg-oxford-blue/90 font-medium rounded-lg px-8 py-3 transition-all duration-200 uppercase tracking-wide shadow-sm min-h-[44px] min-w-[44px]"
                      aria-label="Contact Surya via email"
                    >
                      <a href="mailto:surya.dwivedi01@outlook.com" className="flex items-center">
                        Get in Touch
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="hover-lift border-2 border-burnt-umber text-burnt-umber hover:bg-burnt-umber hover:text-white font-medium rounded-lg px-8 py-3 transition-all duration-200 uppercase tracking-wide min-h-[44px] min-w-[44px]"
                      aria-label="Download full resume"
                    >
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Download Full Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
