import React from "react";
import clsx from "clsx";
import styles from "./Introduction.module.scss";
import Link from "next/dist/client/link";

type Props = { latestArticleId: string };
export default function Introduction({ latestArticleId }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        Learn about
        <br />
        writing good
        <br />
        clean code
      </h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Facilisvoluptatibus repellendus culpa qui voluptate consequuntur, nisi
        tempore fugiat, ullam cupiditate ipsam, repudiandae velit dignissimos.
      </p>
      <div className={styles.buttonContainer}>
        <Link href="/articles/[id]" as={`/articles/${latestArticleId}`}>
          <a className={clsx(styles.button, styles.buttonPrimary)}>
            Read latest article
          </a>
        </Link>
        <Link href="/#newsletter">
          <a className={clsx(styles.button, styles.buttonSecondary)}>
            Join newsletter
          </a>
        </Link>
      </div>
    </div>
  );
}
