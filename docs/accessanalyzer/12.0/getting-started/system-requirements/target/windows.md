# Target Windows Server and Desktop Requirements, Permissions, and Ports

The Access Analyzer for Windows Solution is compatible with the following Microsoft Windows versions
as targets:

- Windows 7 and higher
- Windows Server 2016 and later

Server and Desktop Requirements

The following are requirements for the servers and desktops to be scanned:

- WINRM Service installed

Data Collectors

This solution employs the following data collector to scan the target environment:

- [GroupPolicy Data Collector](/docs/accessanalyzer/12.0/data-collection/group-policy/overview.md)
- [PowerShell Data Collector](/docs/accessanalyzer/12.0/data-collection/powershell/overview.md)
- [Registry Data Collector](/docs/accessanalyzer/12.0/data-collection/registry/index.md)
- [Script Data Collector](/docs/accessanalyzer/12.0/data-collection/script/overview.md)
- [Services Data Collector](/docs/accessanalyzer/12.0/data-collection/services/index.md)
- [SMARTLog Data Collector](/docs/accessanalyzer/12.0/data-collection/smart-log/overview.md)
- [SystemInfo Data Collector](/docs/accessanalyzer/12.0/data-collection/system-info/overview.md)
- [TextSearch Data Collector](/docs/accessanalyzer/12.0/data-collection/text-search/overview.md)
- [UsersGroups Data Collector](/docs/accessanalyzer/12.0/data-collection/users-groups/overview.md)
- [WMICollector Data Collector](/docs/accessanalyzer/12.0/data-collection/wmi-collector/overview.md)

## Permissions

- Member of the local Administrators group
- If target host is a domain controller, member of the Domain Administrator group in the target
  domain

## Ports

The following firewall ports are needed:

For GroupPolicy Data Collector

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

For PowerShell Data Collector

- Randomly allocated high TCP ports

For Registry Data Collector

- TCP 135-139
- Randomly allocated high TCP ports

For Script Data Collector

- Randomly allocated high TCP ports

For Services Data Collector

- TCP 135-139
- Randomly allocated high TCP ports

For SMARTLog Data Collector

- TCP 135
- TCP 445
- Randomly allocated high TCP ports

For SystemInfo Data Collector

- TCP 135-139
- Randomly allocated high TCP ports

For TextSearch Data Collector

- TCP 135-139
- Randomly allocated high TCP ports

For UsersGroups Data Collector

- TCP 135-139
- Randomly allocated high TCP ports
- 445

For WMICollector Data Collector

- TCP 135-139
- Randomly allocated high TCP ports
