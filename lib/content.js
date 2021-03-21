import React from 'react';
import clsx from 'clsx';

import Link from 'components/Links/link.js';

export const META_DESCRIPTION = "Joseph Atkinson, Co-founder and designer at TBC. Please get in touch to request a full portfolio or for general enquiries.";

export const DESCRIPTION = ({onMouseOver,onMouseOut, active}) => (
  <>
    <span className={clsx(active && 'description__span--inactive')}>Joseph Atkinson, Co-founder and designer at </span>
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="https://tbc.work" name="tbc" text="TBC." />
    <span className={clsx(active && 'description__span--inactive')}> Please </span>
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="mailto:studio@tbc.work" name="git" text="get in touch" />
    <span className={clsx(active && 'description__span--inactive')}> to request a full portfolio or for general enquiries.</span>
  </>
);

export const EXPERIENCE = () => (
  <>
    Previous experience with agencies and organisations including Wieden+Kennedy,  Zak Group, Boiler Room and DICE.
  </>
);

export const LINKS = [
  { "name":"Email", "link":"mailto:studio@tbc.work" },
  { "name":"Social", "link":"https://www.instagram.com/tbc.work/" },
  { "name":"Are.na", "link":"https://www.are.na/j-a-jrm_56tfn14" }
]

