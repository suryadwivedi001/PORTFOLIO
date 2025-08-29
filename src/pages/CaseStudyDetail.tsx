import React, { useEffect } from 'react';
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Case Study Not Found
        </h1>
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
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Responsive Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-dm-sans font-extrabold mb-4">
            {study.title}
          </h1>
          {study.subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
              {study.subtitle}
            </p>
          )}

          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
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

        {/* Hero Image (scaled for mobile) */}
        <div className="overflow-hidden rounded-lg mb-16 max-w-6xl mx-auto minimal-shadow">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto max-h-[300px] sm:max-h-[500px] md:max-h-[650px] object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview */}
          {study.overview && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-dm-sans font-extrabold mb-6">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <div
                className="prose prose-sm sm:prose md:prose-lg text-muted-foreground leading-relaxed break-words"
                dangerouslySetInnerHTML={{ __html: study.overview }}
              />
            </section>
          )}

          {/* Problem */}
          {study.problem && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-dm-sans font-extrabold mb-6">
                The <span className="text-gradient">Problem</span>
              </h2>
              <Card className="minimal-shadow">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div
                    className="prose prose-sm sm:prose md:prose-lg leading-relaxed break-words"
                    dangerouslySetInnerHTML={{ __html: study.problem }}
                  />
                </CardContent>
              </Card>
            </section>
          )}

          {/* Solution: Responsive iFrames and HTML fallback */}
          {study.notionUrl ? (
            <section>
              <h2 className="text-2xl sm:text-3xl font-dm-sans font-extrabold mb-6">
                Solution <span className="text-gradient">Walkthrough</span>
              </h2>
              <div className="w-full h-[60vh] sm:h-[200vh] rounded-lg overflow-hidden border border-muted shadow-md">
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
              <h2 className="text-2xl sm:text-3xl font-dm-sans font-extrabold mb-6">
                Solution <span className="text-gradient">Walkthrough</span>
              </h2>
              <div className="w-full h-[60vh] sm:h-[80vh] rounded-lg overflow-hidden border border-muted shadow-md">
                <iframe
                  src={study.pdfSrc}
                  className="w-full h-full"
                  title={`${study.title} PDF Case Study`}
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </section>
          ) : study.solution ? (
            <section>
              <h2 className="text-2xl sm:text-3xl font-dm-sans font-extrabold mb-6">
                The <span className="text-gradient">Solution</span>
              </h2>
              <Card className="minimal-shadow">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="grid gap-4">
                    {study.solution.map((html, i) => (
                      <div
                        key={i}
                        className="w-full p-3 sm:p-4 bg-muted/40 rounded-xl prose prose-sm sm:prose md:prose-lg break-words"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          ) : null}

          {/* Final CTA */}
          <section className="text-center">
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-dm-sans font-extrabold mb-4">
                  Interested in <span className="text-gradient">Similar Results?</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss how I can help transform your product with
                  strategic UX improvements and AI integration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link to="/contact">Start a Project</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
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
