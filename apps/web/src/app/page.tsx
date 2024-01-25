import data from "../data/data";
import styles from "./page.module.scss";
import React from "react";
import classnames from 'classnames';

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={classnames(styles.block, styles.userBlock)}>

      </div>
      <div className={classnames(styles.block, styles.titleBlock)}>
        <p>{data.page.title}</p>
      </div>
    </main>
  );
}