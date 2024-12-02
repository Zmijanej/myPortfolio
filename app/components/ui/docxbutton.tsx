'use client';

import React from 'react';

interface DOCXDownloadButtonProps {
  docxUrl: string;
  fileName?: string;
  label?: string;
}

const DOCXDownloadButton: React.FC<DOCXDownloadButtonProps> = ({
  docxUrl,
  fileName = 'document.docx',
  label = 'Download .docx',
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = docxUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-black text-white hover:text-black hover:bg-white p-4 
      px-44 border-8 border-white 
      "
    >
      {label}
    </button>
  );
};

export default DOCXDownloadButton;


// .button {
//   @apply text-white cursor-pointer border border-[color:var(--bg)] rounded transition-[0.2s] px-[2em] py-[0.8em] border-solid hover:text-[color:var(--hover-text)] hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_var(--bg)] active:translate-x-0 active:shadow-none;
//   --bg: #000;
//   --hover-bg: #ff90e8;
//   --hover-text: #000;
//   background: var(--bg);
// }
// .button:hover {
//   background: var(--hover-bg);
// }
