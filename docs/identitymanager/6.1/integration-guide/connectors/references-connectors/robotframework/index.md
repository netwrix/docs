---
title: "Robot Framework"
description: "Robot Framework"
sidebar_position: 220
---

# Robot Framework

This connector writes to an external system via a [Robot Framework](https://robotframework.org)
script.

This page is about
[Custom/Robot Framework](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/robot-framework/index.md).

![Package: Custom/Robot Framework](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/robotframework/packages_robot_v603.webp)

## Overview

Robot Framework is an open-source automation framework which can be used for robotic process
automation (RPA). This framework is easy to use thanks to its human-readable syntax.
It has a modular architecture that can be extended by
[libraries](https://robotframework.org/#libraries) implemented with Python or Java. These libraries
provide various tools to interact with a managed system.

## Prerequisites

Implementing this connector requires the agent to include the following elements:

- [Python](https://www.python.org/downloads/) 3.7 or above. Specific Robot Framework libraries may
  require a specific Python version;
- Python folder location in the `PATH` environment variable list and the location of its subfolder
  `Scripts`;
- Robot Framework: use `pip install robotframework` in the command prompt. If the installation ran
  correctly, `robot.exe` should be in your path. You can confirm this by running `gcm robot` in a
  powershell console.

## Export

There are no export capabilities for this connector.

## Fulfill

This connector can create, update and/or delete any entity linked to the managed system.

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

> The following example fills in a CSV file by using the script `FulfillRobotFramework.robot`:
>
> ```
> appsettings.agent.json
> {
>   "Connections": {
>     ...
>     "RobotFrameworkFulfillment": {
>       "RobotFrameworkScriptPath": "C:/identitymanagerDemo/Scripts/FulfillRobotFramework.robot",
>       "Options": {
>         "Message": "Hello"
>       }
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RobotFrameworkScriptPath required | **Type** String **Description** Path to the executed Robot Framework script (.robot).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Options optional                  | **Type** String Pair List **Description** List of key-value pairs for all the variables required by the PowerShell script. **Example**`   "Options": {     "Login": "admin",     "Password": "secret"   }` Access these options in the script using the following method: `${login}=  Get Secure Data  Login  False   ${password}=  Get Secure Data  Password  True` **Info:** when the boolean argument from `Get Secure Data` is set to `True`, then the value is stored in the variable and erased from memory, hence not retrievable on next call. This enables control over sensitive data like passwords by defining the lifetime of the variable containing sensitive data. **Warning:** never use `Get Secure Data` when `Options` is empty. |

### Write a script

See how to
[write a RobotFramework script](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/write-fulfill-robotframework-script/index.md)
to allow provisioning with this connector.

## Authentication

### Password reset

The script manages password reset.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
  safe;

| Attribute                | Naming Convention for the Key in Azure Key Vault      |
| ------------------------ | ----------------------------------------------------- |
| Login (optional)         | `Connections--<identifier>--Options--Login`           |
| Password (optional)      | `Connections--<identifier>--Options--Password`        |
| RobotFrameworkScriptPath | `Connections--<identifier>--RobotFrameworkScriptPath` |

- a
  [CyberArk Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  able to store the attributes from the `Options` section that are
  [compatible with CyberArk](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md).

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

> For example, consider `Login` and `Password` values stored in the `RobotFramework_Account`
> account:
>
> ```
> appsettings.cyberark.agent.json
> {
>   "Connections": {
>     ...
>     "RobotFrameworkFulfillment": {
>       "Options": {
>         "Login": "RobotFramework_Account",
>         "Password": "RobotFramework_Account"
>       }
>     }
>   }
> }
> ```
