---
title: "Jira Forge FAQs and Basic Troubleshooting"
description: "Jira Forge FAQs and Basic Troubleshooting"
sidebar_position: 10
---

# Jira Forge FAQs and Basic Troubleshooting

This section will discuss frequently asked questions and basic troubleshooting for Platform Governance's Jira Forge app.

1. I already have Strongpoint Connect app installed in my instance. Is it okay to install the Forge app as well?
    - **Yes**, it is perfectly okay to install the Forge app even though you currently have the Connect app. They should not cause any conflicts during installation and during using either one of them or both of them at the same time.

2. What will happen to the data in Netwrix Settings page in Connect app once I have installed the Forge app?
    - Data in the Netwrix Settings page in Connect app does not get migrated to the Netwrix Netsuite Settings page in the Forge app. Since these are 2 different implementation/apps, you will have to manually migrate the Connect app data to Forge app.

3. Is it normal that I see two(2), Netwrix Netsuite tabs in my issues panel if my instance has both Connect and Forge apps?
    - **Yes**, it is normal. Two(2) separate and different apps would mean that they have separate file descriptors that shows separate tabs in the issue panel.

4. Why did all my data in Netwrix Netsuite Settings page in Forge app disappear when I updated to a new version?
    - This is Atlassian's way of securing your data, every install or update is a fresh start. However, there are 2 ways to retrieve your data: (1) You will have to raise a ticket to Atlassian support to restore the data in your instance when the Jira Forge app was installed or updated. (2) You can manually input them back yourself.

5. Is there impact to existing connect tickets if forge is being used?
    - **No**. Since the change request information is being pulled from the Netsuite account that Jira Forge is currently connected to, there should be no impact when switching to the Forge app.

**Back To:** [ Jira Forge Walkthrough Example](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_walkthrough)
