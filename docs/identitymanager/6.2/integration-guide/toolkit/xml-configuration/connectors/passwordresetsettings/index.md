---
title: "Password Reset Settings"
description: "Password Reset Settings"
sidebar_position: 80
---

# Password Reset Settings

This set of password reset settings contains the configuration to perform password reset operations
such as change, reset, etc.

## Examples

The following example declares a password reset settings.

```

    <PasswordResetSettings Identifier="default" BeneficiaryEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Mail"
        BeneficiaryFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.InternalDisplayName"
        NotifiedEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.Mail"
        NotifiedFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.InternalDisplayName"
        Mode="1" DefaultPassword="Usercube@2019" MustChange="true"
        AutoGenerate="false" DisableNotifications="false" GeneratedLength="12" />

```

### Password length and counts

The following example makes Identity Manager generate a password with at least 12 characters in
total, at least 8 lowercase characters, 4 uppercase characters, 2 digits and 2 symbols.

```

**<PasswordResetSettings AutoGenerate="true" GeneratedLength="12" GeneratedLowerCaseCharsCount="8" GeneratedUpperCaseCharsCount="4" GeneratedDigitCharsCount="2" GeneratedSymbolCharsCount="2"/>**

```

As the total of all counts (16) is greater than the length (12), the password length will be the
count total (16).

The following example makes Identity Manager generate a password with at least 12 characters in
total, at least 8 lowercase characters, 4 uppercase characters, 2 digits and 2 symbols.

```

**<PasswordResetSettings AutoGenerate="true" GeneratedLength="8" GeneratedLowerCaseCharsCount="1" GeneratedUpperCaseCharsCount="1" GeneratedDigitCharsCount="1" GeneratedSymbolCharsCount="1"/>**

```

As the total of all counts (4) is lower than the length (8), the password will be generated with 8
characters, among them 1 lowercase character, 1 uppercase character, 1 digit, 1 symbol, and 4 more
random characters.

The generated password's strength can also be checked via a regular expression (regex) through
`StrengthCheck`. Thus, the following example makes Identity Manager generate a password with at
least 9 characters including at least one digit, one lowercase letter, one uppercase and one special
character.

```

**<PasswordResetSettings AutoGenerate="true" StrengthCheck="'^..........*$','^.*[0-9].*$', '^.*[a-z].*$', '^.*[A-Z].*$', '^.*[^A-Za-z0-9].*$'"/>**

```

## Properties

| Property                                      | Details                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutoGenerate default value: false             | **Type** Boolean **Description** `true` to make Identity Manager generate the password automatically.                                                                                                                                                                                                    |
| BeneficiaryEmailBinding optional              | **Type** Int64 **Description** Binding to the email address property whose password is to be reset.                                                                                                                                                                                                      |
| BeneficiaryFullNameBinding optional           | **Type** Int64 **Description** Binding to the full name property of the user(s) whose password is to be reset.                                                                                                                                                                                           |
| DefaultPassword optional                      | **Type** String **Description** Default password to set when `AutoGenerate` is set to `false`.                                                                                                                                                                                                           |
| DisableNotifications default value: false     | **Type** Boolean **Description** `true` to disable the mailing of notifications concerning password reset.                                                                                                                                                                                               |
| GeneratedDigitCharsCount default value: 2     | **Type** Int32 **Description** Number of digit characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                            |
| GeneratedLength default value: 12             | **Type** Int32 **Description** Length of the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                                                |
| GeneratedLowerCaseCharsCount default value: 6 | **Type** Int32 **Description** Number of lower case characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                       |
| GeneratedSymbolCharsCount default value: 2    | **Type** Int32 **Description** Number of symbol characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                           |
| GeneratedUpperCaseCharsCount default value: 2 | **Type** Int32 **Description** Number of upper case characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                       |
| Identifier required                           | **Type** String **Description** Identifier of the set of password reset settings.                                                                                                                                                                                                                        |
| Mode default value: 0                         | **Type** Int64 **Description** Mode used by the password reset service. `0` - Disabled. `1` - One-Way. `2` - Two-Way.                                                                                                                                                                                    |
| MustChange default value: false               | **Type** Boolean **Description** `true` to force users to modify their passwords on the first login.                                                                                                                                                                                                     |
| NotificationCC optional                       | **Type** String **Description** Email address to set as CC recipient of all password reset notifications.                                                                                                                                                                                                |
| NotifiedEmailBinding optional                 | **Type** Int64 **Description** Binding to the email address property of the person to be notified.                                                                                                                                                                                                       |
| NotifiedFullNameBinding optional              | **Type** Int64 **Description** Binding to the full name property of the person to be notified.                                                                                                                                                                                                           |
| StrengthCheck optional                        | **Type** String **Description** Regular expression (regex) that generated passwords must match, when `AutoGenerate` is set to `true`. **Note:** the strength of passwords set manually by users can be configured via [Password Tests Setting](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/settings/passwordtestssetting/index.md). |
