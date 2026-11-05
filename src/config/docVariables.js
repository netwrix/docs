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

function installerFor(release, installers) {
  const installer = installers.find((i) => i.version === release.installer);
  if (!installer) throw new Error(`release ${release.version} names installer ${release.installer}, which is not in the installer list`);
  return installer;
}

export function releaseTable(releases, installers) {
  return [
    '| Release | Released | Installer |',
    '|---|---|---|',
    ...releases.map((r) => {
      const { version } = installerFor(r, installers);
      return `| ${r.version} | ${formatDate(r.date)} | ${version} |`;
    }),
  ].join('\n');
}

export function releaseVariables(releases, releaseBefore, installers) {
  const [latest, previous] = releases;
  const installer = installerFor(latest, installers);
  return {
    appVersion: latest.version,
    installerVersion: installer.version,
    k3sVersion: installer.k3s,
    argocdVersion: installer.argocd,
    previousAppVersion: previous?.version ?? releaseBefore,
    releaseTable: releaseTable(releases, installers),
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
