import React from "react";
import styles from "../styles/Home.module.css";
import Props from "../types/Props";
import Navbar from "./Navbar";



const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Navbar />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
