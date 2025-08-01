---
title: "How Risk Levels Are Estimated"
description: "How Risk Levels Are Estimated"
sidebar_position: 20
---

# How Risk Levels Are Estimated

As mentioned, dashboard and built-in reports give you a bird's eye view of the following high-risk
areas:

- User and computer accounts
- Permissions
- Data
- Infrastructure

Within each area, Netwrix Auditor industry experts identified risk categories and suggested
guidelines for them. For example, if the number of administrative accounts in your organization is
less than 2%, the risk should be considered insufficient. If the value is between 2% and 3%, the
risk is moderate, while any value that exceeds 3% should be considered a high risk. These guidelines
are based on security best practices and analytical data.

The product compares your environment configuration against these metrics and assigns a risk level
to each category. The risk levels in each category determine the overall risk level for the area you
review. The following risk levels are used:

| Risk level | Color  | Comments                                                                     |
| ---------- | ------ | ---------------------------------------------------------------------------- |
| Low        | Green  | Keep monitoring your environment on a regular basic.                         |
| Medium     | Yellow | Proactively mitigate risks and adjust your workflows before a breach occurs. |
| High       | Red    | Respond to the threat as soon as possible.                                   |

Calculation formulas for each metric are provided in the table below.

The following signs are used to define risk level intervals and threshold values:

- > —More than, exclusive
- ≥ —This value or more, inclusive
- = —Equals
- < —Less than, exclusive
- ≤ —This value or less, inclusive
- [ ] —Inclusive interval
- ( ) —Exclusive interval
- [ ) or ( ] —Half-closed interval, where 1 value is inclusive and the other is exclusive or vice
  versa.

| Risk                                                                    | Assessment formula                                                                                                                                                         | Default risk level thresholds                     |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Users and computers                                                     |                                                                                                                                                                            |                                                   |
| User accounts with "Password never expires"                             | Number of enabled user accounts with Password never expires property set                                                                                                   | - 0 — Low - [1 – 5] — Medium - > 5 — High         |
| User accounts with "Password not required"                              | Number of enabled user accounts with Password not required property set Interdomain trust accounts are excluded from total count.                                          | - 0 — Low - [1 – 2] — Medium - > 2 — High         |
| Disabled computer accounts                                              | Number of disabled computer accounts / Overall number of computer accounts (%)                                                                                             | - ≤ 1% — Low - (1% – 3%) — Medium - ≥ 3% — High   |
| Inactive user accounts                                                  | Number of inactive but enabled users / Overall number of enabled user accounts (%)                                                                                         | - 0% — Low - (0% – 1%) — Medium - ≥ 1% — High     |
| Inactive computer accounts                                              | Number of inactive but enabled computer accounts / Overall number of enabled computer accounts (%)                                                                         | - 0% — Low - (0% – 3%) — Medium - ≥ 3% — High     |
| Servers with Guest account enabled\*                                    | Number of servers with enabled Guest account / Overall number of servers (%)                                                                                               | - 0%— Low - (0% - 1%] — Medium - >1% — High       |
| Servers that have local user accounts with "Password never expires"\*   | Servers that have local user accounts with Password never expires / Overall number of servers (%)                                                                          | - 0% — Low - >0% — High                           |
| Permissions                                                             |                                                                                                                                                                            |                                                   |
| User accounts with administrative permissions                           | Number of administrative accounts / Overall number of accounts (%)                                                                                                         | - ≤ 2%— Low - (2% – 3%) — Medium - ≥ 3% — High    |
| Administrative groups                                                   | Number of administrative groups / Overall number of groups (%)                                                                                                             | - ≤ 2% — Low - (2% – 3%) — Medium - ≥ 3% — High   |
| Administrative group membership sprawl\*                                | Number of Windows servers whose Local Administrators Group members differ from those specified in the whitelist / Overall number of servers (%)                            | - 0% — Low - >0% — High                           |
| Empty security groups                                                   | Number of security groups without members / Overall number of security groups (%)                                                                                          | - ≤ 1% — Low - (1% – 2%) — Medium - ≥ 2% — High   |
| Site collections with the "Get a link" feature enabled                  | Number of site collections with the Get a link feature enabled / Total number of site collections (%)                                                                      | - ≤30% — Low - (30% - 60%) — Medium - ≥60% — High |
| Sites with the "Anonymous access" feature enabled                       | Number of sites with the Anonymous access feature enabled / Total number of sites (%)                                                                                      | - ≤30% — Low - (30% - 60%) — Medium - ≥60% — High |
| Site collections with broken inheritance                                | Number of site collections with broken inheritance / Total number of site collections (%)                                                                                  | - ≤30% — Low - (30% - 60%) — Medium - ≥60% — High |
| Data                                                                    |                                                                                                                                                                            |                                                   |
| Files and folders accessible by Everyone                                | Files and folders shared with _Everyone_ security group /Overall number of shared folders (%)                                                                              | - ≤ 1% — Low - (1% – 5%) — Medium - ≥ 5% — High   |
| File and folder names containing sensitive data                         | Number of files and folders with names that suggest they contain sensitive data                                                                                            | - 0 — Low - 1 — Medium - > 1 — High               |
| Potentially harmful files on file shares                                | Number of detected harmful files                                                                                                                                           | - 0 — Low - 1 — Medium - > 1 — High               |
| Direct permissions on files and folders                                 | Number of shared objects with at least one direct permission / Overall number of shared objects (%)                                                                        | - 0% — Low - (0% – 5%) — Medium - ≥ 5% — High     |
| Documents and list items accessible by Everyone and Authenticated Users | Number of documents and list items shared with the _Everyone_ and _Authenticated Users_ groups / Total number of documents and list items (%)                              | - ≤25% — Low - (25% - 50%) — Medium - ≥50% — High |
| Infrastructure                                                          |                                                                                                                                                                            |                                                   |
| Servers with inappropriate operating systems\*                          | Number of Windows servers with OS not included in the whitelist / Overall number of servers (%)                                                                            | - 0% — Low - >0% — High                           |
| Servers with under-governed Windows Update configurations\*             | Number of servers with Windows Update configuration source set to Local Settings AND/OR with auto-update set to Not configured or Disabled / Overall number of servers (%) | - 0% — Low - >0% — Medium                         |
| Servers with unauthorized antivirus software\*                          | Number of Windows servers with antivirus tools not included in the whitelist / Overall number of servers (%)                                                               | - 0% — Low - >0% — High                           |

\* -here the _Overall number of servers_ means the number of Windows servers for which data
collection was a success. That said, this count may vary across the risks. In such a case, it is
recommended to examine Netwrix Auditor health log and omit lists.
