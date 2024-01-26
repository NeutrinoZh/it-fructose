import React from "react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
                    <p>{data.pages.about.lifestyleTitle}</p>
                    <p>{data.pages.about.lifestyle}</p>
                </div>
            </div>
            <div className={styles.history}>
                <h1>{data.pages.about.historyTitle}</h1>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    className={styles.markdown}>
                    {data.pages.about.history}
                </Markdown>
            </div>
        </main>
    )
}