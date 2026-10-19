import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBar from '@theme-original/AnnouncementBar';

// Path prefixes (and all subpages) where the announcement bar is shown.
const ANNOUNCEMENT_SCOPES = ['/docs/endpointprotector'];

export default function AnnouncementBarWrapper(props) {
  const {pathname} = useLocation();
  const {isActive} = useAnnouncementBar();
  const inScope = ANNOUNCEMENT_SCOPES.some(
    (s) => pathname === s || pathname.startsWith(`${s}/`),
  );
  const visible = inScope && isActive;

  // Lets custom.css keep the bar pinned and offset the navbar/sidebar/TOC
  // below it — only while the bar is actually showing. (A data attribute, not
  // a class: Docusaurus rewrites <html>'s class list and would drop ours.)
  useEffect(() => {
    const root = document.documentElement;
    if (visible) {
      root.setAttribute('data-has-announcement-bar', 'true');
    } else {
      root.removeAttribute('data-has-announcement-bar');
    }
    return () => root.removeAttribute('data-has-announcement-bar');
  }, [visible]);

  return inScope ? <AnnouncementBar {...props} /> : null;
}
