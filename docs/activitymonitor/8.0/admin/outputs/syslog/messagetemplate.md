---
title: "Message Template Window"
description: "Message Template Window"
sidebar_position: 10
---

# Message Template Window

The Message Template window is opened from the ellipsis (…) button for the Syslog Message Template
field on the Syslog tab of the output Properties window.

![Message Template window](/images/activitymonitor/8.0/admin/outputs/window/syslogmessagetemplate.webp)

You can select a preconfigured template from the drop-down menu or create a custom template. The
available preconfigured templates vary based on the type of domain/host selected.

## For Monitored Domains

Monitored Domains Syslog outputs have the following preconfigured Templates:

- V 1.0 for AlienVault SIEM
- V 1.0 for Generic CEF SIEM – Incorporates the CEF message format
- V 1.0 for Generic LEEF SIEM – Incorporates the LEEF message format
- V 1.0 for Generic SYSLOG SIEM
- V 1.0 for HP ArcSight SIEM
- V 1.0 for LogRhythm SIEM
- V 1.0 for McAfee ESM SIEM
- V 1.0 for IBM QRadar SIEM
- V 1.0 for Splunk SIEM
- V 2.0 for IBM QRadar SIEM 7.2.4
- V 2.0 for Splunk SIEM

Custom templates can be created. Select the desired template or create a new template by modifying
an existing template within the Message Template window. The new message template will be named
Custom. Macro variables are also available to customize the Syslog message template.

**Macro Variables for Monitored Domains**

Macros are text strings that are replaced with actual values at run time. The following Macro
variables are available to customize the Syslog message template:

| Variable                       | Definition                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------ |
| %AFFECTED_OBJECT_ACCOUNT_NAME% | Affected Object Name                                                                 |
| %AFFECTED_OBJECT_SID%          | Affected Object SID                                                                  |
| %ATTRIBUTE_NAME%               | Attribute Name                                                                       |
| %ATTRIBUTE_VALE%               | New Attribute Value                                                                  |
| %BLOCKED_EVENT%                | True if the operation was denied, False otherwise                                    |
| %CLASS_NAME%                   | Class Name                                                                           |
| %COMPANY%                      | Company Name                                                                         |
| %DN%                           | Distinguished Name of the Affected Object                                            |
| %ERTYPE_ID%                    | Event Type ID                                                                        |
| %EVENT_CODE%                   | Code                                                                                 |
| %EVENT_NAME%                   | Event Name                                                                           |
| %EVENT_SOURCE_NAME%            | Event Source Name                                                                    |
| %EVENT_SOURCE_TYPE%            | Event Source Type                                                                    |
| %EVENTNAMETRANSLATED%          | Translated Event Name                                                                |
| %EVENTS_COUNT%                 | Consolidated Events Count                                                            |
| %HOST%                         | Message Source Hostname                                                              |
| %OLD_ATTRIBUTE_VALUE%          | Old Attribute Value                                                                  |
| %OPERATION%                    | Operation Performed                                                                  |
| %ORIGINATING_CLIENT%           | Originating Client                                                                   |
| %ORIGINATING_SERVER%           | Originating Server                                                                   |
| %ORIGINATING_SERVERIP%         | Originating Server IP Address                                                        |
| %ORIGINATINGCLIENTHOST%        | Originating Server Host Name                                                         |
| %ORIGINATINGCLIENTIP%          | Originating Client IP Address                                                        |
| %ORIGINATINGCLIENTMAC%         | Originating Client MAC                                                               |
| %ORIGINATINGCLIENTPROTOCOL%    | Originating Client Protocol                                                          |
| %PERMISSIONS_SDDL_DESCRIPTION% | Windows only: Permission change details in readable format                           |
| %PERPETRATOR%                  | Perpetrator                                                                          |
| %PERPETRATOR_NAME%             | Perpetrator Name                                                                     |
| %PERPETRATOR_SID%              | Perpetrator SID                                                                      |
| %USERNAME%                     | 'Username' part of the %PERPETRATOR_NAME% field if it is in 'DOMAIN\Username' format |
| %PRODUCT%                      | Product Name                                                                         |
| %PRODUCT_VERSION%              | Product Version                                                                      |
| %SETTING_NAME%                 | Setting Name                                                                         |
| %SUCCESS%                      | Success                                                                              |
| %STATUS%                       | Status                                                                               |
| %SYSLOG_DATE%                  | Current Date Time in Syslog Format                                                   |
| %SYSLOG_EVENTID%               | Syslog Event ID                                                                      |
| %TARGETHOST%                   | Target Host                                                                          |
| %TARGETHOSTIP%                 | Target Host IP                                                                       |
| %TIME_STAMP%                   | Date Timestamp of Event                                                              |
| %TIME_STAMP_UTC%               | Date Timestamp of Event in UTC                                                       |

## For Monitored Hosts

Monitored Hosts Syslog outputs have the following preconfigured Templates:

- AlienVault / Generic Syslog
- CEF – Incorporates the CEF message format
- HP Arcsight
- LEEF – Incorporates the LEEF message format
- LogRhythm
- McAfee
- QRadar – Use this template for IBM QRadar integration. See the
  [Netwrix File Activity Monitor App for QRadar](/docs/activitymonitor/8.0/siem/qradar/overview.md) topic for
  additional information.
- Splunk – Use this template for Splunk integration. See the Configure the
  [File Activity Monitor App for Splunk](/docs/activitymonitor/8.0/siem/splunk/overview.md) topic for additional
  information.
- Netwrix Threat Manager (StealthDEFEND) – Use this template for Netwrix Threat Manager integration.
  This is the only supported template for Threat Manager.

Custom templates can be created. Select the desired template or create a new template by modifying
an existing template within the Message Template window. The new message template will be named
Custom. Macro variables are also available to customize the Syslog message template.

**Macro Variables**

Macros are text strings that are replaced with actual values at run time. Not all macro variables
are applicable to all environment types. The following Macro variables are available to customize
the Syslog message template:

| Environment                                             | Variable                       | Definition                                                                                                                                 |
| ------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| SharePoint Online                                       | %ABSOLUTE_URL%                 | Absolute URL of the affected object                                                                                                        |
| SharePoint Online                                       | %ACCESS%                       | Access granted by the sharing operation                                                                                                    |
| SharePoint                                              | %APPPRINCIPAL_ID%              | App Principal ID                                                                                                                           |
| File Servers & NAS Devices                              | %ATTRIBUTE_NAME%               | Rename events only: Fixed string: Filename                                                                                                 |
| File Servers & NAS Devices                              | %ATTRIBUTE_VALUE%              | Rename events only: New file path                                                                                                          |
| File Servers & NAS Devices SharePoint                   | %BLOCKED_EVENT%                | True if the operation was denied, False otherwise                                                                                          |
| SharePoint SharePoint Online                            | %CLIENT_IP%                    | IP address of the user                                                                                                                     |
| File Servers & NAS Devices SharePoint SharePoint Online | %COMPANY%                      | Fixed string: Stealthbits                                                                                                                  |
| SharePoint Online                                       | %CUSTOM_EVENT%                 | Custom Event information                                                                                                                   |
| SharePoint Online                                       | %DEST_FILE_EXT%                | New file extension of copied or moved file                                                                                                 |
| SharePoint Online                                       | %DEST_FILENAME%                | Name of the file that is copied or moved                                                                                                   |
| SharePoint Online                                       | %DEST_RELATIVE_PATH%           | URL of the destination folder where a folder is copied or moved                                                                            |
| SharePoint Online                                       | %DLP_EXCEPTION%                | Reasons why a policy no longer applies and any information about false positive or override                                                |
| SharePoint Online                                       | %DLP_POLICY%                   | Policy(s) that triggered the event                                                                                                         |
| SharePoint Online                                       | %DLP_SENSITIVE%                | Indicates whether the event contains the value of the sensitive data type (true/false)                                                     |
| SharePoint SharePoint Online                            | %DOC_LOCATION%                 | A relative URL of the file or document accessed by the user                                                                                |
| SharePoint SharePoint Online                            | %EVENT_DATA%                   | - For SharePoint, raw event data - Fore SharePoint Online, additional event data                                                           |
| File Servers & NAS Devices                              | %EVENT_NAME%                   | Operation type: Read/Create/Update/Delete/Access Rights Change/ Rename/ `<empty>`. The same as %OPERATION%                                 |
| SharePoint SharePoint Online                            | %EVENT_SOURCE%                 | Originating source of the event (SharePoint or ObjectModel)                                                                                |
| File Servers & NAS Devices                              | %EVENT_SOURCE_NAME%            | Domain name                                                                                                                                |
| SharePoint SharePoint Online                            | %EVENT_TYPE%                   | Event type                                                                                                                                 |
| File Servers & NAS Devices                              | %FILE_NAME%                    | File name                                                                                                                                  |
| File Servers & NAS Devices                              | %FILE_PATH%                    | Full path                                                                                                                                  |
| File Servers & NAS Devices                              | %FILE_SIZE%                    | Size of File                                                                                                                               |
| File Servers & NAS Devices                              | %FILE_TYPE%                    | File extension                                                                                                                             |
| SharePoint                                              | %FULL_PATH%                    | Full Path                                                                                                                                  |
| File Servers & NAS Devices SharePoint SharePoint Online | %HOST%                         | Hostname of Agent                                                                                                                          |
| SharePoint Online                                       | %ID%                           | Unique ID of the audit record                                                                                                              |
| File Servers & NAS Devices                              | %IO_TYPE%                      | Type of I/O: Filesystem/VSS                                                                                                                |
| SharePoint                                              | %ITEM_ID%                      | Item ID                                                                                                                                    |
| SharePoint SharePoint Online                            | %ITEM_TITLE%                   | Item title                                                                                                                                 |
| SharePoint SharePoint Online                            | %ITEM_TYPE%                    | Item type (File, Folder, Web, Site, Tenant, DocumentLibrary, Page)                                                                         |
| SharePoint Online                                       | %LIST_ID%                      | ID of the List                                                                                                                             |
| SharePoint Online                                       | %LIST_ITEM_ID%                 | ID of the List Item                                                                                                                        |
| SharePoint Online                                       | %LIST_NAME%                    | Name of the List                                                                                                                           |
| SharePoint Online                                       | %LIST_URL%                     | URL of the List                                                                                                                            |
| SharePoint                                              | %LOCATION_TYPE%                | Location type of the SharePoint document location                                                                                          |
| SharePoint Online                                       | %MACHINE_DOMAIN_INFO%          | Information about device sync operation                                                                                                    |
| SharePoint Online                                       | %MACHINE_ID%                   | Information about device sync operation                                                                                                    |
| SharePoint Online                                       | %NEW_DOC_LOCATION%             | A relative URL to which the object is copied or moved                                                                                      |
| File Servers & NAS Devices                              | %NEW_FILE_NAME%                | Rename event only: New file name                                                                                                           |
| File Servers & NAS Devices                              | %NEW_FILE_PATH%                | Rename event only: New full path                                                                                                           |
| File Servers & NAS Devices                              | %NEW_FILE_TYPE%                | New File Extension                                                                                                                         |
| File Servers & NAS Devices                              | %OBJECT_TYPE%                  | Object type: FILE/FOLD/UNK                                                                                                                 |
| File Servers & NAS Devices                              | %OLD_ATTRIBUTE_VALUE%          | Rename only: Old file path                                                                                                                 |
| File Servers & NAS Devices                              | %OPERATION%                    | Operation type: Read/Create/Update/Delete/Access Rights Change/Rename/Unknown                                                              |
| SharePoint Online                                       | %ORGANIZATION_ID%              | Organization tenant ID                                                                                                                     |
| File Servers & NAS Devices                              | %ORIGINATING_CLIENT%           | IP Address of originating client or process name                                                                                           |
| File Servers & NAS Devices                              | %ORIGINATING_CLIENT_HOST%      | Hostname of originating client                                                                                                             |
| File Servers & NAS Devices                              | %ORIGINATING_SERVER%           | Hostname of monitored host                                                                                                                 |
| File Servers & NAS Devices                              | %ORIGINTAING_SERVER_IP%        | IP Address of monitored host                                                                                                               |
| SharePoint                                              | %PARAM%                        | Parameters that come with the event                                                                                                        |
| SharePoint                                              | %PATH%                         | Truncated path                                                                                                                             |
| File Servers & NAS Devices                              | %PERMISSIONS_SDDL_DESCRIPTION% | Windows events only: Permission change details in readable format                                                                          |
| File Servers & NAS Devices                              | %PERMISSIONS_SDDL_DIFF%        | Windows events only: Permission change details in SDDL format, '`<REMOVED>` `<ADDED>`'                                                     |
| File Servers & NAS Devices                              | %PERPETRATOR%                  | User name                                                                                                                                  |
| File Servers & NAS Devices SharePoint SharePoint Online | %PRODUCT%                      | Fixed string: Activity Monitor                                                                                                             |
| File Servers & NAS Devices SharePoint SharePoint Online | %PRODUCT_VERSION%              | Product Version                                                                                                                            |
| File Servers & NAS Devices SharePoint SharePoint Online | %PROTOCOL%                     | Protocol type: CIFS/NFS/VSS/FTP/HDFS/HTTP/HTTPS/Unknown                                                                                    |
| File Servers & NAS Devices                              | %PROTOCOL_VERSION%             | NetApp Data ONTAP Cluster-Mode device events only: Protocol Version                                                                        |
| File Servers & NAS Devices                              | %RENAMEUNCPATH%                | Rename events only: New UNC path / New NFS export path                                                                                     |
| SharePoint Online                                       | %RESULT_STATUS%                | Succeeded, PartiallySucceeded, Failed, True, or False                                                                                      |
| SharePoint Online                                       | %SCOPE%                        | online or onprem                                                                                                                           |
| SharePoint Online                                       | %SHARING_ID%                   | Unique ID of the sharing operation                                                                                                         |
| SharePoint SharePoint Online                            | %SITE_ID%                      | ID of the Site                                                                                                                             |
| SharePoint Online                                       | %SITE_NAME%                    | Name of the Site                                                                                                                           |
| SharePoint SharePoint Online                            | %SITE_URL%                     | URL of the Site                                                                                                                            |
| SharePoint Online                                       | %SOURCE%                       | Source (SharePoint, SharePointFileOperation, …)                                                                                            |
| SharePoint Online                                       | %SOURCE_FILE_EXT%              | File extension                                                                                                                             |
| SharePoint Online                                       | %SOURCE_FILENAME%              | File or folder name                                                                                                                        |
| SharePoint                                              | %SOURCE_NAME%                  | Source Name                                                                                                                                |
| SharePoint Online                                       | %SOURCE_RELATIVE_PATH%         | URL of the folder that contains the file accessed by the user                                                                              |
| File Servers & NAS Devices SharePoint SharePoint Online | %SUCCESS%                      | True if the operation was allowed, False otherwise                                                                                         |
| File Servers & NAS Devices SharePoint SharePoint Online | %SYSLOG_DATE%                  | Timestamp of event (server time, Syslog format: MMM dd HH:mm:ss)                                                                           |
| File Servers & NAS Devices                              | %TAGS%                         | Operation Tags. Reports 'Copy' for events that are probable copies                                                                         |
| SharePoint Online                                       | %TARGET_NAME%                  | UPN or name of the target user or group that a resource was shared with                                                                    |
| SharePoint Online                                       | %TARGET_TYPE%                  | Type of target user or group that a resource was shared with (Member, Guest, Group, or Partner)                                            |
| File Servers & NAS Devices SharePoint SharePoint Online | %TIME_STAMP%                   | Timestamp of event (server time, format: yyyy-MM-dd HH:mm:ss.zzz)                                                                          |
| SharePoint Online                                       | %TIME_STAMP_OFFSET%            | Timestamp of event with timezone offset (server time, format: yyyy-MM-ddTHH:mm:ss.zz+HH:mm)                                                |
| File Servers & NAS Devices SharePoint SharePoint Online | %TIME_STAMP_UTC%               | Timestamp of event (UTC, format: yyyy-MM-dd HH:mm:ss.zzz)                                                                                  |
| SharePoint Online                                       | %TIME_STAMP_Z%                 | Timestamp of event (UTC, format: yyyy-MM-ddTHH:mm:ss.zzZ)                                                                                  |
| File Servers & NAS Devices                              | %UNCPATH%                      | UNC path / NFS export path                                                                                                                 |
| SharePoint Online                                       | %UPDATE_TYPE%                  | Added, Removed, or Updated                                                                                                                 |
| SharePoint Online                                       | %USER_AGENT%                   | User client or browser                                                                                                                     |
| SharePoint SharePoint Online                            | %USER_ID%                      | - For SharePoint, ID of the SharePoint user - For SharePoint Online, UPN of the user who performed the operation                           |
| SharePoint SharePoint Online                            | %USER_LOGIN%                   | - For SharePoint, SharePoint User Login / Encoded Claim - For SharePoint Online, An alternative ID of the user. "DlpAgent" for DLP events. |
| SharePoint SharePoint Online                            | %USER_NAME%                    | SharePoint user name                                                                                                                       |
| File Servers & NAS Devices SharePoint                   | %USER_SID%                     | User SID or UID                                                                                                                            |
| SharePoint Online                                       | %USER_TYPE%                    | Type of the user performed the operation                                                                                                   |
| SharePoint Online                                       | %VERSION%                      | New version of the document/version of deleted document                                                                                    |
| SharePoint                                              | %WEB_APPLICATION_NAME%         | Title of the SharePoint Web Application                                                                                                    |
| SharePoint SharePoint Online                            | %WEB_TITLE%                    | Title of the Site Collection                                                                                                               |
| SharePoint Online                                       | %WORKLOAD%                     | Office 356 service where the activity occurred                                                                                             |
