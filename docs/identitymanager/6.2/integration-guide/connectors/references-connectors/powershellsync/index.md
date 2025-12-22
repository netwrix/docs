---
title: "PowerShellSync"
description: "PowerShellSync"
sidebar_position: 200
---

# PowerShellSync

This connector exports data from an external system via a
[PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview) script.

This page is about [PowerShellSync](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/powershellsync/index.md).

![Package: Custom/PowerShellSync](/images/identitymanager/saas/integration-guide/connectors/references-connectors/powershellsync/packages_powershellsync_v603.webp)

## Overview

PowerShell is a cross-platform task automation and configuration management framework, consisting of
a command-line shell and scripting language. Unlike most shells which accept and return text,
PowerShell is built on top of the .NET Common Language Runtime (CLR), and accepts and returns .NET
objects. This fundamental change brings entirely new tools and methods for automation.

Data can be synchronized from any managed system by writing a PowerShell script that generates the
relevant CSV files for Identity Manager. The PowerShellSync connector provides all the necessary
tools for an easy integration of the script with Identity Manager's synchronization mechanisms.

When Identity Manager provides a native connector for a given system, for example the Active
Directory connector, Netwrix Identity Manager (formerly Usercube)highly recommends using the native
connector rather than this PowerShell connector.

## Prerequisites

Implementing this connector requires:

- making sure that the command `powershell.exe`, inside the command prompt (`cmd.exe`), does execute
  a PowerShell terminal;
- knowledge of scripting in PowerShell 5.1 or later,
  [see here PowerShell's requirements](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements);
- making sure that the device hosting the agent has its execution policy properly configured to
  execute the given PowerShell script;
- checking the targeted system's requirements (environment, libraries, etc.), as this connector is
  meant to connect Identity Manager to a PowerShell-compatible system;
- writing and testing a PowerShell script (`.ps1`) according to Netwrix Identity Manager (formerly
  Usercube)' guidelines below.

## Export

This connector executes a PowerShell script that generates one or several CSV files. These files are
to be used during the synchronization of the data from the managed system targeted by the
PowerShellSync connector.

The CSV files must be written to the `$OutputPath`.

The export is executed by a job from the UI, or via `Usercube-Export-Powershell.exe` in the command
prompt.

### Configuration

This process is configured through a
[Connection](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "PowerShellExport": {
>       "PowerShellScriptPath": "C:/identitymanagerDemo/Scripts/Export-CSV.ps1",
>     }
>   }
> }
> ```

##### Setting attributes

| Name                          | Details                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| PowerShellScriptPath required | **Type** String **Description** Path of the PowerShell script (.ps1) to be executed. |

### Write a script

Identity Manager provides a few variables to be used in the PowerShell script.

| Name          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| OutputPath    | **Type** String **Description** Prefix of the path of the generated CSV file. **Info:** the synchronization process requires the generated CSV file to be located in a very specific location, with a specific name prefix. Hence the need for this predefined variable. **Value** [`<TempFolderPath>`](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)`/ExportOutput/<connectionIdentifier>_` **Example** In this example, if the temp folder is named `Temp` and the connection `PowerShellExport`, then the generated file is: `Temp/ExportOutput/PowerShellExport_users.csv`. ```generateCSV | Export-CSV ($OutputPath + "users.csv")` where`generateCSV``` is a generic PowerShell method that generates CSV files. |
| IsIncremental | **Type** Boolean **Description** Variable to be used to provide a different behavior for complete and incremental synchronization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Fulfill

There are no fulfill capabilities for this connector.
