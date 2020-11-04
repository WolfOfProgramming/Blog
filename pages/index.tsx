import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import ArticlesBoard from "../components/ArticlesBoard/ArticlesBoard";
import Footer from "../components/Footer/Footer";
import { InferGetStaticPropsType } from "next";
import { getSortedArticlesData } from "../lib/articles";

export async function getStaticProps() {
  const articlesData = await getSortedArticlesData();
  return {
    props: {
      articlesData,
    },
  };
}

export default function Home({
  articlesData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const latestArticleId = articlesData[0].id;
  return (
    <div className={styles.container}>
      <Head>
        <title>Liiicode</title>
        <link rel="icon" href="/favicon.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header latestArticleId={latestArticleId} />
      <ArticlesBoard articlesData={articlesData} />
      <Footer />
    </div>
  );
}
