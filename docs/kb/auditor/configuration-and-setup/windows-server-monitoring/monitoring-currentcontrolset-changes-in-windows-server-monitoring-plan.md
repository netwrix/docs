---
description: >-
  Shows how to monitor changes to the CurrentControlSet subkey in Netwrix
  Auditor by specifying the ControlSet%%% subkeys in customregistrykeys.txt to
  avoid event mismatches.
keywords:
  - CurrentControlSet
  - customregistrykeys.txt
  - ControlSet001
  - ControlSet002
  - registry monitoring
  - Windows Server
  - Netwrix Auditor
  - monitoring plan
  - registry keys
products:
  - auditor
sidebar_label: Monitoring CurrentControlSet Changes in Windows Se
tags: []
title: "Monitoring CurrentControlSet Changes in Windows Server Monitoring Plan"
knowledge_article_id: kA04u000000wnkTCAQ
---

# Monitoring CurrentControlSet Changes in Windows Server Monitoring Plan

## Question

How to monitor changes to the `CurrentControlSet` subkey in Netwrix Auditor?

## Answer

The `CurrentControlSet` subkey is a pointer to the existing `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet%%%` control sets. You must set up change monitoring via the `\ControlSet%%%` subkeys to avoid security event mismatch. Follow these steps to set up `\ControlSet%%%` subkeys monitoring:

1. On the Netwrix Auditor host, navigate to ` %Netwrix Auditor installation folder%\Windows Server Auditing`. The following path is the default installation path:

```Registry
C:\Program Files (x86)\Netwrix Auditor\Windows Server Auditing
```

2. Locate and edit the `customregistrykeys.txt` file − add the following two lines:

```Registry
%Monitoring_Plan%,%Server_Name%,HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001
%Monitoring_Plan%,%Server_Name%,HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002
```

   Make sure to replace the placeholders with actual monitoring plan and server names.

3. Save the changes.

> **NOTE:** In most cases, `ControlSet001` stands for the last control set the server was booted with. `ControlSet002` stands for the last known good control set, or the control set that last successfully booted the server.

## Troubleshooting

- Events related to the `CurrentControlSet` subkey changes state **system** in the **Who** field.

If the `CurrentControlSet` subkey was specified in `customregistrykeys.txt`, the related events will contain `\ControlSet%%%` paths causing event mismatches and subsequent replacement of the **Who** field values with **system**. Explicitly state the `ControlSet%%%` control sets to be monitored in `customregistrykeys.txt`, for example:

```Registry
Windows_Server_MP,test-server-01.internal,HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001
Windows_Server_MP,test-server-01.internal,HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002
```

This example implies a Windows Server monitoring plan named **Windows_Server_MP** with the **test-server-01.internal** server monitored. Replace the names used with the names used in your environment.

## Related Link

- Windows Server − Monitoring Custom Registry Keys
