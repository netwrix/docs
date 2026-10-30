// Access Analyzer 26.1 releases, newest first. To publish a release, add its
// entry at the top: the first entry fills {{appVersion}}, {{installerVersion}},
// {{k3sVersion}}, and {{argocdVersion}} on every docs/accessanalyzer/26.1 page,
// and installer is the dspm-installer tag the release pins for in-app upgrades.
// k3s and argocd are what its offline media installs. Entries without them
// only date the release, for the installer table.
export const accessAnalyzer261Releases = [
  {
    version: '1.2.0',
    date: '2026-10-28',
    installer: '1.0.21',
    k3s: 'v1.33.4+k3s1',
    argocd: '3.2.0',
  },
  { version: '1.1.10', date: '2026-10-09' },
  { version: '1.1.9', date: '2026-09-29' },
  { version: '1.1.8', date: '2026-09-29' },
  { version: '1.1.7', date: '2026-09-21' },
  { version: '1.1.6', date: '2026-09-17' },
  { version: '1.1.5', date: '2026-09-11' },
  { version: '1.1.4', date: '2026-09-10' },
  { version: '1.1.3', date: '2026-09-09' },
  { version: '1.1.2', date: '2026-09-09' },
  { version: '1.1.1', date: '2026-09-08' },
  { version: '1.1.0', date: '2026-09-07' },
];

// Fills {{previousAppVersion}} while the list above has a single entry.
export const accessAnalyzer261ReleaseBefore = '1.1.10';

// Every stable dspm-installer release since Access Analyzer 1.1.0, newest first; each is a row of the table
// on release-notes/versions.md. date is the tag date; k3s and argocd are the
// defaults in deploy/installer/internal/config/config.go at the tag.
export const accessAnalyzer261Installers = [
  { version: '1.0.21', date: '2026-10-28', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.20', date: '2026-10-08', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.19', date: '2026-09-29', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.18', date: '2026-09-29', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.17', date: '2026-09-17', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.16', date: '2026-09-11', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.15', date: '2026-09-09', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.14', date: '2026-09-08', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
];
