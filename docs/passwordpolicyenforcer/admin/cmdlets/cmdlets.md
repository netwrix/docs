---
title: "PPE cmdlets"
description: "PPE cmdlets"
sidebar_position: 60
---

# PPE cmdlets

Cmdlets are available to manage Password Policy Enforcer from a Windows PowerShell. The
cmdlets aren't case-sensitive.

Install the [.NET Desktop Runtime 10.0 or later](https://aka.ms/dotnet/10.0/windowsdesktop-runtime-win-x64.exe) and [PowerShell 7.4 or later](https://github.com/powershell/powershell/releases) to use the PowerShell cmdlets.

To establish the connection:

**Step 1 –** Open a Windows PowerShell. Some cmdlets require administrative permissions. You can use
the **Run as Administrator** option.

**Step 2 –** Import the PPE cmdlets module:
**Import-Module "$env:ProgramFiles\Netwrix\Password Policy Enforcer\PS\PPEConf.PowerShell.dll"**

**Step 3 –** Connect to your domain:
**Connect-PPE -d "_domain_"** where _domain_ is the full name of your domain controller.
**NT-DC03.NWXTECH.COM** in this example.

**Get-PPEHelp** with no parameters, displays a list of available cmdlets. Use the PowerShell
**get-help** _Cmdlet_ for information about the cmdlet.

![PPE cmdlets Connect](/images/passwordpolicyenforcer/administration/cmdletconnect.webp)

Click a PPE cmdlet name for details.

- [Connect-PPE](/docs/passwordpolicyenforcer/admin/cmdlets/cmdconnectppe.md)
- [Copy-PPEPolicy](/docs/passwordpolicyenforcer/admin/cmdlets/cmdcopyppepolicy.md)
- [Export-PPEConfig](/docs/passwordpolicyenforcer/admin/cmdlets/cmdexportppeconfig.md)
- [Export-PPEPolicy](/docs/passwordpolicyenforcer/admin/cmdlets/cmdexportppepolicy.md)
- [Get-PPEBulkPasswordTest](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppebulkpasswordtest.md)
- [Get-PPEConfigReport](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppeconfigreport.md)
- [Get-PPEDefaultPolicy](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppedefaultpolicy.md)
- [Get-PPEEnabled](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppeenabled.md)
- [Get-PPEHelp](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppehelp.md)
- [Get-PPELicenseInfo](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppelicenseinfo.md)
- [Get-PPEPasswordTest](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppepasswordtest.md)
- [Get-PPEPolicies](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppepolicies.md)
- [Get-PPEPolicyEnabled](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppepolicyenabled.md)
- [Get-PPEServerVersion](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppeserverversion.md)
- [Get-PPEVersion](/docs/passwordpolicyenforcer/admin/cmdlets/cmdgetppeversion.md)
- [Import-PPEConfig](/docs/passwordpolicyenforcer/admin/cmdlets/cmdimportppeconfig.md)
- [Import-PPEPolicy](/docs/passwordpolicyenforcer/admin/cmdlets/cmdimportppepolicy.md)
- [Remove-PPEPolicy](/docs/passwordpolicyenforcer/admin/cmdlets/cmdremoveppepolicy.md)
- [Set-PPEDefaultPolicy](/docs/passwordpolicyenforcer/admin/cmdlets/cmdsetppedefaultpolicy.md)
- [Set-PPEEnabled](/docs/passwordpolicyenforcer/admin/cmdlets/cmdsetppeenabled.md)
- [Set-PPEPolicyEnabled](/docs/passwordpolicyenforcer/admin/cmdlets/cmdsetppepolicyenabled.md)
- [Start-PPECompromisedPasswordChecker](/docs/passwordpolicyenforcer/admin/cmdlets/cmdstartppecompromisedpasswordchecker.md)
- [Start-PPEHibpUpdater](/docs/passwordpolicyenforcer/admin/cmdlets/cmdstartppehibpupdater.md)
