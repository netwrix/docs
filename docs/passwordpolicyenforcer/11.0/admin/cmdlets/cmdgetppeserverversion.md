---
title: "Get-PPEServerVersion"
description: "Get-PPEServerVersion"
sidebar_position: 140
---

# Get-PPEServerVersion

The **Get-PPEServerVersion** cmdlet returns the Password Policy Enforcer server version.

**SYNTAX**

**Get-PPEServerVersion** [__-DC__] `<_string_>`] [`<_CommonParameters_>`]

**PARAMETERS**

**-DC** `<_string_>`

Name of the domain controller running the PPE Server. If not specified, the current domain
controller is used.

**-Local** `<_SwitchParameter_>`

Connect to PPE Server installed locally. Can also use **-L** or **-l**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Get-PPEServerVersion -DC NT-DC03.NWXTECH.COM

**Version: 11.0.0.74**
