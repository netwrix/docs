---
title: "Get-UserEnrollment Cmdlet in Directory Manager"
description: "Check whether a user is enrolled and which authentication types they use with the Get-UserEnrollment cmdlet."
keywords:
  - Get-UserEnrollment
  - Directory Manager Management Shell
  - user enrollment status
  - authentication enrollment types
sidebar_position: 20
---

# Get-UserEnrollment Cmdlet in Directory Manager

Use the Get-UserEnrollment cmdlet to retrieve the enrollment information of a user.

## Syntax

```
Get-UserEnrollment
-Identity <string>
[-EnrollmentTypes {None | Mobile | SecurityQuestions | Email | Authenticator | LinkAccount | Yubikey | WindowsHello | All | Any}]
[<CommonParameters>]
```

## Required parameter

- Identity

## Examples

### Example 1

If a user is enrolled, this cmdlet lists the authentication types the user is enrolled with.

```
Get-UserEnrollment -Identity euser1
```

### Example 2

This command checks whether the specified user is enrolled with the specified enrollment types.

```
Get-UserEnrollment -Identity euser1 -EnrollmentTypes SecurityQuestions, Email
```

### Example 3

This command gets user enrollment information through the pipeline operator.

```
'euser1', 'euser2' | Get-UserEnrollment
```
