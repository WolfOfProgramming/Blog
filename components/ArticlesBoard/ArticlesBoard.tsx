import React from 'react';
import styles from './ArticlesBoard.module.scss';
import Container from '../shared/Container/Container';

type Props = { articles: Array<{title: string}>}
export default function ArticlesBoard({articles}: Props) {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.section}>
          <h2>Latest</h2>
          <ul>
            {
              articles.map(() =>
                <li>
                  <article>
                    <h2>Hello</h2>
                  </article>
                </li>
              )
            }
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Popular</h2>
          <ul>
            {
              articles.map(() =>
                  <li>
                    <article>
                      <h2>Hello</h2>
                    </article>
                  </li>
              )
            }
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Search</h2>
          <ul>
            {
              articles.map(() =>
                  <li>
                    <article>
                      <h2>Hello</h2>
                    </article>
                  </li>
              )
            }
          </ul>
        </section>
      </Container>
    </main>
  );
}

