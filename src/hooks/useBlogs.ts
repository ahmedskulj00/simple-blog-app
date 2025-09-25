import { LOCAL_STORAGE_KEY } from "@/constants/constants";
import { Blog } from "@/types/types";
import { useEffect, useState } from "react";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setBlogs(JSON.parse(stored));
    }
  }, []);

  const syncBlogs = (blogs: Blog[]) => {
    setBlogs(blogs);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs));
  };

  const addBlog = (blog: Blog) => {
    syncBlogs([...blogs, blog]);
  };

  const getBlog = (id: string) => {
    return blogs.find((blog) => blog.id === id);
  };

  const editBlog = (id: string, updatedFields: Partial<Blog>) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, ...updatedFields } : blog
    );
    syncBlogs(updatedBlogs);
  };

  const deleteBlog = (id: string) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    syncBlogs(updatedBlogs);
  };

  return {
    blogs,
    addBlog,
    getBlog,
    editBlog,
    deleteBlog,
  };
};
