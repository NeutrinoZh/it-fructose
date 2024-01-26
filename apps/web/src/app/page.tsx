import React from "react";
import classnames from 'classnames';

import data from "../data/data";
import avatar from "../../public/avatar.jpg"
import styles from "./page.module.scss";

export default function Page(): JSX.Element {
  return (<>
    <header className={styles.header}>
      <p>{data.header.title}</p>
      <p>{data.header.gitHub}</p>
    </header>
    <main className={styles.main}>
      <div className={classnames(styles.block, styles.userBlock)}>
        <img src={avatar.src}></img>
        <p className={styles.name}>{data.user.name}</p>
        <p className={styles.job}>{data.user.job}</p>
      </div>
      <div className={classnames(styles.block, styles.titleBlock)}>
        <p>{data.page.description}</p>
      </div>
      <div className={classnames(styles.block)}>

      </div>
    </main>
  </>);
}