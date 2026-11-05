---
title: "Activity Reports"
description: "Activity Reports"
sidebar_position: 10
---

# Activity Reports

Activity reports help administrators monitor, track, and analyze various user activities across
their audited environment. These reports provide detailed insights into user behavior, helping to
identify any suspicious or unauthorized actions. For example, you can track all changes made
by a specific user, view a list of deleted accounts, and much more.

You can choose to view predefined Activity reports or create customized reports tailored to your
needs by applying specific filters. To view custom reports, see the Create Reports with Custom
Filters topic.

Activity reports collect data from the following environments:

- Active Directory
- Microsoft Entra ID
- Exchange Online
- File Server
- SharePoint Online
- SQL Database
- Windows Server
- Group Policy

## Review a Report

**To review an Activity report:**

**Step 1 –** Click **Reports** in the top bar to navigate to the Reports page. By default, the page
opens to the Activity tab with New Investigation selected in the left pane.

**Step 2 –** Select an organization from the dropdown menu at the top of the left pane to access
its reports. An organization is selected by default, but you can choose a different one if needed.

**Step 3 –** In the left pane, click a category to view its reports.

**Step 4 –** Click a report to open it. Built-in reports have a default When filter of the past 7
days (greater than or equal to the start of the day six days ago). Click **Search** to generate
reports with a predefined filter set.

Activity reports are available under the following categories.

- [Overview](#overview)
- [Active Directory](#active-directory)
- [Group Policy](#group-policy)
- [Entra ID](#microsoft-entra-id)
- [File Server](#file-server)
- [Exchange Online](#exchange-online)
- [SharePoint Online](#sharepoint-online)
- [Self Audit](#self-audit)
- [SQL Database](#sql-database)
- [Crawl Logs](#crawl-logs)
- [Active Directory and Entra ID](#active-directory-and-entra-id)
- [Windows Server](#windows-server)

## Overview

| Report Name | Description |
| --- | --- |
| Activity Outside of Business Hours | Lists user activities that occur outside of predefined business hours. It helps detect unusual or suspicious behavior, such as logins or changes made during non-working hours. |
| All Logon Activity | Lists all user login attempts across the environment. It helps track login trends, such as repeated failed login attempts. |
| Changes by Date | Lists all changes to monitored objects by date. |
| Changes by User | Lists all changes made by a specific user. It helps track specific user action, such as changes made to accounts, permission, settings, etc. |
| Failed Logons | Lists all failed login attempts. It helps identify potential security issues, such as unauthorized users trying to access the network. |

## Active Directory

| Report Name | Description |
| --- | --- |
| AD Failed Logons |  |
| Administrative Group Membership Changes | Lists changes to membership of the Domain Admins, Enterprise Admins, Schema Admins, Account Operators, and other administrative groups. Members of these groups are entitled to perform critical activities in your IT infrastructure. Subscribe to this report or review it on a regular basis to detect security issues and ensure that administrative group membership is granted or revoked in compliance with your organization's security policies. |
| All Active Directory Changes | Lists changes to all Active Directory objects including changes to permissions, configuration, etc. This is the most comprehensive report on Active Directory changes. Use it when you need to review every single change to any Active Directory object. |
| Computers Removed | Lists all deleted computer accounts. It also provides information about when and by whom the accounts were deleted, which can help identify any unauthorized or suspicious activity within the system. |
| Members Added to Administrative Group | Lists all users added to administrative groups. It helps administrators monitor changes to privileged groups and ensures that only authorized users have elevated access. |
| Members Removed from Administrative Group | Lists all users removed from administrative groups. It helps administrators monitor changes to privileged groups and ensures that only authorized users have elevated access. |
| Organizational Unit Management | Lists changes made to organization units including, changes to name, description, delegation settings, etc. |
| Password Never Expires Flag Modified |  |
| Security Group Membership Changes | Lists changes made to security groups including, changes to group membership, permissions, descriptions, etc. |

## Group Policy

| Report Name |
| --- |
| All Group Policy Changes |
| Account Policy Changes |
| Password Policy Changes |
| Security Settings Changes |

## Entra ID {#microsoft-entra-id}

| Report Name | Description |
| --- | --- |
| All Entra ID Changes | Lists all changes made to Microsoft Entra ID objects, including creation, modification, and deletion |
| Entra ID Admin Permissions Granted | Lists users with admin-level permissions |
| Entra ID Role Management Permissions Granted | Identifies when the RoleManagement.ReadWrite.Directory (Delegated or Application) permission under Microsoft Graph is granted to a service principal. This permission allows an application to read and manage the role-based access control (RBAC) settings for your company's directory. |
| Entra ID Sign-In Activity | Lists all sign-in attempts across the Microsoft Entra ID |
| Mail.Read Permissions Granted to Application | Lists applications with permissions to read emails in all mailboxes without a signed-in user |
| MFA Rejected by User | Lists occurrences where a user has rejected an MFA prompt. This could be an indicator that a threat actor has compromised the credentials of a user account and is attempting to gain unauthorized access to the account. |
| User Added to a Microsoft Entra ID Privileged Group | Lists users added to privileged groups |
| User Assigned New Privileged Role | Lists users assigned new eligible or active privileged roles. This doesn't include Privileged Identity Management (PIM) role activations. |
| User Removed from a Privileged Role | Lists users whose privileged roles changed |

## File Server

| Report Name | Description |
| --- | --- |
| All File Server Changes | Lists all activities occurring on audited file servers, including changes, failed modifications, file reads, and failed read attempts. |
| Copied Files | Lists files that were copied within the monitored file share. For each file, it provides details, including the name, original file location, who copied the file, and when it was copied. Use this report to protect critical information against misuse and ensure that files containing sensitive data aren't copied without proper authorization. |
| Created Files | Lists newly created files and folders. Use it to analyze increased disk space usage. |
| Deleted Files | Lists the deleted files and folders. It helps track the removal of critical data and prevent accidental or unauthorized deletions. |
| Moved Files | Lists files and folders that were moved to a new location within the monitored scope. For each file or folder, the report displays the name and location of the original object, who moved the object, and when it was moved. |

## Exchange Online

| Report Name | Description |
| --- | --- |
| All Exchange Online Changes | Lists all changes made to Exchange Online objects, configurations, and permissions. |
| All Exchange Online Non-Owner Mailbox Access Events | Lists all mailbox access performed by someone other than the mailbox owner. Use this report to protect your Exchange Online organization by identifying unauthorized activity. |
| Exchange Online Group Changes | Lists changes made to Exchange Online groups. Use this report to monitor the structure of your Exchange Online groups for changes that could lead to data leaks. |
| Exchange Online Mail User Changes | Lists changes made to the properties ofmailusers, including delivery restrictions. Use this report to detect suspicious activity in your Exchange Online organization. |
| Exchange Online Mailbox Permissions Changes | Lists all changes made to mailbox permissions, such as granting or revoking access rights to specific users. Use this report to detect unapproved permission changes. |
| Exchange Online Mailbox Policy Changes | Lists modifications made to mailbox policies. Use this report to monitor security in your Exchange Online organization and spot changes to business-critical policies. |

## SharePoint Online

| Report Name | Description |
| --- | --- |
| All SharePoint Online Activity | Lists all activities across SharePoint Online sites and OneDrive for Business. |
| Anonymous Sharing Link Created | Lists all instances where anonymous sharing links are created |
| Content Management | Lists content-related activities, such as uploads, downloads, modifications, and deletions, that have occurred within the sites, lists, list items, and documents |
| Data Access | Lists the users who have accessed or downloaded documents from your SharePoint Online sites, or who have synchronized files to OneDrive for Business. |
| External User Activity | Lists all activities performed by external users, such as guest users, on SharePoint Online. By using this report, administrators can monitor external user interactions and ensure compliance with external collaboration policies. |
| High Risk Members Added | Monitors the addition of high-risk members to sensitive groups |
| High Risk Permissions Added | Tracks the assignment of high-risk permissions, such as granting broad access to various user groups. This report helps oversee and mitigate potential security risks by ensuring that elevated permissions are granted with proper authorization. |
| New Sharing Link with External User Access | Monitors the creation of new sharing links that grant access to external users |
| Sharing and Security Changes | Tracks changes to security group membership, policies, and sharing settings, such as promoting a user to site collection administrator or sharing data with external users. |
| Sharing with Anyone Enabled on Site |  |
| Sensitive Data Accessed by Copilot |  |
| All Copilot Interactions |  |
| Activity Related to Sensitive Data | Tracks all activity related to documents marked as sensitive. It provides insights into how sensitive information is accessed and modified. |
| Modifications and Deletions of Sensitive Documents | Provides an overview of all modifications and deletions related to sensitive documents. |
| External Activity with Sensitive Data | Highlights interactions between external users and documents labeled as sensitive. |
| Failed Sensitive Data Access Attempts | Monitors unsuccessful attempts to access sensitive data, helping to identify potential security threats. It provides insights into unauthorized access attempts, enabling proactive measures to prevent future breaches and protect sensitive resources. |

## Self Audit

| Report Name |
| --- |
| All Self Audit Activity |

## SQL Database

| Report Name | Description |
| --- | --- |
| All SQL Logons | Lists all login attempts on the SQL Server. Use this report to analyze user activity on production databases. |
| SQL Failed Logons | Lists the failed login attempts on the SQL Server. Use this report to identify potential security threats and analyze login issues. |

## Crawl Logs

| Report Name |
| --- |
| Crawl Logs |
| Processing Logs |

## Active Directory and Entra ID

| Report Name | Description |
| --- | --- |
| Accounts Deleted | Lists all deleted user accounts. It also provides information about when and by whom the accounts were deleted, which can help identify any unauthorized or suspicious activity within the system. |
| Accounts Disabled | Lists all disabled user accounts. It also provides information about when and by whom the accounts were disabled. |
| Accounts Enabled |  |
| Accounts Locked Out | Lists all locked-out user accounts. It also provides information about when and by whom the accounts were locked out. |
| All Logon Activity |  |
| Failed Logons |  |
| User Account Status Changes | Lists changes made to the status of user accounts, such as enabling, disabling, locking, or unlocking accounts. |

## Windows Server

| Report Name |
| --- |
| All Windows Server Activity Events |
| All Windows Server Activity Changes |
| Programs Added and Removed |
| Local User Accounts Locked Out |
| Local User Accounts Unlocked |
| Windows Event Log Cleared |

## Report Columns

Activity report grids display the following columns: Who, Action, What, Where, When, When (Local),
Workstation, and Tags.

**Filter a Report**

You can filter the data displayed in a report. Select a filter, operator, and value from the Filter,
Operator, and Value dropdown menus, then click **Search**.

You can select more than one filter.

For options displayed in the Operator dropdown menu, see the
[Filter Operators ](/docs/1secure/admin/searchandreports/filteroperators.md)topic.

**Subscribe to Activity Reports**

You can subscribe to Activity reports to receive them automatically via email, or have them uploaded
to a specified folder in SharePoint Online. See the [Subscriptions](/docs/1secure/admin/searchandreports/subscriptions.md) topic for
additional information.
