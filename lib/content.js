import React from "react";
import clsx from "clsx";

import Link from "components/Links/link.js";

export const META_DESCRIPTION =
  "Joseph Atkinson, Designer at Made Thought and Co-founder of TBC. Get in touch for a full portfolio or for general enquiries.";

export const DESCRIPTION = ({ onMouseOver, onMouseOut, active }) => (
  <>
    <span className={clsx(active && "description__span--inactive")}>
      Joseph Atkinson, Art Director & Designer at Made Thought. A full CV and
      portfolio is available upon request via{" "}
    </span>
    <Link
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      active={active}
      url="mailto:studio@tbc.work"
      name="git"
      text="email"
    />
    <span className={clsx(active && "experience__span--inactive")}>.</span>
  </>
);

export const EXPERIENCE = ({ onMouseOver, onMouseOut, active }) => (
  <>
    <span className={clsx(active && "experience__span--inactive")}>
      Previously Studio Frith, Zak Group, Boiler Room and Wieden+Kennedy.
    </span>
  </>
);

export const LINKS = [
  { name: "Email", link: "mailto:studio@tbc.work" },
  { name: "Instagram", link: "https://www.instagram.com/tbc.work/" },
  { name: "Are.na", link: "https://www.are.na/j-a-jrm_56tfn14" },
];
