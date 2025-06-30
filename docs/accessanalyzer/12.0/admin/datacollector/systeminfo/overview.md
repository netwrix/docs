# SystemInfo Data Collector

The SystemInfo Data Collector extracts information from the target system based on the selected
category. The SystemInfo Data Collector is a core component of Access Analyzer, but it has been
preconfigured within the Windows Solution. While the data collector is available with all Access
Analyzer license options, the Windows Solution is only available with a special Access Analyzer
license. See the [Windows Solution](/docs/accessanalyzer/12.0/solutions/windows/overview.md) topic for additional
information.

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
- [SystemInfo: Category](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/category.md)
- [SystemInfo: Results](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/results.md)
- [SystemInfo: Shares List](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/shareslist.md)
- [SystemInfo: Probable Owner](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/probableowner.md)
- [SystemInfo: VIP Membership](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/vipmembership.md)
- [SystemInfo: File Types](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/filetypes.md)
- [SystemInfo: Options](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/options.md)
- [SystemInfo: Summary](/docs/accessanalyzer/12.0/admin/datacollector/systeminfo/summary.md)

![System Info Data Collector Wizard Welcome page](/img/product_docs/accessanalyzer/12.0/admin/datacollector/systeminfo/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
