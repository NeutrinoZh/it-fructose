import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Main from "../components/main/main";

export default function PageWrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return (<>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </>)
}