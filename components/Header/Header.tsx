import React from "react";
import styles from "./Header.module.scss";
import Container from "../shared/Container/Container";
import Navigation from "../shared/Navigation/Navigation";
import Introduction from "../Introduction/Introduction";

type Props = { latestArticleId: string };
export default function Header({ latestArticleId }: Props) {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
        <Introduction latestArticleId={latestArticleId} />
      </Container>
    </header>
  );
}
