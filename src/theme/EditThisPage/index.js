import React from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import IconEdit from '@theme/Icon/Edit';

const GITHUB_ISSUES_URL = 'https://github.com/netwrix/docs/issues/new';

export default function EditThisPage({editUrl}) {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();

  const pageUrl = `${siteConfig.url}${location.pathname}`;
  const title = `Feedback: ${pageUrl}`;
  const body = `**Page:** ${pageUrl}\n\n**Issue or question:**\n\n`;

  const issueUrl =
    GITHUB_ISSUES_URL +
    '?labels=' + encodeURIComponent('documentation,fix') +
    '&title=' + encodeURIComponent(title) +
    '&body=' + encodeURIComponent(body);

  return (
    <Link
      to={issueUrl}
      className={ThemeClassNames.common.editThisPage}
      target="_blank"
      rel="noopener noreferrer">
      <IconEdit />
      Ask questions or request changes
    </Link>
  );
}
