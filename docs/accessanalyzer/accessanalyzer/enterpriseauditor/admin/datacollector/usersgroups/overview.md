# UsersGroups Data Collector

The UsersGroups Data Collector audits user and group accounts for both local and domain, extracting system policies.

The UsersGroups Data Collector has been preconfigured within the Windows Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Windows Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/overview.md) topic for additional information.

Protocols

- RPC
- SMBV2
- WMI

Ports

- TCP 135-139
- Randomly allocated high TCP ports
- 445

Permissions

- Member of the Local Administrators group

  - If a less-privileged option is required, you can use a regular domain user that has been added to the __Network access: Restrict clients allowed to make remote calls to SAM__ Local Security Policy
- Member of the Domain Administrators group (if targeting domain controllers)

## UsersGroups Query Configuration

The UsersGroups Data Collector is configured through the Users and Groups Browser wizard, which contains the following wizard pages:

- Welcome
- [UsersGroups: Results](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/usersgroups/results.md#UsersGroupsResults)
- [UsersGroups: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/usersgroups/summary.md#UsersGroupsSummary)

![Users and Groups Browser wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the __Do not display this page the next time__ box when the wizard is open and configuration settings are saved.
