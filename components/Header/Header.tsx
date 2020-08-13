import React from 'react';
import styles from './Header.module.scss';
import Container from '../shared/Container/Container';
import Navigation from '../shared/Navigation/Navigation';
import Introduction from '../Introduction/Introduction';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
        <Introduction />
      </Container>
    </header>
  );
}
