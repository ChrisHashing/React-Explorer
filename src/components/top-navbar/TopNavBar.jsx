import React from 'react';
import styles from './top-navbar.module.css';

const TopNavBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>MyApp</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNavBar;
