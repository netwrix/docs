---
title: "Logon Activity Auditing"
description: "Logon Activity Auditing"
sidebar_position: 70
---

# Logon Activity Auditing

Before adding the logon activity connector in your domain, identify the domain account to use for
data collection. The account must meet the following requirements. Provide this account in the Netwrix
1Secure configuration window.

The requirements depend on the network traffic compression setting:

- If network traffic compression is enabled, the account must belong to the Domain Admins group.
- If network traffic compression is disabled, you can use either a Domain Admins account or a
  non-administrative account. See
  [Configure Non-Administrative Account to Collect Logon Activity](/docs/1secure/admin/datacollection/logonactivity/nonadminaccount/nondomainadmin.md)
  for steps to configure a non-administrative account.
