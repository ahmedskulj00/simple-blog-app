"use client";

import { useBlogs } from "@/hooks/useBlogs";
import BlogForm from "./shared/BlogForm";
import { useRouter } from "next/navigation";
import { Blog } from "@/types/types";
import Link from "next/link";
import Button from "./shared/Button";

interface EditBlogWrapperProps {
  id: string;
}

const EditBlogWrapper = ({ id }: EditBlogWrapperProps) => {
  const { editBlog, getBlog } = useBlogs();
  const blog = getBlog(id);
  const router = useRouter();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const handleSubmit = (updated: Omit<Blog, "id">) => {
    editBlog(id, updated);
    router.push(`/blog/${id}`);
  };

  return (
    <div className="flex w-full flex-col items-center min-h-[calc(100vh-44px)]">
      <Link href={`/blog/${id}`} className="self-start mt-2">
        <Button>Back</Button>
      </Link>
      <h1 className="text-3xl mb-5">Edit Blog</h1>
      <BlogForm onSubmit={handleSubmit} initial={blog} />
    </div>
  );
};

export default EditBlogWrapper;
