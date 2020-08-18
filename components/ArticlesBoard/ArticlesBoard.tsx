import React, { useState } from "react";
import Link from "next/link";
import styles from "./ArticlesBoard.module.scss";
import Container from "../shared/Container/Container";

type Props = {
  articlesData: Array<{
    title: string;
    date: string;
    id: string;
    tags: string[];
  }>;
};
export default function ArticlesBoard({ articlesData }: Props) {
  const [searchBarValue, setSearchBarValue] = useState("");
  return (
    <main className={styles.main} id="articles">
      <Container>
        <h2 className={styles.heading}>Articles</h2>
        <label className={styles.label} htmlFor="searchbar">
          Search for interesting articles
        </label>
        <input
          className={styles.searchBar}
          id="searchbar"
          type="text"
          placeholder="Type Phrase to search"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
        />
        <ul className={styles.list}>
          {articlesData.map(({ title, date, id }) => (
            <li className={styles.item} key={id}>
              <article className={styles.article}>
                <Link href="/articles/[id]" as={`/articles/${id}`}>
                  <a>{title}</a>
                </Link>
                <time>{date}</time>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
