---
title: "Jira Forge FAQs and Basic Troubleshooting"
description: "Jira Forge FAQs and Basic Troubleshooting"
sidebar_position: 4
---

# Jira Forge FAQs and Basic Troubleshooting

This section covers frequently asked questions and basic troubleshooting for Platform Governance's Jira Forge app.

1. The Strongpoint Connect app is already installed. Can the Forge app be installed alongside it?
    - **Yes**, it is fine to install the Forge app even though the Connect app is installed. They shouldn't cause any conflicts during installation or while using either app or both at the same time.

2. What happens to the data in the Netwrix Settings page in Connect app after the Forge app is installed?
    - Data in the Netwrix Settings page in Connect app doesn't get migrated to the Netwrix NetSuite Settings page in the Forge app. Since these are 2 different implementations/apps, the Connect app data must be manually migrated to Forge app.

3. Is it normal to see two (2) Netwrix NetSuite tabs in the issues panel when both Connect and Forge apps are installed?
    - **Yes**, it is normal. Two (2) separate apps have separate file descriptors that show separate tabs in the issue panel.

4. Why did all the data in the Netwrix NetSuite Settings page in the Forge app disappear after updating to a new version?
    - This is Atlassian's way of securing data. Every install or update is a fresh start. However, there are 2 ways to retrieve the data: (1) Raise a ticket to Atlassian support to restore the data in the instance for when the Jira Forge app was installed or updated. (2) Manually re-enter the data.

5. Is there impact to existing Connect tickets if Forge is being used?
    - **No**. Since the change request information is being pulled from the NetSuite account that Jira Forge is connected to, switching to the Forge app has no impact on existing tickets.

**Back to:** [Jira Forge Walkthrough Example](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_walkthrough)
