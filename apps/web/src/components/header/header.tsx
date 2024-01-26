import React from "react";
import data from "../../data/data";
import styles from "./header.module.scss";

const routes = {
    home: "/",
    about: "/about",
    github: "https://github.com/NeutrinoZh",
}

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <a href={routes.home}>{data.header.title}</a>
            <a href={routes.about}>{data.header.about}</a>
            <a href={routes.github}>{data.header.gitHub}</a>
        </header>
    )
}