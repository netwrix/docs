---
title: "MSI Installer Logs"
description: "MSI Installer Logs"
sidebar_position: 50
---

# MSI Installer Logs

The Threat Prevention installer runs under control of Windows Installer. All available command line
options can be found In the Microsoft
[Msiexec](https://technet.microsoft.com/en-us/library/bb490936.aspx) article.

Every install process of Threat Prevention creates several log files:

- One log file for each sub-component within the installation
- One log file for the main installation (bundled package installer)

Following is an example of an Agent installation console command specifying logging in the current
directory to a log file called _SIAgentLog.log_:

**SI Agent.exe” /L SIAgentLog.log**

An installation of the Agent on a 64-bit system where .NET Framework 4.7.2 or higher is not
installed generates two log files:

- Log for “SI Agent.exe” – This log file has the smallest size and is a good starting point
- Log for “SI Agent.msi” x64 version

  :::note
  Threat Prevention v7.4 only supports x64 version.
  :::


Open the Registry Editor (regedit) to enable Windows Installer logging, and then create or modify
the following:

| System Key:   | [HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\Installer] |
| ------------- | ------------------------------------------------------------------ |
| Subkey Name:  | Logging                                                            |
| Subkey Type:  | REG_SZ (string value)                                              |
| Subkey Value: | voicewarmupx                                                       |

After this registry edit, Windows Installer will track the progress of the installation and post it
to a log in the `%TEMP%` folder. Although the new log's file name will be randomized, its first
three letters will be "MSI" and it will have the “.log” extension. Type the following line at a
command prompt to locate the Temp folder:

**cd %temp%**

When performing remote Agent deployment using the Administration Console, log files can be found in
the `C:\Windows\Temp` folder on the target Agent machine. See the
[Agents Interface](/docs/threatprevention/7.5/admin/agents/overview.md) topic for additional information.

See the [Best Practices and Troubleshooting](/docs/threatprevention/7.5/troubleshooting/overview.md) topic for additional information.
