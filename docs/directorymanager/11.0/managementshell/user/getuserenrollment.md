---
title: "Get-UserEnrollment Cmdlet in GroupID"
description: "Check whether a user is enrolled and which authentication types they use with the Get-UserEnrollment cmdlet."
keywords:
  - Get-UserEnrollment
  - GroupID Management Shell
  - user enrollment status
  - authentication enrollment types
sidebar_position: 20
---

# Get-UserEnrollment Cmdlet in GroupID

The **Get-UserEnrollment** cmdlet retrieves enrollment information of a user.

## Syntax

```
Get-UserEnrollment
-Identity <string>
[-EnrollmentTypes {None | Mobile | SecurityQuestions | Email | Authenticator | LinkAccount | Yubikey | WindowsHello | All | Any}]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

If a user is enrolled, this cmdlet lists the authentication types the user is enrolled with.

```
Get-UserEnrollment -Identity euser1
```

Example 2:

Check whether the specified user is enrolled with the specified enrollment types.

```
Get-UserEnrollment -Identity euser1 -EnrollmentTypes SecurityQuestions, Email
```

Example 3:

This example gets user enrollment information through the pipeline operator.

```
'euser1', 'euser2' | Get-UserEnrollment
```

See Also

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Cmdlets in GroupID](/docs/directorymanager/11.0/managementshell/user/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
