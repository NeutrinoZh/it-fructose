import React from "react";
import content from "../../data/content-data";
import styles from "./header.module.scss";

const routes = {
    home: "/",
    about: "/about",
    github: "https://github.com/NeutrinoZh",
}

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <a href={routes.home}>{content.header.title}</a>
            <a href={routes.about}>{content.header.about}</a>
            <a href={routes.github}>{content.header.gitHub}</a>
        </header>
    )
}