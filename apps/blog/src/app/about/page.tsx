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

function chunkArray<T>(array: T[], chunkSize: number) {
    let result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export default async function About() {
    const history = await api.getAbout();
    const listOfProjects = chunkArray(await api.getPortfolioProjects(), 2);

    return (
        <div className={styles.about}>
            {/* <div className={styles.user}>
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
            </div> */}
            <div className={styles.portfolio}>
                <h1>{content.pages.about.portfolioTitle}</h1>
                <div className={styles.portfolioContainer}>
                    <div className={styles.portfolioRow}>
                        <Block key={randomUUID()}>
                            <Markdown
                                remarkPlugins={[remarkGfm]}
                                className={styles.markdown}
                            >
                                {listOfProjects[0]?.[0]}
                            </Markdown>
                        </Block>
                    </div>
                    {listOfProjects.slice(1).map(item =>
                        <div className={styles.portfolioRow}>
                            {item.map(item => (
                                <Block key={randomUUID()}>
                                    <Markdown
                                        remarkPlugins={[remarkGfm]}
                                        className={styles.markdown}
                                    >
                                        {item}
                                    </Markdown>
                                </Block>
                            ))}
                        </div>)}
                </div>
            </div>
            {/* <div className={styles.history}>
                <h1>{content.pages.about.historyTitle}</h1>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    className={styles.markdown}>
                    {history}
                </Markdown>
            </div> */}
        </div>
    )
}