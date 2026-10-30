// Access Analyzer 26.1 releases, newest first. To publish a release, add its
// entry at the top: the first entry fills {{appVersion}}, {{installerVersion}},
// {{k3sVersion}}, and {{argocdVersion}} on every docs/accessanalyzer/26.1 page,
// and every entry is a row of the table on release-notes/versions.md.
// installer is the dspm-installer tag the release pins for in-app upgrades;
// k3s and argocd are what its offline media installs.
export const accessAnalyzer261Releases = [
  {
    version: '1.2.0',
    date: '2026-10-28',
    installer: '1.0.21',
    k3s: 'v1.33.4+k3s1',
    argocd: '3.2.0',
  },
];

// Fills {{previousAppVersion}} while the list above has a single entry.
export const accessAnalyzer261ReleaseBefore = '1.1.10';
