# ADActivity Data Collector

The ADActivity Data Collector integrates with the Netwrix Activity Monitor by reading the Active
Directory activity log files. It has been preconfigured within the Active Directory Solution. Both
this data collector and the solution are available with a special Access Analyzer license. See the
[Active Directory Solution](../../../solutions/activedirectory/overview.md) topic for additional
information.

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

- [ADActivity: Category](category.md)
- [ADActivity: SAM Connection](connection.md)
- [ADActivity: Share](share.md)
- [ADActivity: Scope](scope.md)
- [ADActivity: Results](results.md)
- [ADActivity: Summary](summary.md)
