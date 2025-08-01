---
title: "PowerShellProv"
description: "PowerShellProv"
sidebar_position: 190
---

# PowerShellProv

This connector writes to an external system via a
[PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview) script.

This page is about
[Custom/PowerShellProv](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/powershellprov/index.md).

![Package: Custom/PowerShellProv](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/powershellprov/packages_powershellprov_v603.webp)

## Overview

PowerShell is a cross-platform task automation and configuration management framework, consisting of
a command-line shell and scripting language. Unlike most shells which accept and return text,
PowerShell is built on top of the .NET Common Language Runtime (CLR), and accepts and returns .NET
objects. This fundamental change brings entirely new tools and methods for automation.

## Prerequisites

Implementing this connector requires:

- making sure that the command `powershell.exe`, inside the command prompt (`cmd.exe`), does execute
  a PowerShell terminal;
- knowledge of scripting in PowerShell 5.1 or later,
  [see here PowerShell's requirements](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements);
- making sure that the device hosting the agent has its execution policy properly configured to
  execute the given PowerShell script;
- checking the targeted system's requirements (environment, libraries, etc.), as this connector is
  meant to connect Usercube to a PowerShell-compatible system;
- writing and testing a PowerShell script (`.ps1`) according to NETWRIX' guidelines below.

## Export

There are no export capabilities for this connector.

## Fulfill

This connector executes a PowerShell script for the creation, deletion and update of any entity
linked to the managed system.

> For example, it can fulfill the `mailboxes` entity from Microsoft Exchange.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

> The following example fills a CSV file through the script `Fulfill-CSV.ps1`, for a single target
> managed system identified by the `PowerShellCsvFulfillment` subsection:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "PowerShellCsvFulfillment": {
>       "PowerShellScriptPath": "C:/identitymanagerDemo/Scripts/Fulfill-CSV.ps1",
>       "Options": {
>         "Message": "Hello",
>         "Login": "admin",
>         "Password": "secret"
>       }
>     }
>   }
> }
> ```

#### Setting attributes

| Name                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PowerShellScriptPath required | **Type** String **Description** Path of the executed PowerShell script (.ps1).                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Options optional              | **Type** String Pair List **Description** List of key-value pairs for all the variables required by the PowerShell script. **Example**`   "Options": {     "Login": "admin",     "Password": "secret"   }` In order for the script to access these options, the following two lines of code must be included in the script: `$options = [System.Console]::ReadLine()   $options = ConvertFrom-Json $options` Afterwards, any one of these variables can be easily accessed: `$options.Login$options.Password   # -> admin and secret` |

### Write a script

See how to
[write a Powershell script](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/write-fulfill-powershell-script/index.md)
to allow provisioning with this connector.

## Authentication

### Password reset

The PowerShell script manages password reset.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
  safe;

| Attribute            | Naming Convention for the Key in Azure Key Vault  |
| -------------------- | ------------------------------------------------- |
| Login (optional)     | `Connections--<identifier>--Options--Login`       |
| Password (optional)  | `Connections--<identifier>--Options--Password`    |
| PowerShellScriptPath | `Connections--<identifier>--PowerShellScriptPath` |

- a
  [CyberArk Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  able to store the attributes from the `Options` section that are
  [compatible with CyberArk](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md).

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

> For example, consider `Login` and `Password` values stored in the `PowerShellCsv_Account` account:
>
> ```
> appsettings.cyberark.agent.json
> {
>   "Connections": {
>     ...
>     "PowerShellCsvFulfillment": {
>       "Options": {
>         "Login": "PowerShellCsv_Account",
>         "Password": "PowerShellCsv_Account"
>       }
>     }
>   }
> }
> ```
