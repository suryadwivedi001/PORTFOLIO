import caseStudies from '@/data/caseStudies.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CaseStudyDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const { id } = useParams();

  const study = caseStudies.find((item) => item.id === id);

  if (!study) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-gradient py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
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

          <h1 className="text-4xl md:text-5xl font-dm-sans font-extrabold mb-4">{study.title}</h1>
          {study.subtitle && <p className="text-xl text-muted-foreground mb-8">{study.subtitle}</p>}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {study.duration && (
              <Card className="minimal-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Duration</h4>
                  <p className="text-muted-foreground">{study.duration}</p>
                </CardContent>
              </Card>
            )}
            {study.team && (
              <Card className="minimal-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Team</h4>
                  <p className="text-muted-foreground">{study.team}</p>
                </CardContent>
              </Card>
            )}
            {study.outcome && (
              <Card className="minimal-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Key Outcome</h4>
                  <p className="text-primary font-medium">{study.outcome}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-16 max-w-6xl mx-auto minimal-shadow">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto space-y-16">
          {study.overview && (
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <div
        className="prose lg:prose-lg text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: study.overview }}
      />
            </section>
          )}

          {study.problem && (
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                The <span className="text-gradient">Problem</span>
              </h2>
              <Card className="minimal-shadow">
                <CardContent className="p-8">
                  <div
            className="prose lg:prose-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: study.problem }}
          />
                </CardContent>
              </Card>
            </section>
          )}

          {study.research && (
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
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {study.personas && (
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
                )}
              </div>
              
            </section>
          )}

          {/* ✅ PDF IFrame if available */}
              {study.pdfSrc && (
  <section className="w-full">
    <div className="w-full mb-16">
      <h2 className="text-3xl font-dm-sans font-extrabold mb-6 text-center sm:text-left">
        Solution <span className="text-gradient"> Walkthrough</span>
      </h2>
      <div className="w-full aspect-[8.5/11] rounded-lg overflow-hidden border border-muted shadow-md">
        <iframe
          src={`${study.pdfSrc}#toolbar=0&navpanes=0&scrollbar=0&view=fit`}
          className="w-full h-full"
          title={`${study.title} Case Study PDF`}
        />
        <iframe
          src={`${study.pdfSrc}#toolbar=0&navpanes=0&scrollbar=0&view=fit`}
          className="w-full h-full"
          style={{
            backgroundColor: "#f8fafc", // Ensure iframe bg is white
          }}
          title={`${study.title} Case Study PDF`}
        />
      </div>
      
    </div>
  </section>
)}


{study.solution && (
  <section>
    <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
      The <span className="text-gradient">Solution</span>
    </h2>
    <Card className="minimal-shadow">
      <CardContent className="p-8">
        <div className="grid">
          {study.solution.map((item, index) => (
            <div
              key={index}
              className="w-full p-4 bg-muted/40 rounded-xl"
            >
              <div
                className="prose lg:prose-lg max-w-none leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>
)}

          {study.results && (
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
          )}

          {/* CTA */}
          <section className="text-center">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-dm-sans font-extrabold mb-4">
                  Interested in <span className="text-gradient">Similar Results?</span>
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss how I can help transform your product with strategic UX improvements and AI integration.
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
  );
};

export default CaseStudyDetail;
