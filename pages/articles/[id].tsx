import React from "react";
import { getAllArticlesIds, getArticleData } from "../../lib/articles";
import { InferGetStaticPropsType } from "next";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Header from "../../components/Header/Header";

export default function Article({
  articleData: { title, date, tags, contentHtml },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <article
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      ></article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllArticlesIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}
