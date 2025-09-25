import EditBlogWrapper from "@/components/EditBlogWrapper";

interface EditPageProps {
  params: Promise<{
    id: string;
  }>;
}
const EditBlogPage = async ({ params }: EditPageProps) => {
  const awaitedParams = await params;
  return <EditBlogWrapper id={awaitedParams.id} />;
};

export default EditBlogPage;
