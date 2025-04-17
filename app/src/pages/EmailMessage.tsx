import { useEffect } from 'react';

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
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="card">
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="w-80 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded shadow-lg text-center">
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: emailContent }}
        />
      </div>
      </div>
    </div>
  );
}
