/**
 * Centralized product configuration for Netwrix documentation site
 *
 * This file contains all product definitions, versions, and metadata.
 * It serves as the single source of truth for product information across the entire site.
 *
 * Benefits:
 * - Single place to add/remove products and versions
 * - Consistent product names and routing across all components
 * - Automatic generation of Docusaurus plugins and routes
 * - Easier maintenance and fewer places for errors
 */

/**
 * @typedef {Object} ProductVersion
 * @property {string} version - Version string (e.g., "12.0", "saas")
 * @property {string} label - Display label for the version
 * @property {boolean} isLatest - Whether this is the latest version
 * @property {string} [sidebarFile] - Custom sidebar file path (defaults to generated path)
 */

/**
 * @typedef {Object} Product
 * @property {string} id - Unique product identifier
 * @property {string} name - Display name
 * @property {string} description - Short description
 * @property {string} path - Base documentation path
 * @property {ProductVersion[]} versions - Available versions
 * @property {string} [defaultVersion] - Default version to use
 * @property {string[]} [categories] - Product categories (can belong to multiple)
 * @property {string} [icon] - Icon for the product
 */

/**
 * All Netwrix products and their configurations
 * @type {Product[]}
 */
export const PRODUCTS = [
  {
    id: '1secure',
    name: '1Secure',
    description: 'Cloud-based security monitoring and compliance',
    path: 'docs/1secure',
    categories: ['Data Security Posture Management (DSPM)'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/1secure.js',
      },
    ],
  },
  {
    id: 'accessanalyzer',
    name: 'Access Analyzer',
    description: 'Analyze and audit file system permissions',
    path: 'docs/accessanalyzer',
    categories: ['Data Security Posture Management (DSPM)', 'Identity Threat Detection & Response (ITDR)'],
    icon: '',
    versions: [
      {
        version: '12.0',
        label: '12.0',
        isLatest: true,
        sidebarFile: './sidebars/accessanalyzer/12.0.js',
      },
      {
        version: '11.6',
        label: '11.6',
        isLatest: false,
        sidebarFile: './sidebars/accessanalyzer/11.6.js',
      },
    ],
    defaultVersion: '12.0',
  },
  {
    id: 'accessinformationcenter',
    name: 'Access Information Center',
    description: 'Centralized access information management',
    path: 'docs/accessinformationcenter',
    categories: ['Other'],
    icon: '',
    versions: [
      {
        version: '12.0',
        label: '12.0',
        isLatest: true,
        sidebarFile: './sidebars/accessinformationcenter/12.0.js',
      },
      {
        version: '11.6',
        label: '11.6',
        isLatest: false,
        sidebarFile: './sidebars/accessinformationcenter/11.6.js',
      },
    ],
    defaultVersion: '12.0',
  },
  {
    id: 'activitymonitor',
    name: 'Activity Monitor',
    description: 'Track user activities across IT infrastructure',
    path: 'docs/activitymonitor',
    categories: ['Other'],
    icon: '',
    versions: [
      {
        version: '9.0',
        label: '9.0',
        isLatest: true,
        sidebarFile: './sidebars/activitymonitor/9.0.js',
      },
      {
        version: '8.0',
        label: '8.0',
        isLatest: false,
        sidebarFile: './sidebars/activitymonitor/8.0.js',
      },
      {
        version: '7.1',
        label: '7.1',
        isLatest: false,
        sidebarFile: './sidebars/activitymonitor/7.1.js',
      },
    ],
    defaultVersion: '9.0',
  },
  {
    id: 'auditor',
    name: 'Auditor',
    description: 'Comprehensive IT infrastructure auditing',
    path: 'docs/auditor',
    categories: ['Directory Management', 'Data Security Posture Management (DSPM)'],
    icon: '',
    versions: [
      {
        version: '10.8',
        label: '10.8',
        isLatest: true,
        sidebarFile: './sidebars/auditor/10.8.js',
      },
      {
        version: '10.7',
        label: '10.7',
        isLatest: false,
        sidebarFile: './sidebars/auditor/10.7.js',
      },
      {
        version: '10.6',
        label: '10.6',
        isLatest: false,
        sidebarFile: './sidebars/auditor/10.6.js',
      },
    ],
    defaultVersion: '10.8',
  },
  {
    id: 'changetracker',
    name: 'Change Tracker',
    description: 'Real-time change monitoring and alerts',
    path: 'docs/changetracker',
    categories: ['Endpoint Management'],
    icon: '',
    versions: [
      {
        version: '8.1',
        label: '8.1',
        isLatest: true,
        sidebarFile: './sidebars/changetracker/8.1.js',
      },
      {
        version: '8.0',
        label: '8.0',
        isLatest: false,
        sidebarFile: './sidebars/changetracker/8.0.js',
      },
    ],
    defaultVersion: '8.1',
  },
  {
    id: 'customer',
    name: 'Customer Portal & Training Guide',
    description: 'Access custsomer resources and training materials',
    path: 'docs/customer',
    categories: ['Other'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/customer.js',
      },
    ],
  },
  {
    id: 'dataclassification',
    name: 'Data Classification',
    description: 'Classify and protect sensitive data',
    path: 'docs/dataclassification',
    categories: ['Data Security Posture Management (DSPM)'],
    icon: '🏷️',
    versions: [
      {
        version: '5.7',
        label: '5.7',
        isLatest: true,
        sidebarFile: './sidebars/dataclassification/5.7.js',
      },
      {
        version: '5.6.2',
        label: '5.6.2',
        isLatest: false,
        sidebarFile: './sidebars/dataclassification/5.6.2.js',
      },
    ],
    defaultVersion: '5.7',
  },
  {
    id: 'directorymanager',
    name: 'Directory Manager',
    description: 'Active Directory group management',
    path: 'docs/directorymanager',
    categories: ['Identity Management', 'Directory Management'],
    icon: '',
    versions: [
      {
        version: '11.1',
        label: '11.1',
        isLatest: true,
        sidebarFile: './sidebars/directorymanager/11.1.js',
      },
      {
        version: '11.0',
        label: '11.0',
        isLatest: false,
        sidebarFile: './sidebars/directorymanager/11.0.js',
      },
    ],
    defaultVersion: '11.1',
  },
  {
    id: 'endpointpolicymanager',
    name: 'Endpoint Policy Manager',
    description: 'Group Policy management and enforcement',
    path: 'docs/endpointpolicymanager',
    categories: ['Endpoint Management'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/sidebar.js',
      },
    ],
  },
  {
    id: 'endpointprotector',
    name: 'Endpoint Protector',
    description: 'Comprehensive endpoint security',
    path: 'docs/endpointprotector',
    categories: ['Endpoint Management'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/endpointprotector/epp.js',
      },
    ],
    defaultVersion: 'current',
  },
  {
    id: 'identitymanager',
    name: 'Identity Manager',
    description: 'User provisioning and management',
    path: 'docs/identitymanager',
    categories: ['Identity Management'],
    icon: '',
    versions: [
      {
        version: '6.2',
        label: '6.2',
        isLatest: true,
        sidebarFile: './sidebars/identitymanager/6.2.js',
      },
      {
        version: '6.1',
        label: '6.1',
        isLatest: false,
        sidebarFile: './sidebars/identitymanager/6.1.js',
      },
      {
        version: 'saas',
        label: 'SaaS',
        isLatest: false,
        sidebarFile: './sidebars/identitymanager/saas.js',
      },
    ],
    defaultVersion: '6.2',
  },
  {
    id: 'partner',
    name: 'Partner Certification Guide',
    description: 'Learn about partner training materials',
    path: 'docs/partner',
    categories: ['Other'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/partner.js',
      },
    ],
  },
  {
    id: 'passwordpolicyenforcer',
    name: 'Password Policy Enforcer',
    description: 'Enforce strong password policies',
    path: 'docs/passwordpolicyenforcer',
    categories: ['Directory Management'],
    icon: '',
    versions: [
      {
        version: '11.1',
        label: '11.1',
        isLatest: true,
        sidebarFile: './sidebars/passwordpolicyenforcer/11.1.js',
      },
      {
        version: '11.0',
        label: '11.0',
        isLatest: false,
        sidebarFile: './sidebars/passwordpolicyenforcer/11.0.js',
      },
      {
        version: '10.2',
        label: '10.2',
        isLatest: false,
        sidebarFile: './sidebars/passwordpolicyenforcer/10.2.js',
      },
    ],
    defaultVersion: '11.1',
  },
  {
    id: 'passwordreset',
    name: 'Password Reset',
    description: 'Self-service password reset solution',
    path: 'docs/passwordreset',
    categories: ['Other'],
    icon: '',
    versions: [
      {
        version: '3.3',
        label: '3.3',
        isLatest: true,
        sidebarFile: './sidebars/passwordreset/3.3.js',
      },
      {
        version: '3.23',
        label: '3.23',
        isLatest: false,
        sidebarFile: './sidebars/passwordreset/3.23.js',
      },
    ],
    defaultVersion: '3.3',
  },
  {
    id: 'passwordsecure',
    name: 'Password Secure',
    description: 'Secure password management',
    path: 'docs/passwordsecure',
    categories: ['Privileged Access Management (PAM)'],
    icon: '',
    versions: [
      {
        version: '9.3',
        label: '9.3',
        isLatest: true,
        sidebarFile: './sidebars/passwordsecure/9.3.js',
      },
      {
        version: '9.2',
        label: '9.2',
        isLatest: false,
        sidebarFile: './sidebars/passwordsecure/9.2.js',
      },
      {
        version: '9.1',
        label: '9.1',
        isLatest: false,
        sidebarFile: './sidebars/passwordsecure/9.1.js',
      },
    ],
    defaultVersion: '9.3',
  },
  {
    id: 'pingcastle',
    name: 'PingCastle',
    description: 'Active Directory security assessment',
    path: 'docs/pingcastle',
    categories: ['Identity Threat Detection & Response (ITDR)'],
    icon: '',
    versions: [
      {
        version: '3.3',
        label: '3.3',
        isLatest: true,
        sidebarFile: './sidebars/pingcastle/3.3.js',
      },
    ],
    defaultVersion: '3.3',
  },
  {
    id: 'platgovnetsuite',
    name: 'Platform Governance for NetSuite',
    description: 'NetSuite governance and compliance',
    path: 'docs/platgovnetsuite',
    categories: ['Identity Management'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/platgovnetsuite.js',
      },
    ],
  },
  {
    id: 'platgovnetsuiteflashlight',
    name: 'Platform Governance for NetSuite Flashlight',
    description: 'Lightweight NetSuite documentation and analysis',
    path: 'docs/platgovnetsuiteflashlight',
    categories: ['Other'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/platgovnetsuiteflashlight.js',
      },
    ],
  },
  {
    id: 'platgovsalesforce',
    name: 'Platform Governance for Salesforce',
    description: 'Salesforce governance and compliance',
    path: 'docs/platgovsalesforce',
    categories: ['Identity Management'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/platgovsalesforce.js',
      },
    ],
  },
  {
    id: 'platgovsalesforceflashlight',
    name: 'Platform Governance for Salesforce Flashlight',
    description: 'Lightweight Salesforce documentation and analysis',
    path: 'docs/platgovsalesforceflashlight',
    categories: ['Other'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'Current',
        isLatest: true,
        sidebarFile: './sidebars/platgovsalesforceflashlight.js',
      },
    ],
  },
  {
    id: 'privilegesecure',
    name: 'Privilege Secure',
    description: 'Privileged access management',
    path: 'docs/privilegesecure',
    categories: ['Privileged Access Management (PAM)'],
    icon: '',
    versions: [
      {
        version: '25.12',
        label: '25.12',
        isLatest: true,
        sidebarFile: './sidebars/privilegesecure/25.12.js',
      },
      {
        version: '4.2',
        label: '4.2',
        isLatest: false,
        sidebarFile: './sidebars/privilegesecure/4.2.js',
      },
      {
        version: '4.1',
        label: '4.1',
        isLatest: false,
        sidebarFile: './sidebars/privilegesecure/4.1.js',
      },
    ],
    defaultVersion: '25.12',
  },
  {
    id: 'privilegesecurediscovery',
    name: 'Privilege Secure for Discovery',
    description: 'Privileged access management',
    path: 'docs/privilegesecurediscovery',
    categories: ['Privileged Access Management (PAM)'],
    icon: '',
    versions: [
      {
        version: 'current',
        label: 'current',
        isLatest: true,
        sidebarFile: './sidebars/privilegesecurediscovery.js',
      },
    ],
  },
  {
    id: 'recoveryforactivedirectory',
    name: 'Recovery for Active Directory',
    description: 'Active Directory backup and recovery',
    path: 'docs/recoveryforactivedirectory',
    categories: ['Identity Threat Detection & Response (ITDR)'],
    icon: '',
    versions: [
      {
        version: '2.6',
        label: '2.6',
        isLatest: true,
        sidebarFile: './sidebars/recoveryforactivedirectory/2.6.js',
      },
    ],
    defaultVersion: '2.6',
  },
  {
    id: 'threatmanager',
    name: 'Threat Manager',
    description: 'Advanced threat detection and response',
    path: 'docs/threatmanager',
    categories: ['Identity Threat Detection & Response (ITDR)'],
    icon: '',
    versions: [
      {
        version: '3.0',
        label: '3.0',
        isLatest: true,
        sidebarFile: './sidebars/threatmanager/3.0.js',
      },
    ],
    defaultVersion: '3.0',
  },
  {
    id: 'threatprevention',
    name: 'Threat Prevention',
    description: 'Proactive threat prevention',
    path: 'docs/threatprevention',
    categories: ['Identity Threat Detection & Response (ITDR)'],
    icon: '',
    versions: [
      {
        version: '8.0',
        label: '8.0',
        isLatest: true,
        sidebarFile: './sidebars/threatprevention/8.0.js',
      },
      {
        version: '7.5',
        label: '7.5',
        isLatest: false,
        sidebarFile: './sidebars/threatprevention/7.5.js',
      }
    ],
    defaultVersion: '8.0',
  },
];

/**
 * Product categories with their metadata
 */
export const PRODUCT_CATEGORIES = [
  {
    id: 'identity-management',
    title: 'Identity Management',
    description: 'Comprehensive identity and user management solutions',
    icon: '',
  },
  {
    id: 'pam',
    title: 'Privileged Access Management (PAM)',
    description: 'Control and monitor privileged access to critical systems',
    icon: '',
  },
  {
    id: 'directory-management',
    title: 'Directory Management',
    description: 'Active Directory management and password policy enforcement',
    icon: '',
  },
  {
    id: 'endpoint-management',
    title: 'Endpoint Management',
    description: 'Comprehensive endpoint protection and policy management',
    icon: '',
  },
  {
    id: 'dspm',
    title: 'Data Security Posture Management (DSPM)',
    description: "Protect and classify your organization's sensitive data",
    icon: '',
  },
  {
    id: 'itdr',
    title: 'Identity Threat Detection & Response (ITDR)',
    description: 'Advanced threat detection and incident response capabilities',
    icon: '',
  },
  {
    id: 'other',
    title: 'Other',
    description: 'Additional security and management tools',
    icon: '',
  },
];

// Utility functions for working with product configurations

/**
 * Convert version string to URL-safe format (dots to underscores)
 */
export function versionToUrl(version) {
  if (version === 'current' || version === 'saas') return version;
  return version.replace(/\./g, '_');
}

/**
 * Convert URL version back to display format (underscores to dots)
 */
export function urlToVersion(urlVersion) {
  if (urlVersion === 'current' || urlVersion === 'saas') return urlVersion;
  return urlVersion.replace(/_/g, '.');
}

/**
 * Generate Docusaurus plugin ID for a product version
 */
export function generatePluginId(productId, version) {
  if (version === 'current') return productId;
  return `${productId}${versionToUrl(version)}`;
}

/**
 * Generate route base path for a product version
 */
export function generateRouteBasePath(productPath, version) {
  if (version === 'current') return productPath;
  return `${productPath}/${versionToUrl(version)}`;
}

/**
 * Generate file system path for a product version
 */
export function generateDocPath(productPath, version) {
  if (version === 'current') return productPath;
  return `${productPath}/${version}`;
}

/**
 * Get all products for a specific category
 */
export function getProductsByCategory(category) {
  return PRODUCTS.filter((product) => product.categories && product.categories.includes(category));
}

/**
 * Get a product by its ID
 */
export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

/**
 * Get the default (latest) version for a product
 */
export function getDefaultVersion(product) {
  if (product.defaultVersion) {
    return product.versions.find((v) => v.version === product.defaultVersion);
  }
  return product.versions.find((v) => v.isLatest) || product.versions[0];
}

/**
 * Create product map for route matching (used by ProductMetaTags)
 */
export function createProductMap() {
  const map = {};
  PRODUCTS.forEach((product) => {
    map[`/${product.path}`] = product.name;
  });
  return map;
}

/**
 * Get the first product (for default homepage link)
 */
export function getDefaultProduct() {
  return PRODUCTS[0];
}

/**
 * Check if a product has KB content
 */
export function hasKBContent(productId) {
  const kbProducts = [
    '1secure', 'accessanalyzer', 'accessinformationcenter', 'activitymonitor',
    'auditor', 'changetracker', 'dataclassification', 'directorymanager',
    'endpointpolicymanager', 'endpointprotector', 'passwordpolicyenforcer',
    'passwordreset', 'privilegesecure', 'privilegesecurediscovery',
    'threatmanager', 'threatprevention'
  ];
  return kbProducts.includes(productId);
}

/**
 * Generate all Docusaurus plugin configurations
 */
export function generateDocusaurusPlugins() {
  const plugins = [];

  // Filter products if DOCS_PRODUCT environment variable is set
  const targetProduct = process.env.DOCS_PRODUCT;
  const productsToProcess = targetProduct
    ? PRODUCTS.filter(product => product.id === targetProduct)
    : PRODUCTS;

  productsToProcess.forEach((product) => {
    product.versions.forEach((version) => {
      const pluginId = generatePluginId(product.id, version.version);
      const routeBasePath = generateRouteBasePath(product.path, version.version);
      const docPath = generateDocPath(product.path, version.version);

      // Build plugin configuration
      const pluginConfig = {
        id: pluginId,
        path: docPath,
        routeBasePath: routeBasePath,
        sidebarPath: version.sidebarFile,
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md', '**/docs-staging/**'],
        versions: {
          current: {
            label: version.label,
          },
        },
      };

      plugins.push([
        '@docusaurus/plugin-content-docs',
        pluginConfig,
      ]);
    });
  });

  // Add KB plugin for centralized Knowledge Base content (only if not building KB exclusively)
  if (targetProduct !== 'kb') {
    plugins.push([
      '@docusaurus/plugin-content-docs',
      {
        id: 'kb',
        path: 'docs/kb',
        routeBasePath: 'docs/kb',
        sidebarPath: false, // KB uses individual sidebars in product plugins
        editUrl: 'https://github.com/netwrix/docs/tree/main/',
        exclude: ['**/CLAUDE.md', '**/docs-staging/**'],
        versions: {
          current: {
            label: 'Knowledge Base',
          },
        },
      },
    ]);
  }

  return plugins;
}

/**
 * Generate product categories for HomepageFeatures component
 */
export function generateProductCategories() {
  return PRODUCT_CATEGORIES.map((category) => {
    const categoryProducts = getProductsByCategory(category.title);

    const products = categoryProducts.map((product) => {
      const defaultVersion = getDefaultVersion(product);
      const defaultLink = `/${generateRouteBasePath(product.path, defaultVersion.version)}`;

      const productInfo = {
        name: product.name,
        description: product.description,
        link: defaultLink,
      };

      // Add versions if product has multiple versions
      if (product.versions.length > 1) {
        productInfo.versions = product.versions.map((version) => ({
          version: version.label,
          link: `/${generateRouteBasePath(product.path, version.version)}`,
          isLatest: version.isLatest,
        }));
      }

      return productInfo;
    });

    return {
      title: category.title,
      description: category.description,
      icon: category.icon,
      products: products,
    };
  });
}

/**
 * Generate navbar dropdown items for categories
 */
export function generateNavbarDropdowns() {
  // Map full category names to shortened versions for navbar
  const categoryShortNames = {
    'Identity Management': 'Identity',
    'Privileged Access Management (PAM)': 'PAM',
    'Directory Management': 'Directory',
    'Endpoint Management': 'Endpoint',
    'Data Security Posture Management (DSPM)': 'DSPM',
    'Identity Threat Detection & Response (ITDR)': 'ITDR',
  };

  return PRODUCT_CATEGORIES.filter((category) => category.title !== 'Other') // Exclude 'Other' category from navbar
    .map((category) => {
      const categoryProducts = getProductsByCategory(category.title);

      const items = categoryProducts.map((product) => {
        const defaultVersion = getDefaultVersion(product);
        const link = `/${generateRouteBasePath(product.path, defaultVersion.version)}`;

        return {
          label: product.name,
          to: link,
        };
      });

      // Sort items alphabetically by label
      items.sort((a, b) => a.label.localeCompare(b.label));

      return {
        type: 'dropdown',
        label: categoryShortNames[category.title] || category.title,
        position: 'left',
        items: items,
      };
    });
}
