# Import-PPEConfig

The __Import-PPEConfig__ cmdlet imports a Password Policy Enforcer configuration file.

__NOTE:__ This cmdlet calls the __PPE Tool__. You must be an administrator to run this cmdlet. Start PowerShell with the __Run as Administrator__ option.

SYNTAX

__Import-PPEConfig__ __-File__] <_string_> <_CommonParameters_>]

PARAMETERS

__-File__ <_string_>

Name of the configuration file. Can also use __-F__ or __-f__.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/product_docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Import-PPEConfig -File C:\PPE\ppe\_config

Config import successful.
