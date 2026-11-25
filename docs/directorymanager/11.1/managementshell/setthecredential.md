---
title: "Set the $Credentials Variable in Management Shell"
description: "Run Directory Manager Management Shell cmdlets under a different user account by setting the $Credentials environment variable."
keywords:
  - $Credentials variable
  - Management Shell
  - PSCredential
  - alternate credentials
  - cmdlet authentication
sidebar_position: 30
---

# Set the $Credentials Variable in Management Shell

By default, the Directory Manager Management Shell uses the credentials of the signed-in user to
run cmdlets. If you need to use a different user account for some cmdlets, you must
set the $Credentials environment variable to the credentials of that user. This user account must
also be part of the same forest. Once set, the variable can be used as a value for the Credential
parameter with the cmdlets that you want to run using this account. The rest of the
cmdlets run under the credentials of the local user.

## Syntax

```
$Credentials = new-object System.Management.Automation.PsCredential "DomainName\User Name",$(convertto-securestring "Password" -asplaintext -force)
```

Example 1:

The following command sets the $Credentials environment variable to the credentials of the user,
John Smith, who exists on the same domain you are signed in to.

```
$Credentials = new-object System.Management.Automation.PsCredential "JohnSmith",$(convertto-securestring "MyP@ssw0rd" -asplaintext -force)
```

Example 2:

The following command sets the credentials of the user, Brian Regan, who exists on a different domain
in the same forest.

```
$Credentials = new-object System.Management.Automation.PsCredential "Sales.Imanami.US\BrianRegan",$(convertto-securestring "MyP@ssw0rd" -asplaintext -force)
```

Example 3:

The following command shows how to use the **$Credentials** environment variable with cmdlets.

```
New-Container -ParentContainer "DC=HR,DC=Imanami,DC=US" -Name "Recruiting" -Credential $Cred
```
