import React from "react";
import styles from "./ArticlesBoard.module.scss";
import Container from "../shared/Container/Container";
import LatestArticles from "./LatestArticles";
import ArticlesWithSearch from "./ArticlesWithSearch";

type Props = { articles: Array<{ title: string; thumbnail: string }> };
export default function ArticlesBoard({ articles }: Props) {
  return (
    <main className={styles.main}>
      <Container>
        <LatestArticles articles={articles} />
        <ArticlesWithSearch articles={articles} />
      </Container>
    </main>
  );
}
