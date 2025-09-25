"use client";

import { useBlogs } from "@/hooks/useBlogs";
import Link from "next/link";

const HomeWrapper = () => {
  const { blogs } = useBlogs();

  return (
    <div className="my-10">
      {blogs && blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="gap-2 flex flex-col p-4 hover:bg-white/10"
            >
              <h1 className="text-4xl">{blog.title}</h1>
              <p className="italic text-sm">{blog.date}</p>
              <p className="line-clamp-5">{blog.summary}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold">
          No blogs available yet.
        </p>
      )}
    </div>
  );
};

export default HomeWrapper;
