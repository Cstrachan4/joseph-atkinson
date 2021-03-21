import { useState } from 'react';
import HeadMeta from 'components/HeadMeta';
import Desc from 'components/Description';
import Exp from 'components/Experience';
import Links from 'components/Links';

import { META_DESCRIPTION, DESCRIPTION, EXPERIENCE, LINKS } from 'lib/content.js';

import 'styles/styles.scss';

function HomePage() {

  const [expHover,setExpHover] = useState(false);
  const [descHover,setDescHover] = useState(false);

  const onExpMouseOver = (e) => {
    const active = e.target.dataset.ref;
    setExpHover(active);
  }

  const onDescMouseOver = (e) => {
    const active = e.target.dataset.ref;
    setDescHover(active);
  }

  const onExpMouseOut = () => {
    setExpHover(false);
  }

  const onDescMouseOut = () => {
    setDescHover(false);
  }

  return (
    <div className="home-page">
      <HeadMeta title="Joseph Atkinson" description={META_DESCRIPTION} />
      <Desc>
        <DESCRIPTION onMouseOver={onDescMouseOver} onMouseOut={onDescMouseOut} active={descHover} />
      </Desc>
      <Exp hovered={expHover}>
        <EXPERIENCE onMouseOver={onExpMouseOver} onMouseOut={onExpMouseOut} active={expHover} />
      </Exp>
      <Links links={LINKS} />
    </div>
  )
}

export default HomePage
