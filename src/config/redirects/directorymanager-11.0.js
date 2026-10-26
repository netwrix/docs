// Redirects from the Directory Manager 11.0 introduction pages to their new
// locations. The introduction section was removed: its overview page is
// replaced by the 11.0 home page, and What's New and Getting Started now sit
// at the top level of the 11.0 docs.

const BASE = '/docs/directorymanager/11_0';

export const directoryManager110Redirects = [
  { from: `${BASE}/introduction`, to: BASE },
  { from: `${BASE}/introduction/whatsnew`, to: `${BASE}/whatsnew` },
  { from: `${BASE}/introduction/gettingstarted`, to: `${BASE}/gettingstarted` },
];
