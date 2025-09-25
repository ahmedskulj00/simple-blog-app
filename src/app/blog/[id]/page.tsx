import BlogDetailsWrapper from "@/components/BlogDetailsWrapper";

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const awaitedParams = await params;
  return <BlogDetailsWrapper id={awaitedParams.id} />;
};

export default BlogDetailsPage;
