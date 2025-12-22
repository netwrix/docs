---
title: "Remove-PPEPolicy"
description: "Remove-PPEPolicy"
sidebar_position: 180
---

# Remove-PPEPolicy

The **Remove-PPEPolicy** cmdlet removes a Password Policy Enforcer policy.

**SYNTAX**

**Remove-PPEPolicy** **-PolicyName**] `<_string_>` [`<_CommonParameters_>`]

**PARAMETERS**

**-PolicyName** `<_string_>`

Name of the policy. Can also use **-P** or **-p**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Remove-PPEPolicy -PolicyName Test

**PS C:\>**
