import React, { useEffect, useState } from 'react';
import { Lock, X, Mail } from 'lucide-react';

interface PrivateLinkProps {
  name: string;
  location: string;
  reason: string;
  email?: string;
  label?: string;
}

// Reusable "locked" trigger + modal used by Projects and Research for non-public work.
const PrivateLink: React.FC<PrivateLinkProps> = ({
  name,
  location,
  reason,
  email = 'ogboifavourifeanyichukwu@gmail.com',
  label = 'Private',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-amber-500 border border-amber-500/40 px-3 py-1.5 hover:bg-amber-500/10 transition-colors duration-150 w-fit"
      >
        <Lock className="w-3.5 h-3.5" />
        {label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/70" />
          <div
            className="relative bg-white dark:bg-gray-900 border border-amber-500/50 max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-amber-500 mb-4">
              <Lock className="w-3.5 h-3.5" />
              Private
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
            <p className="font-mono text-xs text-gray-500 dark:text-gray-400 mb-4">{location}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{reason}</p>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide bg-accent-500 text-white px-4 py-2.5 hover:bg-accent-600 transition-colors duration-150"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivateLink;
