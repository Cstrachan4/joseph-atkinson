import './styles.scss';
import clsx from 'clsx';

export default function Description({
  children
}) {

  return (
    <div className={clsx('description')}>
      { children }
    </div>
  )
}
