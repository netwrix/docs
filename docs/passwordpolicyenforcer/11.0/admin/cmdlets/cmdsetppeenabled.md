---
title: "Set-PPEEnabled"
description: "Set-PPEEnabled"
sidebar_position: 200
---

# Set-PPEEnabled

The **Set-PPEEnabled** cmdlet sets the enabled/disabled status for the PPE Server.

**SYNTAX**

**Set-PPEEnabled** **-Enable**] `<_int_>` [`<_CommonParameters_>`]

**PARAMETERS**

**-Enable** `<_int_>`

Specify **1** to enable the PPE Server, specify **0** to disable the PPE Server. Can also use **-E**
or **-e**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLES**

PS C:\> Set-PPEEnabled -Enable 0

**Status PPE : Disabled**

PS C:\> Set-PPEEnabled -Enable 1

**Status PPE : Enabled**
