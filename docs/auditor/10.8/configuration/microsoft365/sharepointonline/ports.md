---
title: "SharePoint Online Ports"
description: "SharePoint Online Ports"
sidebar_position: 10
---

# SharePoint Online Ports

Review a full list of protocols and ports required for Netwrix Auditor for SharePoint Online.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports and targets listed in the following table.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 443 TCP port on the listed targets.

| Port | Protocol | Source                 | Target                                                                                                                                                                  | Purpose                              |
| ---- | -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 80   | TCP      | Netwrix Auditor Server | login.windows.net<br/>graph.windows.net<br/>manage.office.com<br/>`<TenantName>`-admin.sharepoint.com<br/>`<TenantName>`.sharepoint.com<br/>`<TenantName>`-my.sharepoint.com | Connection to Microsoft 365 services |
| 443  | TCP      | Netwrix Auditor Server | login.windows.net<br/>graph.windows.net<br/>manage.office.com<br/>`<TenantName>`-admin.sharepoint.com<br/>`<TenantName>`.sharepoint.com<br/>`<TenantName>`-my.sharepoint.com | Connection to Microsoft 365 services |

For a full list of Microsoft 365 URLs, see the Microsoft
[Office 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2)
article.

## Tenant environment endpoints

The table above lists the endpoints for the default (commercial) Microsoft 365 cloud. If you select
another tenant environment in the monitored item properties, Auditor connects to the following
endpoints instead. All connections use TCP port 443.

| Tenant environment          | Sign-in                   | Microsoft Graph                  | Office 365 Management Activity API |
| --------------------------- | ------------------------- | -------------------------------- | ---------------------------------- |
| US Government (GCC)         | login.microsoftonline.com | graph.microsoft.com              | manage-gcc.office.com              |
| US Government L4 (GCC High) | login.microsoftonline.us  | graph.microsoft.us               | manage.office365.us                |
| US Government L5 (DoD)      | login.microsoftonline.us  | dod-graph.microsoft.us           | manage.protection.apps.mil         |
| China                       | login.chinacloudapi.cn    | microsoftgraph.chinacloudapi.cn  | manage.office365.cn                |

For the SharePoint Online URLs of your tenant, see the Microsoft documentation for your cloud.
