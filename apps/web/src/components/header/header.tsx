import React from "react";
import data from "../../data/data";
import styles from "./header.module.scss";

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <p>{data.header.title}</p>
            <p>{data.header.gitHub}</p>
        </header>
    )
}