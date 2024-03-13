import { useLayoutEffect, useState } from 'react';
import styles from './eru.module.css';

const Eru = (props) => {
  const [color, setColor] = useState(props.mode);

  useLayoutEffect(() => {
    setColor(props.mode)
  }, [props]);

  const handleClick = () => {
    window.open('https://jerus.dev');
  };

  return (
    <div className={styles.div} onClick={handleClick}>
      <code
        className={[styles.code, color === 'dark' ? styles.light : styles.dark].join(' ')}>
      dev with ♡ By Eru
      </code>
    </div>
  )
}

export default Eru;
