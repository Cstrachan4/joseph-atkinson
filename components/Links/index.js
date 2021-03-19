import { useEffect } from 'react';
import './styles.scss';
import clsx from 'clsx';

export default function Links({
  links
}) {

  return (
    <ul className={clsx('links')}>
      {
        links && links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
