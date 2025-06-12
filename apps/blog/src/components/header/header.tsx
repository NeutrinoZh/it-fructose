import React from "react";
import content from "../../data/content-data";
import styles from "./header.module.scss";

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <p>{content.pages.about.portfolioTitle}</p>
        </header>
    )
}