---
title: "UsersGroups Data Collector"
description: "UsersGroups Data Collector"
sidebar_position: 400
---

# UsersGroups Data Collector

The UsersGroups Data Collector audits user and group accounts for both local and domain, extracting
system policies.

The UsersGroups Data Collector has been preconfigured within the Windows Solution. Both this data
collector and the solution are available with a special Access Analyzer license. See the
[Windows Solution](/docs/accessanalyzer/12.0/solutions/windows/overview.md) topic for additional information.

**Protocols**

- RPC
- SMBV2
- WMI

**Ports**

- TCP 135-139
- Randomly allocated high TCP ports
- 445

**Permissions**

- Member of the Local Administrators group

    - If a less-privileged option is required, you can use a regular domain user that has been added
      to the **Network access: Restrict clients allowed to make remote calls to SAM** Local Security
      Policy

- Member of the Domain Administrators group (if targeting domain controllers)

## UsersGroups Query Configuration

The UsersGroups Data Collector is configured through the Users and Groups Browser wizard, which
contains the following wizard pages:

- Welcome
- [UsersGroups: Results](/docs/accessanalyzer/12.0/admin/datacollector/usersgroups/results/results.md)
- [UsersGroups: Summary](/docs/accessanalyzer/12.0/admin/datacollector/usersgroups/summary.md)

![Users and Groups Browser wizard Welcome page](/images/accessanalyzer/12.0/admin/datacollector/usersgroups/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.
