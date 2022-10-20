import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.logo} href="/">
        Logo
      </Link>
      <div className={styles.headerRight}>
        <Link className={styles.active} href="/">
          Home
        </Link>
        <Link href="/">Conctact</Link>
        <Link href="/">About Us</Link>
      </div>
    </div>
  );
}
