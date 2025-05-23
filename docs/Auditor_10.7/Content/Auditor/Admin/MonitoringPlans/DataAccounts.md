---
sidebar_position: 1676
title: Data Collecting Account
---

Filter: 

* All Files

Submit Search

# Data Collecting Account

This is a service account that Auditor uses to collect audit data from the monitored items, such as domains, OUs and servers. Netwrix recommends the creation of a dedicated service account for that purpose. Depending on the data source your monitoring plan will process, the account must meet the corresponding requirements in the table below.

Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select account type you want to use and enter credentials. The following choices are available:

* User/password. The account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](# "Data Collecting Account") topic for additional information.
* Group Managed Service Account (gMSA). You should specify only the account name in the domain\account$ format. See the [Use Group Managed Service Account (gMSA)](../../Requirements/gMSA)") topic for additional information.
* Netwrix Privilege Secure. Starting with version 10.7, you can implement the integration between Netwrix Auditor and Netwrix Privilege Secure. See the [Netwrix Privilege Secure](../Settings/PrivilegeSecure "Netwrix Privilege Secure") topic for additional information.

* Application and secret for Microsoft 365 with modern authentication.

Each data collecting accounts should meet the requirements from the table below, depending on the data source.

| Data source | Required rights and permissions: |
| --- | --- |
| Active Directory | [Permissions for Active Directory Auditing](../../Configuration/ActiveDirectory/Permissions "Permissions for Active Directory Auditing") |
| Active Directory Federation Services | [Permissions for AD FS Auditing](../../Configuration/ActiveDirectoryFederatedServices/Permissions "Permissions for AD FS Auditing") |
| Microsoft Entra ID (formerly Azure AD), Exchange Online, SharePoint Online, MS Teams | [Permissions for Microsoft Entra ID Auditing](../../Configuration/Microsoft365/MicrosoftEntraID/Permissions "Permissions for Microsoft Entra ID Auditing")  [Permissions for Exchange Online Auditing](../../Configuration/Microsoft365/ExchangeOnline/Permissions "Permissions for Exchange Online Auditing")  [Permissions for SharePoint Online Auditing](../../Configuration/Microsoft365/SharePointOnline/Permissions "Permissions for SharePoint Online Auditing")  [Permissions for Teams Auditing](../../Configuration/Microsoft365/Teams/Permissions "Permissions for Teams Auditing") |
| Exchange | [Permissions for Exchange Auditing](../../Configuration/Exchange/Permissions "Permissions for Exchange Auditing") |
| Windows File Servers | [Permissions for Windows File Server Auditing](../../Configuration/FileServers/Windows/Permissions "Permissions for Windows File Server Auditing") |
| Dell Isilon | [Permissions for Dell Isilon/PowerScale Auditing](../../Configuration/FileServers/DellIsilon/Permissions "Permissions for Dell Isilon Auditing") |
| Dell VNX/VNXe/Unity | [Permissions for Dell Data Storage Auditing](../../Configuration/FileServers/DellDataStorage/Permissions "Permissions for Dell Data Storage Auditing") |
| NetApp | [Permissions for NetApp Auditing](../../Configuration/FileServers/NetAppCMode/Permissions "Permissions for NetApp Auditing") |
| Nutanix Files | [Permissions for Nutanix Files Auditing](../../Configuration/FileServers/Nutanix/Permissions "Permissions for Nutanix Files Auditing") |
| Qumulo | [Permissions for Qumulo Auditing](../../Configuration/FileServers/Qumulo/Permissions "Permissions for Qumulo Auditing") |
| Synology | [Permissions for Synology Auditing](../../Configuration/FileServers/Synology/Permissions "Permissions for Synology Auditing") |
| Network Devices | [Permissions for Network Devices Auditing](../../Configuration/NetworkDevices/Permissions "Permissions for Network Devices Auditing") |
| Oracle Database | [Permissions for Oracle Database Auditing](../../Configuration/Oracle/Permissions "Permissions for Oracle Database Auditing") |
| SharePoint | [Permissions for SharePoint Auditing](../../Configuration/SharePoint/Permissions "Permissions for SharePoint Auditing") |
| SQL Server | [Permissions for SQL Server Auditing](../../Configuration/SQLServer/Permissions "Permissions for SQL Server Auditing") |
| VMware | [Permissions for VMware Server Auditing](../../Configuration/VMware/Permissions "Permissions for VMware Server Auditing") |
| Windows Server (including DNS and DHCP) | [Permissions for Windows Server Auditing](../../Configuration/WindowsServer/Permissions "Permissions for Windows Server Auditing") |
| Event Log (including IIS)—collected with Event Log Manager | [Permissions for Windows Server Auditing](../../Configuration/WindowsServer/Permissions#Permissi "Permissions for Event Log Auditing") |
| Group Policy | [Permissions for Group Policy Auditing](../../Configuration/GroupPolicy/Permissions "Permissions for Group Policy Auditing") |
| Logon Activity | [Permissions for Logon Activity Auditing](../../Configuration/LogonActivity/Permissions "Permissions for Logon Activity Auditing") |
| Inactive Users in Active Directory—collected with Inactive User Tracker | In the target domain   * A member of the Domain Admins group |
| Password Expiration in Active Directory—collected with Password Expiration Notifier | In the target domain   * A member of the Domain Users group |
| User Activity | On the target server   * A member of the local Administrators group |
| Sensitive Data Discovery | [Sensitive Data Discovery](../Settings/SensitiveDataDiscovery "Sensitive Data Discovery") |

## Update Credentials for Account

Once a Data Collecting Account has been configured, you can always update the password for this account in Netwrix Auditor.

Follow the steps to update credentials for the accounts used by Auditor:

**Step 1 –** On the Auditor home page, navigate to **Settings**.

**Step 2 –** Locate the General tab.

**Step 3 –** Click the **Manage** button under **Accounts and Passwords**.

**Step 4 –** Select an account you want to update the password for.

**Step 5 –** Review the account configuration scope and click **Update password** next to this account.

![Password Management](../../../Resources/Images/Auditor/Settings/UpdateCredentials.PNG "Password Management")

**Step 6 –** Save your edits.

See the [General](../Settings/General "General") topic for additional information.