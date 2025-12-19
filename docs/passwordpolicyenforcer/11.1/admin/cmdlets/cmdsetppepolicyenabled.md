---
title: "Set-PPEPolicyEnabled"
description: "Set-PPEPolicyEnabled"
sidebar_position: 210
---

# Set-PPEPolicyEnabled

The **Set-PPEPolicyEnabled** cmdlet sets the enabled/disabled status for a Password Policy Enforcer
policy.

**SYNTAX**

**Set-PPEPolicyEnabled\_\_**-PolicyName** `<_string_>` **-Enable\__]
`<\_int_>` [`<_CommonParameters_>`]

**PARAMETERS**

**-PolicyName** `<_string_>`

The policy name.

**-Enable** `<_int_>`

Specify **1** to enable the policy, specify **0** to dis -Poliable the policy. Can also use **-E**
or **-e**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLES**

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 0

**Policy "Eval Policy" is Disabled**

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 1

**Policy "Eval Policy" is Enabled**
