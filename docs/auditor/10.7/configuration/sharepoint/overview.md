---
title: "SharePoint"
description: "SharePoint"
sidebar_position: 100
---

# SharePoint

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.

    - In this case, Auditor will enable automatic audit log trimming for all monitored site
      collections; log retention period will be set to 7 days. Also, consider that after a site
      collection is processed, Auditor will automatically delete the events older than 1 day from
      its audit log.

- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - Configure Audit Log Trimming on your SharePoint farm.
    - Configure Events Auditing Settings on your SharePoint farm.
    - Enable SharePoint Administration Service on the computer where SharePoint Central
      Administration is installed and where you intend to deploy Netwrix Auditor for SharePoint Core
      Service.

## Configure Audit Log Trimming

Follow the steps to configure Audit Log Trimming on your SharePoint farm.

**Step 1 –** Log in as an administrator to the audited SharePoint site collection.

**Step 2 –** In the upper-left of your site collection, go to **Site Actions** > **Site Settings**
and select one of the following:

- SharePoint 2010
- SharePoint 2013
- SharePoint 2016
- SharePoint 2019
- SharePoint Subscription Edition

**Step 3 –** Under the Site Collection Administration section, select Site collection audit
settings.

**Step 4 –** In the Audit Log Trimming section, do the following:

- Set "Automatically trim the audit log for this site" to "Yes".
- In "Specify the number of days of audit log data to retain" set "retention" to 7 days.

    You may keep the existing audit log retention provided that it is set to 7 days or less.

## Configure Events Auditing Settings

Follow the steps to configure event auditing settings.

**Step 1 –** Log in as an administrator to the audited SharePoint site collection.

**Step 2 –** In the upper-left of your site collection, go to **Site Actions** > **Site Settings**
and select one of the following:

- SharePoint 2010
- SharePoint 2013
- SharePoint 2016
- SharePoint 2019
- SharePoint Subscription Edition

**Step 3 –** Under the Site Collection Administration section, select Site collection audit
settings.

**Step 4 –** In the "List, Libraries, and Sites" section, select Editing users and permissions.

**NOTE:** Enable Opening or downloading documents, viewing items in lists, or viewing item
properties for read access auditing.

If you are using SharePoint 2019 or SharePoint Subscription Edition, it is recommended to adjust
audit settings automatically with Auditor to enable this option. See the
[Create a New Monitoring Plan](/docs/auditor/10.7/admin/monitoringplans/create.md) topic for additional
information.

## Enable SharePoint Administration Service

This service is must be started to ensure the Netwrix Auditor for SharePoint Core Service successful
installation. Perform the procedure below, prior to the Core Service installation. See the
[Install for SharePoint Core Service](/docs/auditor/10.7/install/sharepointcoreservice.md) topic for additional
information.

Follow the steps to enable SharePoint Administration Service.

**Step 1 –** On the computer where SharePoint Central Administration is installed and where you
intend to deploy Netwrix Auditor for SharePoint Core Service, open the Services Management Console.
Navigate to Start > Windows Administrative Tools > Services.

**Step 2 –** Locate the SharePoint Administration service (SPAdminV4), right-click it and select
Properties.

**Step 3 –** In the General tab, set the Startup type to "Automatic" and click Apply.

**Step 4 –** Click Start to start the service.

## SharePoint objects

Review a full list of object types and attributes Netwrix Auditor can collect on SharePoint.

The attributes marked with \* are reported without details, only the fact of change is reported.

The changes to object types marked with \*\* are reported with the "Not applicable" value in the
"Who" and "Workstation" columns.

The changes to object types and attributes marked with \*\*\* are reported with the "Not applicable"
value in the "Workstation" column.

Read access is reported for documents and lists and displays "Not applicable" in the "Workstation"
column.

| Object type                 | Attributes                                                                                                                                                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group\*\*\*                 | - Membership                                                                                                                                                                                                                                                                                      |
| Permission Level\*\*\*      | - Permissions                                                                                                                                                                                                                                                                                     |
| Site                        | - Site URL - Permissions\*\*\* - Permission Inheritance\*\*\*                                                                                                                                                                                                                                     |
| List                        | - Permissions\*\*\* - Permission Inheritance\*\*\*                                                                                                                                                                                                                                                |
| List Item                   | - Attachments - Permissions\*\*\* - Permission Inheritance\*\*\* - List Item Properties\*                                                                                                                                                                                                         |
| Document                    | - Document URL - Permissions\*\*\* - Permission Inheritance\*\*\* - Document Properties\* - Content Modifications\*                                                                                                                                                                               |
| Farm\*\*                    | - Configuration Database - Configuration Database Server - Version - Managed Account for "Web Application Pool - `{name}`" - Managed Account for "Service Application Pool - `{name}`" - Managed Account for "Windows Service - `{name}`" - Managed Account for "Farm Account" - Managed Accounts |
| Web Application \*\*        | - Web Application URL - Name - Port - User Permissions - Alternate Access Mappings - Content Database - Blocked File Extensions                                                                                                                                                                   |
| Site Collection\*\*         | - Site Collection URL - Content Database - Content Database Server - Site Storage Maximum Limit - Site Storage Warning Limit - Sandboxed Solutions Resource Maximum Quota - Sandboxed Solutions Resource Warning Quota - Quota Template - Lock Status                                             |
| Server\*\*                  | - Name                                                                                                                                                                                                                                                                                            |
| Service\*\*                 | - Name - Status                                                                                                                                                                                                                                                                                   |
| Permission Policy Level\*\* | - Name - Grant Permissions - Deny Permissions - Site Collection Permissions                                                                                                                                                                                                                       |
| User Policy\*\*             | - Display Name - Permissions                                                                                                                                                                                                                                                                      |
| Anonymous Policy\*\*        | - Zone - Permissions                                                                                                                                                                                                                                                                              |
| Farm Solution\*\*           | - Name - Status - Last Operation Time                                                                                                                                                                                                                                                             |
| Farm Feature\*\*            | - Name - Status                                                                                                                                                                                                                                                                                   |

To collect State-in-Time data from a SharePoint farm, the following is required:

- for site collection processing – lock status must differ from _No access_ for Netwrix Auditor
  service account
- for web application processing – the following permissions must be assigned to Netwrix Auditor
  service account:
    - Open items
    - View items
    - Browse directories
    - View pages
    - Browse user information
    - Open
    - Enumerate permissions

Also, state-in-time data collection is supported for SharePoint farm.

### Means Granted

The Means granted column in the Account Permissions in SharePoint and SharePoint Object Permissions
State-in-Time reports list detailed permissions and permission levels by user account.

Review the following for additional information:

| Means granted                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission level                                                                                                     | Default permission levels are predefined sets of permissions that you can assign to individual users, groups of users, or security groups, based on their functional requirements and on security considerations. SharePoint Server permission levels are defined at the site collection level; by default, they are inherited from the parent object. For more information on SharePoint permissions and permission levels read the following Microsoft article: [User permissions and permission levels in SharePoint Server](https://docs.microsoft.com/en-us/sharepoint/sites/user-permissions-and-permission-levels).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Zone: Default (policy) Zone: Intranet (policy) Zone: Internet (policy) Zone: Custom (policy) Zone: Extranet (policy) | Zone If you want to expose the same content in a web application to different types of users by using additional URLs or authentication methods, you can extend an existing web application into a new zone. When you extend the web application into a new zone, you create a separate Internet Information Services (IIS) web site to serve the same content, but with a unique URL and authentication type. For more information on SharePoint zones read the following Microsoft article: [Extend claims-based web applications in SharePoint](https://learn.microsoft.com/en-us/sharepoint/administration/extend-a-claims-based-web-application)[ ](https://social.technet.microsoft.com/wiki/contents/articles/38031.sharepoint-2016-extend-a-web-application.aspx). Policies Web application policies represent a concept that allows SharePoint administrators to grant or deny permissions to users and groups for sites under a web application. These granted or denied permissions take preference over the permissions set for the sites in the web application. For more information on SharePoint web application policies read the following Microsoft article: [Manage permissions for a web application in SharePoint Server](https://docs.microsoft.com/en-us/sharepoint/administration/manage-permissions-for-a-web-application). |
| Site collection administrator                                                                                        | The _SharePoint site collection administrator_ is a permission type that overrides Full Control permission. It cannot be locked out of any subsite, list, library, item, or page on the site. The permissions inheritance for any of these elements can be broken at any time, and permissions can be changed so that even users with Full Control will have lesser permissions or even no permissions at all. In all cases the SharePoint site collection administrator will always have full access to all elements and all data. For more information, read the following Microsoft article: [Change site collection administrators in SharePoint Server](https://docs.microsoft.com/en-us/sharepoint/sites/change-site-collection-administrators).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Site Collection lock status                                                                                          | Lock statuses apply to a site collection and are used to control the actions allowed on site collection. For more information on lock statuses, read the following Microsoft article: [Manage the lock status for site collections in SharePoint Server](https://docs.microsoft.com/en-us/sharepoint/sites/manage-the-lock-status-for-site-collections).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Web application user permissions                                                                                     | Sites and site collections have a variety of permissions that can be set, such as adding or editing list items or documents. These permissions are normally given to a user by assigning a particular permission level, such as _Full Control_, _Contribute_, or _View Only_. Each individual permission can be enabled or disabled for entire web application. For more information on web application user permissions, read the following Microsoft article: [Manage permissions for a web application in SharePoint Server](https://docs.microsoft.com/en-us/sharepoint/administration/manage-permissions-for-a-web-application).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Farm account                                                                                                         | Farm account is a service account used to run the Central Administration web site application pool. It has _dbo_ access to the configuration database. For more information on SharePoint service accounts, read the following Microsoft articles: - [Plan for administrative and service accounts in SharePoint Server](https://docs.microsoft.com/en-us/sharepoint/security-for-sharepoint-server/plan-for-administrative-and-service-accounts) - [Account permissions and security settings in SharePoint Servers 2016 and 2019 Public Preview](https://docs.microsoft.com/en-us/sharepoint/install/account-permissions-and-security-settings-in-sharepoint-server-2016)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Service account for web application pool                                                                             | Service account for web application pool is used for internal purposes across a SharePoint farm, except for Central administration. For more information on application pool account, read the following Microsoft article: [Application pool account](https://docs.microsoft.com/en-us/sharepoint/install/account-permissions-and-security-settings-in-sharepoint-server-2016#application-pool-account).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
