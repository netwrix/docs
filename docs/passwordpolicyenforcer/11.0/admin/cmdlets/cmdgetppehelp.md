---
title: "Get-PPEHelp"
description: "Get-PPEHelp"
sidebar_position: 90
---

# Get-PPEHelp

The **Get-PPEHelp** cmdlet lists the available Password Policy Enforcer cmdlets. If a cmdlet is
specified, returns help for the cmdlet.

**SYNTAX**

**Get-PPEHelp** [[__-Cmdlet__] `<_string_>`]

**PARAMETERS**

**-Cmdlet** `<_string_>`

Name of the cmdlet for help. Can also use **-C** or **-c**.

`<CommonParameters>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> get-ppehelp get-ppehelp

**NAME**

Get-PPEHelp

**SYNOPSIS**

Get a list of the PPE Cmdlet

**SYNTAX**

Get-PPEHelp [[-Cmdlet] `<string>`] `[<CommonParameters>]`

**DESCRIPTION**

Get a list of the PPE Cmdlet

**RELATED LINKS**

https://www.netwrix.com/password_policy_enforcer.html

**REMARKS**

To see the examples, type: "get-help Get-PPEHelp -examples".

For more information, type: "get-help Get-PPEHelp -detailed".

For technical information, type: "get-help Get-PPEHelp -full".

**For online help, type: "get-help Get-PPEHelp -online"**
