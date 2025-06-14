# ActiveDirectory Data Collector

The ActiveDirectory Data Collector audits objects published in Active Directory. It has been
preconfigured within the Active Directory Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[Active Directory Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/overview.md)
topic for additional information.

Protocols

- ADSI
- LDAP
- RPC

Ports

- TCP 389/636
- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group

## ActiveDirectory Query Configuration

The ActiveDirectory Data Collector is configured through the Active Directory Data Collector Wizard,
which contains the following wizard pages:

- Welcome
- [ActiveDirectory: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/activedirectory/category.md)
- [ActiveDirectory: Directory Scope](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/activedirectory/directoryscope.md)
- [ActiveDirectory: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/activedirectory/results.md)
- [ActiveDirectory: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/activedirectory/options.md)
- [ActiveDirectory: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/activedirectory/summary.md)

![Active Directory Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
