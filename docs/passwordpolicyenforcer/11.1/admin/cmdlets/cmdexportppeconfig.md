---
title: "Export-PPEConfig"
description: "Export-PPEConfig"
sidebar_position: 30
---

# Export-PPEConfig

The **Export-PPEConfig** cmdlet exports the Password Policy Enforcer configuration to a file.

**SYNTAX**

**Export-PPEConfig** [__-File__ `<_string_>`] [`<_CommonParameters_>`]

**PARAMETERS**

**-File** `<_string_>`

Name of the file to create.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Export-PPEConfig -file c:\ppe\ppe_config

Configuration export has been successfully completed. The file "c:\ppe\ppe_config" has been created.
