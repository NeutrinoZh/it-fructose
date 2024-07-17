import React from "react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'

import avatar from "../../../public/avatar.jpg"
import content from "../../data/content-data"
import styles from "./user-page.module.scss";
import api from "../../api/api";
import Block from "../../components/block/block";
import { randomUUID } from "crypto";

export default async function About() {
    const history = await api.getAbout();
    const listOfProjects = await api.getPortfolioProjects();

    return (
        <div className={styles.about}>
            <div className={styles.user}>
                <div className={styles.info}>
                    <Image src={avatar.src} alt="NeutrinoZh" width={200} height={200} />
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
            <div className={styles.portfolio}>
                <h1>{content.pages.about.portfolioTitle}</h1>
                <div className={styles.portfolioContainer}>
                    {listOfProjects.map(item =>
                        <Block key={randomUUID()}>
                            <Markdown
                                remarkPlugins={[remarkGfm]}
                                className={styles.markdown}
                            >
                                {item}
                            </Markdown>
                        </Block>)}
                </div>
            </div>
            <div className={styles.history}>
                <h1>{content.pages.about.historyTitle}</h1>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    className={styles.markdown}>
                    {history}
                </Markdown>
            </div>
        </div>
    )
}