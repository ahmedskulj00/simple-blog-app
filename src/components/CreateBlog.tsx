"use client";

import BlogForm from "./shared/BlogForm";

const CreateBlog = () => {
  return (
    <div className="flex w-full flex-col items-center min-h-[calc(100vh-44px)]">
      <h1 className="text-3xl mt-10 mb-10">Create a new blog</h1>
      <BlogForm />
    </div>
  );
};

export default CreateBlog;
