import EditBlog from "@/components/blog/EditBlog";

interface EditPageProps {
  params: Promise<{
    id: string;
  }>;
}
const EditBlogPage = async ({ params }: EditPageProps) => {
  const awaitedParams = await params;
  return <EditBlog id={awaitedParams.id} />;
};

export default EditBlogPage;
