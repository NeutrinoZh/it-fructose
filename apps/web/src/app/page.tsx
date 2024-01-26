import React from "react";
import classnames from 'classnames';

import data from "../data/data";
import avatar from "../../public/avatar.jpg"
import styles from "./page.module.scss";
import Block from "../components/block/block";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Block>
        <div>
          <img src={avatar.src}></img>
          <div>
            <p className={styles.name}>{data.user.name}</p>
            <p className={styles.job}>{data.user.job}</p>
          </div>
        </div>
        <div>
          <p>{data.page.description}</p>
        </div>
      </Block>
    </main>
  );
}