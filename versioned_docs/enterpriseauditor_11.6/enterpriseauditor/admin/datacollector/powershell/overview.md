# PowerShell Data Collector

The PowerShell Data Collector provides PowerShell script exit from Enterprise Auditor. It has
configuration options for creating and configuring a PowerShell query. This data collector is a core
component of Enterprise Auditor and is available with all Enterprise Auditor licenses.

Protocols

- PowerShell

Ports

- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the Local Administrators group

## PowerShell Query Configuration

The PowerShell Data Collector is configured through the PowerShell Data Collector Wizard, which
contains the following pages:

- Welcome
- [PowerShell: Edit Query](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/powershell/editquery.md)
- [PowerShell: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/powershell/options.md)
- [PowerShell: Sample Server](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/powershell/sampleserver.md)
- [PowerShell: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/powershell/results.md)
- [PowerShell: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/powershell/summary.md)

![PowerShell Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.
