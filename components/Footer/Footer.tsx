import React from 'react';
import styles from './Footer.module.scss';
import Container from '../shared/Container/Container';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Newsletter />
      </Container>
    </footer>
  );
}
