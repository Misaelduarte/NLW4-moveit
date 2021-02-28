import { useEffect, useState } from 'react';
import styles from '../styles/components/NavBar.module.css';

export default function NavBar(props) {
  return (
    <>
      <div className={styles.NavBarContainer}>
        <div className={styles.NavBarAlignItems}>
          <div className={styles.NavBarLogo}>
            <img src="./logo.png" alt="logo-moveit"/>
          </div>
          <div className={styles.NavBarItems}>
            <ul>
                <li className={styles.ActiveNavBarItem}>
                  <a href=""><img src="./home.png" alt="home"/></a>
                </li>

                <li>
                    <a href=""><img src="./award.png" alt="ranking"/></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
