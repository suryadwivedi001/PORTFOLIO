import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// ✅ New: Import blog posts from JSON
import blogPosts from "@/data/blogs.json";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  tags: Array<string>;
  publishedAt: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const Blog = () => {
  return (
    <div className="bg-white section-spacing">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1
            className="font-playfair font-bold text-oxford-blue mb-6"
            style={{ fontSize: "48px", lineHeight: "56px" }}
          >
            <span className="text-gradient">Blog</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-charcoal-grey font-inter"
            style={{ lineHeight: "1.5" }}
          >
            Insights on AI transformation, B2B SaaS product strategy, and the
            future of AI-powered product development in lending technology.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover-lift animate-fade-in bg-white border border-light-grey-border shadow-sm rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover scale-on-hover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-oxford-blue text-white border-oxford-blue">
                    Featured
                  </Badge>
                  {blogPosts[0].tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-ivory-white text-charcoal-grey border-light-grey-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2
                  className="font-inter font-bold mb-2 text-charcoal-grey"
                  style={{ fontSize: "28px", lineHeight: "36px" }}
                >
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-charcoal-grey mb-4 font-inter">
                  {blogPosts[0].subtitle}
                </p>
                <div className="flex items-center justify-between mb-6 text-sm text-charcoal-grey font-inter">
                  <span>
                    {new Date(blogPosts[0].publishedAt).toLocaleDateString()}
                  </span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button asChild className="w-fit brand-button-primary">
                  <Link to={`/blog/${blogPosts[0].id}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={post.id}
              className={`hover-lift animate-fade-in cursor-pointer group bg-white border border-light-grey-border shadow-sm rounded-xl`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover scale-on-hover"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-ivory-white text-charcoal-grey border-light-grey-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="group-hover:text-brand-primary transition-colors font-gilroy text-charcoal-grey mb-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-charcoal-grey">
                  {post.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4 text-sm text-charcoal-grey">
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full brand-button-secondary"
                >
                  <Link to={`/blog/${post.id}`}>Read Article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
        </div>
      </div>
    </div>
  );
};

export default Blog;
