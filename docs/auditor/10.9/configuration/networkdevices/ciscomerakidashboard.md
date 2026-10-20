---
title: "Cisco Meraki Dashboard"
description: "Cisco Meraki Dashboard"
sidebar_position: 40
---

# Cisco Meraki Dashboard

Before creating a monitoring plan to audit your Cisco Meraki devices, plan for the account that you'll
use for data collection. See the
[Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional
information. You will provide this account in the monitoring plan wizard.

The API collects the following changes:

- Add/Modify/Remove User
- Configuration

## Configure Cisco Meraki Dashboard Account

Before you start creating a monitoring plan to audit your Cisco Meraki devices, plan for the account
you'll use for data collection. Then provide this account in the monitoring plan wizard.

To use the Meraki Dashboard API, you need to generate an API key during authorization.

To create an API key for the Meraki Dashboard API:

1. Log in to your Cisco Meraki Dashboard account.
2. Click your username in the top-right corner of the dashboard to open the dropdown menu.
3. Select **My profile**.
4. In the **My profile** page, scroll down to the **API access** section.
5. Click the **Generate new API key** button. You may be prompted to enter your account
   password for security verification.

Once generated, the API key appears on the screen. Ensure you copy and save the API key
in a secure location, as it won't appear again for security reasons.

:::note
Logons aren't collected due to technical limitations of the Meraki API.
:::
