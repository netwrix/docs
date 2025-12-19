---
title: "Set up Authentication via Security Questions"
description: "Set up Authentication via Security Questions"
sidebar_position: 10
---

# Set up Authentication via Security Questions

Directory Manager provides a list of predefined security questions. This list can be referred to as
the global question pool, as it is available to all identity stores in Directory Manager. You can
add and remove questions to this pool.

Use the questions from the global pool to create a local pool of security questions for each
identity store. Questions in the local pool are available to identity store users for enrolling with
the security questions authentication type.

You can also specify the following settings for a user role in an identity store:

- The number of questions role members must use for enrollment and authentication
- The minimum answer length

## Modify the Global Question Pool

See the [Manage the Global Question Pool ](/docs/directorymanager/11.1/admincenter/general/globalpool.md)topic.

## Modify the Local Question Pool

See the [Manage the Local Question Pool](/docs/directorymanager/11.1/admincenter/identitystore/configure/securityquestions.md)
topic.

## Enable Security Question Authentication for an Identity Store

The security question authentication type must be enabled for an identity store before users can use
it for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/directorymanager/11.1/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce Security Question Authentication for a Role in an Identity Store

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

## Specify Policies for Security Question Authentication

See the
[Define Security Question Settings for a Security Role](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md#define-security-question-settings-for-a-security-role) topic.