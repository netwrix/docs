---
title: "Command plans"
description: "Learn how Privilege Secure runs account commands on Linux, BSD, Cisco, and PAN-OS devices, and why updates restore the built-in command plans."
sidebar_position: 20
---

# Command plans

A command plan is a named, ordered set of steps that Netwrix Privilege Secure for Access Management (Privilege Secure) runs on a resource to manage an account. Privilege Secure uses command plans on platforms that it manages with commands instead of a directory service. Typical tasks are creating or removing a user, setting a password, and setting a Secure Shell (SSH) key.

## Where command plans apply

| Platform | How Privilege Secure runs the plans |
|---|---|
| **Linux** | Runs commands over SSH. |
| **BSD** | Runs commands over SSH. |
| **Cisco** | Runs commands over SSH. |
| **Palo Alto PanOS** | Calls the PAN-OS application programming interface (API). |

The service account that you assign to the resource runs the commands. For Linux, the account needs permission to run them. See [Target environments](/docs/privilegesecure/26.07/requirements/target-environments.md).

Privilege Secure ships the plans for each of these platforms.

## Command plans in the console

A default installation doesn't show the **Command Plans** tab on a platform. A platform shows one form with no tabs, as described in [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md).

{/* TODO verify: with the SME, the conditions under which the Command Plans tab appears, and whether to name the setting that turns it on. The lab console showed no Command Plans tab. The code gates the tab on custom_platform_connector, which no migration seeds. */}

## Updates restore the built-in plans

:::warning
When you update Privilege Secure, the update restores the built-in command plans to the version that ships with the release. You lose changes that you make to a built-in plan. The update keeps plans that aren't built in.
:::

Starting in 26.07.3, each update restores the built-in command plans.

{/* TODO verify: that plans created by a customer survive an update. The code re-imports only the plans flagged as built in. */}

## Related topics

- [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md)
- [Target environments](/docs/privilegesecure/26.07/requirements/target-environments.md)
