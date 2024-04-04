import Markdown from "react-markdown";
import api from "../../../api/api";
import styles from "./article.module.scss"
import remarkGfm from "remark-gfm";

export default async function Article({ params }: { params: { articleName: string } }) {
  const content = await api.getArticleByName(params.articleName);

  return (
    <article className={styles.article}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className={styles.markdown}
      >
        {content}
      </Markdown>
    </article>
  );
}