import remarkGfm from "remark-gfm";
import api from "../api/api";
import styles from "./page.module.scss"
import Markdown from "react-markdown";
import Block from "../components/block/block";
import { randomUUID } from "crypto";

export default async function Home() {
  const listOfArticles = await api.getListOfArticles();

  return (<>
    <div className={styles.home}>
      { listOfArticles.map(item => <Block>
        <Markdown
            key={randomUUID()}
            remarkPlugins={[remarkGfm]}
            className={styles.markdown}>
            { item }
        </Markdown>
      </Block>) }
    </div>
  </>)
}