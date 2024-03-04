import React from "react";

import Link from "components/Links/link.js";

import description from "components/Description/styles.module.scss";
import experience from "components/Experience/styles.module.scss";

export const META_DESCRIPTION =
  "Joseph Atkinson, Art Director & Designer at Made Thought. A full CV and portfolio is available upon request.";

export const DESCRIPTION = ({ onMouseOver, onMouseOut, active }) => (
  <>
    <span className={active && description["description__span--inactive"]}>
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
    <span className={active && description["description__span--inactive"]}>
      .
    </span>
  </>
);

export const EXPERIENCE = ({ onMouseOver, onMouseOut, active }) => (
  <>
    <span className={active && experience["experience__span--inactive"]}>
      Previously Studio Frith, Zak Group, Boiler Room and Wieden+Kennedy.
    </span>
  </>
);

export const LINKS = [
  { name: "Email", link: "mailto:studio@tbc.work" },
  { name: "Instagram", link: "https://www.instagram.com/tbc.work/" },
  { name: "Are.na", link: "https://www.are.na/j-a-jrm_56tfn14" },
];
