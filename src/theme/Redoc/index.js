import React, { useState, useEffect } from 'react';
import OriginalRedoc from '@theme-original/Redoc';

// Docusaurus swizzle wrapper for @theme/Redoc (from docusaurus-theme-redoc).
//
// Problem: ServerRedoc's useSpec() call builds the entire Redoc operation store
// synchronously during React's render phase. For client-side navigation this
// blocks the main thread for several seconds before React can commit anything,
// so the browser can't paint the preloader (Root.js) until AFTER the freeze —
// which makes the preloader appear as a brief flash AFTER the blank period
// rather than covering it.
//
// Fix: Detect whether we are on a client-side navigation (no .redoc-wrap in
// the DOM yet) vs. a direct URL visit (SSR HTML already has .redoc-wrap).
//
//  - Client navigation  → mounted=false on first render → returns null instantly
//    → browser paints preloader → useEffect fires → mounted=true → real render
//    → expensive computation → content appears under the fading preloader.
//
//  - Direct URL / SSR   → .redoc-wrap is already in the HTML → mounted=true
//    → renders OriginalRedoc immediately to match the server output (no
//    hydration mismatch). The preloader from Root.js covers the hydration lag.
export default function Redoc(props) {
  const [mounted, setMounted] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.querySelector('.redoc-wrap') !== null;
    }
    return true; // SSR: always render immediately
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <OriginalRedoc {...props} />;
}
