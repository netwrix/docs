---
title: "Rotation methods"
description: "Learn how password rotation differs for Standard, Internal, and Service accounts, and which toolbar button starts each rotation."
sidebar_position: 30
---

# Rotation methods

How an account rotates depends on its **Managed Type** and its **Method**. The **Credentials** page shows both columns. See [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md).

## Rotation by account type

| Managed type | Dependencies | Method | How the password rotates |
|---|---|---|---|
| **Standard** | None | **Automatic** | Privilege Secure rotates the password on the platform's schedule. Click **Rotate** to rotate it now. |
| **Standard** | None | **Manual** | You update the password on the resource and in Privilege Secure. |
| **Standard** | None | **Not Managed** | Privilege Secure has never stored a password. Click **Manage** first. |
| **Internal** | None | **Automatic** | Privilege Secure rotates the password on the platform's schedule. Click **Rotate** to rotate it now. |
| **Internal** | None | **Manual** | You update the password on the resource and in Privilege Secure. |
| **Service** | One or more | **Manual** | Rotation starts from **Service Account Details**, because services and scheduled tasks must receive the new password. |
| **Service** | One or more | **Not Managed** | Privilege Secure has never stored a password. Rotate from **Service Account Details**. |

{/* TODO verify: that a Not Managed Service account becomes Managed with method Manual after its first rotation (26.03 behavior). The lab didn't rotate. */}

## Standard accounts

A Standard account is a local or domain user account, including the managed users that activity sessions create. For an Automatic account, the platform's **Scheduled Change Policy** sets the rotation schedule, unless a [credential policy override](/docs/privilegesecure/26.07/admin/credentials/policy-overrides.md) applies. See [Schedule policies](/docs/privilegesecure/26.07/resources/platforms/schedule-policies.md).

## Internal accounts

An Internal account is an account that Privilege Secure itself uses, with no dependencies. Internal accounts rotate on the primary domain controller (PDC) of the domain. {/* TODO verify: the 26.07.3 behavior for Internal accounts on the PDC, and what happens when the PDC is unreachable. */}

To manage an Internal account, see [Manage internal service accounts](/docs/privilegesecure/26.07/admin/credentials/internal-service-accounts.md).

## Service accounts

A Service account is a local or domain account that one or more Windows services or scheduled tasks use. Internal accounts that have dependencies also show as Service. The **Dependents** column shows how many. A Service account rotates from the **Account Dependencies** dialog, which updates each dependent after the password changes. See [Rotate service accounts and their dependencies](/docs/privilegesecure/26.07/admin/credentials/service-account-dependencies.md).

## Rotation rules

- Manual rotation is blocked while a session on the account is active. See [Manage, rotate, and verify credentials](/docs/privilegesecure/26.07/admin/credentials/manage-credentials.md).
- **Rotate on Session Start** and **Rotate on Session End** rotate an account around its sessions. See [Manage, rotate, and verify credentials](/docs/privilegesecure/26.07/admin/credentials/manage-credentials.md#control-the-account-state-after-a-session).
- Privilege Secure keeps a limited password history for each managed account. See [View passwords and password history](/docs/privilegesecure/26.07/admin/credentials/password-history.md).
