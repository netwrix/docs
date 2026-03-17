---
title: "Offline Access Management (OAM) - Extended"
description: "Offline Access Management (OAM) - Extended"
sidebar_position: 60
---

# Offline Access Management (OAM) - Extended

Offline Access Management (OAM) - Extended

# Offline Access Management (OAM) - Extended

## Overview

All Microsoft Windows systems have a built-in administrator account named “Administrator”. It cannot
be removed. It provides mechanism to log into a system with the local administrator privileges in
the event the system is either offline or other administrator accounts are unavailable for any
reason. Because it is a local account, password management of this account is not done by the
domain.
This exposes several risk factors:

- It is a very powerful account with a known name.
- This account often uses a static password.
- This static password is often common across other systems.
- Storing that account's password without losing, misplacing, or allowing it to be compromised.

Microsoft recommends as a best practice to create an alternate local administrator account and
disable the built-in administrator account.

## Main Document

Privilege Secures OAM feature provides a simple solution to manage offline access to local computer
administrator/root accounts on Windows.
It automates the coordination of:

- Creation of an alternate administrator account.
- Disabling the built-in administrator account.
- Rotation and management of passwords of those accounts.

It provides a range of configuration settings which can be as simple as just enabling a single “Best
Practices” configuration, or simply “Manage the Built-in Account”, or configure fine grained
settings as desired with a “Custom” strategy.

These settings may be set:

- On the Privilege SecureUI Grant Access page.
- Automatically upon system discover by applying the domain’s default OAM policy settings.
- Via the QuickStart utility.
- Via the Privilege Secure API endpoint.

## Strategies

To simplify getting setup, several preset bundles of configuration settings have been grouped into
what we are calling a “Strategy”. There are 3 strategies available:  Best Practices, Managed
Built-In, and Custom.  These strategies are detailed below.

## Best Practices

- This strategy will collectively implement:

- The creation of an alternate administrator account (default name “S1_ALT_ADMIN” unless previously
  set).
- The rotation and management of the alternate administrator account’s password.
- The rotation and management of the built-in Administrator account’s password.
- The disabling of the built-in Administrator account.
- Revealing OAM account passwords to S1 admins, but not to JITA or persistent non-admin users.

- Note that the name of the alternate administrator account is not strictly part of the “Best
  Practices”. The default setting is more for convenience. If the name has previously been set by
  another means, the previous setting will be honored and reused. For example, if the policy is set
  as a custom strategy with a specified name, and then switched to “Best Practice” the existing name
  will be left as-is.

## Managed Built-in

- This strategy will collectively implement:

- The rotation and management of the built-in Administrator account’s password.
- The enabling of the built-in Administrator account if needed.
- Not utilizing an alternate admin account.

- This strategy has a setting toggle to allow OAM passwords to Privilege Secure users with either
  JITA or persistent access to the server.

## Custom

- This strategy will collectively implement:

- Configuring the alternate Administrator account’s name as fixed or randomized.
- The rotation and management of the alternate administrator account’s password.
- The rotation and management of the built-in Administrator account’s password.
- Whether to leave the built-in Administrator account enabled even if there is an alternate
  administrator.
- Whether to reveal OAM passwords to JITA or persistent non-admin users.
- The built-in account cannot be disabled unless an alternate administrator account exists.
- It will allow for custom setting of any OAM policy, some combinations are not allowed.

## UI - Grant Access Page

As a starting point to understand what options can be set and how the affect the system, we’ll look
at the Grant Access page before and after setting the OAM policy. Only Privilege Secure
administrators have access to configure these settings.
Below is a screenshot when the policy has not yet been applied, or has been set to disabled AKA
“Unmanaged”.

![LOAM-UI-test-Unmanaged-default.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-ui-test-unmanaged-default.webp)

As an example of seeing most of the options in action, the screenshot below show a custom strategy
setting by selecting “Advanced...”. In the case shown, this is just “Best Practice” plus the added
feature of randomizing the Alt-Admin name.

![LOAM-grant-access-overview2.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-grant-access-overview2.webp)

Note that if the “Best Practice” option is selected, no “Offline Access Policy Options” dialog will
be displayed. All options will be set automatically with the exception that any previously set
“Alternative account name template” will be reused.
Note also that after setting options a rescan is needed for those changes to reflect on the host
system.

## Option to allow JIT or Persistent access users to retrieve Local Admin Passwords

By default, only S1 administrators can retrieve the built-in Administrator or alternate admin
passwords, but it may be desirable to allow others such as help-desk to have access to log in
locally to a system. To allow this, the option “JITA or persistent users can access passwords”
option may be selected.
The screenshot below shows two browsers. On the left, a Privilege Secure admin setting that option.
On the right, a JITA or persistent non-admin user’s view. When the option is checked, the non-admin
user will see “key” icon indicating that a current password is available, and the action menu items
to reveal it as well as to access the password history.

![jita-or-persistent-modal.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_jita-or-persistent-modal.webp)

When the option is not selected by the administrator, access to the password will no longer exist.

![jit-modal-2.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_jit-modal-2.webp)

In the event that an S1 administrator deselect that option while a non-admin’s browser is open, the
API protects password visibility and returns a “forbidden” error.

![jit-modal-api-smart-alert.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_jit-modal-api-smart-alert.webp)

## UI - Domain Configuration Page

In a very similar process as on the Grant Access page, default settings may be saved so that any
newly discovered system will have those policy settings automatically applied

![LOAM-S1-1043_copy.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-s1-1043_copy.webp)

The domain level OAM default policy settings are persisted to the
`default_system_config.policies.offline_access_management` object in the `ldap_config` collection in
the database as shown below. If “Best Practice” is selected, even though the dialog is not
displayed, all options will be saves as displayed in the bottom of the image.

![LOAM_domain_config_to_DB.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam_domain_config_to_db.webp)

## QuickStart Utility

The excel sheet Computer Data contains a group of columns which report the system's "Offline Access
Management" policy.
Offline Access Management Enabled will report TRUE/FALSE if Privilege Secure is managing the
built-in administrator account and/or an alternate administrator account.
The image below shows the column structure of the excel spreadsheet that has been exported. The data
in blue is the system data that had been exported, while the data in yellow has been entered by a
user to be imported to Privilege Secure.

![LOAM-S1-1824.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-s1-1824.webp)

The following policy options will be displayed for the computer's OAM Policy if it exists.

| Column Name                             | Value                                                       |
| --------------------------------------- | ----------------------------------------------------------- |
| OAM (Offline Access Management) Enabled | TRUE,FALSE                                                  |
| OAM Strategy                            | OS-BEST-PRACTICE, MANAGED-BUILT-IN, CUSTOM                  |
| OAM Name Template                       | Template an alpha-numeric with ? wildcards (ex: S1*ALT*???) |
| OAM JITA User Can Access PW             | TRUE,FALSE                                                  |
| OAM Use Alt Admin                       | TRUE,FALSE                                                  |
| OAM Manage Built-in PW                  | TRUE,FALSE                                                  |
| OAM Disable Built-in Admin              | TRUE,FALSE                                                  |

If you wish to change any of this policy's options, set the Set OAM Enabled to TRUE/FALSE as
appropriate. The Strategy may be entered with any of following values: OS-BEST-PRACTICE,
MANAGED-BUILT-IN, CUSTOM. If left blank it will default to the current value, or to OS-BEST-PRACTICE
if no previous policy was set.
The OAM Name Template accepts a string with wildcards expressed by question marks (?). If left blank
it will default to the current value, or to S1_ALT_ADMIN.

The remaining options may be included, but must not conflict with the defined strategy.
Default Settings by Strategy

| Option \ Strategy       | OS-BEST-PRACTICE | MANAGED-BUILT-IN | CUSTOM   |
| ----------------------- | ---------------- | ---------------- | -------- |
| JITA User Can Access PW | FALSE            | FALSE            | FALSE    |
| Use Alt Admin           | TRUE             | FALSE            | required |
| OAM Manage Built-in PW  | TRUE             | TRUE             | required |
| Disable Built-in Admin  | TRUE             | FALSE            | required |

If an invalid combination of settings is entered, the API end-point will protect against sending
invalid options.

![LOAM-S1-2343-validate_paramts_dont_conflic_using_quickstart.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam-s1-2343-validate_paramts_dont_conflic_using_quickstart.webp)

For example, if the following settings are entered:

- Set OAM Enabled = TRUE
- Set OAM Strategy = OS-BEST-PRACTICE
- Set OAM Disable Built-in Admin = FALSE `<--- This will conflict with Best Practices`

Attempting to import the file will cause the following error to be returned by the API.

Response Body:
{`"name":"UnprocessableEntityError","message":"One or more conflict with named strategy: [disable_built_in_admin]"`}

## API

Policies can be set using the Privilege Secure API.
The screenshot below shows access using Postman to test access to the API end-point.

![LOAM_postman.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_oam_postman.webp)

## Querying the database by OAM policy settings

When the OAM policy is set, even though it may be possible to simply set a `Strategy` option of say
`'os-best-practice'` or `'managed-built-in'`, the default fine-grained policy options will be
persisted to the database so that querying the data is simple.

All of the fine-grained functionality across both the ‘Built-in Admin’ and the ‘Alternate Admin’
(which may not even exist at the time of setting the policy) are consolidated into options under
single policy `config.policies.offline_access_management`.

Regardless of the options that are set, setting the `enabled` property `false` will disable the
entire policy.

For example, to find all systems that will disable the Windows built-in Administrator account we
would look at the systems where the OAM policy is enabled and has the `disable_built_in_admin`
option `true`.

- ```
  db.getCollection("ldap_store").find( { "config.policies.offline_access_management.enabled": true, "config.policies.offline_access_management.disable_built_in_admin": true })
  ```

It is important to note that while an OAM policy can simply be set to just
s`trategy:"os-best-practice"`, it is also possible to set `strategy:"custom"` with ALL of the same
best practice options. So, querying by options is preferable to querying by strategy alone. The
following correctly retrieves the systems which follow best practices.

- ```
  db.getCollection("ldap_store").find( { "config.policies.offline_access_management.enabled": true, "config.policies.offline_access_management.use_alternate_admin": true, "config.policies.offline_access_management.disable_built_in_admin": true, "config.policies.offline_access_management.manage_built_in_admin_password": true, })
  ```

The query below may miss `custom` settings which effectively still follow best practices.

- ```
  db.getCollection("ldap_store").find( { "config.policies.offline_access_management.enabled": true, "config.policies.offline_access_management.strategy": "os-best-practice" })
  ```

## Password Retention, Rotation and Complexity

Offline Access uses the pre-existing “RID 500” configuration values for password retention, rotation
and complexity:

- Retention:  90 days
- Rotation: 30 days
- Complexity:
    -   - Minimum Length: 12
        - Minimum Digits: 3
        - Minimum Uppercase: 3
        - Minimum Special Characters: 3
        - Exclude chars: `<none>`
- Password Rotation After Reveal: First scan after 1 hour of being revealed (version 2.2 on)

These settings can be overridden in the database if required.

## Rotation of Passwords

From version 2.2 onward additional control over password rotation has been included to Privilege
Secure. Once a password that is being managed by Privilege Secure (RID500 or alternate
administrator) is revealed it will be rotated on the first scan after one hour. There is no user
intervention required for this functionality. The password can also be requested to be rotated on
the next scan.

## Scanner Service

The scanner service will enforce the OAM policy during its regular scan cycle, or when a rescan is
requested by the UI. For the policy to be fully enforced, the the OAM policy must be enabled, Scan
Mode must be enabled, and Protect Mode must not be disabled.
If the Protect Mode policy is disabled, only password rotation will be performed, but the creation
of the alternate administrator account and disabling of the built-in Administrator account will not
be allowed.
The first task of enforcing the policy is to create an alternate administrator account if needed. If
one already exists, the scanner will ensure that it has not been renamed on the host system If it
has been renamed, that account will be deleted and a new one with the correct name will be
recreated. When the account is created, it will immediately have its password created and managed.
The second step is to ensure that the built-in administrator account is enabled or disabled as
configured.
If the Alternate administrator account name setting has been changed, the scanner will remove any
previous alternate administrator account that is not longer in us. This will **fully** remove that
user from the system, not just remove them from the administrators group.
Passwords of the alternate and built-in Administrator accounts will then be rotated as needed.

## Password Rotation Configuration

Optional configuration settings for controlling password rotation are retrieved from the mechanisms
listed below in the specified order of precedence. There is no direct user interface provided. These
values are read at the beginning of the scan or worker cycle for a system. If the settings are
configured in the database, a server restart is not needed. If settings are via environment
variables, a restart of the service would be required to take effect.

- The `discovery_config` collection’s `managed_sids` document in the database
- Environment variables
- Default values

If the database contains a `managed_sids` entry in the `ldap_config` record in the
`discovery_config` collection, then any specified value will take precedence.

![password_rotation_config.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_password_rotation_config.webp)

If a database entry is not specified for any value, then the following environment variables will be
checked. If neither a database value nor an environment variable is specified, the default value
will be used.

| Environment Variable Nam     | Default Value | Notes                                                                                                                                                                                                     |
| ---------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EXPIRY_MINUTES_AFTER_ACCESS  | 60            |                                                                                                                                                                                                           |
| RID_500_ROTATION_DAYS        | 30            |                                                                                                                                                                                                           |
| RID_500_RETENTION_DAYS       | 90            |                                                                                                                                                                                                           |
| RID_500_PW_MIN_LENGTH        | 12            |                                                                                                                                                                                                           |
| RID_500_PW_MIN_DIGITS        | 3             |                                                                                                                                                                                                           |
| RID_500_PW_MIN_UPPERCASE     | 3             |                                                                                                                                                                                                           |
| RID_500_PW_MIN_SPECIAL_CHARS | 3             | Punctuation chars (note single quote is excluded): `!"#$%&()*+-:;<=>?@[\]^_{},` \| `.` `/"~'`  Need to comment out these characters: `( ) [ ] { } " '` Example, to comment out a `[` you would use:  `\]` |
| RID_500_PW_EXCLUDE_CHARS     | ""            |                                                                                                                                                                                                           |

Note that some of these settings are minimum values, not maximum values. It can have any number
greater than or equal to setting. Keep in mind it that other criteria must be maintained too.
For example:

- If I set RID_500_PW_MIN_LENGTH=10,
- and set RID_500_PW_MIN_UPPERCASE=10,
- and all the other MINs to 0, then I'll end up with a purely uppercase password 10 characters long.
- But If I also set RID_500_PW_MIN_DIGITS=1, then I'll end up with a password of length 11. That
  being 10 to satisfy the min uppercase and 1 to satisfy the min digits.

If in the case above we had set RID_500_PW_MIN_LENGTH=20, then 11 chars would be restricted to the
uppercase and digits requirement shown, and the remaining 9 could be any alphanumeric plus
punctuation minus the excluded characters.
The resulting password length will be the greater of:

- RID_500_PW_MIN_LENGTH,
- or (RID_500_PW_MIN_DIGITS + RID_500_PW_MIN_UPPERCASE + RID_500_PW_MIN_SPECIAL_CHARS)

An error would occur if the configuration settings are not able to meet the specified requirements.
For example, if RID_500_PW_EXCLUDE_CHARS=“0123456789” and RID_500_PW_MIN_DIGITS=2, then the
exception “Cannot meet minimum requirements of 2 digit characters” would be raised.

## Password Rotation Schedule

There are several mechanisms that can trigger a password rotation:

- when password management for an administrator is enabled for the first time
- n number of days after its previous rotation as configured above (RID_500_ROTATION_DAYS)
- n number of minutes after the password has been reveal to a user (EXPIRY_MINUTES_AFTER_ACCESS)
- or, on demand via the Grant Access page as shown below. This requires a Rescan to perform the
  process right away.

![LS1-911_rotate_password_menu_item.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360043745553_s1-911_rotate_password_menu_item.webp)

## Logging

When the OAM policy is enabled via the API it will log a message of the following format:

```
{    "name": "api",  "message": "Enabled Manage Passwords for system {DOMAIN_NETBIOS}\\{CN}",    "category": "endpoint-enablement",  "type": "credentials",  "targetSystem": {...},  "user": {...},  ...}
```

Upon the next scan, the background services of either the scanner or worker will enforce the policy
and log the following:

```
INFO: successfully created empty managed_sids entry user: {CN}, sid: {ALT-ADMIN-NAME}\{ALT-ADMIN-SID}INFO: Enforce create_if_missing policies: create account by name if not exists for user {ALT-ADMIN-NAME}INFO: Enforce enablement policy for local account {ALT-ADMIN-NAME}. Change required=False, value=TrueINFO: Enforce enablement policy for local account Administrator. Change required=True, value=FalseINFO: system {CN} local passwords are managedINFO: applying local password policy for domain: rtest.com, sid: {CN}\{BUILT-IN-ADMIN-SID}INFO: successfully applied password history retention policy: domain: rtest.com, sid: {CN}\{BUILT-IN-ADMIN-SID}INFO: applying local password policy for domain: rtest.com, sid: {CN}\{ALT-ADMIN-SID}INFO: forcing reset of password for domain: rtest.com, sid: {CN}\{ALT-ADMIN-SID}INFO: successfully forced reset of password for domain: rtest.com, sid: {CN}\{ALT-ADMIN-SID}INFO: successfully applied password history retention policy: domain: rtest.com, sid: {CN}\{ALT-ADMIN-SID}
```

After disabling OAM:

```
{    "name": "api",  "message": "Enabled Manage Passwords for system {DOMAIN_NETBIOS}\\{CN}",   ...}
```

The background service will re-enable the built-in admin and remove the alternate admin and log the
following:

```
INFO: Enforce enablement policy for local account Administrator. Change required=True, value=TrueINFO: Enforce delete_if_not_break_glass policy for user {ALT-ADMIN-NAME}
```

If the password is accessed via the API, the following will be logged:

```
{  "name": "api",    "category": "password-history",    "target": {    "system_name": {CN},        "computer_id": ...,        "admin": {      "admin_sid": {SID},            "admin_account_name": "{CN}\\{ACCOUNT-NAME}",            "password_history_id": ...,            "is_most_recent_password": true,            "_id": ...        },        "_id": ...    },    "user": {...},    "message": "Accessed most recent local account password for {CN}\\{ACCOUNT-NAME} ({SID})",    "type": "credentials"  ...}
```

If a password rotation is request, the api will log:

```
{    "name": "api",  "message": "Password rotation requested for {CN}\\{ACCOUNT-NAME} ({SID})",    "category": "password-history",  "type": "credentials",  "targetSystem": {...},  "user": {...},  ...}
```
