// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import { generateDocusaurusPlugins, generateNavbarDropdowns } from './src/config/products.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Netwrix Product Documentation',
  tagline: 'Documentation for Netwrix Products',
  favicon: 'branding/favicon.ico',

  // Set the production url of your site here
  // Use environment variable for dynamic URL configuration
  projectName: 'docs',
  url: process.env.APP_EXTERNAL_URL || 'http://localhost:4500',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // throw on anything that is not configured correctly
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'throw',

  // Set Mermaid
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Performance optimizations with Docusaurus Faster
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true, // 2-5x faster rebuilds
      mdxCrossCompilerCache: true,
      ssgWorkerThreads: true, // 2x faster static generation
    },
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // Required for worker threads
      // useCssCascadeLayers: true, // Temporarily disabled - may cause style conflicts
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // Google Analytics
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-FZPWSDMTEX',
        anonymizeIP: true,
      },
    ],
    // Generate all product documentation plugins from centralized configuration
    ...generateDocusaurusPlugins().map(([pluginName, config]) => [
      pluginName,
      {
        ...config,
        sidebarPath: config.sidebarPath && typeof config.sidebarPath === 'string'
          ? require.resolve(config.sidebarPath)
          : config.sidebarPath,
      },
    ]),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // MermaidJS Config
      mermaid: {
        theme: {
          light: 'neutral',
          dark: 'dark',
        },
        options: {
          look: 'handDrawn',
          handDrawnSeed: 1,
        },
      },
      // Replace with your project's social card
      image: 'img/Logo_RGB.svg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      algolia: {
        // Your Algolia credentials
        appId: 'KPMSCF6G6J',
        apiKey: '1b20f30f13a874cd46f9d5c30b01d99c', // Use the search-only API key, not the admin key
        indexName: 'Production Docs',

        // Enable contextual search (already great that you have product/version meta tags!)
        contextualSearch: true,

        // Search parameters for better results
        searchParameters: {
          // Facet filters can be combined with contextual search
          // These will be merged with the automatic facets from contextual search
          facetFilters: [
            // Add any default filters here if needed
            // e.g., 'type:content' to exclude headers-only results
          ],

          // Attributes to snippet in search results
          attributesToSnippet: ['content:20'],

          // Highlight search terms in results
          highlightPreTag: '<mark>',
          highlightPostTag: '</mark>',

          // Number of results per page
          hitsPerPage: 20,

          // Add these for better relevance
          distinct: true,
          clickAnalytics: true,
          analytics: true,
        },

        // Enable search insights for better analytics
        insights: true,

        // Path for the search page (enables full-page search experience)
        searchPagePath: 'search',

        // Placeholder text for the search box
        placeholder: 'Search the Netwrix docs...',

        // Transform items before displaying (optional)
        transformItems: (items) => {
          return items.map((item) => {
            // Add product badges or modify display as needed
            return {
              ...item,
              // Example: Add custom badges based on product
              _highlightResult: {
                ...item._highlightResult,
                // Customize highlighted results if needed
              },
            };
          });
        },

        // Replace paths if you're using different deployments
        // replaceSearchResultPathname: {
        //   from: '/docs/',
        //   to: '/',
        // },
      },
      navbar: {
        logo: {
          alt: 'Netwrix Logo',
          src: 'branding/Netwrix_Logo_Dark.svg',
          srcDark: 'branding/Netwrix_Logo_Light.svg',
          href: '/',
        },
        items: [
          // Generate category dropdowns from centralized product configuration
          ...generateNavbarDropdowns(),
          {
            href: 'https://community.netwrix.com',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://www.netwrix.com/support.html',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'http://github.com/netwrix',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'bash'],
      },
    }),
  // Add preconnect for better search performance
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://KPMSCF6G6J-dsn.algolia.net',
        crossorigin: 'anonymous',
      },
    },
  ],
  stylesheets: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'],
};

export default config;
