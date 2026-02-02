---
title: "File Servers Monitoring Scope"
description: "File Servers Monitoring Scope"
sidebar_position: 20
---

# File Servers Monitoring Scope

You can specify data that you want to include into / exclude from the Windows File Server, NetApp
Filer, and Dell Data Storage (formerly EMC) monitoring scope. For that, you can configure monitoring
scope in Auditor client UI, as explained in the related section:

- [File Servers](/docs/auditor/10.7/admin/monitoringplans/fileservers/overview.md)
- Windows File Share

Besides, you can configure exclusions for file servers audit using the special txt files (omit
lists), as explained below.

Monitoring scope restrictions set up in the UI will apply together with the exclusion settings
configured in the \*.txt files.

**Follow the steps to exclude data from file server monitoring scope:**

**Step 1 –** Navigate to the "_%Netwrix Auditor installation folder%\File Server Auditing_" folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                     | Description                                                                                                                                                   | Syntax                                                                                                                                                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitcollectlist.txt      | Contains a list of objects to be excluded from being monitored.                                                                                               | `Monitoring plan name,server name, resource path` Wildcards are not supported for the Server Name field. To disable filtering for this field, specify an empty string. For example: `*,,\\\\*\\System Volume Information*`                                                                         |
| omiterrors.txt           | Contains a list of errors and warnings to be omitted from logging to the Netwrix Auditor System Health event log.                                             | `Monitoring plan name,``````server name,error text` For example: `*,productionserver1.corp.local, *Access is denied*`                                                                                                                                                                              |
| omitreportlist.txt       | Contains a list of objects to be excluded from _Search_, _Reports_ and "_Activity Summary_" emails. In this case audit data is still being collected.                         | `Monitoring plan name,action,who,object type,resource path,property name` Wildcards are not supported for the action and property name fields. To disable filtering for these fields, specify an empty string. For example: `*,,CORP\\jsmith,*,*,`                                                 |
| omitstorelist.txt        | Contains a list of objects to be excluded from being stored to the "_Audit Archive_" and showing up in _Search_ and all types of _Reports_. In this case audit data is still being collected. | `Monitoring plan name,action,who ,object type,resource path,property name` Wildcards are not supported for the Change Type and Property Name fields. To disable filtering for these fields, specify an empty string. For example: `*,,*,*,\\\\productionserver1.corp.local\\builds\\*, Attributes` |
| omitstoreprocesslist.txt | Contains a list of processes to be excluded from being stored to the "_Audit Archive_" and showing up in _Search_ and all types of _Reports_.                                                 | `Monitoring plan name,resource path, executable path` Only local applications can be excluded. For example: `*,*,*notepad.exe`                                                                                                                                                                     |

## Windows File Share

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| General                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Specify Windows file share              | Provide UNC path to a shared resource. See the section below for special considerations. Do not specify a default file share mapped to a local drive (e.g., \\Server\e$).                                                                                                                                                                                                                                                                                                                                                                                                |
| Specify the account for collecting data |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Scope                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Specify monitoring restrictions         | Refer to Configure Scope for detailed instructions on how to narrow your monitoring scope. By default, Netwrix Auditor will monitor all shares stored in the specified location, except for hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares, select the related option in the monitored item settings. Remember that administrative hidden shares like default system root or Windows directory (ADMIN$), default drive shares (D$, E$), etc. will not be monitored. See the topics on the monitored items for details. |

### Configure Scope

You can narrow your monitoring scope by adding exclusions.

Click Add Exclusion. Then, in the Specify Filters dialog, do the following:

**Step 3 –** Provide the path to the file share where you are going to exclude some audit data. Use
the path format as it appears in the "_What_" column of reports and Activity Summaries — for
example, _\\corpsrv\shared_.

**Step 4 –** You can use a wildcard (\*) only if you need to exclude user activity on this file
share. For other data types (_state-in-time_ or _all data_) wildcards are not supported. This refers
to the specified shared folder, its subfolders and files.

**Step 5 –** Select what type of data you want to exclude:

| Option            | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All Data**      | Select if you want to completely exclude the specified file share from being audited. The product will not collect any user activity or state-in-time data. **NOTE:** In this case,Auditor does not adjust audit settings automatically for the selected folders. | A Security Officer wants to monitor a file share but s/he does not have access to a certain folder on this share. Thus, s/he configures the product not to monitor this folder at all. |
| **State-in-Time**     | Select to configure Auditor to exclude data for the state-in-time reports from the monitoring scope.                                                                                                                                                              | A Security Officer wants to monitor a file share, but it contains a folder with a huge amount of objects, so s/he does not want Auditor to collect state-in-time data for this folder. |
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

![Specify Filters](/images/auditor/10.7/admin/monitoringplans/fileservers/item_computer_exclude_users_thumb_0_0.webp)

**Step 3 –** After configuring all filters, click **Add** to save them and return to the item
settings.

### Working with DFS File Shares

Netwrix Auditor supports auditing of DFS and clustered file servers if Object Access Auditing is
enabled on DFS file shares or on every cluster node.

- When adding a cluster file server for auditing, it is recommended to specify a server name of the
  **Role** server or a UNC path of the shared folder located on the **Role** server.
- When adding a DFS file share for auditing, specify a Windows file share item and provide the UNC
  path of the whole namespace or UNC path of the DFS link (folder). For example:
    - _"\\domain\dfsnamespace\"_ (domain-based namespace) or _"\\server\dfsnamespace\"_ (in case of
      stand-alone namespace);
    - _"\\domain\dfsnamespace\link"_ (domain-based namespace) or _"\\server\dfsnamespace\link"_ (in
      case of stand-alone namespace).
- For recommendations on configuring DFS replication, refer to
  [this Knowledge Base article](https://www.netwrix.com/kb/2103).

### Working with Mount Points

You can specify a mount point as a monitored item. However, consider the following:

- If a mount point represents a shared folder, then the objects in its root will be initially
  collected by Netwrix Auditor and appear as processed by _System_ account. Wait for the next data
  collections - then all actions for these objects will be monitored in a normal way.
- To monitor the mount points targeted at the subfolder of a file share, provide network path to the
  target subfolder.
