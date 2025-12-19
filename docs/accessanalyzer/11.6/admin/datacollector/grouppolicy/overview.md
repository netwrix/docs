---
title: "GroupPolicy Data Collector"
description: "GroupPolicy Data Collector"
sidebar_position: 230
---

# GroupPolicy Data Collector

The GroupPolicy Data Collector provides the ability to retrieve the GPO’s list in the domain and
where they are linked, return information on configured policies and policy parts from the
individual policies that have been selected, return information on selected policy parts from all
policies within the domain, and return effective security policies in effect at the individual
workstation.

The GroupPolicy Data Collector is a core component of Enterprise Auditor, but it has been
preconfigured within the Active Directory Solution and the Windows Solution. While the data
collector is available with all Enterprise Auditor license options, the Windows Solution is only
available with a special Enterprise Auditor licenses. See the following topics for additional
information:

- [Active Directory Solution](/docs/accessanalyzer/11.6/solutions/activedirectory/overview.md)
- [Windows Solution](/docs/accessanalyzer/11.6/solutions/windows/overview.md)

**Protocols**

- LDAP
- RPC

**Ports**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**Permissions**

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the Local Administrators group

## GroupPolicy Query Configuration

The GroupPolicy Data Collector is configured through the Group Policy Data Collector Wizard. The
available pages change based upon the query category selected. It contains the following wizard
pages:

- Welcome
- [GroupPolicy: Category](/docs/accessanalyzer/11.6/admin/datacollector/grouppolicy/category.md)
- [GroupPolicy: Target](/docs/accessanalyzer/11.6/admin/datacollector/grouppolicy/target.md)
- [GroupPolicy: Policies List](/docs/accessanalyzer/11.6/admin/datacollector/grouppolicy/policieslist.md)
- [GroupPolicy: Options](/docs/accessanalyzer/11.6/admin/datacollector/grouppolicy/options.md)
- [GroupPolicy: Summary](/docs/accessanalyzer/11.6/admin/datacollector/grouppolicy/summary.md)

![Group Policy Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/grouppolicy/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
