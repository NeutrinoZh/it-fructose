import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function PageWrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return (<>
        <Header />
        {children}
        <Footer />
    </>)
}