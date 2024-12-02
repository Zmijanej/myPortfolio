import React from 'react'
import PDFDownloadButton from './ui/pdfbutton'
import DOCXDownloadButton from './ui/docxbutton'

const resumeButtons = () => {
  return (
    <div className=' flex justify-center items-center py-24'>
      <div className='flex flex-col gap-8 md:flex-row lg:flex-row'>
        <PDFDownloadButton
          pdfUrl="/Brend_Zmijanej_CV.pdf"
          fileName="Brend_Zmijanej_CV.pdf"
          label="Download a PDF"
        />
        <DOCXDownloadButton
          docxUrl="/Brend_Zmijanej_CV.docx"
          fileName="Brend_Zmijanej_CV.docx"
          label="Download a .docx"
        />
      </div>
    </div>
  )
}

export default resumeButtons