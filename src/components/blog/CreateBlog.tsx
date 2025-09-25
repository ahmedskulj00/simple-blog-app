"use client";

import { useBlogs } from "@/hooks/useBlogs";
import BlogForm from "./BlogForm";
import { useRouter } from "next/navigation";
import { Blog } from "@/types/types";

const CreateBlog = () => {
  const { addBlog } = useBlogs();
  const router = useRouter();

  const handleSubmit = (form: Omit<Blog, "id">) => {
    addBlog({ id: crypto.randomUUID(), ...form });
    router.push("/");
  };

  return (
    <div className="flex w-full flex-col items-center min-h-[calc(100vh-44px)]">
      <h1 className="text-3xl mt-10 mb-5">Create a new blog</h1>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBlog;
