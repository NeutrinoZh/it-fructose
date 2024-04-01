import styles from "./main.module.scss";

import React from "react";

export default function Main({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}