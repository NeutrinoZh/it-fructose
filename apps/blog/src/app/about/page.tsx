import React from "react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import avatar from "../../../public/avatar.jpg"
import content from "../../data/content-data"
import styles from "./user-page.module.scss";

export default function About(): JSX.Element {
    return (
        <main className={styles.about}>
            <div className={styles.user}>
                <div className={styles.info}>
                    <img src={avatar.src}></img>
                    <div>
                        <p className={styles.name}>{content.user.name}</p>
                        <p className={styles.job}>{content.user.job}</p>
                    </div>
                </div>
                <div className={styles.lifestyle}>
                    <p>{content.pages.about.lifestyleTitle}</p>
                    <p>{content.pages.about.lifestyle}</p>
                </div>
            </div>
            <div className={styles.history}>
                <h1>{content.pages.about.historyTitle}</h1>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    className={styles.markdown}>
                    {content.pages.about.history}
                </Markdown>
            </div>
        </main>
    )
}