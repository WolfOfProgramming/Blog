import React from "react";
import { getAllArticlesIds, getArticleData } from "../../lib/articles";
import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import styles from "../../styles/Article.module.scss";
import Head from "next/head";
import Navigation from "../../components/shared/Navigation/Navigation";
import Container from "../../components/shared/Container/Container";

export default function Article({
  articleData: { title, tags, contentHtml },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <article>
        <Container>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li className={styles.tag} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <h1 className={styles.articleHeading}>{title}</h1>
          <section
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </Container>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllArticlesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  const id = params?.id ?? "";
  const articleData = await getArticleData(id);
  return {
    props: {
      articleData,
    },
  };
}
