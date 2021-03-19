import './styles.scss';
import clsx from 'clsx';

export default function Experience({
  children
}) {

  return (
    <div className={clsx('experience')}>
      {children}
    </div>
  )
}
