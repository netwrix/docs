import React, {useEffect} from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import {useHistory, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import {findVersionlessRedirect} from '@site/src/utils/versionlessRedirect';

// Ejected swizzle of NotFound from @docusaurus/theme-classic 3.10.2. This copy
// pins 3.10.2 behavior, so on the next Docusaurus bump re-diff it against
// node_modules/@docusaurus/theme-classic/lib/theme/NotFound/index.js — the only
// intended delta is the redirect hook added ahead of the upstream body.

export default function Index() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const location = useLocation();

  // The target is a pure function of the pathname, so compute it during render
  // instead of holding it in state. That keeps the prerendered 404.html intact:
  // during SSG the pathname is /404.html, which never matches, so the static
  // page still gets its Layout, content, and title for crawlers and
  // JS-disabled visitors.
  const redirectTarget = findVersionlessRedirect(
    location.pathname,
    siteConfig.customFields?.unversionedDocsBasePaths
  );

  useEffect(() => {
    if (redirectTarget) {
      // Carry the query string and hash across so anchor deep links still land
      // on the section the reader clicked.
      history.replace(redirectTarget + location.search + location.hash);
    }
  }, [redirectTarget, location.search, location.hash, history]);

  if (redirectTarget) return null;

  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });
  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}
