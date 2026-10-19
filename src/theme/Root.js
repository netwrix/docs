import React from 'react';
import ProductMetaTags from '@site/src/components/ProductMetaTags';

export default function Root({ children }) {
  return (
    <>
      <ProductMetaTags />
      {children}
    </>
  );
}
