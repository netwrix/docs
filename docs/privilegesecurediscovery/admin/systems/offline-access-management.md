---
title: "Manage offline access to local administrator accounts"
description: "Configure Offline Access Management to rotate and control the built-in and alternate local administrator passwords on Windows systems."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm Offline Access Management (OAM) behavior, strategy names, defaults, and password rotation rules at 26.09.1. Evidence: docker/shared/python/src/remediant/db_data/policies/server_config/password_rotation.py:11-12 (defaults for EXPIRY_MINUTES_AFTER_ACCESS and RID_500_ROTATION_DAYS only).

TODO: State how a customer sets the RID_500_* and EXPIRY_MINUTES_AFTER_ACCESS environment variables on the stack (which services, which file), and whether the database-based `managed_sids` override is supported for customers. Evidence: none.

TODO: Confirm a supported way to find systems by OAM policy with `s1 db`, and the collection and field names to document. The previous page used the `ldap_store` collection and `config.policies.offline_access_management` fields. Evidence: none.

TODO: Provide the API endpoint, request body, and `curl` example for setting an OAM policy with an API key. The previous page showed only a Postman screenshot. Evidence: none.

TODO: Confirm the audit log message texts in the Logging section at 26.09.1. Evidence: none.

TODO: Confirm that the Quickstart OAM column names and values match the current report. Evidence: none.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam_domain_config_to_db.webp is a database tool view with full object IDs. Redact or replace it.

TODO: /images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam_postman.webp is no longer referenced because the Postman section was removed. Delete it if nothing else uses it.

TODO: Re-capture the OAM screenshots with demo data if any show real system names.
:::

Offline Access Management (OAM) in Netwrix Privilege Secure for Discovery manages local administrator accounts on Windows systems. It rotates their passwords and can replace the built-in Administrator account with an alternate account, so that you can sign in locally when a system is offline or other administrator accounts are unavailable.

## Why manage the built-in Administrator account

Every Windows system has a built-in account named Administrator that can't be removed. It provides a way to sign in with local administrator privileges when the system is offline or other administrator accounts are unavailable. Because it is a local account, the domain doesn't manage its password. This exposes several risks:

- It is a privileged account with a known name.
- It often uses a static password.
- The static password is often shared across systems.
- The password must be stored without being lost, misplaced, or compromised.

Microsoft recommends creating an alternate local administrator account and disabling the built-in Administrator account.

## What OAM does

OAM automates the following tasks:

- Creating an alternate administrator account
- Disabling the built-in Administrator account
- Rotating and managing the passwords of both accounts

You can configure OAM in the following ways:

- On the **Grant Access** page of the Privilege Secure for Discovery interface
- Automatically when a system is discovered, by applying the default OAM policy of the domain
- By using the Quickstart utility
- By using the Privilege Secure for Discovery API

## Choose a strategy

A strategy is a preset group of OAM settings. Three strategies are available.

### Best Practices

The **Best Practices** strategy does the following:

- Creates an alternate administrator account. The default name is `S1_ALT_ADMIN` unless a name was previously set.
- Rotates and manages the password of the alternate administrator account.
- Rotates and manages the password of the built-in Administrator account.
- Disables the built-in Administrator account.
- Reveals OAM account passwords to Privilege Secure for Discovery administrators and withholds them from JITA users and persistent non-administrator users.

The alternate account name isn't strictly part of the best practices. The default is a convenience. If you previously set a name by another means, the product keeps and reuses it. For example, if you set a custom strategy with a specified name and then switch to **Best Practices**, the existing name stays as it is.

### Managed Built-in

The **Managed Built-in** strategy does the following:

- Rotates and manages the password of the built-in Administrator account.
- Enables the built-in Administrator account if needed.
- Doesn't use an alternate administrator account.

This strategy has a toggle that allows OAM passwords to be revealed to users who have JITA or persistent access to the server.

### Custom

The **Custom** strategy lets you set any OAM policy, but some combinations aren't allowed. You can configure the following:

- Whether the alternate administrator account name is fixed or randomized
- Rotation and management of the alternate administrator account password
- Rotation and management of the built-in Administrator account password
- Whether the built-in Administrator account stays enabled when an alternate administrator exists
- Whether OAM passwords are revealed to JITA or persistent non-administrator users

The built-in account can't be disabled unless an alternate administrator account exists.

## Configure OAM on a system

Only Privilege Secure for Discovery administrators can configure these settings.

1. Open the **Grant Access** page for the system.

   The following screenshot shows the page before a policy is applied, or after OAM is set to disabled, which is called **Unmanaged**.

   ![The Grant Access page with the OAM policy set to Unmanaged](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-ui-test-unmanaged-default.webp)

1. Select a strategy. To see all of the options, select **Advanced...**.

   The following screenshot shows the **Best Practices** strategy with the added option to randomize the alternate administrator name.

   ![The Offline Access Policy Options with the Best Practices strategy and a randomized alternate administrator name](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-grant-access-overview2.webp)

   If you select **Best Practices**, the **Offline Access Policy Options** dialog doesn't appear. The product sets all options automatically, except that it reuses any previously set **Alternative account name template**.

1. Rescan the system to apply the changes to the host.

### Let non-administrators retrieve local administrator passwords

By default, only Privilege Secure for Discovery administrators can retrieve the built-in Administrator or alternate administrator password. To let other users, such as help desk staff, sign in locally to a system, select the **JITA or persistent users can access passwords** option.

When the option is selected, a user with JITA or persistent access sees a key icon that indicates a current password is available. The user also sees action menu items to reveal the password and to view the password history.

![An administrator selecting the option on the left and a non-administrator seeing the key icon on the right](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_jita-or-persistent-modal.webp)

When the option isn't selected, users who aren't administrators can't access the password.

![The Grant Access page of a non-administrator user with the option cleared](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_jit-modal-2.webp)

If an administrator clears the option while a non-administrator has the page open, the API protects the password and returns a "forbidden" error.

![The forbidden error shown to a non-administrator after the option is cleared](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_jit-modal-api-smart-alert.webp)

## Set default OAM policy for a domain

You can save default settings on the domain configuration page so that any newly discovered system receives them automatically. This works like the **Grant Access** page.

![The domain configuration page with the default OAM policy settings](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-s1-1043_copy.webp)

If you select **Best Practices**, the dialog doesn't appear, but the product saves all of the best practice options.

![The domain default OAM policy settings saved in the database](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam_domain_config_to_db.webp)

## Set OAM with Quickstart

The **Computer Data** sheet of the Quickstart workbook has a group of columns that report the OAM policy of each system. **OAM (Offline Access Management) Enabled** reports `TRUE` or `FALSE` to show whether the product manages the built-in administrator account, an alternate administrator account, or both.

In the exported workbook, blue cells hold exported system data and yellow cells are for values that you enter to import into Privilege Secure for Discovery.

![The Quickstart Computer Data sheet with exported data in blue and import columns in yellow](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-s1-1824.webp)

The following columns describe the OAM policy of a system, if one exists.

| Column name | Value |
| --- | --- |
| OAM (Offline Access Management) Enabled | `TRUE`, `FALSE` |
| OAM Strategy | `OS-BEST-PRACTICE`, `MANAGED-BUILT-IN`, `CUSTOM` |
| OAM Name Template | Alphanumeric template with `?` wildcards, for example `S1_ALT_???` |
| OAM JITA User Can Access PW | `TRUE`, `FALSE` |
| OAM Use Alt Admin | `TRUE`, `FALSE` |
| OAM Manage Built-in PW | `TRUE`, `FALSE` |
| OAM Disable Built-in Admin | `TRUE`, `FALSE` |

To change the policy, set **Set OAM Enabled** to `TRUE` or `FALSE`, and then set the other values:

- **Strategy:** Enter `OS-BEST-PRACTICE`, `MANAGED-BUILT-IN`, or `CUSTOM`. If you leave it blank, the current value is kept. If no policy was set before, the default is `OS-BEST-PRACTICE`.
- **Name template:** Enter a string with `?` wildcards. If you leave it blank, the current value is kept, or the default `S1_ALT_ADMIN` is used.
- **Remaining options:** Include them only when they don't conflict with the strategy.

The following table shows the default settings for each strategy.

| Option | `OS-BEST-PRACTICE` | `MANAGED-BUILT-IN` | `CUSTOM` |
| --- | --- | --- | --- |
| JITA User Can Access PW | `FALSE` | `FALSE` | `FALSE` |
| Use Alt Admin | `TRUE` | `FALSE` | Required |
| OAM Manage Built-in PW | `TRUE` | `TRUE` | Required |
| Disable Built-in Admin | `TRUE` | `FALSE` | Required |

The API rejects invalid combinations of settings.

![The error returned when Quickstart settings conflict with the strategy](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-s1-2343-validate_paramts_dont_conflic_using_quickstart.webp)

For example, the following settings conflict with the best practices strategy:

- **Set OAM Enabled:** `TRUE`
- **Set OAM Strategy:** `OS-BEST-PRACTICE`
- **Set OAM Disable Built-in Admin:** `FALSE`

If you import a file with these settings, the API returns the following error:

```json
{"name":"UnprocessableEntityError","message":"One or more conflict with named strategy: [disable_built_in_admin]"}
```

For the full list of Quickstart columns, see [Quickstart report field reference](../../configuration/bulk-onboarding/report-field-reference.md).

## Find systems by OAM policy

When you set an OAM policy, the product saves the fine-grained options, such as whether to disable the built-in Administrator account, even when you select a strategy. This makes it possible to find systems by what the policy does.

Querying by options is more reliable than querying by strategy. A policy can use the `custom` strategy with all of the best practice options, and a query for the `os-best-practice` strategy misses it. If the `enabled` property is `false`, the entire policy is disabled regardless of the other options.

To find systems that follow the best practices, find systems where the policy is enabled and all of the following options are `true`: use alternate administrator, disable built-in administrator, and manage built-in administrator password.

To run such a query, open a database shell with the `s1` helper utility:

```bash
s1 db
```

For the helper utility, see [Install the s1 helper utility](../../install/s1-cli-helper.md).

## Password retention, rotation, and complexity

OAM uses the same configuration values as the RID 500 account for password retention, rotation, and complexity. The defaults are:

- Retention: 90 days
- Rotation: 30 days
- Minimum length: 12
- Minimum digits: 3
- Minimum uppercase characters: 3
- Minimum special characters: 3
- Excluded characters: none
- Rotation after reveal: the first scan after 1 hour from the time the password was revealed

When a managed password is revealed, whether for the RID 500 account or the alternate administrator, the product rotates it on the first scan after one hour. No user action is required. You can also request that the password rotate on the next scan.

### Rotation triggers

The following events trigger a password rotation:

- Password management for an administrator is enabled for the first time.
- The configured number of days passes after the previous rotation (`RID_500_ROTATION_DAYS`).
- The configured number of minutes passes after the password is revealed to a user (`EXPIRY_MINUTES_AFTER_ACCESS`).
- You request a rotation on the **Grant Access** page. A rescan is required to rotate the password right away.

![The Rotate Password menu item on the Grant Access page](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_s1-911_rotate_password_menu_item.webp)

### Configure password rotation values

No dedicated interface exists for all of the rotation values, but you can set the frequency for a domain. See [OAM password configuration](../../configuration/endpoint-preparation/oam-password-configuration.md).

The product reads the optional values at the start of the scan or worker cycle for a system, in the following order of precedence:

1. The domain configuration saved in the database
1. Environment variables
1. Default values

A change saved in the database doesn't require a restart. A change made with environment variables requires a restart of the service.

![The password rotation settings stored in the database](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_password_rotation_config.webp)

The following table lists the environment variables.

| Environment variable | Default | Notes |
| --- | --- | --- |
| `EXPIRY_MINUTES_AFTER_ACCESS` | `60` | |
| `RID_500_ROTATION_DAYS` | `30` | |
| `RID_500_RETENTION_DAYS` | `90` | |
| `RID_500_PW_MIN_LENGTH` | `12` | |
| `RID_500_PW_MIN_DIGITS` | `3` | |
| `RID_500_PW_MIN_UPPERCASE` | `3` | |
| `RID_500_PW_MIN_SPECIAL_CHARS` | `3` | Special characters are punctuation, and the single quote isn't included. |
| `RID_500_PW_EXCLUDE_CHARS` | Empty | Characters to leave out of generated passwords. |

The minimum settings are lower bounds, not exact values. Other criteria must also be met. For example:

- If you set `RID_500_PW_MIN_LENGTH=10` and `RID_500_PW_MIN_UPPERCASE=10`, and set all other minimums to 0, the password is 10 uppercase characters.
- If you also set `RID_500_PW_MIN_DIGITS=1`, the password is 11 characters: 10 to satisfy the uppercase minimum and 1 to satisfy the digit minimum.
- If you instead set `RID_500_PW_MIN_LENGTH=20`, 11 characters satisfy the uppercase and digit requirements, and the remaining 9 can be any letter, digit, or punctuation character that isn't excluded.

The resulting password length is the greater of `RID_500_PW_MIN_LENGTH` or the sum of `RID_500_PW_MIN_DIGITS`, `RID_500_PW_MIN_UPPERCASE`, and `RID_500_PW_MIN_SPECIAL_CHARS`.

An error occurs if the settings can't meet the requirements. For example, if `RID_500_PW_EXCLUDE_CHARS` is `0123456789` and `RID_500_PW_MIN_DIGITS` is `2`, the product raises the exception "Cannot meet minimum requirements of 2 digit characters".

## How the scanner enforces the policy

The scanner service enforces the OAM policy during its regular scan cycle, or when you request a rescan in the interface. For the policy to be fully enforced, OAM must be enabled, Scan Mode must be enabled, and Protect Mode must not be disabled. If Protect Mode is disabled, the product rotates passwords only. It doesn't create the alternate administrator account or disable the built-in Administrator account.

The scanner enforces the policy in the following order:

1. It creates the alternate administrator account if needed. If the account exists, the scanner checks that it wasn't renamed on the host. If it was renamed, the scanner deletes the account and creates a new one with the correct name. A new account has its password created and managed immediately.
1. It enables or disables the built-in Administrator account as configured.
1. It rotates the passwords of the alternate and built-in Administrator accounts as needed.

If you change the alternate administrator account name, the scanner removes the previous alternate administrator account that is no longer in use. This fully removes the user from the system, rather than only removing it from the Administrators group.

## Audit log messages

The product writes audit log messages for OAM actions. The following examples show the main events, with placeholders for the values that vary.

When you enable OAM through the API, the API logs a message in the `endpoint-enablement` category:

```json
{
  "name": "api",
  "message": "Enabled Manage Passwords for system <DOMAIN>\\<computer>",
  "category": "endpoint-enablement",
  "type": "credentials"
}
```

On the next scan, the scanner or worker enforces the policy and logs messages that describe the actions taken, such as creating the alternate administrator account, applying the enablement policy to the local accounts, and applying the local password policy and password history retention policy.

When you disable OAM, the background service re-enables the built-in Administrator account and removes the alternate administrator account.

When a user accesses a password, the API logs a message in the `password-history` category:

```json
{
  "name": "api",
  "category": "password-history",
  "message": "Accessed most recent local account password for <computer>\\<account> (<SID>)",
  "type": "credentials"
}
```

When a user requests a password rotation, the API logs the following message:

```json
{
  "name": "api",
  "category": "password-history",
  "message": "Password rotation requested for <computer>\\<account> (<SID>)",
  "type": "credentials"
}
```

For more information about logs, see [Splunk and SIEM queries](../../integrations/siem/splunk-and-siem-queries.md).
