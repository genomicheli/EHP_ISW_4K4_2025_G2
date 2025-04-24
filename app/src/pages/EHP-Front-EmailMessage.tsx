interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailContent: string;
}

export default function EmailModal({
  isOpen,
  onClose,
  emailContent,
}: EmailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="card">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative w-80 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded shadow-lg text-center">

          <div
            className="text-sm mt-2"
            dangerouslySetInnerHTML={{ __html: emailContent }}
          />

          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-green-700 hover:text-green-900 font-bold text-lg"
            aria-label="Cerrar"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}