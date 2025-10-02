import { LogoComponent } from '../logo/logo.component';

import styles from './header.module.css';

export function HeaderComponent(): JSX.Element {
  return (
    <header className={`${styles.header}`}>
      <LogoComponent />
    </header>
  );
}
