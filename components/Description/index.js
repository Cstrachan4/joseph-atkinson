import './styles.scss';
import clsx from 'clsx';

export default function Description({
  text
}) {

  return (
    <div className={clsx('description')}>
      { text }
    </div>
  )
}
