import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ReactTyped } from 'react-typed';
import { useState } from 'react';
import { generateProductCategories } from '@site/src/config/products.js';

/**
 * Rotating section titles with typewriter effect
 *
 * To customize the titles:
 * 1. Add/remove/edit titles in this array
 * 2. Mix professional and fun IT/gamer terminology as desired
 * 3. Animation settings: 60ms type speed, 30ms backspace, 2s pause
 */
const SECTION_TITLES = [
  'Explore Security Solutions',
  'Your Security Adventure Starts Here',
  'Initialize Your Security Journey',
  'Level Up Your Security Game',
  'Spawn the Perfect Security Setup',
  'Craft Your Security Loadout',
  'Queue Up Better Security',
  'Respawn with Stronger Defenses',
];

// Generate product categories from centralized configuration
const ProductCategories = generateProductCategories();

/**
 * Product Card with Rectangular Version Badges
 */
function ProductCard({ product }) {
  const [showVersions, setShowVersions] = useState(false);
  const hasVersions = product.versions && product.versions.length > 0;

  if (!hasVersions) {
    return (
      <Link to={product.link} className={styles.productCard}>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.productDescription}>{product.description}</p>
        <span className={styles.learnMore}>Learn more →</span>
      </Link>
    );
  }

  return (
    <div className={`${styles.productCard} ${styles.versionedCard}`}>
      {/* Version badges in top-right corner */}
      <div className={styles.versionBadgesContainer}>
        {product.versions.map((version, idx) => (
          <Link key={idx} to={version.link} className={`${styles.versionBadge} ${version.isLatest ? styles.latestBadge : ''}`}>
            v{version.version}
          </Link>
        ))}
      </div>

      <h4 className={styles.productName}>{product.name}</h4>
      <p className={styles.productDescription}>{product.description}</p>
      <Link to={product.link} className={styles.learnMore}>
        Learn more →
      </Link>
    </div>
  );
}

/**
 * Renders a single product category with its products
 */
function ProductCategory({ title, description, icon, products }) {
  return (
    <div className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <span className={styles.categoryIcon}>{icon}</span>
        <div>
          <Heading as="h3" className={styles.categoryTitle}>
            {title}
          </Heading>
          <p className={styles.categoryDescription}>{description}</p>
        </div>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

/**
 * Main homepage features section
 * Displays animated title and all product categories
 */
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <ReactTyped strings={SECTION_TITLES} typeSpeed={60} backSpeed={30} backDelay={2000} loop showCursor={true} cursorChar="|" />
          </Heading>
          <p className={styles.sectionSubtitle}>Explore our comprehensive security products with individual version tags for easy access.</p>
        </div>
        <div className={styles.categoriesContainer}>
          {ProductCategories.map((category, idx) => (
            <ProductCategory key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
