import Link from "next/link";
import React from "react";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h2>BootoCar</h2>
          <p>Choose Buy Your Car</p>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        bootocar Next.js courses | BotoCar Project &copy;
      </footer>
    </div>
  );
};

export default Layout;
