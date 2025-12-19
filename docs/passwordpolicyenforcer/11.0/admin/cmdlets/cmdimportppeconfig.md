---
title: "Import-PPEConfig"
description: "Import-PPEConfig"
sidebar_position: 160
---

# Import-PPEConfig

The **Import-PPEConfig** cmdlet imports a Password Policy Enforcer configuration file.

:::note
This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.
:::


**SYNTAX**

**Import-PPEConfig** **-File**] `<_string_>` `<_CommonParameters_>`]

**PARAMETERS**

**-File** `<_string_>`

Name of the configuration file. Can also use **-F** or **-f**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see
[about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Import-PPEConfig -File C:\PPE\ppe_config

Config import successful.
