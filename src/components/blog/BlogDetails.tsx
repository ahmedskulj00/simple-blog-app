"use client";

import { useBlogs } from "@/hooks/useBlogs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../shared/Button";
import DeleteModal from "./BlogDeleteModal";
import { useState } from "react";

interface BlogDetailsProps {
  id: string;
}

const BlogDetails = ({ id }: BlogDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getBlog, deleteBlog, loaded } = useBlogs();
  const blog = getBlog(id);
  const router = useRouter();

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    deleteBlog(id);
    router.push("/");
  };

  if (!loaded) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="my-10">
      <Link href="/" className="hover:underline font-bold">
        <Button>&larr; Back</Button>
      </Link>
      <h1 className="sm:text-7xl text-5xl mt-5">{blog.title}</h1>
      <div className="rounded-xl bg-white py-1 px-2 w-fit text-black text-sm mt-1">
        {blog.date}
      </div>
      <div className="flex gap-4 my-5 items-center justify-between flex-col sm:flex-row">
        <p>{`${blog.authorName} - ${blog.authorEmail}`}</p>
        <div className="gap-2 flex">
          <Link href={`/blog/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <Button onClick={handleDeleteClick}>Delete</Button>
        </div>
      </div>
      <p className="my-4 text-justify italic">{blog.summary}</p>
      <p className="text-justify">{blog.content}</p>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default BlogDetails;
