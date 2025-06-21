
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CaseStudyData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  outcome: string;
  duration?: string;
  role?: string;
  domain?: string;
  overview?: string;
  features?: string[];
  impact?: string[];
  tools?: string;
  fullContent?: {
    overview: string;
    features: string[];
    impact: string[];
    tools: string;
  };
}

interface InteracticeCaseStudiesProps {
  study: CaseStudyData;
  isOpen: boolean;
  onClose: () => void;
}

const InteracticeCaseStudies = ({ study, isOpen, onClose }: InteracticeCaseStudiesProps) => {
  const getFullContent = (studyId: string) => {
    switch (studyId) {
      case 'wipro-credit-origination':
        return {
          role: 'Product Manager | Wipro Gallagher Solutions',
          domain: 'B2B SaaS · Lending · Credit Risk · Workflow Automation',
          overview: `Built a fully digital credit card origination platform from scratch for a leading financial institution. The solution includes a dynamic CMS to manage credit card offerings, APRs, eligibility rules, document requirements, and campaign-specific content.`,
          features: [
            'CMS for Product Configuration: Internal teams can manage credit card data, APRs, fees, eligibility, and required documentation.',
            'Launchpad POS Integration: Partner agents can submit applications via a point-of-sale system with prefilled user data.',
            'API-First Architecture: Loan applications flow through APIs which connect to Credit Bureau for hard or soft pulls and a Decision Engine to compute creditworthiness and assign credit limits.',
            'Pre-Approved Card Logic: Used soft credit pulls to show eligible users dynamic "pre-approved" offers.',
            'Lifecycle Management: Credit limit increase workflows, card upgrades and reissuance based on usage data and credit improvements.'
          ],
          impact: [
            'Reduced manual approval workload by 80%',
            'Increased loan volume by 30% through automation and pre-approval strategy',
            'Enabled marketing and sales teams to launch card variants in under 48 hours using the CMS'
          ],
          tools: 'React · Node.js · REST APIs · CMS · Credit Bureau APIs · Decision Engine · Wipro Launchpad'
        };
      default:
        return {
          role: '',
          domain: '',
          overview: study.description,
          features: [],
          impact: [study.outcome],
          tools: ''
        };
    }
  };

  const fullContent = getFullContent(study.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-light-grey-border">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-ivory-white text-burnt-umber border-light-grey-border">
                    {tag}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-2xl font-inter font-bold text-charcoal-grey mb-2">
                {study.title}
              </DialogTitle>
              {fullContent.role && (
                <p className="text-burnt-umber font-medium font-inter mb-1">{fullContent.role}</p>
              )}
              {fullContent.domain && (
                <p className="text-charcoal-grey font-inter mb-4">{fullContent.domain}</p>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={study.image} 
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overview */}
          <Card className="bg-white border border-light-grey-border">
            <CardHeader>
              <CardTitle className="text-xl font-inter font-bold text-charcoal-grey">
                🧩 Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal-grey font-inter leading-relaxed">
                {fullContent.overview}
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          {fullContent.features.length > 0 && (
            <Card className="bg-white border border-light-grey-border">
              <CardHeader>
                <CardTitle className="text-xl font-inter font-bold text-charcoal-grey">
                  🚀 Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {fullContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-oxford-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-charcoal-grey font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Impact */}
          <Card className="bg-white border border-light-grey-border">
            <CardHeader>
              <CardTitle className="text-xl font-inter font-bold text-charcoal-grey">
                📊 Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fullContent.impact.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-ivory-white rounded-lg">
                    <div className="w-8 h-8 bg-oxford-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-charcoal-grey font-inter font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Stack */}
          {fullContent.tools && (
            <Card className="bg-white border border-light-grey-border">
              <CardHeader>
                <CardTitle className="text-xl font-inter font-bold text-charcoal-grey">
                  🧠 Tools & Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-grey font-inter font-medium">
                  {fullContent.tools}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Duration and Additional Info */}
          {study.duration && (
            <div className="flex justify-between items-center p-4 bg-ivory-white rounded-lg">
              <span className="text-charcoal-grey font-inter">Duration:</span>
              <span className="font-medium text-charcoal-grey font-inter">{study.duration}</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InteracticeCaseStudies;
