import styles from "./not-found.module.scss"

export default async function notFound() {
  return (<>
    <div className={styles.notFound}>
        <h3>Ooops... Page not found!</h3>
    </div>
  </>)
}