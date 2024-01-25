import data from "../data/data";
import styles from "./page.module.scss";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <section>
        <h1>{data.user.name}</h1>
        <h3>{data.user.job}</h3>
      </section>
    </main>
  );
}