---
title: "Data Collecting Account"
description: "Data Collecting Account"
sidebar_position: 30
---

# Data Collecting Account

This is a service account that Auditor uses to collect audit data from the monitored items, such as
domains, OUs and servers. Netwrix recommends the creation of a dedicated service account for that
purpose. Depending on the data source your monitoring plan will process, the account must meet the
corresponding requirements in the table below.

Select the account that will be used to collect data for this item. If you want to use a specific
account (other than the one you specified during monitoring plan creation), select account type you
want to use and enter credentials. The following choices are available:

- User/password. The account must be granted the same permissions and access rights as the default
  account used for data collection. See the Data Collecting Account topic for additional
  information.
- Group Managed Service Account (gMSA). You should specify only the account name in the
  domain\account$ format. See the
  [Use Group Managed Service Account (gMSA)](/docs/auditor/10.7/requirements/gmsa.md) topic for additional
  information.
- Netwrix Privilege Secure. Starting with version 10.7, you can implement the integration between
  Netwrix Auditor and Netwrix Privilege Secure. See the
  [Netwrix Privilege Secure](/docs/auditor/10.7/admin/settings/privilegesecure.md) topic for additional information.

- Application and secret for Microsoft 365 with modern authentication.

Each data collecting accounts should meet the requirements from the table below, depending on the
data source.

| Data source                                                                          | Required rights and permissions:                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory                                                                     | [Permissions for Active Directory Auditing](/docs/auditor/10.7/configuration/activedirectory/permissions.md)                                                                                                                                                                                                                                                                                                                                    |
| Active Directory Federation Services                                                 | [Permissions for AD FS Auditing](/docs/auditor/10.7/configuration/activedirectoryfederatedservices/permissions.md)                                                                                                                                                                                                                                                                                                                              |
| Microsoft Entra ID (formerly Azure AD), Exchange Online, SharePoint Online, MS Teams | [Permissions for Microsoft Entra ID Auditing](/docs/auditor/10.7/configuration/microsoft365/microsoftentraid/permissions/permissions.md) [Permissions for Exchange Online Auditing](/docs/auditor/10.7/configuration/microsoft365/exchangeonline/permissions.md) [Permissions for SharePoint Online Auditing ](/docs/auditor/10.7/configuration/microsoft365/sharepointonline/permissions/permissions.md) [Permissions for Teams Auditing](/docs/auditor/10.7/configuration/microsoft365/teams/permissions/permissions.md) |
| Exchange                                                                             | [Permissions for Exchange Auditing](/docs/auditor/10.7/configuration/exchange/permissions.md)                                                                                                                                                                                                                                                                                                                                                   |
| Windows File Servers                                                                 | [Permissions for Windows File Server Auditing](/docs/auditor/10.7/configuration/fileservers/windows/permissions.md)                                                                                                                                                                                                                                                                                                                             |
| Dell Isilon                                                                          | [Permissions for Dell Isilon/PowerScale Auditing](/docs/auditor/10.7/configuration/fileservers/dellisilon/permissions.md)                                                                                                                                                                                                                                                                                                                       |
| Dell VNX/VNXe/Unity                                                                  | [Permissions for Dell Data Storage Auditing](/docs/auditor/10.7/configuration/fileservers/delldatastorage/permissions.md)                                                                                                                                                                                                                                                                                                                       |
| NetApp                                                                               | [Permissions for NetApp Auditing](/docs/auditor/10.7/configuration/fileservers/netappcmode/permissions.md)                                                                                                                                                                                                                                                                                                                                      |
| Nutanix Files                                                                        | [Permissions for Nutanix Files Auditing](/docs/auditor/10.7/configuration/fileservers/nutanix/permissions.md)                                                                                                                                                                                                                                                                                                                                   |
| Qumulo                                                                               | [Permissions for Qumulo Auditing](/docs/auditor/10.7/configuration/fileservers/qumulo/permissions.md)                                                                                                                                                                                                                                                                                                                                           |
| Synology                                                                             | [Permissions for Synology Auditing](/docs/auditor/10.7/configuration/fileservers/synology/permissions.md)                                                                                                                                                                                                                                                                                                                                       |
| Network Devices                                                                      | [Permissions for Network Devices Auditing](/docs/auditor/10.7/configuration/networkdevices/permissions.md)                                                                                                                                                                                                                                                                                                                                      |
| Oracle Database                                                                      | [Permissions for Oracle Database Auditing](/docs/auditor/10.7/configuration/oracle/permissions.md)                                                                                                                                                                                                                                                                                                                                              |
| SharePoint                                                                           | [Permissions for SharePoint Auditing](/docs/auditor/10.7/configuration/sharepoint/permissions.md)                                                                                                                                                                                                                                                                                                                                               |
| SQL Server                                                                           | [Permissions for SQL Server Auditing ](/docs/auditor/10.7/configuration/sqlserver/permissions.md)                                                                                                                                                                                                                                                                                                                                               |
| VMware                                                                               | [Permissions for VMware Server Auditing ](/docs/auditor/10.7/configuration/vmware/permissions.md)                                                                                                                                                                                                                                                                                                                                               |
| Windows Server (including DNS and DHCP)                                              | [Permissions for Windows Server Auditing ](/docs/auditor/10.7/configuration/windowsserver/permissions.md)                                                                                                                                                                                                                                                                                                                                       |
| Event Log (including IIS)—collected with Event Log Manager                           | [Permissions for Windows Server Auditing ](/docs/auditor/10.7/configuration/windowsserver/permissions.md)                                                                                                                                                                                                                                                                                                                                       |
| Group Policy                                                                         | [Permissions for Group Policy Auditing ](/docs/auditor/10.7/configuration/grouppolicy/permissions.md)                                                                                                                                                                                                                                                                                                                                           |
| Logon Activity                                                                       | [Permissions for Logon Activity Auditing ](/docs/auditor/10.7/configuration/logonactivity/permissions.md)                                                                                                                                                                                                                                                                                                                                       |
| Inactive Users in Active Directory—collected with Inactive User Tracker              | In the target domain - A member of the Domain Admins group                                                                                                                                                                                                                                                                                                                                                                         |
| Password Expiration in Active Directory—collected with Password Expiration Notifier  | In the target domain - A member of the Domain Users group                                                                                                                                                                                                                                                                                                                                                                          |
| User Activity                                                                        | On the target server - A member of the local Administrators group                                                                                                                                                                                                                                                                                                                                                                  |
| Sensitive Data Discovery                                                             | [Sensitive Data Discovery ](/docs/auditor/10.7/admin/settings/sensitivedatadiscovery.md)                                                                                                                                                                                                                                                                                                                                                                 |

## Update Credentials for Account

Once a Data Collecting Account has been configured, you can always update the password for this
account in Netwrix Auditor.

Follow the steps to update credentials for the accounts used by Auditor:

**Step 1 –** On the Auditor home page, navigate to **Settings**.

**Step 2 –** Locate the General tab.

**Step 3 –** Click the **Manage** button under **Accounts and Passwords**.

**Step 4 –** Select an account you want to update the password for.

**Step 5 –** Review the account configuration scope and click **Update password** next to this
account.

![Password Management](/images/auditor/10.7/admin/monitoringplans/updatecredentials.webp)

**Step 6 –** Save your edits.

See the [General](/docs/auditor/10.7/admin/settings/general.md) topic for additional information.
