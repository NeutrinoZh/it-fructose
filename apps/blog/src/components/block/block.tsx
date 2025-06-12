import styles from "./block.module.scss";
import React from "react";
import Image from 'next/image'
import { randomUUID } from "crypto";

export default function Block(
    { src, title, href, platforms, stack, responsibilities }:
        {
            src: string,
            title: string,
            href: string,
            platforms: string,
            stack: string,
            responsibilities: string[] | string
        }): JSX.Element {
    return (
        <div className={styles.block}>
            <div className={styles.poster}>
                <Image
                    src={src}
                    alt={"Game Poster"}
                    fill
                    style={{
                        objectFit: 'contain',
                        borderRadius: '12px'
                    }}
                />
            </div>
            <a href={href}>{title}</a>
            <i>Platform: {platforms}</i>
            <i>Stack: {stack}</i>
            {responsibilities && Array.isArray(responsibilities) &&
                <ul>
                    {responsibilities.map(item =>
                        <li key={randomUUID()}>{item}</li>
                    )}
                </ul>
            }
            <p>{responsibilities && !Array.isArray(responsibilities) ? responsibilities : ""}</p>
        </div>
    )
}