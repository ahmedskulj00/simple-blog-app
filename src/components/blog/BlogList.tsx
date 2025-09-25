"use client";

import { useBlogs } from "@/hooks/useBlogs";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const { blogs, loaded } = useBlogs();
  const commonClasses =
    "text-center text-lg font-semibold min-h-[calc(100vh-44px)] flex items-center justify-center";

  if (!loaded) {
    return <p className={commonClasses}>Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p className={commonClasses}>No blogs available yet.</p>;
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
