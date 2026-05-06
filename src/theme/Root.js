import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import ProductMetaTags from '@site/src/components/ProductMetaTags';

const API_REF_PATH = '/docs/changetracker/8_1/integration/api/reference';

const SHIMMER_SIDEBAR_WIDTHS = [80, 60, 90, 70, 85, 55, 75, 80, 60, 70];
const SHIMMER_CONTENT_WIDTHS = [75, 90, 60, 85];

function RedocPreloader() {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'fading' | 'done'

  const markReady = useCallback(() => {
    setPhase((prev) => (prev === 'loading' ? 'fading' : prev));
  }, []);

  // Transition 'fading' → 'done' after the CSS transition finishes
  useEffect(() => {
    if (phase !== 'fading') return;
    const t = setTimeout(() => setPhase('done'), 450);
    return () => clearTimeout(t);
  }, [phase]);

  // Watch for Redoc to finish rendering, then trigger the fade-out
  useEffect(() => {
    const isReady = () => document.querySelectorAll('.menu-content li').length > 2;

    if (isReady()) {
      markReady();
      return;
    }

    const observer = new MutationObserver(() => {
      if (isReady()) {
        observer.disconnect();
        markReady();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Hard cap: never block the page for more than 5 s
    const fallback = setTimeout(markReady, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [markReady]);

  if (phase === 'done') return null;

  const cls = `redoc-preloader${phase === 'fading' ? ' redoc-preloader--fading' : ''}`;

  return (
    <div className={cls} aria-hidden="true">
      <div className="redoc-preloader__sidebar">
        {/* search box placeholder */}
        <div className="redoc-preloader__shimmer" style={{ height: '32px', marginBottom: '16px' }} />
        {SHIMMER_SIDEBAR_WIDTHS.map((w, i) => (
          <div key={i} className="redoc-preloader__shimmer" style={{ height: '14px', width: `${w}%`, marginBottom: '10px' }} />
        ))}
      </div>
      <div className="redoc-preloader__main">
        {/* heading placeholder */}
        <div className="redoc-preloader__shimmer" style={{ height: '2.5rem', width: '45%', marginBottom: '1.5rem', borderRadius: '6px' }} />
        {SHIMMER_CONTENT_WIDTHS.map((w, i) => (
          <div key={i} className="redoc-preloader__shimmer" style={{ height: '14px', width: `${w}%`, marginBottom: '10px' }} />
        ))}
        {/* code block placeholder */}
        <div className="redoc-preloader__shimmer" style={{ height: '160px', width: '100%', marginTop: '1.5rem', borderRadius: '6px' }} />
      </div>
    </div>
  );
}

export default function Root({ children }) {
  const { pathname } = useLocation();
  const isApiRef = pathname === API_REF_PATH || pathname.startsWith(API_REF_PATH + '/');

  return (
    <>
      <ProductMetaTags />
      {isApiRef && (
        <nav className="redoc-back-link" aria-label="Return to Change Tracker documentation">
          <Link to="/docs/changetracker/8_1/" className="redoc-back-link__anchor">
            ← Change Tracker 8.1 docs
          </Link>
        </nav>
      )}
      {isApiRef && <RedocPreloader />}
      {children}
    </>
  );
}
