---
title: "Connect-PPE"
description: "Connect-PPE"
sidebar_position: 10
---

# Connect-PPE

The **Connect-PPE** cmdlet establishes a connection to the PPE Server.

**SYNTAX**

**Connect-PPE** [[__-Local__] `<_SwitchParameter_>`] [[__-Domain__] `<_string_>`]
[`<_CommonParameters_>`]

**PARAMETERS**

**-Domain** `<_string_>`

Name of the domain controller to connect. Can also use **-D** or **-d**.

**-Local** `<_SwitchParameter_>`

Connect to PPE Server installed locally. Can also use **-L** or **-l**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Connect-PPE -d "DCNAME1.COMPANY.COM"

Connection to PPE was established. Connection to Domain "DCNAME1.COMPANY.COM"
