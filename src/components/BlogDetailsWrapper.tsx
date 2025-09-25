"use client";

import { useBlogs } from "@/hooks/useBlogs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./shared/Button";

interface BlogDetailsWrapperProps {
  id: string;
}

const BlogDetailsWrapper = ({ id }: BlogDetailsWrapperProps) => {
  const { getBlog } = useBlogs();
  const blog = getBlog(id);
  const router = useRouter();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="my-10">
      <Link href="/" className="hover:underline font-bold">
        <Button>Back</Button>
      </Link>
      <h1 className="sm:text-7xl text-5xl mt-5">{blog.title}</h1>
      <div className="flex gap-4 my-5 items-center">
        <p>{`${blog.authorName} - ${blog.authorEmail} - ${blog.date}`}</p>
        <Link href={`/blog/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Button onClick={() => router.push("/")}>Delete</Button>
      </div>
      <p className="my-4 text-lg text-justify">{blog.summary}</p>
      <p className="text-2xl text-justify">{blog.content}</p>
    </div>
  );
};

export default BlogDetailsWrapper;
