import logo from '/images/rocket-logo.svg';

import styles from './logo.module.css';

export function LogoComponent(): JSX.Element {
  return (
    <a className={styles.logo} href="#">
      <img src={logo} alt="Logotipo da Rocket" />
      <span className={styles['logo-title']}>
        To<span>do</span>
      </span>
    </a>
  );
}
