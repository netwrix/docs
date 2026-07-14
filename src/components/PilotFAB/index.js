// Floating action button that opens the blind 3-way pilot. Hidden while
// the user is already on /pilot so it doesn't shadow the topbar controls.

import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from '../../pages/pilot/styles.module.css';

function Inner() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/pilot')) return null;
  return (
    <div className={styles.fabWrap}>
      <Link className={styles.fab} to="/pilot" title="Try three assistants side-by-side">
        <span className={styles.fabDot} />
        Compare AIs
      </Link>
    </div>
  );
}

export default function PilotFAB() {
  return <BrowserOnly>{() => <Inner />}</BrowserOnly>;
}
