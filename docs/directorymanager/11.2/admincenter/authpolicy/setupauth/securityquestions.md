---
title: "Set Up Security Question Authentication in Directory Manager"
description: "Manage the global and local question pools, enable and enforce security question authentication, and set answer policies for a role."
keywords:
  - security questions
  - global question pool
  - local question pool
  - second factor authentication
  - multifactor authentication
sidebar_position: 10
---

# Set Up Security Question Authentication in Directory Manager

Directory Manager provides a list of predefined security questions. This list is the global question pool, because all identity stores in Directory Manager can use it. You can add questions to and remove questions from this pool.

Use the questions from the global pool to create a local pool of security questions for each identity store. Identity store users can enroll with the security questions authentication type by using questions in the local pool.

You can also specify the following settings for a user role in an identity store:

- The number of questions role members must use for enrollment and authentication
- The minimum answer length

## Modify the global question pool

See the [Manage the Global Question Pool](/docs/directorymanager/11.2/admincenter/general/globalpool.md) topic.

## Modify the local question pool

See the [Manage the Local Security Question Pool](/docs/directorymanager/11.2/admincenter/identitystore/configure/securityquestions.md) topic.

## Enable security question authentication for an identity store

Enable the security question authentication type for an identity store before users can use it for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.2/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce security question authentication for a role in an identity store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.2/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

## Specify policies for security question authentication

See the [Define Security Question Settings for a Security Role](/docs/directorymanager/11.2/admincenter/securityrole/policy/password.md#define-security-question-settings-for-a-security-role) topic.
