//import React, { Component } from 'react';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import  sample from"./resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Contentcenter=() =>{
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
      className='doc'
        file={sample}
        onLoadSuccess={onDocumentLoadSuccess}
      >
         {new Array(numPages + 1).fill('').map((item, index) => {
           return <div><Page noData={null} key={index} scale={1.6}pageNumber={index} /><br/>
            {/*<p>Page {index} of {numPages}</p> width={100}scale={1.1}width={document.body.clientWidth/2} width={document.getElementsByClassName('main-content-center').style.width}*/}</div>;
          })}
      </Document>
     
    </div>
  );
}

export default  Contentcenter