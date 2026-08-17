---
title: "Entra ID Threats"
description: "Entra ID Threats"
sidebar_position: 20
---

# Entra ID Threats

The following threats are monitored for Microsoft Entra ID.

## Application Permission Change

An Application Permission Change is when someone grants a sensitive or risky permission to an
application.

| Application Permission Change |                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                    | Applications usually receive their permissions at creation time. In some cases, they need new permissions at a later stage. An attacker can exploit Microsoft Entra ID applications by adding the new permissions and using them for privilege escalation or persistence in your Microsoft Entra ID tenant. |
| Example                       | An administrator gives an application the "Directory.ReadWrite.All" permission or any permission that requires admin consent.                                                                                                                                                                                                            |
| Trigger                       | Threat Manager creates a threat when an application receives admin consent to a permission.                                                                                                                                                                                                                                              |

## Compromised User Activity

Compromised User Activity is when Microsoft Entra ID marks a user as "Confirmed Compromised" and
that user takes an action within your Microsoft Entra ID tenant.

| Compromised User Activity |                                                                                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                | The Compromised User activity threat involves detecting any activity from a user that Microsoft Entra ID marked as "Confirmed Compromised". Treat any action by such users as potentially malicious and review it immediately. |
| Example                   | A confirmed compromised user grants another user the "global administrator" role.                                                                                                                                                                         |
| Trigger                   | A confirmed compromised user performs any action in your Microsoft Entra ID tenant.                                                                                                                                                                       |

## Impossible Travel

The Impossible Travel is when a user logs in from one geographical location and then quickly (and
impossibly) logs in from another far away geographical location.

| Impossible Travel |                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Definition        | Highlights accounts associated with multiple authentications from different geographical locations in a short period of time. |
| Example           | A user logs in from a New York city, then 10 minutes later logs in from Moscow.                                               |
| Trigger           | Threat Manager creates a threat when a user logs in from two distant locations within a short period of time.                |

## New Applicaton Credentials

If an application suddenly gets a new set of credentials/client secrets, Threat Manager raises an
alarm as to why these credentials are added.

| New Application Credentials |                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Definition                  | Applications usually receive credentials at creation time or when a secret is close to its expiry. You can also add new credentials on a need basis. An attacker can exploit Microsoft Entra ID applications by adding new credentials and using them for privilege escalation or persistence within an Microsoft Entra ID tenant. |
| Example                     | Someone generated a new client secret for an existing application and used it for a cybersecurity product.                                                                                                                                                                                                                                                   |
| Trigger                     | Someone adds a client secret to an application.                                                                                                                                                                                                                                                                                                              |

## Sensitive Role Changes

Sensitive Role Change is assigning a privilege role to an Microsoft Entra ID object.

| Sensitive Role Changes |                                                                                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition             | The sensitive role changes threat detects when someone assigns a privileged role to a Microsoft Entra ID object. The privilege roles have a high level of access to Microsoft Entra ID objects. They can make unauthorized changes which can pose significant security risks. |
| Example                | A user gives another user the "Global Administrator" role.                                                                                                                                                                                                                 |
| Trigger                | When a Microsoft Entra ID object receives a privileged role.                                                                                                                                                                                                               |
