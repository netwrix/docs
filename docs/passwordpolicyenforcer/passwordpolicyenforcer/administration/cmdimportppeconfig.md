# Import-PPEConfig

The **Import-PPEConfig** cmdlet imports a Password Policy Enforcer configuration file.

**NOTE:** This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.

SYNTAX

**Import-PPEConfig** **-File**] `<_string_>` `<_CommonParameters_>`]

PARAMETERS

**-File** `<_string_>`

Name of the configuration file. Can also use **-F** or **-f**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Import-PPEConfig -File C:\PPE\ppe_config

Config import successful.
