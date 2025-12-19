---
title: "Get-PPEPolicyEnabled"
description: "Get-PPEPolicyEnabled"
sidebar_position: 130
---

# Get-PPEPolicyEnabled

The **Get-PPEPolicyEnabled** cmdlet returns the enabled/disabled status of a Password Policy
Enforcer policy.

**SYNTAX**

**Get-PPEPolicyEnabled** **-PolicyName** `<_string_>` [`<_CommonParameters_>`]

**PARAMETERS**

**-PolicyName** `<_string_>`

Name of the policy. Can also use **-P** or **-p**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Get-PPEPolicyEnabled -PolicyName "Eval Policy"

**Policy "Eval Policy" is Enabled**
