import { useState } from "react";
import styles from "./styles.module.scss";

export default function Links({ links }) {
  const [hov, setHov] = useState(false);

  const onMouseOver = (e) => {
    const active = e.target.dataset.ref;
    setHov(active);
  };

  const onMouseOut = () => {
    setHov(false);
  };

  return (
    <ul className={styles.links}>
      {links &&
        links.map((link, i) => {
          return (
            <li key={i}>
              <a
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                data-ref={link.name}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className={
                  hov && hov !== link.name && styles["links__link--inactive"]
                }
              >
                {link.name}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
