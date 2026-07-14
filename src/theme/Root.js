import React from 'react';
import ProductMetaTags from '@site/src/components/ProductMetaTags';
import PilotFAB from '@site/src/components/PilotFAB';
// KaTeX stylesheet — required for the LaTeX rendered by the /pilot page's
// markdown renderer to look right. Bundled here at the root so it lands in
// the initial CSS payload rather than getting pulled in async per-panel.
import 'katex/dist/katex.min.css';

export default function Root({ children }) {
  return (
    <>
      <ProductMetaTags />
      {children}
      <PilotFAB />
    </>
  );
}
