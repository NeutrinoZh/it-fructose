import PageWrapper from "../wrappers/page-wrapper";
import styles from "./layout.module.scss";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={styles.rootLayout}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}