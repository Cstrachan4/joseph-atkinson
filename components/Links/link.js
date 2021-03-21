import clsx from 'clsx';

export default function Link({
  text,
  active,
  onMouseOver,
  onMouseOut,
  name,
  url
}) {

  return (
    <a
      className={clsx((active && active !== name) && 'experience__link--inactive')}
      data-ref={name}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      {text}
    </a>
  )
}
