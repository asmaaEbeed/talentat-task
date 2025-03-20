import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <Sidebar />
        <main className={styles.mainContent}>
            {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
