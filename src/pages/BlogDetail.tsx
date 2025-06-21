// src/pages/BlogDetail.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

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
    const raw = import.meta.env.VITE_BLOG;
    if (raw) {
      try {
        const blogs: BlogPost[] = JSON.parse(raw);
        const found = blogs.find((b) => b.id === id);
        setBlog(found || null);
      } catch (err) {
        console.error("Error parsing blog data:", err);
      }
    }
  }, [id]);

  if (!blog) return <p>Loading or blog not found...</p>;

  return (
    <Layout>
      <div className="max-w-[1440px] mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{blog.subtitle}</p>
        <p className="text-sm text-gray-500">{blog.publishedAt} • {blog.readTime}</p>

        {/* Image breaks out of container but stays in correct flow position */}
        <div className="relative w-screen h-[400px] left-1/2 -translate-x-1/2 overflow-hidden my-4">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        <p className="mt-6">{blog.excerpt}</p>

        <div className="mt-4 flex gap-2 flex-wrap">
          {blog.tags.map(tag => (
            <span key={tag} className="bg-gray-200 px-2 py-1 text-sm rounded">{tag}</span>
          ))}
        </div>
      </div>
    </Layout>
  );
}
