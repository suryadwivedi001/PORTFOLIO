// Portfolio/src/components/data/FeaturedCaseStudies.tsx
import { Link } from 'react-router-dom'
import caseStudiesData from '@/data/caseStudies.json'  // ← adjust path if needed
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function FeaturedCaseStudies() {
  // grab only those marked as featured
  const featuredStudies = caseStudiesData.filter((s) => s.featured)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-oxford-blue mb-10">
          Featured <span className="text-gradient">Case Studies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStudies.map((study, i) => (
            <Card
              key={study.id}
              className="hover-lift animate-fade-in cursor-pointer group h-full flex flex-col bg-white border border-light-grey-border shadow-sm rounded-xl"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover scale-on-hover"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-oxford-blue text-white border-oxford-blue">
                    Featured
                  </Badge>
                  {study.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-ivory-white text-charcoal-grey border-light-grey-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="mb-2 group-hover:text-burnt-umber transition-colors font-inter font-bold text-charcoal-grey">
                  {study.title}
                </CardTitle>
                <CardDescription className="flex-1 text-charcoal-grey font-inter">
                  {study.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-charcoal-grey font-inter">Duration:</span>
                    <span className="font-medium text-charcoal-grey font-inter">
                      {study.duration}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-burnt-umber font-inter">
                    {study.outcome}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to={`/case-studies/${study.id}`}>
                      View Full Case Study
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
