import styles from "./block.module.scss";
import React from "react";

export default function Block({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}