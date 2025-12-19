---
title: "Get-PPEConfigReport"
description: "Get-PPEConfigReport"
sidebar_position: 60
---

# Get-PPEConfigReport

The **Get-PPEConfigReport** cmdlet saves a Password Policy Enforcer configuration report.

:::note
This cmdlet calls the PPE Tool. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.
:::


**SYNTAX**

**Get-PPEConfigReport** **-Folder** `<_string_>`

**PARAMETERS**

**-Folder** `<_string_>`

Name of the folder to save the report.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Get-PPEConfigReport -Folder C:\PPE

The report is created: "C:\PPE\report.html".

![Creates the PPE Configuration report](/images/passwordpolicyenforcer/11.0/administration/cmdletgetppeconfigreport.webp)
