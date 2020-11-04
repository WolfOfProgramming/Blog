import React from "react";
import styles from "./Footer.module.scss";
import Container from "../shared/Container/Container";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <Newsletter />
          <section id='about'>
            <h2 className={styles.heading}>About</h2>
            <h3 className={styles.greetingHeading}>Hi I'm Bartek</h3>
            <p className={styles.description}>
              Hi I am passionate of web development since last year. I am high
              school student from Poland. I am creating my websites using React
              and Typescript. I hope you will find interesting content on my
              blog ;).
            </p>
          </section>
        </div>
      </Container>
    </footer>
  );
}
