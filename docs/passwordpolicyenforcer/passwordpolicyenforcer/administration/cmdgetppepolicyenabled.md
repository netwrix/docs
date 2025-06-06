# Get-PPEPolicyEnabled

The __Get-PPEPolicyEnabled__ cmdlet returns the enabled/disabled status of a Password Policy Enforcer policy.

SYNTAX

__Get-PPEPolicyEnabled__ __-PolicyName__ <_string_> [<_CommonParameters_>]

PARAMETERS

__-PolicyName__ <_string_>

Name of the policy. Can also use __-P__ or __-p__.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/product_docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEPolicyEnabled -PolicyName "Eval Policy"

Policy "Eval Policy" is Enabled
