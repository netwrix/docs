---
title: "Set the $Credentials Environment Variable"
description: "Set the $Credentials Environment Variable"
sidebar_position: 30
---

# Set the $Credentials Environment Variable

By default, the GroupID Management Shell uses the credentials of the logged-in user for executing
commandlets. If you need to use a different user account for some commandlets, you must set the
**$Credentials** environment variable to the credentials of that user. This user account must also
be part of the same forest. Once set, the variable can be used as a value for the Credential
parameter with those commandlets that you want to execute using this account. The rest of the
commandlets are executed under the credentials of the local user.

## Syntax

```
$Credentials = new-object System.Management.Automation.PsCredential "DomainName\User Name",$(convertto-securestring "Password" -asplaintext -force)
```

Example 1:

The following command sets the **$Credentials** environment variable to the credentials of the user,
John Smith, which exists on the same domain you are logged-on to.

```
$Credentials = new-object System.Management.Automation.PsCredential "JohnSmith",$(convertto-securestring "MyP@ssw0rd" -asplaintext -force)
```

Example 2:

The command below sets the credentials of the user, Brian Regan, which exists on a different domain
in the same forest.

```
$Credentials = new-object System.Management.Automation.PsCredential "Sales.Imanami.US\BrianRegan",$(convertto-securestring "MyP@ssw0rd" -asplaintext -force)
```

Example 3:

The following command shows how to use the **$Credentials** environment variable with commandlets.

```
New-Container -ParentContainer "DC=HR,DC=Imanami,DC=US" -Name "Recruiting" -Credential $Cred
```

See Also

- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
