import Button from "../shared/Button";

interface BlogDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const BlogDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
}: BlogDeleteModalProps) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 text-black rounded-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl mb-4">Delete Blog</h2>
        <p className="font-bold">Are you sure you want to delete this blog?</p>
        <div className="flex gap-4 justify-center my-4">
          <Button onClick={onClose} className="!bg-black !text-white">
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="!bg-red-400 hover:!bg-red-500"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogDeleteModal;
