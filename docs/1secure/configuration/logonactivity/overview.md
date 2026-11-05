---
title: "Configure Infrastructure for Monitoring Logon Activity"
description: "Configure Infrastructure for Monitoring Logon Activity"
sidebar_position: 30
---

# Configure Infrastructure for Monitoring Logon Activity

You can configure your IT infrastructure for monitoring Logon Activity in one of the following ways:

- When connecting Active Directory in the connect wizard, select **Let 1Secure manage audit policy**. For
  existing organization, you can modify data collection settings for the Active Directory Logons connector. On that connector, **Enable traffic network compression** and **Adjust audit settings automatically** are on by default in the edit form.
- To configure your domain manually for monitoring Logon Activity, perform the following procedures:
    - [Configure Basic Domain Audit Policies](/docs/1secure/configuration/logonactivity/basicauditpolicies.md) or
      [Configure Advanced Audit Policies](/docs/1secure/configuration/logonactivity/advancedaudit.md)
    - [Configure Security Event Log Size and Retention Settings](/docs/1secure/configuration/logonactivity/securitylogsize.md)
    - [Configure Windows Firewall Inbound Connection Rules](/docs/1secure/configuration/logonactivity/firewallrules.md)
