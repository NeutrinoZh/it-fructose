import React from "react";
import avatar from "../../../public/avatar.jpg"
import data from "../../data/data"
import styles from "./user-page.module.scss";

export default function About(): JSX.Element {
    return (
        <main>
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
        </main>
    )
}