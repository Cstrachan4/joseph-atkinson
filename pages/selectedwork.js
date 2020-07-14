import HeadMeta from '../components/HeadMeta';
import PdfViewer from '../components/PdfViewer';

import '../lib/styles.js';

function SelectedWork() {

  return (
  	<React.Fragment>
	  	<HeadMeta title="Joseph Atkinson" description="Joseph Atkinson is a designer and digital art director who lives and works in London. Currently designing interfaces with TBC.work" />
	  	<div className="portfolio">
        <PdfViewer fileUrl="./files/JA_Portfolio_mid2020.pdf" />
	  	</div>
  	</React.Fragment>
  )
}

export default SelectedWork;
