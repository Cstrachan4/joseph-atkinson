import React from 'react';
import clsx from 'clsx';

import Link from 'components/Links/link.js';

export const META_DESCRIPTION = "Joseph Atkinson, Designer at Made Thought and Co-founder of TBC. Get in touch for a full portfolio or for general enquiries.";

export const DESCRIPTION = ({onMouseOver,onMouseOut, active}) => (
  <>
    <span className={clsx(active && 'description__span--inactive')}>Joseph Atkinson, Designer at </span>
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="https://www.madethought.com/" name="madethought" text="Made Thought" />
    <span className={clsx(active && 'description__span--inactive')}> and Co-founder of </span>
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="https://tbc.work" name="tbc" text="TBC." />
    <span className={clsx(active && 'description__span--inactive')}> Please </span>
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="mailto:studio@tbc.work" name="git" text="get in touch" />
    <span className={clsx(active && 'description__span--inactive')}> to request a full portfolio or for general enquiries.</span>
  </>
);

export const EXPERIENCE = ({onMouseOver,onMouseOut, active}) => (
  <>
    <span className={clsx(active && 'experience__span--inactive')}>Previous experience with agencies and organisations including </span>

    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="https://www.studiofrith.com/" name="sf" text="Studio Frith,  " />
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="https://www.zak.group/" name="zg" text="Zak Group, " />
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="https://boilerroom.tv/" name="br" text="Boiler Room  " />
    <span className={clsx(active && 'experience__span--inactive')}>and </span>
    <Link onMouseOver={onMouseOver} onMouseOut={onMouseOut} active={active} url="https://dice.fm/" name="dice" text="DICE" />
    <span className={clsx(active && 'experience__span--inactive')}>.</span>
  </>
);

export const LINKS = [
  { "name":"Email", "link":"mailto:studio@tbc.work" },
  { "name":"Instagram", "link":"https://www.instagram.com/tbc.work/" },
  { "name":"Are.na", "link":"https://www.are.na/j-a-jrm_56tfn14" }
]

