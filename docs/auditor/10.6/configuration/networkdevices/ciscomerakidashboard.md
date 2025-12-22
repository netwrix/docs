---
title: "Cisco Meraki Dashboard"
description: "Cisco Meraki Dashboard"
sidebar_position: 40
---

# Cisco Meraki Dashboard

Before creating a monitoring plan to audit your Cisco Meraki devices, plan for the account that will
be used for data collection. See the
[Data Collecting Account](/docs/auditor/10.6/admin/monitoringplans/dataaccounts.md)
topic for additional information. You will provide this account in the monitoring plan wizard.

Changes that are collected with the basic authorization:

- Add/Modify/Remove User
- Configuration
- Successful logon
- Failed logon

Changes that are collected with the API:

- Add/Modify/Remove User
- Configuration

## Configure Cisco Meraki Dashboard Account

Before you start creating a monitoring plan to audit your Cisco Meraki devices, plan for the data
collection should meet the requirements listed below. Then you will provide this account in the
item.

For Basic Authorization

Since accounts with multi-factor authentication are not supported, you need to create a special
cloud account with read-only permissions and disabled multi-factor authentication.

Follow the steps to configure Cisco Meraki Dashboard item.

**Step 1 –** Sign in to the
[Cisco Meraki Dashboard](https://account.meraki.com/secure/login/dashboard_login).

**Step 2 –** Create a dashboard account as described in the following Cisco Meraki article:
[Getting Started](https://documentation.meraki.com/Getting_Started)

**Step 3 –** Make sure that the read-only permissions assigned to the account. For more information
about Meraki permissions, refer to the following Cisco Meraki article:
[Managing Dashboard Administrators and Permissions](https://documentation.meraki.com/zGeneral_Administration/Managing_Dashboard_Access/Managing_Dashboard_Administrators_and_Permissions).

**Step 4 –** Log in to this account and navigate to **My Profile** at the top of the dashboard.

**Step 5 –** Find the section labeled SMS authentication.

**Step 6 –** Make sure that the SMS authentication parameter is set to **OFF**. For more information
about authentication, refer to the following Cisco Meraki article:
[Two-Factor Authentication](https://documentation.meraki.com/zGeneral_Administration/Other_Topics/Two-Factor_Authentication).

**NOTE:** This account is for Netwrix Auditor purposes. Do not forget to switch back to your
account.

To Collect Data via API Key

To work with multi-factor authentication (MFA) accounts, you need to generate an API key during
authorization.

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

**NOTE:** Logons are not collected on the board due to technical limitations from the Meraki API.
