---
title: "Export-PPEPolicy"
description: "Export-PPEPolicy"
sidebar_position: 40
---

# Export-PPEPolicy

The **Export-PPEPolicy** exports a Password Policy Enforcer policy to a file.

:::note
This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.
:::


**SYNTAX**

**Export-PPEPolicy** -PolicyName `<_string_>` [__-File__ `<_string_>`] [`<_CommonParameters_>`]

**PARAMETERS**

**-PolicyName** `<_string_>`

Name of the to export.

**-File** `<_string_>`

Name of the file to create.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Export-PPEPolicy -PolicyName "Eval Policy" -File C:\ppe\EvalPolicy

Configuration export has been successfully completed. The file "C:\ppe\EvalPolicy" has been created.
