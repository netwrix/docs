---
title: "Jira Forge FAQs and Basic Troubleshooting"
description: "Jira Forge FAQs and Basic Troubleshooting"
sidebar_position: 4
---

# Jira Forge FAQs and Basic Troubleshooting

This section covers frequently asked questions and basic troubleshooting for the Platform Governance for NetSuite Jira Forge app.

## Can you install the Forge app alongside the Strongpoint Connect app?

**Yes.** You can install the Forge app on an instance that already runs the Connect app. The two apps shouldn't cause any conflicts during installation, and you can use either app or both at the same time.

## What happens to the data on the Netwrix Settings page in the Connect app after you install the Forge app?

The data stays in the Connect app. Because the Connect app and the Forge app are two separate apps, data on the Netwrix Settings page in the Connect app doesn't migrate to the Netwrix NetSuite Settings page in the Forge app. You must migrate the Connect app data manually.

## Is it normal to see two Netwrix NetSuite tabs in the issue panel?

**Yes.** When you install both the Connect app and the Forge app, the two apps have separate file descriptors, so each app shows its own tab in the issue panel.

## Why did the data on the Netwrix NetSuite Settings page in the Forge app disappear after an update?

Updating the app doesn't clear this data. Data on the Netwrix NetSuite Settings page disappears **only** if the instance administrator uninstalls and re-installs the app, because Atlassian treats every install as a fresh start with no data.

If the data is already gone, you have two ways to retrieve it:

- Raise a ticket with Atlassian support to restore the data in the instance from before the re-install.
- Re-enter the data manually.

## How do major and minor updates to the Forge app differ?

The version number tells you whether an update needs your approval:

- **Major updates** — Netwrix releases a major update when the app's permission scopes change, when the app's licensing changes from free to paid, or both. Netwrix increments the first number in the app's version — for example, from 1.2.0 to 2.0.0. You receive major updates through the Universal Plugin Manager within 24 hours and must approve them manually.
- **Minor updates** — Netwrix releases a minor update for any change that doesn't affect permission scopes or licensing. Netwrix increments the second number in the app's version — for example, from 1.2.0 to 1.3.0. Minor updates reach you immediately and require no action.

Neither type of update clears the data on the Netwrix NetSuite Settings page.

## Does using the Forge app affect existing Connect tickets?

**No.** Because Jira Forge pulls the change request information from the NetSuite account it connects to, switching to the Forge app has no impact on existing tickets.

**Back to:** [Jira Forge Walkthrough Example](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_walkthrough)
