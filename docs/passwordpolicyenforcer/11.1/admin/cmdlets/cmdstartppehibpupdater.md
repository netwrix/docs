---
title: "Start-PPEHibpUpdater"
description: "Start-PPEHibpUpdater"
sidebar_position: 230
---

# Start-PPEHibpUpdater

The **Start-PPEHibpUpdater** cmdlet starts an update of the Hibp database.

**SYNTAX**

**Start-PPEHibpUpdater** [[__-Web__] `<_SwitchParameter_>`] **-Folder** `<_string_>` [__-File__
`<_string_>`] **[-Inc** `<_SwitchParameter_>`]

[`<_CommonParameters_>`]

**PARAMETERS**

**-Web** `<_SwitchParameter_>`

Specify the update uses the NTLM Hashes file from the netwrix website.

**-Folder** `<_string_>`

Folder with the HIBP database. Can also use **-D** or **-d**.

**-Inc** `<_SwitchParameter_>`

Type of update. Specify **full** to update the entire database or **incremental**to add new entries
to the existing database. Can also use **-I** or **-i**.

**-File** `<_string_>`

File with list of NTLM hashes. Can also use **-S** or **-s**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see [about_CommonParameters](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.5).

**EXAMPLE**

PS C:\> Start-PPEHibpUpdater -Folder "C:\HIBP\DB" -File "C:\Users\Administrator\Desktop\db for HIBP
Updater not real small\stealthintercept-hibp-database-1.0.0.zip

![HIBP Update](/images/passwordpolicyenforcer/11.1/administration/cmdletstartppehibpupdater.webp)
