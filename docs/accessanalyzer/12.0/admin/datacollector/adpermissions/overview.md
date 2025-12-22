---
title: "ADPermissions Data Collector"
description: "ADPermissions Data Collector"
sidebar_position: 50
---

# ADPermissions Data Collector

The ADPermissions Data Collector collects the advanced security permissions of objects in AD. It is
preconfigured within the Active Directory Permissions Analyzer Solution. Both this data collector
and the solution are available with a special Access Analyzer license. See the
[Active Directory Permissions Analyzer Solution](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/overview.md)
topic for additional information.

**Protocols**

- ADSI
- LDAP
- RPC

**Ports**

- TCP 389
- TCP 135 – 139
- Randomly allocated high TCP ports

**Permissions**

- LDAP Read permissions
- Read on all AD objects
- Read permissions on all AD Objects

## ADPermissions Query Configuration

The ADPermissions Data Collector is configured through the Active Directory Permissions Data
Collector Wizard. The wizard contains the following pages, which change based upon the query
category selected:

- [ADPermissions: Category](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/category.md)
- [ADPermissions: Scope](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/scope.md)
- [ADPermissions: Custom Filter](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/customfilter.md)
- [ADPermissions: Options](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/options.md)
- [ADPermissions: Results](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/results.md)
- [ADPermissions: Summary](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/summary.md)
