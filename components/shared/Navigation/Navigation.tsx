import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.heading}>Blog</a>
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/#articles">
            <a className={styles.a}>Articles</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
