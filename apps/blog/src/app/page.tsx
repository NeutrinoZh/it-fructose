import remarkGfm from "remark-gfm";
import api from "../api/api";
import styles from "./page.module.scss"
import Markdown from "react-markdown";

export default async function Home() {
  const listOfArticles = await api.getListOfArticles();

  return (<>
    { listOfArticles.map(item => <div>
      <Markdown
          remarkPlugins={[remarkGfm]}
          className={styles.markdown}>
          { item }
      </Markdown>
    </div>) }
  </>)
}