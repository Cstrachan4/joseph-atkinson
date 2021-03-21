import HeadMeta from '../components/HeadMeta';
import PdfViewer from '../components/PdfViewer';

import '../lib/styles.js';

import { META_DESCRIPTION } from 'lib/content.js';

function SelectedWork() {

  return (
  	<React.Fragment>
	  	<HeadMeta title="Joseph Atkinson" description={META_DESCRIPTION} />
	  	<div className="portfolio">
        <PdfViewer fileUrl="./files/JA_Portfolio_General_2021.pdf" />
	  	</div>
  	</React.Fragment>
  )
}

export default SelectedWork;
