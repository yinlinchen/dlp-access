import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function pageDown() {
    const newPageNum = Math.max(1, pageNumber - 1);
    setPageNumber(newPageNum);
  }

  function pageUp() {
    const newPageNum = Math.min(numPages, pageNumber + 1);
    setPageNumber(newPageNum);
  }

  return (
    <div>
      <Document file={props.manifest_url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={pageDown}>Prev</button>
      <button onClick={pageUp}>Next</button>
    </div>
  );
}
