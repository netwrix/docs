import React, {useEffect} from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {
  DocsSidebarProvider,
  useDocRootMetadata,
} from '@docusaurus/plugin-content-docs/client';
import {useHistory, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocRootLayout from '@theme/DocRoot/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import {findVersionlessRedirect} from '@site/src/utils/versionlessRedirect';

// Ejected swizzle of DocRoot from @docusaurus/plugin-content-docs 3.10.2.
// Docusaurus marks this component unsafe to swizzle, so this copy pins 3.10.2
// behavior and won't pick up upstream changes on its own. On the next
// Docusaurus bump, re-diff it against
// node_modules/@docusaurus/plugin-content-docs/lib/theme/DocRoot/index.js and
// port anything new — the only intended delta below is DocRootNotFound
// replacing the upstream <NotFoundContent /> in the !currentDocRouteMetadata
// branch.

// A product that used to have multiple versions but now serves a single
// unversioned one leaves old links like /docs/<product>/8_2/<rest> dead. Such a
// path resolves inside this docs plugin instance but doesn't match a real doc,
// so Docusaurus's DocRoot renders its own not-found content directly (it never
// reaches the top-level 404 page/theme). We intercept that case here and send
// the visitor to the unversioned equivalent instead.
function DocRootNotFound() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const location = useLocation();

  // Computed during render rather than held in state: the target is a pure
  // function of the pathname, so a genuine not-found path renders its content
  // on the first pass instead of flashing an empty render.
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
  return <NotFoundContent />;
}

export default function DocRoot(props) {
  const currentDocRouteMetadata = useDocRootMetadata(props);
  if (!currentDocRouteMetadata) {
    // We only render the not found content to avoid a double layout
    // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
    return <DocRootNotFound />;
  }
  const {docElement, sidebarName, sidebarItems} = currentDocRouteMetadata;
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
        <DocRootLayout>{docElement}</DocRootLayout>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
}
