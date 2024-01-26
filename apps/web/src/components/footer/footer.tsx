import React from "react";
import data from "../../data/data";
import styles from "./footer.module.scss";

export default function Header(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <p>{data.footer.author}</p>
            <p>{data.footer.contact}</p>
        </footer>
    )
}