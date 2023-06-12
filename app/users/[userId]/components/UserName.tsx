import styles from "../styles.module.css";

interface PageTitleProps {
  userPromise: Promise<User>
}

export default async function PageTitle({ userPromise }: PageTitleProps) {
  const user = await userPromise;

  return (
    <h1 className={styles.pageTitle}>{user.name}</h1>
  )
}