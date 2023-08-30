
import styles from './header.module.scss'

import NavLink from "../nav-link/nav-link";

function Header() {

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <NavLink to={'/'}>Главная</NavLink>
        <NavLink to={'/activity'}>JS Активности</NavLink>
      </nav>
    </header>
  );
}

export default Header;
