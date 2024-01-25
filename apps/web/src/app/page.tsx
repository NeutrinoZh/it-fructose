import styles from "./page.module.scss";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Hello, world!</h1>
    </main>
  );
}