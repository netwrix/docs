---
title: "File Servers"
description: "File Servers"
sidebar_position: 90
---

# File Servers

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.9/requirements/ports.md) – To ensure successful data
  collection and activity monitoring configure necessary protocols and ports for inbound and
  outbound connections
- [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to
  audit your IT systems

- [File Servers](/docs/auditor/10.9/configuration/fileservers/overview.md) – Configure data source as required
  to be monitored



Complete the following fields:

- General
- Monitor this data source and collect activity data – Enable monitoring of the selected data source and configure Auditor to collect and store audit data.
- Specify actions for monitoring – Specify actions you want to track and auditing mode.

|               |                                                                                                                                          |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **Changes**   |                                                                                                                                          |
| Successful    | Use this option to track changes to your data. Helps find out who made changes to your files, including their creation and deletion.     |
| Failed        | Use this option to detect suspicious activity on your file server. Helps identify potential intruders who tried to modify or delete files, etc., but failed to do it. |
| **Read access** |                                                                                                                                         |
| Successful    | Use this option to supervise access to files containing confidential data intended for privileged users. Helps identify who accessed important files besides your trusted users. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Long-Term Archive. |
| Failed        | Use this option to track suspicious activity. Helps find out who was trying to access your private data without proper justification. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Long-Term Archive. |

Actions reported by Auditor vary depending on the file server type and the audited object (file, folder, or share). The changes include creation, modification, deletion, moving, etc. To track the copy action, enable successful read access and change auditing.

- Specify data collection method – You can enable network traffic compression. If enabled, a Compression Service will be automatically launched on the audited computer, collecting and prefiltering data. This significantly improves data transfer and minimizes the impact on the target computer performance.
To collect data from 32-bit operating systems, network traffic compression must be disabled.
To collect data from Windows Failover Cluster, network traffic compression must be enabled.

- Configure audit settings – You can adjust audit settings automatically. Your current audit settings will be checked on each data collection and adjusted if necessary. This method is recommended for evaluation purposes in test environments. If any conflicts are detected with your current audit settings, automatic audit configuration will not be performed.
Do not select the checkbox if you want to configure audit settings manually. Some settings cannot be configured automatically. The product has the following limitations depending on your file server type

| File Server                             | SACL Check | SACL Adjust | Policy Check | Policy Adjust | Log Check | Log Adjust |
|-----------------------------------------|------------|-------------|--------------|---------------|-----------|------------|
| Windows                                 | +          | +           | +            | +             | +         | +          |
| Dell Celerra\VNX\Unity                  | +          | +           | +            | —             | +         | —          |
| Dell Isilon                             | n/a        | n/a         | +            | —             | +         | —          |
| NetApp Data ONTAP 7 and 8 in 7-mode     | +          | +           | +            | +             | +         | +          |
| NetApp Clustered Data ONTAP 8 and ONTAP 9 | +          | +           | +            | +             | +         | —          |
| Nutanix Files                           | n/a        | n/a         | +            | —             | n/a       | n/a        |

- Collect data for state-in-time reports – Configure Auditor to store daily snapshots of your system configuration required for further state-in-time reports generation.
When auditing file servers, changes to effective access permissions can be tracked in addition to audit permissions. By default, Combination of file and share permissions is tracked. File permissions define who has access to local files and folders. Share permissions provide or deny access to the same resources over the network. The combination of both determines the final access permissions for a shared folder—the more restrictive permissions are applied. Upon selecting Combination of file and share permissions only the resultant set will be written to the Audit Database. Select File permissions option too if you want to see difference between permissions applied locally and the effective file and share permissions set. To disable auditing of effective access, unselect all checkboxes under Include details on effective permissions.
In the Schedule state-in-time data collection section, you can select a custom weekly interval for snapshots collection. Click Modify and select day(s) of week you want your snapshot to be collected.
In the Manage historical snapshots section, you can click Manage and select the snapshots that you want to import to the Audit Database to generate a report on the data source's state at the specific moment in the past.
You must be assigned the Global administrator or the Global reviewer role to import snapshots.
Move the selected snapshots to the Snapshots available for reporting list using the arrow button.
The product updates the latest snapshot on the regular basis to keep users up to date on actual system state. Users can also configure Only the latest snapshot is available for reporting in Auditor. If you want to generate reports based on different snapshots, you must import snapshots to the Audit Database.

- Users

- Specify monitoring restrictions – Select the users to be excluded from search results, reports and Activity Summaries. To add users to the list, click Add and provide user name in the domain\user format: *mydomain\user1*.
  - Use NetBIOS domain name format.
  - To exclude events containing “System” instead of initiator's account name in the “Who” column, enter "System" value to the list.

In addition to the restrictions for a monitoring plan, you can use the *.txt files to collect more granular audit data. Note that the new monitoring scope restrictions apply together with previous exclusion settings configured in the *.txt files.

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the Data source list. As a next step, click Add item to specify an object for
monitoring.

|                     |
| ------------------- |
| Windows File Server |
| Dell Data storage   |
| NetApp storage      |
| Nutanix File Server |

By default, Auditor will monitor all shares stored in the specified location, except for hidden
shares (both default and user-defined). If you want to monitor user-defined hidden shares, select
the related option in the monitored item settings.

Administrative hidden shares like default system root or Windows directory (_ADMIN$_), default drive
shares (_D$, E$_), etc. will not be monitored. See the
[Add Items for Monitoring](/docs/auditor/10.9/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic for additional
information.

_Remember,_ before adding your monitored items, examine the considerations, limitations and
recommendations provided in the following sections:

- [DFS-Related Constraints](/docs/auditor/10.9/configuration/fileservers/windows/overview.md#dfs-related-constraints)
- [Supported File Servers and Devices](/docs/auditor/10.9/configuration/fileservers/overview.md#supported-file-servers-and-devices)
- [State-in-Time Data](/docs/auditor/10.9/configuration/fileservers/overview.md#state-in-time-data)
- [Sensitive Data](/docs/auditor/10.9/configuration/fileservers/overview.md#sensitive-data)

## Dell VNX VNXe

Dell VNX, VNXe, Celerra, and Unity NAS devices are collectively referred to as Dell Data Storage.

Complete the following fields:

| Option                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Specify Dell VNX/VNXe, Celerra or Unity storage array | Provide a server name by entering its FQDN, NETBIOS or IPv4 address. You can click Browse to select a computer from the list of computers in your network.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Specify the account for collecting data               | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional information.                                                                                                               |
| Scope                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Monitor hidden shares                                 | By default, Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). Select **Monitor user-defined hidden shares** if necessary. Even when this option is selected, the product will not collect data from administrative hidden shares such as: default system root or Windows directory (ADMIN$), default drive shares (D$, E$, etc.), shares used by printers to enable remote administration (PRINT$), etc.                                                                                                                |
| Specify monitoring restrictions                       | Specify restriction filters to narrow your monitoring scope (search results, reports and Activity Summaries). All filters are applied using AND logic. See the Fine-tune Monitoring Scope for additional information on how to narrow your monitoring scope. In addition to the restrictions for a monitoring plan, you can use the \*.txt files to collect more granular audit data. Note that the new monitoring scope restrictions apply together with previous exclusion settings configured in the \*.txt files. See the [Monitoring Plans](/docs/auditor/10.9/admin/monitoringplans/overview.md)topic for additional information. |

### Fine-tune Monitoring Scope

To audit all file shares, under Specify monitoring restrictions, select Monitor all file shares in
the array.

![item_emc_scope_thumb_0_0](/images/auditor/10.9/admin/monitoringplans/fileservers/item_emc_scope_thumb_0_0.webp)

You can also create lists of specific file shares to include and/or exclude from being audited.

#### Include a File Share

Follow the steps to include a file share.

**Step 1 –** Under Specify monitoring restrictions, select Specific file shares.

**Step 2 –** Click Add Inclusion.

**Step 3 –** Provide UNC path to a shared resource. For example: _NewStation\Shared._

**Step 4 –** Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).

#### Exclude Specific Data

Follow the steps to exclude specific data.

Click Add Exclusion. Then, in the Specify Filters dialog, do the following:

**Step 5 –** Provide the path to the file share where you are going to exclude some audit data. Use
the path format as it appears in the "_What_" column of reports and Activity Summaries — for
example, _\\corpsrv\shared_.

**Step 6 –** You can use a wildcard (\*) only if you need to exclude user activity on this file
share. For other data types (_state-in-time_ or _all data_) wildcards are not supported. This refers
to the specified shared folder, its subfolders and files.

**Step 7 –** Select what type of data you want to exclude:

| Option            | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All Data**      | Select if you want to completely exclude the specified file share from being audited. The product will not collect any user activity or state-in-time data. **NOTE:** In this case,Auditor does not adjust audit settings automatically for the selected folders. | A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Thus, s/he configures the product not to monitor this folder at all. |
| State-in-Time     | Select to configure Auditor to exclude data for the state-in-time reports from the monitoring scope.                                                                                                                                                              | A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Auditor to collect state-in-time data for this folder. |
| **User Activity** | Select to exclude actions performed by specific users on the selected file share. See the procedure below for details. **NOTE:** In this case, the product still collects stat-in-time data for this share.                                                       | A Security Officer wants to monitor a file share that contains a public folder for which s/he does not want to collect _Read_ operations.                                              |

**Follow the steps to exclude specific user activity.**

**Step 1 –** Specify what user accounts should be excluded:

- All Users — Select to exclude the activity of any user on the file share you specified.
- These users— Select to exclude specific users' activity. Provide user names as shown in the
  "_Who_" column in reports and Activity Summaries, e.g., _MyDomain\user1_. To enter multiple
  accounts, use comma as a separator.

**Step 2 –** Specify what actions should be excluded:

- All actions — Exclude all actions of the selected users
- These actions — Use the drop-down list to select the actions to exclude, e.g. _Added_ and _Moved_.

![Specify Filters](/images/auditor/10.9/admin/monitoringplans/fileservers/item_computer_exclude_users_thumb_0_0.webp)

**Step 3 –** After configuring all filters, click **Add** to save them and return to the item
settings.

## Dell Isilon

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Specify Dell Isilon storage array       | Provide the IP address or the host name of the name server used to connect to your access zone. For example, _account.corp.lab_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Access Zone                             | Enter the name of access zone partition within your EMC Isilon cluster. For example, _zone_account_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| OneFS web administration interface URL  | Enter Dell Isilon web administration URL (e.g., _https://isiloncluster.corp.lab:8080_). This URL is used to get configuration details about your Isilon cluster via OneFS API.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| File Share UNC path to audit logs       | Path to the file share located on a Dell Isilon with event log files (e.g., _\\srv\netwrix_audit$\logs_).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional information.                                                                                                                                                 |
| Scope                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Specify monitoring restrictions         | Specify restriction filters to narrow your monitoring scope (search results, reports and Activity Summaries). All filters are applied using AND logic. See the Fine-tune Monitoring ScopeFine-tune Monitoring Scopetopic for additional information about how to narrow your monitoring scope. In addition to the restrictions for a monitoring plan, you can use the \*.txt files to collect more granular audit data. Note that the new monitoring scope restrictions apply together with previous exclusion settings configured in the \*.txt files. See the [Monitoring Plans](/docs/auditor/10.9/admin/monitoringplans/overview.md)topic for additional information. |

### Configure the Scope

You can configure Netwrix Auditor to audit all file shares except for ones added as exclusions. For
that, under Specify monitoring restrictions, select All file shares in the array. You can also
create lists of specific file shares to include and/or exclude from being audited. Review the
following for additional information:

- Add Inclusion
- Add Exclusion

### Add Inclusion

Follow the steps to add inclusion.

**Step 1 –** Under Specify monitoring restrictions, select Specific file shares.

**Step 2 –** Click Add Inclusion.

**Step 3 –** Provide UNC path to a shared resource. For example: _NewStation\Shared._

Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).

### Add Exclusion

Follow the steps to add exclusion.

Click Add Exclusion. Then, in the Specify Filters dialog, do the following:

**Step 4 –** Provide the path to the file share where you are going to exclude some audit data. Use
the path format as it appears in the "_What_" column of reports and Activity Summaries — for
example, _\\corpsrv\shared_.

**Step 5 –** You can use a wildcard (\*) only if you need to exclude user activity on this file
share. For other data types (_state-in-time_ or _all data_) wildcards are not supported. This refers
to the specified shared folder, its subfolders and files.

**Step 6 –** Select what type of data you want to exclude:

| Option            | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All Data**      | Select if you want to completely exclude the specified file share from being audited. The product will not collect any user activity or state-in-time data. **NOTE:** In this case,Auditor does not adjust audit settings automatically for the selected folders. | A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Thus, s/he configures the product not to monitor this folder at all. |
| State-in-Time     | Select to configure Auditor to exclude data for the state-in-time reports from the monitoring scope.                                                                                                                                                              | A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Auditor to collect state-in-time data for this folder. |
| **User Activity** | Select to exclude actions performed by specific users on the selected file share. See the procedure below for details. **NOTE:** In this case, the product still collects stat-in-time data for this share.                                                       | A Security Officer wants to monitor a file share that contains a public folder for which s/he does not want to collect _Read_ operations.                                              |

**Follow the steps to exclude specific user activity.**

**Step 1 –** Specify what user accounts should be excluded:

- All Users — Select to exclude the activity of any user on the file share you specified.
- These users— Select to exclude specific users' activity. Provide user names as shown in the
  "_Who_" column in reports and Activity Summaries, e.g., _MyDomain\user1_. To enter multiple
  accounts, use comma as a separator.

**Step 2 –** Specify what actions should be excluded:

- All actions — Exclude all actions of the selected users
- These actions — Use the drop-down list to select the actions to exclude, e.g. _Added_ and _Moved_.

![Specify Filters](/images/auditor/10.9/admin/monitoringplans/fileservers/item_computer_exclude_users_thumb_0_0.webp)

**Step 3 –** After configuring all filters, click **Add** to save them and return to the item
settings.

## NetApp

Complete the following fields:

| Option                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Specify NetApp file server                              | Provide a server name by entering its FQDN, NETBIOS or IPv4 address. You can click Browse to select a computer from the list of computers in your network.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| File share UNC path to audit logs                       | Select one of the following: - Detect automatically—If selected, a shared resource will be detected automatically. - Use this path—UNC path to the file share located on a NetApp Filer with event log files (e.g., _\\CORP\ETC$\log_).                                                                                                                                                                                                                                                                                                                                                |
| Specify the account for collecting data                 | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional information.                                                                                                    |
| ONTAPI/ONTAP REST API                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Specify protocol for accessing ONTAPI/ONTAP REST API    | Select one of the following: - Detect automatically—If selected, a connection protocol will be detected automatically. - HTTP - HTTPS Refer to [Netwrix Auditor Installation and Configuration Guide](https://www.netwrix.com/download/documents/Netwrix_Auditor_Installation_Configuration_Guide.pdf) for detailed instructions on how to enable HTTP or HTTPS admin access. NOTE: ONTAP REST API works only over HTTPS protocol                                                                                                                                                      |
| Specify management interface                            | Select management interface to connect to ONTAPI/ONTAP REST API. If you want to use custom management interface for ONTAPI/ONTAP REST API, select Custom and provide a server name by entering its FQDN, NETBIOS or IP address.                                                                                                                                                                                                                                                                                                                                                        |
| Specify account for connecting to ONTAPI/ONTAP REST API | Select an account to connect to NetApp and collect data through ONTAPI/ONTAP REST API. If you want to use a specific account (other than the one you specified on the General tab), select **Custom** and enter credentials. The credentials are case sensitive. Take into consideration that even if a custom account is specified, the account selected on the General tab must be a member of the Builtin\Administrators group and have sufficient permissions to access audit logs shared folder and audited shares. [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md)                 |
| Scope                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Monitor hidden shares                                   | By default, Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). Select **Monitor user-defined hidden shares** if necessary. Even when this option is selected, the product will not collect data from administrative hidden shares such as: default system root or Windows directory (ADMIN$), default drive shares (D$, E$, etc.), shares used by printers to enable remote administration (PRINT$), etc. **CAUTION:** Monitoring of non-default hidden shares is not supported for NetApp servers in 7-mode. |
| Specify monitoring restrictions                         | Specify restriction filters to narrow your monitoring scope (search results, reports and Activity Summaries). All filters are applied using AND logic. Configure Scope how to narrow your monitoring scope. In addition to the restrictions for a monitoring plan, you can use the \*.txt files to collect more granular audit data. Note that the new monitoring scope restrictions apply together with previous exclusion settings configured in the \*.txt files. See the [Monitoring Plans](/docs/auditor/10.9/admin/monitoringplans/overview.md)topic for additional information.                                       |

### Configure Scope

You can configure Netwrix Auditor to audit all file shares except for ones added as exclusions. For
that, under Specify monitoring restrictions, select All file shares in the array. You can also
create lists of specific file shares to include and/or exclude from being audited. Review the
following for additional information:

### Add Inclusion

Follow the steps to add inclusion.

**Step 1 –** Under Specify monitoring restrictions, select Specific file shares.

**Step 2 –** Click Add Inclusion.

**Step 3 –** Provide UNC path to a shared resource. For example: _NewStation\Shared._

NOTE: Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).

### Add Exclusion

Follow the steps to add exclusion.

Click Add Exclusion. Then, in the Specify Filters dialog, do the following:

**Step 4 –** Provide the path to the file share where you are going to exclude some audit data. Use
the path format as it appears in the "_What_" column of reports and Activity Summaries — for
example, _\\corpsrv\shared_.

**Step 5 –** You can use a wildcard (\*) only if you need to exclude user activity on this file
share. For other data types (_state-in-time_ or _all data_) wildcards are not supported. This refers
to the specified shared folder, its subfolders and files.

**Step 6 –** Select what type of data you want to exclude:

| Option            | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All Data**      | Select if you want to completely exclude the specified file share from being audited. The product will not collect any user activity or state-in-time data. **NOTE:** In this case,Auditor does not adjust audit settings automatically for the selected folders. | A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Thus, s/he configures the product not to monitor this folder at all. |
| State-in-Time     | Select to configure Auditor to exclude data for the state-in-time reports from the monitoring scope.                                                                                                                                                              | A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Auditor to collect state-in-time data for this folder. |
| **User Activity** | Select to exclude actions performed by specific users on the selected file share. See the procedure below for details. **NOTE:** In this case, the product still collects stat-in-time data for this share.                                                       | A Security Officer wants to monitor a file share that contains a public folder for which s/he does not want to collect _Read_ operations.                                              |

**Follow the steps to exclude specific user activity.**

**Step 1 –** Specify what user accounts should be excluded:

- All Users — Select to exclude the activity of any user on the file share you specified.
- These users— Select to exclude specific users' activity. Provide user names as shown in the
  "_Who_" column in reports and Activity Summaries, e.g., _MyDomain\user1_. To enter multiple
  accounts, use comma as a separator.

**Step 2 –** Specify what actions should be excluded:

- All actions — Exclude all actions of the selected users
- These actions — Use the drop-down list to select the actions to exclude, e.g. _Added_ and _Moved_.

![Specify Filters](/images/auditor/10.9/admin/monitoringplans/fileservers/item_computer_exclude_users_thumb_0_0.webp)

**Step 3 –** After configuring all filters, click **Add** to save them and return to the item
settings.

## Nutanix Files

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.9/requirements/ports.md) – To ensure successful data
  collection and activity monitoring configure necessary protocols and ports for inbound and
  outbound connections
- [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to
  audit your IT systems

Complete the following fields:

- Monitor this data source and collect activity data – Enable monitoring of the selected data source and configure Auditor to collect and store audit data.
- Specify actions for monitoring – Specify actions you want to track and auditing mode.

|               |                                                                                                                                          |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **Changes**   |                                                                                                                                          |
| Successful    | Use this option to track changes to your data. Helps find out who made changes to your files, including their creation and deletion.     |
| Failed        | Use this option to detect suspicious activity on your file server. Helps identify potential intruders who tried to modify or delete files, etc., but failed to do it. |
| **Read access** |                                                                                                                                         |
| Successful    | Use this option to supervise access to files containing confidential data intended for privileged users. Helps identify who accessed important files besides your trusted users. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Long-Term Archive. |
| Failed        | Use this option to track suspicious activity. Helps find out who was trying to access your private data without proper justification. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Long-Term Archive. |

Actions reported by Auditor vary depending on the file server type and the audited object (file, folder, or share). The changes include creation, modification, deletion, moving, etc. To track the copy action, enable successful read access and change auditing.

- Specify data collection method – You can enable **network traffic compression.** If enabled, a Compression Service will be automatically launched on the audited computer, collecting and prefiltering data. This significantly improves data transfer and minimizes the impact on the target computer performance.

- Configure audit settings – You can adjust audit settings automatically. Your current audit settings will be checked on each data collection and adjusted if necessary. This method is recommended for evaluation purposes in test environments. If any conflicts are detected with your current audit settings, automatic audit configuration will not be performed. Do not select the checkbox if you want to configure audit settings manually. See the [Supported Data Sources](/docs/auditor/10.9/requirements/supporteddatasources/supporteddatasources.md) configuration topic for additional information about audit settings required to collect comprehensive audit data and the instructions on how to configure them. Netwrix Auditor can configure the following settings:
  - Policy Check
  - Policy Adjust

- Collect data for state-in-time reports – Configure Auditor to store daily snapshots of your system configuration required for further state-in-time reports generation. See the [State–In–Time Reports](/docs/auditor/10.9/admin/reports/types/stateintime/overview.md) topic for additional information. When auditing file servers, changes to effective access permissions can be tracked in addition to audit permissions. By default, Combination of file and share permissions is tracked. File permissions define who has access to local files and folders. Share permissions provide or deny access to the same resources over the network. The combination of both determines the final access permissions for a shared folder—the more restrictive permissions are applied. Upon selecting Combination of file and share permissions only the resultant set will be written to the Audit Database. Select File permissions option too if you want to see difference between permissions applied locally and the effective file and share permissions set. To disable auditing of effective access, unselect all checkboxes under Include details on effective permissions. In the Schedule state-in-time data collection section, you can select a custom weekly interval for snapshots collection. Click Modify and select day(s) of week you want your snapshot to be collected. In the Manage historical snapshots section, you can click **Manage** and select the snapshots that you want to import to the Audit Database to generate a report on the data source's state at the specific moment in the past. You must be assigned the Global administrator or the Global reviewer role to import snapshots. Move the selected snapshots to the Snapshots available for reporting list using the arrow button. The product updates the latest snapshot on the regular basis to keep users up to date on actual system state. Users can also configure Only the latest snapshot is available for reporting in Auditor. If you want to generate reports based on different snapshots, you must import snapshots to the Audit Database.

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the **Data source** list. As a next step, click **Add item** to specify an
object for monitoring. See the [Add Items for Monitoring](/docs/auditor/10.9/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic for additional information.

## Nutanix SMB Shares

Complete the following fields:

| Option                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **General**                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Specify Nutanix File Server                                    | Provide a server name by entering its FQDN, NETBIOS or IPv4 address. You can click Browse to select a computer from the list of computers in your network. If you need to audit a 3-node cluster, it is recommended to use FQDN or NETBIOS name.                                                                                                                                                                                                                                           |
| Specify the account for collecting data                        | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for more information.                                                  |
| Specify listening port for incoming connections                | Provide the name of the TCP port to listen to notifications on the operations with Nutanix file shares. Default is **9898**. For details on how to open the port, refer to the [Nutanix Ports](/docs/auditor/10.9/configuration/fileservers/nutanix/ports.md) topic.                                                                                                                                                                                                                                 |
| **Nutanix File Server REST API**                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Specify account for connecting to Nutanix File Server REST API | Specify the account that will be used to connect to Nutanix REST API. This account should have sufficient privileges on the Nutanix File Server. For details, refer to [Create User Account to Access Nutanix REST API](/docs/auditor/10.9/configuration/fileservers/nutanix/useraccount.md).                                                                                                                                                                                                        |
| **Scope**                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Monitor hidden shares                                          | By default, Netwrix Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). Select **Monitor user-defined hidden shares** if necessary. Even when this option is selected, the product will not collect data from administrative hidden shares such as: default system root or Windows directory (ADMIN$), default drive shares (D$, E$, etc.), shares used by printers to enable remote administration (PRINT$), etc. |
| Specify monitoring restrictions                                | Specify restriction filters to narrow your monitoring scope (search results, reports and Activity Summaries). All filters are applied using AND logic. Refer to Configure Scope for detailed instructions on how to configure your monitoring scope. Currently, auditing is available for SMB shares only. Auditing of NFS shares is not supported due to known limitations.                                                                                                               |

### Configure Scope

You can configure Netwrix Auditor to audit all file shares except for ones added as exclusions. For
that, under Specify monitoring restrictions, select All file shares in the array. You can also
create lists of specific file shares to include and/or exclude from being audited. Review the
following for additional information:

### Add Inclusion

Follow the steps to add inclusion.

**Step 1 –** Under Specify monitoring restrictions, select Specific file shares.

**Step 2 –** Click Add Inclusion.

**Step 3 –** Provide UNC path to a shared resource. For example: _NewStation\Shared._

Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).

### Add Exclusion

Follow the steps to add exclusion.

Click Add Exclusion. Then, in the Specify Filters dialog, do the following:

**Step 4 –** Provide the path to the file share where you are going to exclude some audit data. Use
the path format as it appears in the "_What_" column of reports and Activity Summaries — for
example, _\\corpsrv\shared_.

**Step 5 –** You can use a wildcard (\*) only if you need to exclude user activity on this file
share. For other data types (_state-in-time_ or _all data_) wildcards are not supported. This refers
to the specified shared folder, its subfolders and files.

**Step 6 –** Select what type of data you want to exclude:

| Option            | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All Data**      | Select if you want to completely exclude the specified file share from being audited. The product will not collect any user activity or state-in-time data. **NOTE:** In this case,Auditor does not adjust audit settings automatically for the selected folders. | A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Thus, s/he configures the product not to monitor this folder at all. |
| State-in-Time     | Select to configure Auditor to exclude data for the state-in-time reports from the monitoring scope.                                                                                                                                                              | A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Auditor to collect state-in-time data for this folder. |
| **User Activity** | Select to exclude actions performed by specific users on the selected file share. See the procedure below for details. **NOTE:** In this case, the product still collects stat-in-time data for this share.                                                       | A Security Officer wants to monitor a file share that contains a public folder for which s/he does not want to collect _Read_ operations.                                              |

**Follow the steps to exclude specific user activity.**

**Step 1 –** Specify what user accounts should be excluded:

- All Users — Select to exclude the activity of any user on the file share you specified.
- These users— Select to exclude specific users' activity. Provide user names as shown in the
  "_Who_" column in reports and Activity Summaries, e.g., _MyDomain\user1_. To enter multiple
  accounts, use comma as a separator.

**Step 2 –** Specify what actions should be excluded:

- All actions — Exclude all actions of the selected users
- These actions — Use the drop-down list to select the actions to exclude, e.g. _Added_ and _Moved_.

![Specify Filters](/images/auditor/10.9/admin/monitoringplans/fileservers/item_computer_exclude_users_thumb_0_0.webp)

**Step 3 –** After configuring all filters, click **Add** to save them and return to the item
settings.

## Qumulo

Complete the following fields:

| Option                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| General                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Specify a file server                              | Provide UNC path to a file server. See the section below for special considerations. Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Specify the account for collecting data            | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional information.                                                                                                                                                  |
| Event Collection                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Specify a host or network resource                 | Provide UNC path to a file server or an IP range of servers you want to get activity events from. You can select to collect event data from the same server or provide a custom server or IP range.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Specify port and protocol for incoming connections | Use **Port** and **Protocol** to provide the port required for incoming connections (default is **UDP port 514**).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Scope                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Specify monitoring restrictions                    | Specify restriction filters to narrow your monitoring scope (search results, reports and Activity Summaries). All filters are applied using AND logic. By default, Netwrix Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares, select the related option in the monitored item settings. Remember that administrative hidden shares like default system root or Windows directory (ADMIN$), default drive shares (D$, E$), etc. will not be monitored. See the topics on the monitored items for details. |

## Synology

Complete the following fields:

| Option                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| General                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Specify a file server                              | Provide UNC path to a file server. See the section below for special considerations. Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Specify the account for collecting data            | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional information.                                                                                                                                                  |
| Event Collection                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Specify a host or network resource                 | Provide UNC path to a file server or an IP range of servers you want to get activity events from. You can select to collect event data from the same server or provide a custom server or IP range.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Specify port and protocol for incoming connections | Use **Port** and **Protocol** to provide the port required for incoming connections (default is **UDP port 514**).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Scope                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Specify monitoring restrictions                    | Specify restriction filters to narrow your monitoring scope (search results, reports and Activity Summaries). All filters are applied using AND logic. By default, Netwrix Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares, select the related option in the monitored item settings. Remember that administrative hidden shares like default system root or Windows directory (ADMIN$), default drive shares (D$, E$), etc. will not be monitored. See the topics on the monitored items for details. |


