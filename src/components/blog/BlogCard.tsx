import { Blog } from "@/types/types";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${blog.id}`}
      key={blog.id}
      className="gap-2 flex flex-col p-4 hover:bg-white/10"
    >
      <h1 className="text-4xl">{blog.title}</h1>
      <p className="italic text-sm">{blog.date}</p>
      <p className="line-clamp-5 text-sm">{blog.summary}</p>
    </Link>
  );
};

export default BlogCard;
