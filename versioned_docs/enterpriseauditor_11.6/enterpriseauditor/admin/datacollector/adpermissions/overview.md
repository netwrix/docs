# ADPermissions Data Collector

The ADPermissions Data Collector collects the advanced security permissions of objects in AD. It is
preconfigured within the Active Directory Permissions Analyzer Solution. Both this data collector
and the solution are available with a special Enterprise Auditor license. See the
[Active Directory Permissions Analyzer Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/overview.md)
topic for additional information.

Protocols

- ADSI
- LDAP
- RPC

Ports

- TCP 389
- TCP 135 – 139
- Randomly allocated high TCP ports

Permissions

- LDAP Read permissions
- Read on all AD objects
- Read permissions on all AD Objects

## ADPermissions Query Configuration

The ADPermissions Data Collector is configured through the Active Directory Permissions Data
Collector Wizard. The wizard contains the following pages, which change based upon the query
category selected:

- [ADPermissions: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/category.md)
- [ADPermissions: Scope](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/scope.md)
- [ADPermissions: Custom Filter](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/customfilter.md)
- [ADPermissions: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/options.md)
- [ADPermissions: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/results.md)
- [ADPermissions: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adpermissions/summary.md)
