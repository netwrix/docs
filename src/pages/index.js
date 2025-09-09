import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CommunityHighlights from '@site/src/components/CommunityHighlights';
import styles from './index.module.css';
import { getDefaultProduct, getDefaultVersion, generateRouteBasePath } from '@site/src/config/products.js';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Get default product and version for the "Browse the docs" link
  const defaultProduct = getDefaultProduct();
  const defaultVersion = getDefaultVersion(defaultProduct);
  const defaultLink = `/${generateRouteBasePath(defaultProduct.path, defaultVersion.version)}`;

  return (
    <>
      <meta name="algolia-site-verification" content="0064B6F67914D812" />
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.heroTitle}>Netwrix Product Documentation</h1>
          <p className={styles.heroSubtitle}>
            Read more about the security solutions from Netwrix. Comprehensive guides, product knowledge, and references for all Netwrix products.
          </p>
          <div className={styles.buttons}>
            {/* Add Customer Portal button */}
            <Link className="button button--secondary button--lg" to="/docs/customer">
              Customer Portal & Training Guide
            </Link>
            {/* Add Partner Certification button */}
            <Link className="button button--secondary button--lg" to="/docs/partner">
              Partner Certification Guide
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description="Documentation for Netwrix security products">
      <HomepageHeader />
      <main>
        <CommunityHighlights />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
