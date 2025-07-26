import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import caseStudies from '@/data/caseStudies.json';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CaseStudyDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The case study you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild>
          <Link to="/case-studies">Back to Case Studies</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="portfolio-gradient py-12">
      <div className="container mx-auto px-4">
        {/* Back Button + Tags */}
        <div className="max-w-6xl mx-auto mb-12">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/case-studies">← Back to Case Studies</Link>
          </Button>

          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-dm-sans font-extrabold mb-4">
            {study.title}
          </h1>
          {study.subtitle && (
            <p className="text-xl text-muted-foreground mb-8">
              {study.subtitle}
            </p>
          )}

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
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview */}
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

          {/* Problem */}
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

          {/* Research */}
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
                      {study.research.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* Personas */}
          {study.personas && (
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                User <span className="text-gradient">Personas</span>
              </h2>
              <div className="space-y-6">
                {study.personas.map((p, idx) => (
                  <Card key={idx} className="minimal-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{p.name}</CardTitle>
                      <CardDescription>{p.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-green-600 mb-1">Goals</h5>
                          <ul className="text-sm space-y-1">
                            {p.goals.map((g, i) => <li key={i}>• {g}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-600 mb-1">Frustrations</h5>
                          <ul className="text-sm space-y-1">
                            {p.frustrations.map((f, i) => <li key={i}>• {f}</li>)}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Solution: Notion, PDF or HTML fallback */}
          {study.notionUrl ? (
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                Solution <span className="text-gradient">Walkthrough</span>
              </h2>
              <div className="w-full h-[250vh] rounded-lg overflow-hidden border border-muted shadow-md">
                <iframe
                  src={study.notionUrl}
                  className="w-full h-full"
                  title={`${study.title} Notion Case Study`}
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </section>
          ) : study.pdfSrc ? (
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                Solution <span className="text-gradient">Walkthrough</span>
              </h2>
              <div className="w-full h-[100vh] rounded-lg overflow-hidden border border-muted shadow-md">
                <iframe
                  src={study.notionUrl}
                  className="w-full h-full"
                  title={`${study.title} Notion Case Study`}
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </section>
          ) : study.solution ? (
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                The <span className="text-gradient">Solution</span>
              </h2>
              <Card className="minimal-shadow">
                <CardContent className="p-8">
                  <div className="grid gap-4">
                    {study.solution.map((html, i) => (
                      <div
                        key={i}
                        className="w-full p-4 bg-muted/40 rounded-xl prose lg:prose-lg"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          ) : null}

          {/* Results */}
          {study.results && (
            <section>
              <h2 className="text-3xl font-dm-sans font-extrabold mb-6">
                Results & <span className="text-gradient">Impact</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.results.map((r, i) => (
                  <Card key={i} className="text-center minimal-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary-foreground font-bold">✓</span>
                      </div>
                      <p className="font-medium">{r}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Final CTA */}
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
                  <Button asChild size="lg">
                    <Link to="/contact">Start a Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
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
