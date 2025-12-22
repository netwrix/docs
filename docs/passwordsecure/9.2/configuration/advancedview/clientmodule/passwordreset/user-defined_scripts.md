---
title: "User-defined scripts"
description: "User-defined scripts"
sidebar_position: 40
---

# User-defined scripts

## Individual solutions using your own scripts

If your requirements cannot be met using the [Scripts](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/passwordreset/scripts.md), it is also possible
to create your own Powershell scripts. These scripts need to meet certain requirements to be used in
Netwrix Password Secure.

## Storage location, name and call

The scripts must be saved in the following directory:
`C:\ProgramData\MATESO\Password Safe and Repository Service\System\PowerShell`

The scripts are saved in the **format.ps1**.

## Structure of the scripts

The PowerShell scripts must have the following structure:

### RunScript function

Netwrix Password Secure always calls the RunScript function.


```
function RunScript
param (
        [String]$HostName,
        [String]$UserName,
        [String]$NewPassword,
        [String]$CredentialsUserName,
        [Security.SecureString]$CredentialsPassword
    )

```

The following standard parameters can be used here:

- UserName: The user name for which the password should be changed
- Password: The password that should be reset
- CredentialsUserName: The user name of the user authorized to carry our the reset (e.g.
  administrator)
- CredentialsPassword: The password of the authorized user

### Scriptblock

The **scriptblock** can be used when the script should run in the context of another user. The
actual change is then carried out in the **scriptblock**.

It is important in this case that you provide Netwrix Password Secure with feedback about what has
been changed via a **Write-Output**. The following example simply uses the outputs **true** or
**false**. However, it is also conceivable that an error message or similar is output.


```
    $scriptBlock = {param ($UserName, $Password)
    // Make changes to SAP
    if($OK) {
        Write-Output "true"
    } else {
        Write-Output "false"
    }

```

Naturally, CredentialsUserName and CredentialsPassword can also be directly used in the script (i.e.
without the **scriptblock**). You can view the supplied MSSQL script as an example.

### Invoke

A credential then still needs to be created. This is then transferred to the **scriptblock** using
the **invoke** command. It is also important in this case to provide Netwrix Password Secure with
feedback about all errors via **Write-Output** or **throw [System.Exception]**.
