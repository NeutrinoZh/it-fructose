import React from "react";
import content from "../../data/content-data";
import styles from "./footer.module.scss";

export default function Header(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <hr/>
            <p>{content.footer.author}</p>
            <p>{content.footer.contact}</p>
        </footer>
    )
}