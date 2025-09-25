import BlogDetails from "@/components/blog/BlogDetails";

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const awaitedParams = await params;
  return <BlogDetails id={awaitedParams.id} />;
};

export default BlogDetailsPage;
