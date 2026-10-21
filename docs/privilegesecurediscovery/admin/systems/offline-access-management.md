---
title: "Manage offline access to local administrator accounts"
description: "Set an Offline Access Management policy that rotates the built-in and alternate local administrator passwords on Windows systems, and retrieve those passwords."
sidebar_position: 60
---

Offline Access Management (OAM) in Netwrix Privilege Secure for Discovery manages the local administrator accounts on Windows systems. It rotates their passwords and can add an alternate administrator account in place of the built-in Administrator account. You use these accounts to sign in locally when a system is offline or can't reach the domain.

OAM applies to Windows systems that aren't domain controllers. Privilege Secure for Discovery hides the **Offline Access** control for domain controllers, and the API rejects the request with the message "Offline Access Management is not supported on Active Directory domain controllers."

## Why manage the built-in Administrator account

Every Windows system has a built-in Administrator account (relative identifier 500) that you can't remove. The domain doesn't manage its password, which creates several risks:

- It's a privileged account with a well-known name.
- It often has a static password.
- Many systems often share the same password.
- Someone has to store the password and keep it from being lost or exposed.

Microsoft recommends creating an alternate local administrator account and disabling the built-in account. OAM automates this and rotates the passwords of both accounts.

## Turn on OAM for the server

OAM is off until you turn it on for the whole server. Until then, the OAM controls don't appear on the **Grant Access** page, in the domain settings, or in bulk actions.

1. Go to **Configure** > **Server**.
1. In **Additional Options**, set **Offline Access Management** to **Enabled**.

When **Prompt users to enter a reason/justification when retrieving an OAM password** is **Enabled** in the same panel, users must enter a comment before they can reveal a password. The audit log records the comment.

## Choose a policy

A policy is a preset group of options. The interface offers **Unmanaged**, **Best Practice**, and **Advanced...**. The API and the Systems page also name the strategy behind each policy.

| Interface choice | Strategy | What it does |
| --- | --- | --- |
| **Unmanaged** | Not applicable | Turns OAM off. The product re-enables the built-in Administrator account and removes the alternate administrator account. |
| **Best Practice** | `os-best-practice` | Creates an alternate administrator account, manages the passwords of both accounts, and disables the built-in Administrator account. Only administrators can reveal the passwords. |
| **Advanced...** with **Use Built-in Local Admin Account** | `managed-built-in` | Manages the built-in Administrator password and keeps the account enabled. Doesn't create an alternate account. |
| **Advanced...** with **Use an Alternative Admin Account** | `custom` | Creates an alternate account. You choose whether to manage the built-in password and whether to disable the built-in account. |

The alternate account name comes from a template. The default is `S1_ALT_ADMIN`. A question mark in the template becomes a random letter or digit, so `ADMIN_???` can produce `ADMIN_k4Z`. If you set a name earlier, the product keeps the template when you switch policies.

:::warning
If an account with the alternate name already exists on a system and isn't the built-in Administrator account, the scanner deletes it and creates the alternate administrator account in its place. Choose a name that no existing account uses.
:::

The product enforces these rules:

- You can't disable the built-in account unless an alternate account exists.
- You can't stop managing the built-in password when you use the built-in account.
- You can't enable OAM on a system while its scan mode is disabled, and you can't disable scan mode while OAM is on.

## Set the policy on a system

Only Privilege Secure for Discovery administrators can change the policy.

1. Go to **Access** > **Grant Access** and select the system.
1. Next to **Offline Access**, open the list that shows the current policy.

   ![The Offline Access menu with the Unmanaged and Advanced options](/images/privilegesecurediscovery/admin/oam-grant-access-policy-menu.webp)

1. Select **Best Practice**, or select **Advanced...** to choose the options yourself.

   ![The Offline Access Policy Options dialog with the alternate administrator account selected](/images/privilegesecurediscovery/admin/oam-policy-options-dialog.webp)

1. In the dialog, set the account, the name template, and the built-in account options, and then select **Save**.
1. Select **Rescan** to apply the policy now. Otherwise, the next scan applies it.

For example, to keep the built-in account enabled and manage only its password, select **Advanced...**, select **Use Built-in Local Admin Account**, and select **Save**.

## Set the policy for many systems

On **Management** > **Systems**, select systems and start a bulk action to set Offline Access Management. The bulk action supports Windows systems only and turns on scan mode for the systems it changes. In the advanced view, only the settings you select apply. Settings you don't select keep their current values, or take the **Best Practice** values if the system has none.

To find systems by their policy, use the **Offline Access** filter on the Systems page (**None**, **Unmanaged**, or **Managed**) and the **Strategy** filter (**Best Practice**, **Custom**, or **Managed Built-in**). The **OAM** column shows each system's policy.

## Set the default policy for a domain

The default policy applies to systems that the product discovers later. It doesn't change systems that exist.

1. Go to **Configure** > **Server** and expand the domain.
1. Under **Default Policies**, set **Offline Access**.
1. Select **Advanced** for more options. If the dialog appears, set the options and select **Save**.
1. Select **Save** at the bottom of the domain settings.

The domain settings display **Please SAVE your changes.** until you save.

## Set the policy with the API or Quickstart

An administrator can set the policy with a `POST` request to `/api/v1/computers/<computer-id>/offline-access-management`. The body takes `enabled` and any of the following options:

```json
{
  "enabled": true,
  "strategy": "custom",
  "break_glass_account_name_template": "ADMIN_???",
  "use_alternate_admin": true,
  "manage_built_in_admin_password": true,
  "disable_built_in_admin": false,
  "jita_or_persistent_users_can_access_passwords": false
}
```

When the system already has a policy and you send only `enabled`, the product changes the enabled state and keeps the other values. The `strategy` value is `os-best-practice`, `managed-built-in`, or `custom`, and it defaults to `os-best-practice`. The `custom` strategy requires `use_alternate_admin`, `manage_built_in_admin_password`, and `disable_built_in_admin`.

The API rejects a request that conflicts with the strategy. For example, `os-best-practice` with `disable_built_in_admin` set to `false` returns the following error:

```json
{"name":"UnprocessableEntityError","message":"One or more conflict with named strategy: [disable_built_in_admin]"}
```

The Quickstart workbook reports and sets the same options in the OAM columns of the **Computer Data** sheet. For the column names and values, see [Quickstart report field reference](../../configuration/bulk-onboarding/report-field-reference.md).

## Let non-administrators retrieve passwords

By default, only administrators can reveal OAM passwords. To let other users, such as help desk staff, sign in locally, select **JITA and persistent users can access passwords** in the **Offline Access Policy Options** dialog, or set `jita_or_persistent_users_can_access_passwords` to `true`. A user with just-in-time access (JITA) or persistent access then sees a key icon on the managed accounts. The user can use these items on the **Action** menu:

- **Access Password** reveals the current password.
- **Show Password History** lists earlier passwords.
- **Rotate Password On Next Scan** marks the password for rotation.

![The Action menu for the built-in Administrator account with the password items](/images/privilegesecurediscovery/admin/oam-account-actions-menu.webp)

When the option is off, the API returns a forbidden error to any non-administrator who requests a password.

## Password rotation, retention, and complexity

The product rotates a managed password when any of these events occurs:

- The product starts managing the account and has no password yet.
- The scheduled interval passes after the previous rotation. The default is 30 days.
- The after-use interval passes after a user first reveals the current password. The default is 60 minutes.
- A user selects **Rotate Password On Next Scan**.

Rotation happens on a scan, so a password can outlast its interval until the next scan reaches the system. The product keeps old passwords in the password history for 90 days by default.

Set these values for each domain on **Configure** > **Server**, in the **Offline Access Management Settings** of the domain. For the settings and their defaults, see [Configure Offline Access Management passwords](../../configuration/endpoint-preparation/oam-password-configuration.md).

## How the scanner enforces the policy

The scanner enforces the policy during its scan cycle, and when you select **Rescan**. The **Frequency** setting in the domain limits how often a system gets OAM enforcement. A system still gets enforcement before its interval ends when a password is due for rotation or the alternate account changed.

The scanner does the following in order:

1. Creates the alternate administrator account if it's missing. If someone renamed the account on the host, the scanner deletes it and creates a new account with the correct name and a new password. The new account is persistent.
1. Enables or disables the built-in Administrator account, as the policy requires.
1. Rotates the passwords of the managed accounts that are due.

If you change the alternate account name, the scanner deletes the previous alternate account from the system.

## Audit log messages

The product records OAM events with the type `credentials`. The category and message text for each event follow.

| Event | Category | Message |
| --- | --- | --- |
| A user enables or disables OAM on a system | `endpoint-enablement` | `Enabled Manage Passwords for system <DOMAIN>\<computer>` or `Disabled Manage Passwords for system <DOMAIN>\<computer>` |
| A user reveals a password | `password-history` | `Accessed most recent local account password for <computer>\<account> (<SID>)`, or `previous` in place of `most recent` for an earlier password |
| A user requests a rotation | `password-history` | `Password rotation requested for <computer>\<account> (<SID>)` |
| An administrator changes the server setting | `capability-enablement` | `Enabled the Local Account Password Management capability on <api-url> which supersedes individual managed system configurations.` or `Disabled` in place of `Enabled` |

Each event also records the user who acted and the target system and account. When the server requires a justification, the event records the user's comment. For more information about forwarding logs, see [Splunk and SIEM queries](../../integrations/siem/splunk-and-siem-queries.md).
