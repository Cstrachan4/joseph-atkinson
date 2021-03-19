import HeadMeta from 'components/HeadMeta';
import Description from 'components/Description';
import Experience from 'components/Experience';
import Links from 'components/Links';

import { DESCRIPTION, EXPERIENCE, LINKS } from 'lib/content.js';

import 'styles/styles.scss';

function HomePage() {
  return (
    <div className="home-page">
      <HeadMeta title="Joseph Atkinson" description={DESCRIPTION} />
      <Description text={DESCRIPTION} />
      <Experience>
        <EXPERIENCE />
      </Experience>
      <Links links={LINKS} />
    </div>
  )
}

export default HomePage
