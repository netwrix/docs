---
title: "Data Collecting Account In Netwrix 1Secure"
sidebar_label: "Data Collecting Account"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Data Collecting Account

The data collecting account is a service account that Netwrix 1Secure uses to collect audit data
from the monitored items (domains, OUs, servers, etc.). Netwrix recommends creating a dedicated
service account for that purpose. Depending on the data source and connector, the account must meet
the corresponding requirements (see the table below).

You can use group Managed Service Account (gMSA) as data collecting account. See the
[Using Group Managed Service Account (gMSA)](/docs/1secure/data-sources/gmsa.md) topic for additional information.

Currently, the following data sources are supported:

| Data source       | Provided connectors                               | Required rights and permissions:                                                                                                                                                               |
| ----------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory  | Active Directory Activity Active Directory Logons | [Active Directory Auditing](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) [Logon Activity Auditing](/docs/1secure/setup-and-configuration/logon-activity/index.md) |
| Azure AD          | Azure AD Activity Azure AD Logons                 | [Microsoft Entra ID Auditing](/docs/1secure/data-sources/azure-entra-id.md)                                                                                                                    |
| Computer          | File Server Activity                              | [Computer Auditing](/docs/1secure/data-sources/computers.md)                                                                                                                                   |
| SharePoint Online | SharePoint Online Activity                        | [SharePoint Online Auditing](/docs/1secure/data-sources/sharepoint-online.md)                                                                                                                  |
| Exchange Online   | Exchange Online Activity                          | [Exchange Online Auditing](/docs/1secure/data-sources/exchange-online.md)                                                                                                                      |
