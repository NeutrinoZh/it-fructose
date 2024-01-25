import React from "react";
import classnames from 'classnames';

import data from "../data/data";
import avatar from "../../public/avatar.jpg"
import styles from "./page.module.scss";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={classnames(styles.block, styles.userBlock)}>
        <img src={avatar.src}></img>
        <p>{data.page.title}</p>
      </div>
      <div className={classnames(styles.block, styles.titleBlock)}>

      </div>
    </main>
  );
}