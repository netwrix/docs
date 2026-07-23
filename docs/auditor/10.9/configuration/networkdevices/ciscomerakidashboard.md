---
title: "Cisco Meraki Dashboard"
description: "Cisco Meraki Dashboard"
sidebar_position: 40
---

# Cisco Meraki Dashboard

Before creating a monitoring plan to audit your Cisco Meraki devices, plan for the account that will
be used for data collection. See the
[Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional
information. You will provide this account in the monitoring plan wizard.

Changes that are collected with the API:

- Add/Modify/Remove User
- Configuration

## Configure Cisco Meraki Dashboard Account

Before you start creating a monitoring plan to audit your Cisco Meraki devices, plan for the data
collection should meet the requirements listed below. Then you will provide this account in the
item.

To use the Meraki Dashboard API, you need to generate an API key during authorization.

Follow the steps to create an API key for the Meraki Dashboard API.

**Step 1 –** Log in to your Cisco Meraki Dashboard account.

**Step 2 –** Click on your username in the top-right corner of the dashboard to open the drop-down
menu.

**Step 3 –** Select **My profile**.

**Step 4 –** In the **My profile** page, scroll down to the **API access** section.

**Step 5 –** Click on the **Generate new API key** button. You may be prompted to enter your account
password for security verification.

Once generated, the API key will be displayed on the screen. Make sure to copy and save the API key
in a secure location, as it won't be displayed again for security reasons.

:::note
Logons are not collected due to technical limitations of the Meraki API.
:::
