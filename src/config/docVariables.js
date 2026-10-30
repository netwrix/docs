import { relative, sep } from 'path';
import { fileURLToPath } from 'url';
import { accessAnalyzer261ReleaseBefore, accessAnalyzer261Releases } from './releases/accessanalyzer-26.1.js';

const siteDir = fileURLToPath(new URL('../..', import.meta.url));
const TOKEN = /\{\{([A-Za-z][A-Za-z0-9]*)\}\}/g;

function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function releaseTable(releases) {
  return [
    '| Release | Released | Installer | k3s | ArgoCD |',
    '|---|---|---|---|---|',
    ...releases.map((r) => `| ${r.version} | ${formatDate(r.date)} | ${r.installer} | ${r.k3s} | ${r.argocd} |`),
  ].join('\n');
}

export function releaseVariables(releases, releaseBefore) {
  const [latest, previous] = releases;
  return {
    appVersion: latest.version,
    installerVersion: latest.installer,
    k3sVersion: latest.k3s,
    argocdVersion: latest.argocd,
    previousAppVersion: previous?.version ?? releaseBefore,
    releaseTable: releaseTable(releases),
  };
}

const VARIABLES_BY_DIR = [
  ['docs/accessanalyzer/26.1/', releaseVariables(accessAnalyzer261Releases, accessAnalyzer261ReleaseBefore)],
];

export function variablesForDoc(filePath) {
  const docPath = relative(siteDir, filePath).split(sep).join('/');
  return VARIABLES_BY_DIR.find(([dir]) => docPath.startsWith(dir))?.[1];
}

export function replaceDocVariables(content, variables, page) {
  return content.replace(TOKEN, (token, name) => {
    if (!Object.hasOwn(variables, name)) {
      throw new Error(`${page}: unknown variable ${token}. Known variables: ${Object.keys(variables).join(', ')}`);
    }
    return variables[name];
  });
}

/** markdown.preprocessor: replaces {{name}} tokens in the pages of a product version that defines variables. */
export function docVariablesPreprocessor({ filePath, fileContent }) {
  const variables = variablesForDoc(filePath);
  return variables ? replaceDocVariables(fileContent, variables, relative(siteDir, filePath)) : fileContent;
}
