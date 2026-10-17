---
title: "Entra ID Threats"
description: "Entra ID Threats"
sidebar_position: 20
---

# Entra ID Threats

Threat Manager monitors the following threats for Microsoft Entra ID.

## Application Permission Change

The Application Permission Change is when someone grants a sensitive or risky permission to an
application.

| Application Permission Change |                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                    | Applications usually receive their permissions at creation time. In some cases, an application needs new permissions later. An attacker can exploit Microsoft Entra ID applications by adding the new permissions and using them for privilege escalation or persistence in your Microsoft Entra ID tenant. |
| Example                       | Someone gives an application the "Directory.ReadWrite.All" permission or any permission that requires admin consent.                                                                                                                                                                                                                          |
| Trigger                       | Threat Manager creates a threat when an application receives admin consent for a permission.                                                                                                                                                                                                                                                        |

## Authentication Methods Policy Weakening

{/* TODO: confirm this threat ships in 3.3. The tracker lists no fix version for it. */}

The Authentication Methods Policy Weakening is when someone changes the tenant-wide authentication
methods policy to make signing in less secure.

| Authentication Methods Policy Weakening |                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                              | The authentication methods policy controls which sign-in methods every user in your Microsoft Entra ID tenant can use. An attacker with administrator rights can weaken it in a single change that affects the whole tenant and touches no individual account. This weakens authentication ahead of a later credential attack and doesn't trigger role or account detections. |
| Example                                 | An attacker enables the Voice call method, which a SIM swap can defeat, for the whole tenant.                                                                                                                                                                                                                                                                          |
| Trigger                                 | Someone changes the authentication methods policy to enable a weak method such as SMS or Voice, disable a strong method such as FIDO2 or Microsoft Authenticator, or apply a method to all users instead of a scoped group.                                                                                                                                                  |

## Compromised User Activity

The Compromised User Activity is when Microsoft Entra ID marks a user as "Confirmed Compromised" and
that user takes an action within your Microsoft Entra ID tenant.

| Compromised User Activity |                                                                                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                | The Compromised User activity threat detects any activity from a user that Microsoft Entra ID marked as "Confirmed Compromised". Treat any action by such users as potentially malicious and review it immediately. |
| Example                   | A confirmed compromised user grants another user the "global administrator" role.                                                                                                                                                                         |
| Trigger                   | A confirmed compromised user performs any action in your Microsoft Entra ID tenant.                                                                                                                                                                       |

## First-Time Location

If a user signs in from a country or region they have never signed in from before, Threat Manager creates a threat.

| First-Time Location |                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Definition          | The First-Time Location threat detects when a user successfully signs in from a country or region that Threat Manager has not seen for that user before.                                                                                                                                                                                                                                  |
| Example             | A user normally signs in from the United States. One day, the account signs in from a country the user has never signed in from, indicating the account may be compromised. If the user signs in from several new locations during the rollup period, Threat Manager rolls them up into one threat for that user.                                                                                                          |
| Trigger             | Threat Manager learns the locations each user signs in from. After a 30-day learning period for the user, Threat Manager creates a threat the first time that user signs in successfully from a new location. Failed sign-in attempts don't count toward learned locations. Threat Manager doesn't create a threat for anonymous logons or for locations excluded in the threat settings. |

## Impossible Travel

The Impossible Travel is when a user logs in from one geographical location and then quickly (and
impossibly) logs in from another far away geographical location.

| Impossible Travel |                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Definition        | Highlights accounts associated with multiple authentications from different geographical locations in a short period of time. |
| Example           | A user logs in from a New York city, then 10 minutes later logs in from Moscow.                                               |
| Trigger           | Threat Manager triggers a threat when a user logs in from two distant locations within a short period of time.                           |

## New Applicaton Credentials

If an application suddenly gets a new set of credentials/client secrets, Threat Manager raises an
alert so you can review why someone added them.

| New Application Credentials |                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Definition                  | Administrators usually provide application credentials when they create the application or when a secret is close to expiry. They can also add new credentials as needed. An attacker can exploit Microsoft Entra ID applications by adding new credentials and using them for privilege escalation or persistence within an Microsoft Entra ID tenant. |
| Example                     | Someone generates a new client secret for an existing application and uses it for a cybersecurity product.                                                                                                                                                                                                                                                          |
| Trigger                     | Someone adds a client secret to an application.                                                                                                                                                                                                                                                                                                                  |

## Security Policy Weakening

Security Policy Weakening is when someone changes a tenant-wide security policy in Microsoft Entra ID
to a less restrictive setting.

| Security Policy Weakening |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                | Microsoft Entra ID enforces tenant-wide policies that protect every account at once. A weakened policy grants no privilege by itself, so role assignment detections don't flag it. It enables illicit-consent phishing, unmanaged external access, sign-ins without multifactor authentication (MFA), or application registration as a persistence method. |
| Example                   | A user changes the guest invite policy from "Admin roles only" to "Anyone in the organization", then disables Security Defaults. Threat Manager creates one threat that lists both changes. |
| Trigger                   | Threat Manager creates a threat when a user loosens one of these policies: the guest invite policy, the user consent policy, Security Defaults, or the app creation policy. A guest invite change triggers when the setting moves toward "Anyone in the organization" from "No one", "Admin roles only", or "Members and admin roles". A user consent change triggers when the setting moves from "Do not allow user consent" toward "Allow user consent for apps from verified publishers, for selected permissions" or "Let Microsoft manage your consent settings", or when a custom policy adds user self-consent. Security Defaults triggers when it changes from enabled to disabled. The app creation policy triggers when users become allowed to register applications. |

{/* TODO: confirm this threat ships in Threat Manager 3.3. The source ticket has no fix version. */}

## Sensitive Role Changes

Sensitive Role Change is assigning a privilege role to an Microsoft Entra ID object.

| Sensitive Role Changes |                                                                                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition             | The sensitive role changes threat detects when someone assigns a privileged role to a Microsoft Entra ID object. The privilege roles have a high level of access to Microsoft Entra ID objects. They can make unauthorized changes which can pose significant security risks. |
| Example                | A user gives another user the "Global Administrator" role.                                                                                                                                                                                                                 |
| Trigger                | Someone grants a privileged role to a Microsoft Entra ID object.                                                                                                                                                                                                            |
