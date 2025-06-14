# ADActivity Data Collector

The ADActivity Data Collector integrates with the Netwrix Activity Monitor by reading the Active
Directory activity log files. It has been preconfigured within the Active Directory Solution. Both
this data collector and the solution are available with a special Enterprise Auditor license. See
the
[Active Directory Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/overview.md)
topic for additional information.

Protocols

- HTTP
- RPC

Ports

- TCP 4494 (configurable within the Netwrix Activity Monitor)

Permissions

- Netwrix Activity Monitor API Access activity data
- Netwrix Activity Monitor API Read
- Read access to the Netwrix Activity Monitor Log Archive location

## ADActivity Query Configuration

The ADActivity Data Collector is configured through the Active Directory Activity DC wizard, which
contains the following wizard pages, which change based up on the query category selected:

- [ADActivity: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adactivity/category.md)
- [ADActivity: SAM Connection](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adactivity/connection.md)
- [ADActivity: Share](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adactivity/share.md)
- [ADActivity: Scope](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adactivity/scope.md)
- [ADActivity: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adactivity/results.md)
- [ADActivity: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adactivity/summary.md)
