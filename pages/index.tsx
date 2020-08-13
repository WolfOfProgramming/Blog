import React from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header/Header';
import ArticlesBoard from '../components/ArticlesBoard/ArticlesBoard';
import Footer from '../components/Footer/Footer';
import {GetStaticProps, InferGetStaticPropsType} from "next";

export const getStaticProps: GetStaticProps = async () => {
    const articles = [{title: "Hello"}]
    return {
        props: {
            articles
        }
    }
}

export default function Home({articles}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <ArticlesBoard articles={articles} />
      <Footer />
    </div>
  );
}
