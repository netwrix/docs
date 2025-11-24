---
description: >-
  If the KDS Removal tool (NetwrixAuditorKDSRemoval) cannot find
  Configuration.xml and shows "Failed to load configuration file. Could not find
  a part of the path", follow these steps to point the tool to the correct
  Working Folder path or DataPathOverride registry key.
keywords:
  - KDS
  - KDS Removal
  - ADV-2023-003
  - Configuration.xml
  - DataPathOverride
  - config.json
  - Netwrix Auditor
  - Working Folder
products:
  - auditor
sidebar_label: KDS Removal Tool for ADV-2023-003 Failed to Load C
tags: []
title: "KDS Removal Tool for ADV-2023-003 Failed to Load Configuration File"
knowledge_article_id: kA04u000001112ACAQ
---

# KDS Removal Tool for ADV-2023-003 Failed to Load Configuration File

## Symptom

You're unable to run the NetwrixAuditorKDSRemoval (KDS Removal) tool to delete KDS Root Key data (ADV-2023-003). The following error is prompted showing the tool is unable to reach the **Configuration.xml** file:

```
Failed to load configuration file.
Could not find a part of the path
```

![Error dialog image]./../0-images/ka04u00000117HW_0EM4u000008LwaA.png)

## Cause

The KDS Removal tool is unable to locate the Netwrix Auditor configuration file.

## Solution

1. Check the location of the configuration file (located by default in `C:\ProgramData\Netwrix Auditor\AuditCore\ConfigServer\Configuration.xml`). If a Working Folder migration was previously done, check the `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\DataPathOverride` key for a path.

2. Open the folder you've extracted the KDS tool to. Open the `config.json` file using a text editor (e.g., Notepad++). In the **"DataPathKey"** section of the file, specify the path to your Working Folder in the **"DefaultValue"** line. Refer to the following code blocks for an example.

Original snippet (uses environment variable):

```json
"DataPathKey": 
    {
        "KeyPath": "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix Auditor\DataPathOverride",
        "KeyName": "",
        "DefaultValue": "%PROGRAMDATA%\Netwrix Auditor"
    },
```

Change it to a full path (example):

```json
"DataPathKey": 
    {
        "KeyPath": "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix Auditor\DataPathOverride",
        "KeyName": "",
        "DefaultValue": "C:\ProgramData\Netwrix Auditor"
    },
```

3. Save changes and run the tool again.

In case these steps did not help, contact Netwrix Technical Support: https://www.netwrix.com/open_a_ticket.html.

