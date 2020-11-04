import React from "react";
import styles from "./Newsletter.module.scss";

export default function Newsletter() {
  return (
    <div className={styles.wrapper} id="newsletter">
      <h3 className={styles.heading}>Join Newsletter</h3>
      <p className={styles.paragraph}>
        Get weekly notifications about new coming articles.
      </p>
      <form className={styles.form}>
        <div className={styles.content}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Name"
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <button className={styles.submit} type="submit">
          Join newsletter
        </button>
      </form>
    </div>
  );
}
