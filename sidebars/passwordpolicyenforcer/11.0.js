// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  passwordPolicyEnforcer110Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Password Policy Enforcer 11.0',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/whats-new',
        'getting-started/requirements',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/server-installation',
        'installation/client-installation',
        'installation/group-policy-installation',
        'installation/web-interface-installation',
        'installation/mailer-service-installation',
        'installation/upgrading',
        'installation/uninstalling',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'configuration/configuration-console',
        'configuration/domain-and-local-policies',
        'configuration/managing-policies',
        'configuration/policy-properties',
        'configuration/users-and-groups',
        'configuration/messages-and-notifications',
        'configuration/password-client-configuration',
        'configuration/system-audit',
      ],
    },
    {
      type: 'category',
      label: 'Password Rules',
      collapsed: true,
      items: [
        'password-rules/overview',
        'password-rules/length-and-age-rules',
        'password-rules/character-requirements',
        'password-rules/complexity-rules',
        'password-rules/dictionary-rules',
        'password-rules/compromised-passwords',
        'password-rules/history-and-similarity',
        'password-rules/patterns-and-repetition',
        'password-rules/passphrases',
        'password-rules/windows-rules-integration',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/overview',
        {
          type: 'category',
          label: 'Command Line Tools',
          items: [
            'administration/command-line-tools/overview',
            'administration/command-line-tools/connection-commands',
            'administration/command-line-tools/policy-management-commands',
            'administration/command-line-tools/testing-commands',
            'administration/command-line-tools/export-import-commands',
            'administration/command-line-tools/system-commands',
          ],
        },
        {
          type: 'category',
          label: 'PowerShell Cmdlets',
          items: ['administration/powershell-cmdlets/overview'],
        },
        {
          type: 'category',
          label: 'Compromised Password Management',
          items: [
            'administration/compromised-password-management/overview',
            'administration/compromised-password-management/hibp-updater',
            'administration/compromised-password-management/password-checker',
          ],
        },
        'administration/testing-and-validation',
        'administration/writeback-configuration',
        'administration/event-viewer-integration',
      ],
    },
    {
      type: 'category',
      label: 'Web Interface',
      collapsed: true,
      items: [
        'web-interface/overview',
        'web-interface/configuration',
        'web-interface/using-the-web-interface',
        'web-interface/security-settings',
        'web-interface/customizing-templates',
        'web-interface/license-agreement',
      ],
    },
    {
      type: 'category',
      label: 'Password Reset',
      collapsed: true,
      items: [
        'password-reset/overview',
        'password-reset/installation',
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'password-reset/configuration/general-settings',
            'password-reset/configuration/enrollment-settings',
            'password-reset/configuration/email-configuration',
            'password-reset/configuration/security-settings',
            'password-reset/configuration/verification-settings',
            'password-reset/configuration/permissions',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          items: [
            'password-reset/administration/data-console',
            'password-reset/administration/database-management',
            'password-reset/administration/user-enrollment',
            'password-reset/administration/filtering-data',
          ],
        },
        'password-reset/using-password-reset',
        'password-reset/customizing-templates',
      ],
    },
    {
      type: 'category',
      label: 'Evaluation Guide',
      collapsed: true,
      items: [
        'evaluation-guide/overview',
        'evaluation-guide/preparing-environment',
        'evaluation-guide/installation-for-evaluation',
        'evaluation-guide/creating-test-policies',
        'evaluation-guide/configuring-rules',
        'evaluation-guide/testing-policies',
        'evaluation-guide/enforcing-multiple-policies',
        'evaluation-guide/policy-templates',
        'evaluation-guide/improving-policies',
        'evaluation-guide/evaluation-conclusion',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: ['troubleshooting/common-issues'],
    },
  ],
};

export default sidebars;
