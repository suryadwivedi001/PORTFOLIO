
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, AlertTriangle } from 'lucide-react';

interface OngoingProject {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tools: string[];
  status: 'concept' | 'designing' | 'building' | 'testing';
  prototypeUrl?: string;
  icon?: string;
  featured?: boolean;
  disclaimer?: string;
}

interface OngoingProjectsProps {
  showOnHomepage?: boolean;
  limit?: number;
}

const OngoingProjects = ({ showOnHomepage = false, limit }: OngoingProjectsProps) => {
  const projects: OngoingProject[] = [
    {
      id: 'chessgambit',
      title: 'ChessGambit ♟️',
      shortDescription: 'Real-money chess gaming platform with peer betting & custom board UI.',
      description: 'A real-money chess gaming platform designed for casual players to compete with friends or bots, place friendly bets, and track their chess growth. Built using React + TypeScript + Tailwind + @chrisoakman/chess.js, the platform blends elegant UX with real-time move validation, peer-to-peer match setup, and optional wallet integration.\n\nKey Features:\n• Play human vs human or human vs bot\n• Custom chessboard themes\n• Move history, real-time status, and UI controls\n• Matchmaking lobby (mocked)\n• Wallet & peer-betting interface (mocked for now)\n• Built-in game analytics roadmap (planned)',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Chess.js', 'MongoDB', 'Express', 'Node.js'],
      status: 'building',
      icon: '♟️',
      disclaimer: 'This is an ongoing personal build to experiment with chess engines, betting logic, and wallet flows. Not launched in production.',
      featured: true
    },
    {
      id: 'ai-pm-toolkit',
      title: 'AI PM Toolkit in Notion',
      shortDescription: 'Comprehensive toolkit for AI product managers built in Notion.',
      description: 'A complete toolkit designed specifically for AI product managers, built within Notion for easy access and collaboration. Includes templates, frameworks, and resources for managing AI product development lifecycle.\n\nKey Components:\n• AI product roadmap templates\n• ML model evaluation frameworks\n• Data requirement gathering templates\n• Stakeholder alignment tools\n• Performance tracking dashboards\n• Risk assessment matrices',
      tools: ['Notion', 'Templates', 'AI/ML Frameworks', 'Product Management'],
      status: 'testing',
      featured: true
    },
    {
      id: 'langchain-support-bot',
      title: 'LangChain Customer Support Bot',
      shortDescription: 'AI-powered customer support bot using LangChain and GPT.',
      description: 'An intelligent customer support bot built with LangChain and GPT that can handle complex customer queries, escalate when needed, and maintain conversation context. Designed to reduce support ticket volume while maintaining high customer satisfaction.\n\nKey Features:\n• Natural language understanding\n• Context-aware responses\n• Escalation logic\n• Integration with support ticketing systems\n• Performance analytics\n• Conversation logging and analysis',
      tools: ['LangChain', 'OpenAI GPT', 'Python', 'API Integration'],
      status: 'testing',
      featured: false
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'concept':
        return { color: 'bg-light-grey text-charcoal-grey border-light-grey-border hover:text-white', emoji: '🔍', label: 'Concept' };
      case 'designing':
        return { color: 'bg-light-grey text-charcoal-grey border-light-grey-border', emoji: '🎨', label: 'Designing' };
      case 'building':
        return { color: 'bg-oxford-blue text-white border-oxford-blue', emoji: '🔧', label: 'Building' };
      case 'testing':
        return { color: 'bg-charcoal-grey text-white border-charcoal-grey', emoji: '🧪', label: 'Testing' };
      default:
        return { color: 'bg-light-grey text-charcoal-grey border-light-grey-border', emoji: '❓', label: 'Unknown' };
    }
  };

  const displayProjects = showOnHomepage 
    ? projects.filter(p => p.featured).slice(0, limit || 2)
    : projects;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-oxford-blue mb-4">
            Ongoing <span className="text-gradient">Projects</span>
          </h2>
          
          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-light-grey border border-light-grey-border rounded-full px-4 py-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-charcoal-grey" />
              <span className="text-sm text-charcoal-grey">
                These projects are in development or conceptual phase and showcase my product thinking and design approach
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status);
            
            return (
              <Card 
                key={project.id} 
                className="border border-light-grey-border hover-lift animate-fade-in group h-full flex flex-col bg-white shadow-sm rounded-xl"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${statusConfig.color} text-xs font-medium border`}>
                      {statusConfig.emoji} {statusConfig.label}
                    </Badge>
                    {project.prototypeUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-inter group-hover:text-oxford-blue transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed flex-1 text-charcoal-grey">
                    {project.shortDescription}
                  </CardDescription>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.slice(0, 4).map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs bg-white text-charcoal-grey border-light-grey-border">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 4 && (
                      <Badge variant="outline" className="text-xs bg-white text-charcoal-grey border-light-grey-border">
                        +{project.tools.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-inter flex items-center gap-2">
                          {project.title}
                          <Badge className={`${statusConfig.color} text-xs border ml-2`}>
                            {statusConfig.emoji} {statusConfig.label}
                          </Badge>
                        </DialogTitle>
                        <DialogDescription className="text-base leading-relaxed whitespace-pre-line text-charcoal-grey">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 mt-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-charcoal-grey">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                              <Badge key={tool} variant="secondary" className="bg-light-grey text-charcoal-grey border-light-grey-border">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {project.disclaimer && (
                          <div className="bg-light-grey border border-light-grey-border rounded-lg p-4">
                            <p className="text-sm text-charcoal-grey italic">
                              {project.disclaimer}
                            </p>
                          </div>
                        )}
                        
                        {project.prototypeUrl && (
                          <Button asChild className="w-full">
                            <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
                              View Prototype <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  {project.disclaimer && (
                    <p className="text-xs text-charcoal-grey mt-3 italic">
                      Built to demonstrate end-to-end product thinking. Not a live product.
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
