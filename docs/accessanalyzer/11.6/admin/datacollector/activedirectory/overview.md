# ActiveDirectory Data Collector

The ActiveDirectory Data Collector audits objects published in Active Directory. It has been
preconfigured within the Active Directory Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[Active Directory Solution](/docs/accessanalyzer/11.6/solutions/activedirectory/overview.md)
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
- [ActiveDirectory: Category](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/category.md)
- [ActiveDirectory: Directory Scope](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/directoryscope.md)
- [ActiveDirectory: Results](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/results.md)
- [ActiveDirectory: Options](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/options.md)
- [ActiveDirectory: Summary](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/summary.md)

![Active Directory Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
