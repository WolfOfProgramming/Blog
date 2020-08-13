import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a className={styles.heading}>Blog</a>
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href='/#search'>
            <a className={styles.a}>Search</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href='/#latest'>
            <a className={styles.a}>Latest</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href='/#popular'>
            <a className={styles.a}>Popular</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
