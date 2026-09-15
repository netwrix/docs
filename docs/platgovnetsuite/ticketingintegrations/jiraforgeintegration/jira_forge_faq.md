---
title: "Jira Forge FAQs and Basic Troubleshooting"
description: "Jira Forge FAQs and Basic Troubleshooting"
sidebar_position: 4
---

# Jira Forge FAQs and Basic Troubleshooting

This section covers frequently asked questions and basic troubleshooting for Platform Governance's Jira Forge app.

1. You already have the Strongpoint Connect app installed. Can you install the Forge app alongside it?
    - **Yes**, you can install the Forge app alongside the Connect app. They shouldn't cause any conflicts during installation or while you use either app or both at the same time.

2. What happens to the data in the Netwrix Settings page in the Connect app after you install the Forge app?
    - Data in the Netwrix Settings page in the Connect app doesn't migrate to the Netwrix NetSuite Settings page in the Forge app. Because the Connect app and the Forge app are two separate apps, you must migrate the Connect app data manually.

3. Is it normal to see two Netwrix NetSuite tabs in the issue panel when you have both the Connect and Forge apps installed?
    - **Yes**, it is normal. The two apps have separate file descriptors, so each app shows its own tab in the issue panel.

4. Why did all the data in the Netwrix NetSuite Settings page in the Forge app disappear after you updated to a new version?
    - Updating the app doesn't clear this data. Data in the Netwrix NetSuite Settings page disappears **only** if the instance administrator uninstalls and re-installs the app, because Atlassian treats every install as a fresh start with no data. If the data is already gone, you have two ways to retrieve it:
        - Raise a ticket with Atlassian support to restore the data in the instance from before the re-install.
        - Re-enter the data manually.

5. How do major and minor updates to the Forge app differ?
    - Netwrix releases a **major** update when the app's permission scopes change, when the app's licensing changes from free to paid, or both. Netwrix increments the first number in the app's version — for example, from 1.2.0 to 2.0.0. You receive major updates through the Universal Plugin Manager within 24 hours and must approve them manually.
    - Netwrix releases a **minor** update for any change that doesn't affect permission scopes or licensing. Netwrix increments the second number in the app's version — for example, from 1.2.0 to 1.3.0. Minor updates reach you immediately and require no action.
    - Neither type of update clears the data in the Netwrix NetSuite Settings page.

6. Is there impact to existing Connect tickets if you use Forge?
    - **No**. Because Jira Forge pulls the change request information from the NetSuite account it connects to, switching to the Forge app has no impact on existing tickets.

**Back to:** [Jira Forge Walkthrough Example](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_walkthrough)
