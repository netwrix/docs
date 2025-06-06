# Data Collecting Account

This is a service account that Auditor uses to collect audit data from the monitored items, such as domains, OUs and servers. Netwrix recommends the creation of a dedicated service account for that purpose. Depending on the data source your monitoring plan will process, the account must meet the corresponding requirements in the table below.

Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select account type you want to use and enter credentials. The following choices are available:

- User/password. The account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](#Data-Collecting-Account) topic for additional information.
- Group Managed Service Account (gMSA). You should specify only the account name in the domain\account$ format. See the [Use Group Managed Service Account (gMSA)](/docs/product_docs/auditor/auditor/requirements/gmsa.md) topic for additional information.
- Netwrix Privilege Secure. Starting with version 10.7, you can implement the integration between Netwrix Auditor and Netwrix Privilege Secure. See the [Netwrix Privilege Secure](/docs/product_docs/auditor/auditor/admin/settings/privilegesecure.md) topic for additional information.

- Application and secret for Microsoft 365 with modern authentication.

Each data collecting accounts should meet the requirements from the table below, depending on the data source.

| Data source | Required rights and permissions: |
| --- | --- |
| Active Directory | [Permissions for Active Directory Auditing](/docs/product_docs/auditor/auditor/configuration/activedirectory/permissions.md) |
| Active Directory Federation Services | [Permissions for AD FS Auditing](/docs/product_docs/auditor/auditor/configuration/activedirectoryfederatedservices/permissions.md) |
| Microsoft Entra ID (formerly Azure AD), Exchange Online, SharePoint Online, MS Teams | [Permissions for Microsoft Entra ID Auditing](/docs/product_docs/auditor/auditor/configuration/microsoft365/microsoftentraid/permissions.md)  [Permissions for Exchange Online Auditing](/docs/product_docs/auditor/auditor/configuration/microsoft365/exchangeonline/permissions.md)  [Permissions for SharePoint Online Auditing ](/docs/product_docs/auditor/auditor/configuration/microsoft365/sharepointonline/permissions.md)  [Permissions for Teams Auditing](/docs/product_docs/auditor/auditor/configuration/microsoft365/teams/permissions.md) |
| Exchange | [Permissions for Exchange Auditing](/docs/product_docs/auditor/auditor/configuration/exchange/permissions.md) |
| Windows File Servers | [Permissions for Windows File Server Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/windows/permissions.md) |
| Dell Isilon | [Permissions for Dell Isilon/PowerScale Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/dellisilon/permissions.md) |
| Dell VNX/VNXe/Unity | [Permissions for Dell Data Storage Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/delldatastorage/permissions.md) |
| NetApp | [Permissions for NetApp Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/netappcmode/permissions.md) |
| Nutanix Files | [Permissions for Nutanix Files Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/nutanix/permissions.md) |
| Qumulo | [Permissions for Qumulo Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/qumulo/permissions.md) |
| Synology | [Permissions for Synology Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/synology/permissions.md) |
| Network Devices | [Permissions for Network Devices Auditing](/docs/product_docs/auditor/auditor/configuration/networkdevices/permissions.md) |
| Oracle Database | [Permissions for Oracle Database Auditing](/docs/product_docs/auditor/auditor/configuration/oracle/permissions.md) |
| SharePoint | [Permissions for SharePoint Auditing](/docs/product_docs/auditor/auditor/configuration/sharepoint/permissions.md) |
| SQL Server | [Permissions for SQL Server Auditing ](/docs/product_docs/auditor/auditor/configuration/sqlserver/permissions.md) |
| VMware | [Permissions for VMware Server Auditing ](/docs/product_docs/auditor/auditor/configuration/vmware/permissions.md) |
| Windows Server (including DNS and DHCP) | [Permissions for Windows Server Auditing ](/docs/product_docs/auditor/auditor/configuration/windowsserver/permissions.md) |
| Event Log (including IIS)—collected with Event Log Manager | [Permissions for Windows Server Auditing ](/docs/product_docs/auditor/auditor/configuration/windowsserver/permissions.md#Permissions-for-Windows-Server-Auditing) |
| Group Policy | [Permissions for Group Policy Auditing ](/docs/product_docs/auditor/auditor/configuration/grouppolicy/permissions.md) |
| Logon Activity | [Permissions for Logon Activity Auditing ](/docs/product_docs/auditor/auditor/configuration/logonactivity/permissions.md) |
| Inactive Users in Active Directory—collected with Inactive User Tracker | In the target domain   - A member of the Domain Admins group |
| Password Expiration in Active Directory—collected with Password Expiration Notifier | In the target domain   - A member of the Domain Users group |
| User Activity | On the target server   - A member of the local Administrators group |
| Sensitive Data Discovery | [Sensitive Data Discovery ](/docs/product_docs/auditor/auditor/admin/settings/sensitivedatadiscovery.md) |

## Update Credentials for Account

Once a Data Collecting Account has been configured, you can always update the password for this account in Netwrix Auditor.

Follow the steps to update credentials for the accounts used by Auditor:

__Step 1 –__ On the Auditor home page, navigate to __Settings__.

__Step 2 –__ Locate the General tab.

__Step 3 –__ Click the __Manage__ button under __Accounts and Passwords__.

__Step 4 –__ Select an account you want to update the password for.

__Step 5 –__ Review the account configuration scope and click __Update password__ next to this account.

![Password Management](/static/img/product_docs/auditor/auditor/admin/monitoringplans/updatecredentials.png)

__Step 6 –__ Save your edits.

See the [General](/docs/product_docs/auditor/auditor/admin/settings/general.md) topic for additional information.
