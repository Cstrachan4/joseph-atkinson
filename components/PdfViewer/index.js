import React from 'react';
import Viewer, { Worker, defaultLayout, SpecialZoomLevel } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import clsx from 'clsx';

import './styles.scss';

export default function PdfViewer({
  fileUrl
}) {

  return (
    <div className={clsx('pdf-viewer')}>
     	<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <div className="pdf-viewer__viewer">
          <Viewer
            fileUrl={fileUrl}
            layout={layout}
            defaultScale={SpecialZoomLevel.PageFit}
          />
        </div>
      </Worker>
    </div>
  )
}


const renderToolbar = (toolbarSlot) => {
  return (
    <div className="toolbar">
      <div className="toolbar__main">
        <div className="toolbar__item">
          {toolbarSlot.previousPageButton}
        </div>
        <div className="toolbar__item">
          {toolbarSlot.currentPage + 1} / {toolbarSlot.numPages}
        </div>
        <div className="toolbar__item">
          {toolbarSlot.nextPageButton}
        </div>
        <div className="toolbar__item">
          {toolbarSlot.zoomOutButton}
        </div>
        <div className="toolbar__item">
          {toolbarSlot.zoomPopover}
        </div>
        <div className="toolbar__item">
          {toolbarSlot.zoomInButton}
        </div>
      </div>
    </div>
  );
};

const layout = (
  isSidebarOpened,
  container,
  main,
  toolbar,
  sidebar,
) => {
  return defaultLayout(
    isSidebarOpened,
    container,
    main,
    toolbar(renderToolbar),
    sidebar,
  );
};
