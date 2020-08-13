import React from 'react';
import clsx from 'clsx';
import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        Learn about writing <br />
        clean and professional code
      </h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Facilisvoluptatibus repellendus culpa qui voluptate consequuntur, <br />
        nisi tempore fugiat, ullam cupiditate ipsam, repudiandae velit
        dignissimos.
      </p>
      <div className={styles.buttonContainer}>
        <button
          className={clsx(styles.button, styles.buttonPrimary)}
          type='button'
        >
          Read latest article
        </button>
        <button
          className={clsx(styles.button, styles.buttonSecondary)}
          type='button'
        >
          Join newsletter
        </button>
      </div>
    </div>
  );
}
