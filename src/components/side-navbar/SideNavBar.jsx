import React from 'react';
import styles from './side-navbar.module.css';

const SideNavBar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Profile</li>
        <li className={styles.navItem}>Settings</li>
      </ul>
    </nav>
  );
};

export default SideNavBar;
