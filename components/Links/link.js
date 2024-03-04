import styles from "./styles.module.scss";

export default function Link({
  text,
  active,
  onMouseOver,
  onMouseOut,
  name,
  url,
}) {
  return (
    <a
      className={active && active !== name && styles["links__link--inactive"]}
      data-ref={name}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      {text}
    </a>
  );
}
