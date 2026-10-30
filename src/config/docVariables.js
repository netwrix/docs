import { relative, sep } from 'path';
import { fileURLToPath } from 'url';
import {
  accessAnalyzer261Installers,
  accessAnalyzer261ReleaseBefore,
  accessAnalyzer261Releases,
} from './releases/accessanalyzer-26.1.js';

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

export function installerTable(installers, releases) {
  return [
    '| Installer | Released | k3s | ArgoCD | Latest release at the time |',
    '|---|---|---|---|---|',
    ...installers.map((i) => {
      const release = releases.find((r) => r.date <= i.date)?.version ?? '-';
      return `| ${i.version} | ${formatDate(i.date)} | ${i.k3s} | ${i.argocd} | ${release} |`;
    }),
  ].join('\n');
}

export function releaseVariables(releases, releaseBefore, installers) {
  const [latest, previous] = releases;
  return {
    appVersion: latest.version,
    installerVersion: latest.installer,
    k3sVersion: latest.k3s,
    argocdVersion: latest.argocd,
    previousAppVersion: previous?.version ?? releaseBefore,
    installerTable: installerTable(installers, releases),
  };
}

const VARIABLES_BY_DIR = [
  ['docs/accessanalyzer/26.1/', releaseVariables(accessAnalyzer261Releases, accessAnalyzer261ReleaseBefore, accessAnalyzer261Installers)],
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
