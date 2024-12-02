'use client';

import React from 'react';

interface PDFDownloadButtonProps {
  pdfUrl: string;
  fileName?: string;
  label?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ 
  pdfUrl, 
  fileName = 'document.pdf', 
  label = 'Download PDF' 
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
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
      px-44 border-8 border-white "
    >
      {label}
    </button>
  );
};

export default PDFDownloadButton;