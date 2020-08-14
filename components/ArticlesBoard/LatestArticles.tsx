import React from "react";
import styles from "./LatestArticles.module.scss";

type Props = { articles: Array<{ title: string; thumbnail: string }> };
export default function LatestArticles({ articles }: Props) {
  return (
    <section className={styles.section} id="latest">
      <h2 className={styles.heading}>Latest</h2>
      <ul className={styles.list}>
        {articles.map(({ title, thumbnail }) => (
          <li className={styles.item} key={title}>
            <article>
              <img className={styles.thumbnail} src={thumbnail} alt="Forest" />
              <h3>{title}</h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
