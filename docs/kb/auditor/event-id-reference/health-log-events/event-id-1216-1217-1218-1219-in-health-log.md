---
description: >-
  Netwrix Auditor reports Event ID 1216, 1217, 1218, or 1219 in the Health Log
  when it cannot collect AD group membership information for SharePoint
  monitoring. This article lists the error messages, causes, and resolutions,
  including file paths for the membership database and configuration.
keywords:
  - SharePoint
  - Health Log
  - Event ID 1216
  - Event ID 1217
  - Event ID 1218
  - Event ID 1219
  - membership database
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Event ID 1216, 1217, 1218, 1219 in Health Log'
tags: []
title: 'Event ID 1216, 1217, 1218, 1219 in Health Log'
knowledge_article_id: kA00g000000H9cwCAC
---

# Event ID 1216, 1217, 1218, 1219 in Health Log

## Symptoms

Your SharePoint monitoring plan prompts one of the following error messages under Event ID 1216, 1217, 1218, and 1219 in Health Log:

```
Event ID 1216: The following error occurred when trying to launch the component
responsible for collecting AD group membership from forest %forestName%: %errormsg%.
```

```
Event ID 1217: The following error occurred when trying to delete temporary data on AD group membership from the local storage: %errormsg%.
```

```
Event ID 1218: The following unexpected error occurred when trying to collect AD group membership: %errormsg%.
```

```
Event ID 1219: AD group membership was resolved with the following error: %errormsg%.
```

## Causes

Netwrix Auditor is unable to collect data on group membership of users who made changes. This does not affect audit data integrity and only affects the possibility to filter data by groups in audit reports. Most likely, this is due to access issues to the AD domain that users belong to, or the membership database.

> **NOTE:** Refer to the following default path to the membership database:
>
> ```
> %ProgramData%\Netwrix Auditor\ShortTerm\Netwrix Auditor for SharePoint\<GUID>\Temp\AuditArchive\Membership\Memberships.db
> ```

## Resolutions

- If the error message contains a file name, verify the file is accessible and is not used by another process.

- Alternatively, omit these events from the Netwrix Auditor System Health event log. The `omiteventloglist.txt` list includes a list of omitted events. Refer to the following default path:

  ```
  %Working_Folder%Netwrix Auditor for SharePoint\Configuration\<GUID>
  ```

  Refer to the following article for additional information on syntax: SharePoint − SharePoint Monitoring Scope · v10.6
  https://docs.netwrix.com/docs/auditor/10_8).

## Related articles

- Monitoring Plans − SharePoint · v10.6
  https://docs.netwrix.com/docs/auditor/10_8)
