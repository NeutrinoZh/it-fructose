import React from "react";
import avatar from "../../../public/avatar.jpg"
import data from "../../data/data"
import styles from "./user-page.module.scss";

export default function About(): JSX.Element {
    return (
        <main className={styles.about}>
            <div className={styles.user}>
                <div className={styles.info}>
                    <img src={avatar.src}></img>
                    <div>
                        <p className={styles.name}>{data.user.name}</p>
                        <p className={styles.job}>{data.user.job}</p>
                    </div>
                </div>
                <div className={styles.lifestyle}>
                    <p>{data.page.lifestyleTitle}</p>
                    <p>{data.page.lifestyle}</p>
                </div>
            </div>
        </main>
    )
}