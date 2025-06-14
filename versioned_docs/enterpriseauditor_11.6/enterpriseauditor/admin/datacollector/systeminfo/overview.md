# SystemInfo Data Collector

The SystemInfo Data Collector extracts information from the target system based on the selected
category. The SystemInfo Data Collector is a core component of Enterprise Auditor, but it has been
preconfigured within the Windows Solution. While the data collector is available with all Enterprise
Auditor license options, the Windows Solution is only available with a special Enterprise Auditor
license. See the
[Windows Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/overview.md)
topic for additional information.

Protocols

- Remote Registry
- RPC
- WMI

Ports

- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the Local Administrators group

## SystemInfo Query Configuration

The SystemInfo Data Collector is configured through the System Info Data Collector Wizard, which
contains the following wizard pages:

- Welcome
- [SystemInfo: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/category.md)
- [SystemInfo: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/results.md)
- [SystemInfo: Shares List](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/shareslist.md)
- [SystemInfo: Probable Owner](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/probableowner.md)
- [SystemInfo: VIP Membership](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/vipmembership.md)
- [SystemInfo: File Types](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/filetypes.md)
- [SystemInfo: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/options.md)
- [SystemInfo: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/systeminfo/summary.md)

![System Info Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
