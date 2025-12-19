---
title: "Role-Based Access and Delegation"
description: "Role-Based Access and Delegation"
sidebar_position: 230
---

# Role-Based Access and Delegation

Security and awareness of _who_ has access to _what_ is crucial for every organization. Besides
notifying you on _who_ changed _what_, _when_ and _where_, and _who_ has access to _what_ in your IT
infrastructure, Netwrix pays attention to safety of its own configuration and collected data.

To keep the monitoring process secure, Netwrix suggests configuring role-based access. Delegating
control ensures that only appropriate users can modify the product configuration or view audit data,
based on your company policies and the user's job responsibilities.

![rbac-01](/images/auditor/10.6/admin/monitoringplans/rbac-01.webp)

Roles are described briefly in the table below and explained in detail in the next topic.

| Role                 | Access level                                                                                                            | Recommended use                                                                                                                                                                                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Global administrator | Full control. Access to global settings, monitoring plan configuration, collected data, access delegation, etc.         | The role should be assigned to a very limited number of employees—typically, only the owner of the Auditor Server host in your environment. By default, the user who installed Auditor is assigned the Global administrator role. All members of the local Administrators group are Global administrators too. |
| Configurator         | Access to monitoring plan configuration within the delegated scope: a monitoring plan or a folder with monitoring plans | The role is appropriate for system administrators, infrastructure engineers, and members of operations team who manage network and services in your organization but should not have access to sensitive data.                                                                                                 |
| Global reviewer      | Access to all data collected by Auditor and intelligence and visibility features.                                       | The role is appropriate for key employees who need to review audit data collected across various data sources—typically, IT managers, chief information security officer, and so on.                                                                                                                           |
| Reviewer             | Access to data collected by Auditor and intelligence and visibility features within the delegated scope.                | The role is appropriate for members of security team and helpdesk personnel who are responsible for mitigating risks in a certain sector of your environment (e.g., domain, file share). This role is granted to specialists who use the Integration API to retrieve data from the Audit Database.             |
| Contributor          | Write access to Auditor Server and Audit Database.                                                                      | This service role is granted to specialists who use the Integration API to write data to the Audit Database. This role is also granted to service accounts or any accounts used for interaction with Auditor Server (e.g., add-on scripts).                                                                    |

## Compare Roles

| Feature                                                                                       | Global administrator | Global reviewer                                 | Reviewer                                                                   | Configurator                                                                            | Contributor         |
| --------------------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------- |
| Launch Auditor client                                                                         | +                    | +                                               | +                                                                          | +                                                                                       | +                   |
| Delegate control, grant and revoke permissions                                                | +                    | –                                               | –                                                                          | –                                                                                       | –                   |
| View global settings                                                                          | +                    | Some                                            | Some                                                                       | Some                                                                                    | Some                |
| Modify global settings (including default Audit Database, licenses, retention settings, etc.) | +                    | –                                               | –                                                                          | –                                                                                       | –                   |
| Monitoring plan configuration                                                                 |                      |                                                 |                                                                            |                                                                                         |                     |
| List folders                                                                                  | +                    | +                                               | +                                                                          | +                                                                                       | +                   |
| Add, remove, rename folders                                                                   | +                    | –                                               | –                                                                          | Some Only under assigned folders provided that directly assigned roles do not conflict. | –                   |
| List monitoring plans, review status                                                          | +                    | +                                               | +                                                                          | +                                                                                       | +                   |
| Add, remove, rename monitoring plans                                                          | +                    | –                                               | –                                                                          | Some Only under assigned folders provided that directly assigned roles do not conflict. | –                   |
| Modify monitoring plan settings                                                               | +                    | Some Add and remove Activity Summary recipients | Some Add and remove Activity Summary recipients within the delegated scope | Some Restricted to the delegated scope (folder or monitoring plan)                      | –                   |
| List data sources and items in monitoring plan                                                | +                    | +                                               | +                                                                          | +                                                                                       | +                   |
| Add, modify, remove data sources, enable or disable auditing                                  | +                    | –                                               | –                                                                          | Some Restricted to the delegated scope (folder or monitoring plan)                      | –                   |
| Add, modify, remove items in monitoring plan                                                  | +                    | –                                               | –                                                                          | Some Restricted to the delegated scope (folder or monitoring plan)                      | –                   |
| Manage state-in-time data, upload snapshots to the Audit Database                             | +                    | +                                               | –                                                                          | –                                                                                       | –                   |
| Intelligence                                                                                  |                      |                                                 |                                                                            |                                                                                         |                     |
| List reports                                                                                  | +                    | +                                               | +                                                                          | +                                                                                       | +                   |
| Generate reports                                                                              | +                    | +                                               | Some Restricted to the delegated scope (folder or monitoring plan)         | –                                                                                       | –                   |
| List report subscriptions                                                                     | +                    | +                                               | +                                                                          | +                                                                                       | +                   |
| Create, modify, remove subscriptions                                                          | +                    | +                                               | –                                                                          | –                                                                                       | –                   |
| See search results                                                                            | +                    | +                                               | Some Restricted to the delegated scope (folder or monitoring plan)         | –                                                                                       | –                   |
| List, create, modify, delete custom reports                                                   | +                    | +                                               | +                                                                          | +                                                                                       | - (only can _list_) |
| List alerts                                                                                   | +                    | +                                               | +                                                                          | +                                                                                       | +                   |
| Create, modify, delete alerts                                                                 | +                    | +                                               | –                                                                          | –                                                                                       | –                   |
| Import investigation data from the Long-Term Archive                                          | +                    | –                                               | –                                                                          | –                                                                                       | –                   |
| View investigation data                                                                       | +                    | +                                               | –                                                                          | –                                                                                       | –                   |
| View Behavior Anomalies list                                                                  | +                    | +                                               | –                                                                          | –                                                                                       | –                   |
| Review user profile                                                                           | +                    | +                                               | –                                                                          | –                                                                                       | –                   |
| Update anomaly status                                                                         | +                    | +                                               | –                                                                          | –                                                                                       | –                   |
| **Risk Assessment Overview dashboard and drill-down reports**                                 |                      |                                                 |                                                                            |                                                                                         |                     |
| View Risk Assessment Overview results (dashboard, drill-down reports)                         | +                    | +                                               | Some Restricted to delegated scope (folder or monitoring plan)             | -                                                                                       | -                   |
| Modify risk level thresholds                                                                  | +                    | +                                               | -                                                                          | -                                                                                       | -                   |
| Customize risk indicators                                                                     | +                    | +                                               | -                                                                          | -                                                                                       | -                   |
| Auditor Integration API                                                                       |                      |                                                 |                                                                            |                                                                                         |                     |
| Write Activity Records                                                                        | +                    | –                                               | –                                                                          | –                                                                                       | +                   |
| Retrieve Activity Records                                                                     | +                    | +                                               | + Restricted to the delegated scope (folder or monitoring plan)            | –                                                                                       | –                   |

## Assign Roles

Netwrix Auditor allows assigning roles on the product as a whole, or within a specific _scope_. A
scope can be limited to a single monitoring plan or to the contents of a folder. This helps to
ensure that only authorized personnel has access to the relevant data. For example, database
administrators (DBAs) should not access Active Directory management data, and domain administrators
do not need permissions to view database schema changes or update data collection settings, and so
on.

### Understanding Scopes

Scopes for different Auditor roles are as follows:

| Scope                         | Roles                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Global (All monitoring plans) | Global administrator Global reviewer Contributor **NOTE:** To assign Global role, you need to click **Delegate** button from All Monitoring Plans list. |
| Folder level                  | Configurator Reviewer                                                                                                                                   |
| Plan level                    | Configurator Reviewer                                                                                                                                   |

Follow the steps to delegate control to some scope, review, or revoke assigned roles.

**Step 1 –** On the main Auditor page, navigate to the **Monitoring Plans** section.

**Step 2 –** Browse your monitoring plans tree and select the scope you want to delegate to a user
(e.g., All monitoring plans root folder, a folder, or a monitoring plan).

**Step 3 –** Click **Delegate**.

Review roles that are already defined for this scope.

Do one of the following:

| To...                    | Do...                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Assign a role            | 1. Select Add User. 2. In the dialog that opens, specify a user (or a group) and a role.                                   |
| Revoke a role assignment | - Click ![delete](/images/auditor/10.6/admin/monitoringplans/delete.webp) next to the user. |

**Step 4 –** Click **Save** or **Save&Close**.

### Browser Role on Report Server

Along with adding a new Global administrator, Global reviewer or Reviewer role, Auditor will
automatically assign this user the Browser role on the Report Server (SSRS).

The Browser role is required to generate reports. It is granted on all reports — or within a
delegated scope.

If for some reason Auditor is unable to grant the Browser role, configure it manually. See the
[SQL Server Reporting Services](/docs/auditor/10.6/requirements/sqlserverreportingservice.md)
topic for additional information.

### Default Role Assignments

By default, several accounts and local groups are assigned the following roles:

| Account or group name  | Role                 | Details                                                                                                           |
| ---------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Local Administrators   | Global administrator |                                                                                                                   |
| Local service accounts | Global administrator | Global administrator Auditor uses system accounts for data processing and interaction between product components. |
| Auditor Administrators | Global administrator |                                                                                                                   |
| Auditor Client Users   | Global reviewer      |                                                                                                                   |

#### Delegating Control via Windows Group Membership

During the Auditor Server installation, Netwrix Auditor Administrators and Netwrix Auditor Client
Users groups are created automatically. To delegate control via group membership, you need to add
users to these groups on the computer where Auditor Server resides.

Users will be granted roles with extended permissions. You may need to limit their scope to a
specific monitoring plan.

Follow the steps to add an account to a group.

**Step 1 –** On the computer where Auditor Server is installed, start the Local Users and Computers
snap-in.

**Step 2 –** Navigate to the **Groups** node and locate the Netwrix Auditor Administrators or
Netwrix Auditor Client Users group.

**Step 3 –** In the group properties, click **Add**.

Specify users you want to be included in this group.

![Roles_Groups](/images/auditor/10.6/admin/monitoringplans/roles_groups.webp)

**NOTE:** For additional information about User Activity video access management, see the
[Configure Video Recordings Playback Settings](/docs/auditor/10.6/configuration/useractivity/videorecordings.md)
topic.

## Provide Access to a Limited Set of Data

By default, only users designated in Auditor are allowed to view its configuration and collected
data. This policy ensures that only authorized and trustworthy users access sensitive data and make
changes.

However, in some cases, organizations need to provide certain employees with access to a limited set
of audit data. For example, an auditor might need to review particular access reports once or twice
a year. You can provide these users (recipients) with means to review the data they need without
actually running Auditor. This ensures that dedicated specialists have access to the data while
preventing data breaches and ensuring that sensitive data is not being distributed across the whole
company.

Netwrix recommends granting limited access permissions to employees who need to:

- Review audit data periodically in accordance with company policy
- Review audit data accumulated over time
- Be notified only in case of a rare incident

To grant limited access to audit data, you can:

| Do..                                | Recommended use                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schedule email report subscriptions | This is helpful when you want to share information with a group of employees, external consultants, auditors, and so on. Reports are sent according to a specified schedule and recipients can review them, but they do not have any other means to access audit data. Basically, this option is enough for employees who are interested in a high-level summary—for example, an auditor who performs monthly access rights attestation on critical folders or a senior manager.                                                                                                                                                                      |
| Publish reports to file shares      | This scenario works great for a helpdesk with several departments. Assume, each department has its own field of responsibility and must not disclose information to other departments. You can configure Auditor to publish reports to folders that can be accessed by employees from a specific department only. You might set up the following folders and permissions: - The user support team has access to a folder with reports on account lockouts and password resets. - File server helpdesk personnel have access to a different folder with daily reports listing all file removals. - The helpdesk supervisor has access to both folders. |
| Configure alerts                    | This is helpful for rare occasions when you have to notify some senior specialists about critical system state that has to be addressed immediately, e.g., CISO must mitigate risks in the event of massive deletions in the sensitive data storage.                                                                                                                                                                                                                                                                                                                                                                                                  |
