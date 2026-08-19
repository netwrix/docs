import React, {useEffect, useState} from 'react';
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

// A product that used to have multiple versions but now ships only a single,
// unversioned "current" version leaves old links like /docs/<product>/8_2/<rest>
// dead. Such a path resolves inside this docs plugin instance but doesn't match
// a real doc, so Docusaurus's DocRoot renders its own not-found content directly
// (it never reaches the top-level 404 page/theme). We intercept that case here
// and send the visitor to the unversioned equivalent instead.
function DocRootNotFound() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const location = useLocation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const target = findVersionlessRedirect(
      location.pathname,
      siteConfig.customFields?.activeVersionsByProduct
    );
    if (target) {
      history.replace(target);
    } else {
      setChecked(true);
    }
  }, [location.pathname, history, siteConfig]);

  if (!checked) return null;
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
