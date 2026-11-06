// Access Analyzer 26.1 releases, newest first. To publish a release, add its
// entry at the top: the first entry fills {{appVersion}}, {{installerVersion}},
// {{k3sVersion}}, and {{argocdVersion}} on every docs/accessanalyzer/26.1 page,
// and every entry is a row of the table on release-notes/versions.md.
// installer is the newest stable dspm-installer release when the release shipped
// (the tag times decide ties on the same day). Only 1.2.0 pins one for in-app
// upgrades: 1.0.21. 1.1.10 pins 1.0.20-alpha.9, an alpha of 1.0.20.
export const accessAnalyzer261Releases = [
  { version: '1.2.0', date: '2026-10-28', installer: '1.0.21' },
  { version: '1.1.10', date: '2026-10-09', installer: '1.0.20' },
  { version: '1.1.9', date: '2026-09-29', installer: '1.0.19' },
  { version: '1.1.8', date: '2026-09-29', installer: '1.0.18' },
  { version: '1.1.7', date: '2026-09-21', installer: '1.0.17' },
  { version: '1.1.6', date: '2026-09-17', installer: '1.0.17' },
  { version: '1.1.5', date: '2026-09-11', installer: '1.0.16' },
  { version: '1.1.4', date: '2026-09-10', installer: '1.0.15' },
  { version: '1.1.3', date: '2026-09-09', installer: '1.0.15' },
  { version: '1.1.2', date: '2026-09-09', installer: '1.0.14' },
  { version: '1.1.1', date: '2026-09-08', installer: '1.0.13' },
  { version: '1.1.0', date: '2026-09-07', installer: '1.0.13' },
];

// Fills {{previousAppVersion}} while the list above has a single entry.
export const accessAnalyzer261ReleaseBefore = '1.1.10';

// The stable dspm-installer releases the list above refers to. k3s and argocd
// are the defaults in deploy/installer/internal/config/config.go at the tag.
export const accessAnalyzer261Installers = [
  { version: '1.0.21', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.20', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.19', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.18', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.17', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.16', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.15', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.14', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
  { version: '1.0.13', k3s: 'v1.33.4+k3s1', argocd: '3.2.0' },
];
