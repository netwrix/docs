import React, { useEffect } from 'react';
import ProductMetaTags from '@site/src/components/ProductMetaTags';

// Default implementation from Docusaurus
// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/Root/index.tsx
export default function Root({ children }) {
  useEffect(() => {
    // Update favicon based on color mode using MutationObserver
    const updateFavicon = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = isDark
          ? '/branding/favicon-light.ico'
          : '/branding/favicon-dark.ico';
      }
    };

    // Initial update - temp. removed favicon changing on darkmode
    //updateFavicon();

    // Watch for theme changes
    // const observer = new MutationObserver(updateFavicon);
    // observer.observe(document.documentElement, {
    //   attributes: true,
    //   attributeFilter: ['data-theme']
    // });

    // return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProductMetaTags />
      {children}
    </>
  );
}
