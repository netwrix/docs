---
title: "Jira Forge FAQs and Basic Troubleshooting"
description: "Jira Forge FAQs and Basic Troubleshooting"
sidebar_position: 4
---

# Jira Forge FAQs and Basic Troubleshooting

This section covers frequently asked questions and basic troubleshooting for Platform Governance's Jira Forge app.

1. The Strongpoint Connect app is already installed. Can you install the Forge app alongside it?
    - **Yes**, you can install the Forge app even though the Connect app is installed. They shouldn't cause any conflicts during installation or while you use either app or both at the same time.

2. What happens to the data in the Netwrix Settings page in Connect app after you install the Forge app?
    - Data in the Netwrix Settings page in Connect app doesn't migrate to the Netwrix NetSuite Settings page in the Forge app. Since these are 2 different implementations/apps, you must manually migrate the Connect app data to the Forge app.

3. Is it normal to see two (2) Netwrix NetSuite tabs in the issues panel when both Connect and Forge apps are installed?
    - **Yes**, it is normal. Two (2) separate apps have separate file descriptors that show separate tabs in the issue panel.

4. Why did all the data in the Netwrix NetSuite Settings page in the Forge app disappear after you updated to a new version?
    - Data in the Netwrix NetSuite Settings page will ONLY disapper if the instance Administrator has UNINSTALLED and RE-INSTALLED the app. This is Atlassian's way of securing data. Every installation starts with no data. However, there are 2 ways to retrieve the data: (1) Raise a ticket to Atlassian support to restore the data in the instance for when the Jira Forge app was installed or updated. (2) Manually re-enter the data.

    - For **MINOR** app updates, these changes are instantly available to the customers. Customers don't need to take any further action.

    - For **MAJOR** app updates, customers automatically receive major version updates via the Universal Plugin Manager (UPM) within 24 hours and must manually approve these updates.

5. Is there impact to existing Connect tickets if you use Forge?
    - **No**. Because Jira Forge pulls the change request information from the NetSuite account it connects to, switching to the Forge app has no impact on existing tickets.

**Back to:** [Jira Forge Walkthrough Example](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_walkthrough)
