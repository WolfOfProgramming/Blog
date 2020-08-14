import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import ArticlesBoard from "../components/ArticlesBoard/ArticlesBoard";
import Footer from "../components/Footer/Footer";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const articles = [
    { title: "Hello", thumbnail: "images/forest.jpg" },
    { title: "Hello", thumbnail: "images/forest.jpg" },
    { title: "Hello", thumbnail: "images/forest.jpg" },
    { title: "Hello", thumbnail: "images/forest.jpg" },
    { title: "Hello", thumbnail: "images/forest.jpg" },
    { title: "Hello", thumbnail: "images/forest.jpg" },
  ];
  return {
    props: {
      articles,
    },
  };
}

export default function Home({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ArticlesBoard articles={articles} />
      <Footer />
    </div>
  );
}
