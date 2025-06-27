/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  pingcastle33: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'doc',
      id: 'basicuser',
      label: 'PingCastle Standard',
    },
    {
      type: 'category',
      label: 'PingCastle Pro',
      items: [
        {
          type: 'doc',
          id: 'prouser',
          label: 'User Manual',
        },
        {
          type: 'doc',
          id: 'proinstall',
          label: 'Installation and Configuration',
        },
        {
          type: 'doc',
          id: 'proupgrade',
          label: 'Upgrade',
        },
      ],
    },
    {
      type: 'category',
      label: 'PingCastle Enterprise',
      items: [
        {
          type: 'doc',
          id: 'enterpriseuser',
          label: 'User Manual',
        },
        {
          type: 'doc',
          id: 'enterpriseinstall',
          label: 'Installation and Configuration',
        },
        {
          type: 'doc',
          id: 'enterpriseupgrade',
          label: 'Upgrade',
        },
      ],
    },
  ],
};
