import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:surya.dwivedi01@outlook.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="bg-white pt-12 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-oxford-blue mb-6" style={{ fontSize: '48px', lineHeight: '56px' }}>
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-grey font-inter leading-relaxed">
              Ready to transform your product with AI? Let's discuss how we can 
              drive innovation and growth together.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter text-charcoal-grey">Send a Message</CardTitle>
                  <CardDescription className="text-charcoal-grey">
                    I'd love to hear about your project and explore how we can work together.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-charcoal-grey">
                          First Name
                        </label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-white border-light-grey-border focus:border-oxford-blue focus:ring-2 focus:ring-oxford-blue focus:ring-opacity-30 placeholder:text-charcoal-grey/60"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-charcoal-grey">
                          Last Name
                        </label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-white border-light-grey-border focus:border-oxford-blue focus:ring-2 focus:ring-oxford-blue focus:ring-opacity-30 placeholder:text-charcoal-grey/60"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-charcoal-grey">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white border-light-grey-border focus:border-oxford-blue focus:ring-2 focus:ring-oxford-blue focus:ring-opacity-30 placeholder:text-charcoal-grey/60"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-charcoal-grey">
                        Company
                      </label>
                      <Input 
                        id="company" 
                        placeholder="Your Company" 
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white border-light-grey-border focus:border-oxford-blue focus:ring-2 focus:ring-oxford-blue focus:ring-opacity-30 placeholder:text-charcoal-grey/60"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-charcoal-grey">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="AI Transformation Project" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-white border-light-grey-border focus:border-oxford-blue focus:ring-2 focus:ring-oxford-blue focus:ring-opacity-30 placeholder:text-charcoal-grey/60"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-charcoal-grey">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project and goals..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white border-light-grey-border focus:border-oxford-blue focus:ring-2 focus:ring-oxford-blue focus:ring-opacity-30 placeholder:text-charcoal-grey/60"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-oxford-blue text-white hover:bg-oxford-blue/90 font-medium rounded-lg px-8 py-3 transition-all duration-200 uppercase tracking-wide shadow-sm min-h-[44px]">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-inter text-charcoal-grey">Get in Touch</CardTitle>
                    <CardDescription className="text-charcoal-grey">
                      Prefer to reach out directly? Here's how you can contact me.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-oxford-blue rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-grey">Email</p>
                        <a 
                          href="mailto:surya.dwivedi01@outlook.com" 
                          className="text-charcoal-grey hover:text-oxford-blue transition-colors"
                        >
                          surya.dwivedi01@outlook.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-oxford-blue rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-grey">Phone</p>
                        <a 
                          href="tel:+918847313113" 
                          className="text-charcoal-grey hover:text-oxford-blue transition-colors"
                        >
                          +91 8847313113
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-oxford-blue rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-grey">Response Time</p>
                        <p className="text-charcoal-grey">Usually within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-inter text-charcoal-grey">Connect on Social</CardTitle>
                    <CardDescription className="text-charcoal-grey">
                      Follow my work and insights on these platforms.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/surya-prakash-dhar-dwivedi-32a89a165/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg border border-light-grey-border hover:bg-light-grey transition-colors"
                    >
                      <Linkedin className="h-5 w-5 mr-3 text-oxford-blue" />
                      <div>
                        <p className="font-medium text-charcoal-grey">LinkedIn</p>
                        <p className="text-sm text-charcoal-grey">Professional updates & insights</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg border border-light-grey-border hover:bg-light-grey transition-colors"
                    >
                      <Github className="h-5 w-5 mr-3 text-oxford-blue" />
                      <div>
                        <p className="font-medium text-charcoal-grey">GitHub</p>
                        <p className="text-sm text-charcoal-grey">Open source projects & code</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Consultation Types */}
                <Card className="bg-white border border-light-grey-border shadow-sm rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-inter text-charcoal-grey">How I Can Help</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-oxford-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-charcoal-grey">AI Transformation Strategy</p>
                          <p className="text-sm text-charcoal-grey">Roadmap and implementation planning</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-oxford-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-charcoal-grey">Product Management</p>
                          <p className="text-sm text-charcoal-grey">End-to-end product development</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-oxford-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-charcoal-grey">UX & Conversion Optimization</p>
                          <p className="text-sm text-charcoal-grey">Data-driven design improvements</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-oxford-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-charcoal-grey">AI Agent Development</p>
                          <p className="text-sm text-charcoal-grey">Custom AI solutions and integrations</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
