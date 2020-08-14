import React from "react";
import styles from "./ArticlesWithSearch.module.scss";
import SearchBar from "./SearchBar";

type Props = { articles: Array<{ title: string; thumbnail: string }> };
export default function ArticlesWithSearch({ articles }: Props) {
  return (
    <section className={styles.section} id="search">
      <h2 className={styles.heading}>Search</h2>
      <SearchBar />
      <ul>
        {articles.map(({ title }) => (
          <li key={title}>
            <article>
              <h3>{title}</h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
