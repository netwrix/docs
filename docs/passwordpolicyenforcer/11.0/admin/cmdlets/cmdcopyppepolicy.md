---
title: "Copy-PPEPolicy"
description: "Copy-PPEPolicy"
sidebar_position: 20
---

# Copy-PPEPolicy

The **CopyPPEPolicy** cmdlet makes a copy of a PPE policy.

**SYNTAX**

**Copy-PPEPolicy -DestPolicyName** `<_string_>` **-SrcPolicyName** `<_string_>`
[`<_CommonParameters_>`]

**PARAMETERS**

**-SrcPolicyName** `<_string_>`

Source PPE Policy Name. Can also use **-S** or **-s**.

**-DestPolicyName** `<_string_>`

Destination PPE Policy Name. Can also use **-D** or **-d**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Copy-PPEPolicy -s "Eval Policy" -d "User Policy"

The "User Policy" policy was created based on the "Eval Policy".
