---
title: "Sandbox Accounts"
description: "Sandbox Accounts"
sidebar_position: 100
---

# Sandbox Accounts

Salesforce sandbox accounts are set up for testing. Platform Governance for Salesforce optimizes data storage in these accounts to make the most of their limited capacity and does not create default documentation. See the
[Salesforce documentation](https://help.salesforce.com/articleView?id=data_sandbox_environments.htmandtype=5)
for specifications and feature comparisons of sandbox types.

When a sandbox is identified, Platform Governance for Salesforce limits excessive data storage by
not creating the following items:

- Customizations for reports not used in more than a year.
- Platform Governance for Salesforce does not automatically create change logs for Developer or Developer Pro sandboxes, but change
  detection, last modified date, and environment compare are available.
- Platform Governance for Salesforce does not create Report and Workflow joins for Developer or Developer Pro sandboxes. These are
  enabled for Partial and Full sandboxes, but can be disabled to save space.
- Platform Governance for Salesforce does not create separate XML representation files.
- Platform Governance for Salesforce does not create separate JSON representation files.

If you need to see the Customizations for an object, open the Scanner, select the object, and click
**Run Scanner**.

## Controlling Sandbox Change Log, Junction, and Report Creation

You can enable/disable change log, junction, and report creation for a sandbox from the
**Configuration and Stats** page.

From the Netwrix Dashboard: click **Configuration and Stats** in the **Resources** section, or open
**Settings** > **Configuration and Stats**.

![Enabling/Disabling Change Log Creation for Sandboxes](/images/platgovsalesforce/installing_strongpoint/config_stats_enable_change_log.webp)

The initial setting is selected on the [Scanner](/docs/platgovsalesforce/installingstrongpoint/setting_up_initial_scan.md) page of the **Install
Wizard** when installing the sandbox.
