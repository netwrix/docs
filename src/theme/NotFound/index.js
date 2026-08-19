import React, {useEffect, useState} from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import {useHistory, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import {findVersionlessRedirect} from '@site/src/utils/versionlessRedirect';

export default function Index() {
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
