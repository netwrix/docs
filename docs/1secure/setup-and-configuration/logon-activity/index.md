---
title: "Logon Activity Auditing In Netwrix 1Secure"
sidebar_label: "Logon Activity Auditing"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Logon Activity Auditing

Before you start adding the logon activity connector in your domain, plan for the domain account
that will be used for data collection – it should meet the requirements listed below. Then you will
provide this account in the Netwrix 1Secure configuration window.

Depending on the network traffic compression setting you need to use, one of the following is
required:

- If network traffic compression is enabled, then the account must belong to the Domain Admins
  group;
- If network traffic compression is disabled, then you can choose between account which belongs to
  the Domain Admins group or non-administrative account. See
  [Configure Non-Administrative Account to Collect Logon Activity ](/docs/1secure/setup-and-configuration/logon-activity/non-domain-admin.md)for more
  information;

# Configure Infrastructure for Monitoring Logon Activity

You can configure your IT infrastructure for monitoring Logon Activity in one of the following ways:

- When creating an organization — select the **Adjust audit settings automatically** option. For
  existing organization, you can modify data collection settings for Logon Activity data source.
- To configure your domain manually for monitoring Logon Activity, perform the following procedures:
  - [Configure Basic Domain Audit Policies](/docs/1secure/setup-and-configuration/logon-activity/audit-configuration.md) or
    [Configure Advanced Audit Policies](/docs/1secure/setup-and-configuration/logon-activity/audit-configuration.md)
  - [Configure Security Event Log Size and Retention Settings](/docs/1secure/setup-and-configuration/logon-activity/audit-configuration.md)
  - [Configure Windows Firewall Inbound Connection Rules](/docs/1secure/setup-and-configuration/logon-activity/audit-configuration.md)
