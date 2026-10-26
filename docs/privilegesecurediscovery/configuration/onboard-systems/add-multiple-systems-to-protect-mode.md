---
title: "Add multiple systems to protect mode"
description: "Use Bulk Actions or the Quickstart reporting tool to move many systems to protect mode."
sidebar_position: 50
---

Adding systems to protect mode one at a time is slow. After you understand how just-in-time access (JITA) works on a test system, use one of the following methods to move many systems at once.

## Use Bulk Actions

Bulk Actions apply one change to the systems that you select on the **Systems** screen. For the full list of actions, how to select systems by filter or by file, and the limits, see [Run bulk actions on systems](../../admin/systems/bulk-actions.md).

To set the protect mode of many systems:

1. Select **Management** > **Systems**.
1. Select the systems. You can select up to 1,000 systems at a time. Use the views and filters to find them, for example by domain or organizational unit (OU).
1. Select **Bulk Actions**.
1. Select **Select Action** > **Protect Policy**.
1. Set **Protect Mode**, and then select **Save**.

   ![The Change Protect Policy bulk action with Protect Mode set to Disabled](/images/privilegesecurediscovery/onboard-systems/onboard-bulk-protect-policy.webp)

1. Select **Execute Bulk Action**.

The product opens **Monitor** > **Jobs**, where you can follow the status of the action.

## Use the Quickstart reporting tool

The Quickstart reporting tool exports the scanned systems to an Excel file. You review the file, set the protect mode and persistence values, and upload the file to apply the configuration to many systems in one run. For installation and usage, see [Bulk onboarding and reporting](../bulk-onboarding/bulk-onboarding-and-reporting.md).

To roll out protect mode one group at a time, see [Freeze mode](./freeze-mode.md).
