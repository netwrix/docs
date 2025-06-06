# Target Box Requirements, Permissions, and Ports

The Access Analyzer for Box scans:

- Box for Business

Box Requirements

The following are requirements from the target environment:

- Enterprise\_ID of the target Box environment

Data Collectors

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/adinventory/overview.md)
- [Box Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/overview.md)

## Permissions

For .Active Directory Inventory Prerequisite

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

  __NOTE:__ See the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx) article and the Microsoft [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for additional information.

For Box Data Collection

Box scans require the Enterprise Admin or Co-Admin account credentials to generate an authorization code. The following can be used as a least privilege model:

- Enterprise Admin account
- Co-Admin account with the permission to __Run new reports and access existing reports__ enabled

  - See the Box [Co-Admin Permissions Required to Run Reports](https://support.box.com/hc/en-us/articles/15518640907283-Co-Admin-Permissions-Required-to-Run-Reports) article for details on enabling this permission

__NOTE:__ Scans run with Co-Admin account credentials will complete. However, the data returned from the scan might not include content owned by the Enterprise Admin account.

See the [Recommended Configurations for the Box Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/recommended.md) topic for additional information.

## Ports

The following firewall ports are needed:

For ADInventory Data Collector

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

For Box Data Collector

- TCP 80
- TCP 443
