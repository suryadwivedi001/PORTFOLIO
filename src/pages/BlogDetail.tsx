import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogData from "@/data/blogs.json";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    const found = blogData.find((b) => b.id === id);
    setBlog(found || null);
  }, [id]);

  if (!blog) return <p>Loading or blog not found...</p>;

  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-lg text-gray-600 mb-4">{blog.subtitle}</p>
      <p className="text-sm text-gray-500">
        {new Date(blog.publishedAt).toLocaleDateString()} • {blog.readTime}
      </p>

      {/* Featured Image */}
      <div className="relative w-screen h-[400px] left-1/2 -translate-x-1/2 overflow-hidden my-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* ✅ Render HTML content safely */}
      <div className="prose lg:prose-lg max-w-none mt-8">
        <div dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
      </div>

      {/* Tags */}
      <div className="mt-6 flex gap-2 flex-wrap">
        {blog.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-2 py-1 text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
