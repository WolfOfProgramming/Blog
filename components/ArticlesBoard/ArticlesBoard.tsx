import React, { useState } from "react";
import Link from "next/link";
import styles from "./ArticlesBoard.module.scss";
import Container from "../shared/Container/Container";

type Props = {
  articlesData: Array<{
    title: string;
    description: string;
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
          {articlesData.map(({ title, description, id, tags }) => (
            <li className={styles.item} key={id}>
              <article className={styles.article}>
                <header className={styles.articleHeader}>
                  <h3>
                    <Link href="/articles/[id]" as={`/articles/${id}`}>
                      <a className={styles.articleHeading}>{title}</a>
                    </Link>
                  </h3>
                </header>
                <ul className={styles.tags}>
                  {tags.map((tag) => (
                    <li className={styles.tag} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className={styles.articleDescription}>{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
