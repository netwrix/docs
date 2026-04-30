---
title: "Entra ID Threats"
description: "Entra ID Threats"
sidebar_position: 20
---

# Entra ID Threats

The following threats are monitored for Microsoft Entra ID.

## Application Permission Change

The Application Permission Change is when a sensitive or risky permission is granted to an
application.

| Application Permission Change |                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                    | Application permissions are usually granted to them at their creation time. In some cases, new permissions are required to be granted at a later stage. An attacker can leverage Microsoft Entra ID applications by adding the new permissions and using them for privilege escalation or persistence in your Microsoft Entra ID tenant. |
| Example                       | An application is given the "Directory.ReadWrite.All" permission or any permission that requires admin consent.                                                                                                                                                                                                                          |
| Trigger                       | A threat is created when an application is granted admin consent to a permission.                                                                                                                                                                                                                                                        |

## Compromised User Activity

The Compromised User Activity is when a user is marked as "Confirmed Compromised" and that user
takes an action within your Microsoft Entra ID tenant.

| Compromised User Activity |                                                                                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                | The Compromised User activity threat involves detecting any activity from a user that was marked as "Confirmed Compromised" by Microsoft Entra ID. Any action taken by such users is considered potentially malicious and should be reviewed immediately. |
| Example                   | A confirmed compromised user grants another user the "global administrator" role.                                                                                                                                                                         |
| Trigger                   | A confirmed compromised user performs any action in your Microsoft Entra ID tenant.                                                                                                                                                                       |

## Impossible Travel

The Impossible Travel is when a user logs in from one geographical location and then quickly (and
impossibly) logs in from another far away geographical location.

| Impossible Travel |                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Definition        | Highlights accounts associated with multiple authentications from different geographical locations in a short period of time. |
| Example           | A user logs in from a New York city, then 10 minutes later logs in from Moscow.                                               |
| Trigger           | A threat is triggered when a user logs in from two distant locations within a short period of time.                           |

## New Applicaton Credentials

If an application suddenly gets a new set of credentials/client secrets, Threat Manager raises an
alarm as to why these credentials are added.

| New Application Credentials |                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Definition                  | Application credentials are usually provided at the time of application creation or when a secret is close to its expiry. New credentials can be added on need basis as well. An attacker can leverage Microsoft Entra ID applications by adding new credentials and using them for privilege escalation or persistence within an Microsoft Entra ID tenant. |
| Example                     | A new client secret was generated for an existing application and used for a cybersecurity product.                                                                                                                                                                                                                                                          |
| Trigger                     | A client secret is added to an application.                                                                                                                                                                                                                                                                                                                  |

## Sensitive Role Changes

Sensitive Role Change is assigning a privilege role to an Microsoft Entra ID object.

| Sensitive Role Changes |                                                                                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition             | The sensitive role changes threat detects when a privileged role is assigned to an Microsoft Entra ID object. The privilege roles have a high level of access to Microsoft Entra ID objects. They can make unauthorized changes which can pose significant security risks. |
| Example                | A user gives another user the "Global Administrator" role.                                                                                                                                                                                                                 |
| Trigger                | When an Microsoft Entra ID object is granted a privileged role.                                                                                                                                                                                                            |
