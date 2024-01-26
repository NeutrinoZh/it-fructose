import React from "react";
import styles from "./page.module.scss";
import Header from "../components/header/header";

export default function PageWrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return (<>
        <Header />
        {children}
    </>)
}