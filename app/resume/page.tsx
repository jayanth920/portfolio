"use client"
import { useEffect, useState } from 'react';

const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    // Assuming your PDF file is located in the public directory
    const pdfPath = '/content/Resume.pdf';
    setPdfUrl(pdfPath);
  }, []);

  return (
    <div className='flex items-center justify-center'>
      {pdfUrl && (
        <object data={pdfUrl} type="application/pdf" width="70%" height="600px">
          <p>This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>.</p>
        </object>
      )}
    </div>
  );
}

export default Resume;
