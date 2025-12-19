---
title: "Get-UserEnrollment"
description: "Get-UserEnrollment"
sidebar_position: 20
---

# Get-UserEnrollment

The commandlet **Get-UserEnrollment** retrieves enrollment information of a user.

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

If a user is enrolled, this cmdlet will enlist the authentication type(s) the user is enrolled with.

```
Get-UserEnrollment -Identity euser1
```

Example 2:

Check whether the specified user is enrolled in the specified enrollment type(s).

```
Get-UserEnrollment -Identity euser1 -EnrollmentTypes SecurityQuestions, Email
```

Example 3:

This example gets user enrollment information through the pipeline operator.

```
'euser1', 'euser2' | Get-UserEnrollment
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [User Commands](/docs/directorymanager/11.0/managementshell/user/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
