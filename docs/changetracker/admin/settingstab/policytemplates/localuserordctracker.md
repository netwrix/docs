---
title: "Policy Templates: Local User/Domain Controller Account Tracker"
description: "Policy Templates: Local User/Domain Controller Account Tracker"
sidebar_position: 100
---

# Policy Templates: Local User/Domain Controller Account Tracker

:::note
This template applies to Windows OS only.
:::


Netwrix Change Tracker can also track changes to **Local User Account Settings**. Organizations
typically limit local user accounts and restrict their usage in favor of centralized identity and
access management authority, such as a Domain Controller. As a result, monitoring local user
accounts is a key security consideration.

:::note
When you use a Netwrix Change Tracker Agent on a Domain Controller, tracking local user accounts
also tracks the **Domain** user accounts. If this isn't required, uncheck the **Track account
information on Domain Controllers** box to limit tracking to built-in accounts only.
:::


To activate the Change Tracker, check the **Track local user account settings in this template**
box, define the poll period, and save the settings to the Template. Change Tracker alerts and
reports any changes to the initial baseline.

![PolicyTemplatesAccountsTracker](/images/changetracker/admin/settings/policytemplates/policytemplatesaccountstracker.webp)
