import React from 'react';
import styles from './header.module.css';
import './App.css';
import NavMenu from "./navMenu";

function Header() {
  return (
      <div className={styles.preheader}>
      <div className={styles.header}>
        <div className={styles.container}>
         <NavMenu/>
        </div>
        </div>
      </div>
  );
}

export default Header;
