---
title: "Enterprise Password Enforcer (EPE) APIs"
description: "Enterprise Password Enforcer (EPE) APIs"
sidebar_position: 40
---

# Enterprise Password Enforcer (EPE) APIs

You can use APIs to perform functions related to Threat Prevention's Enterprise Password Enforcer
(EPE) solution. These functions pertain to the
[EPE Settings Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md) and the
[Password Rules Filter](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md#password-rules-filter) of
the Password Enforcement event type.

- Password Validation Test Against EPE Rules
- Import Character Substitutions
- Export Character Substitutions
- Import Character Substitution Words
- Export Character Substitution Words
- Import Passwords Dictionary
- Export Passwords Dictionary
- Set the Pwned Database

## Password Validation Test Against EPE Rules

The `Test-ValidatePassword` command checks if a user supplied password passes the Enterprise Manager
Enforcer (EPE) rules configured in the Password Rules event filter and the global settings in the
[EPE Settings Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md).

The following parameters are required:

- Server – Domain controller with the Threat Prevention Agent that will be used to check the
  password value. Supply the server in one of the following formats:
  - Domain\ServerName
  - ServerName
  - IP Address
- User – The user account testing the password
- Password – Password value to be validated

Example of a password validation command:

**Test-ValidatePassword –Server “domain\server” –User “Username” –Password “Passwordvalue”**

## Import Character Substitutions

The `Import-SICharacterSubstitution` command imports the EPE Character Substitution Dictionary to
the Enterprise Manager. Imported file content is displayed in the
[Substitutions Editor Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md#substitutions-editor-window)
accessed through the EPE Settings window.

The following parameter is required:

- FileName [string] – Path to valid XML content

Example of adding an import xml file:

**Import-SICharacterSubstitution -FileName "c:\Import\CharacterSubstitution.txt"**

## Export Character Substitutions

The `Export-SICharacterSubstitution` command exports the character substitution data currently being
used by the Enterprise Manager. The content exported is the same as displayed in the
[Substitutions Editor Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md#substitutions-editor-window).

Example:

**Export-SICharacterSubstitution**

## Import Character Substitution Words

The `Import-SICharacterSubstitutionWords` command imports the EPE words subject to character
substitution to the Enterprise Manager. Imported file content is added to the
[Words List Dictionary Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md#words-list-dictionary-window)
accessed through the EPE Settings window.

The following parameter is required:

- FileName [string] – Path to valid XML content

Example of adding an import xml file:

**Import-SICharacterSubstitutionWords -FileName "C:\Import\CharacterSubstitutionWords.xml"**

## Export Character Substitution Words

The `Export-SICharacterSubstitutionWords` command exports the EPE Words subject to character
substitution currently being used by the Enterprise Manager. The content exported is the same as
displayed in the
[Words List Dictionary Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md#words-list-dictionary-window).

Example:

**Export-SICharacterSubstitutionWords**

## Import Passwords Dictionary

The `Import-SIPasswordsDictionary` command imports the EPE Password Dictionary to the Enterprise
Manager from the specified file. Imported file content is displayed in the
[Password Dictionary Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md#password-dictionary-window)
accessed through the EPE Settings window.

The following parameter is required:

- FileName [string] – Path to valid XML content

## Export Passwords Dictionary

The `Export-SIPasswordsDictionary` command exports the EPE Password Dictionary currently being used
by the Enterprise Manager. The content exported is the same as displayed in the
[Password Dictionary Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md#password-dictionary-window).

Example:

**Export-SIPasswordsDictionary**

## Set the Pwned Database

The `Set-SIPwnedDB` command converts the single specified hash file to the internal files used by
the Enterprise Manager and/or Threat Prevention Agents.

The following parameter is required:

- FileName [string] – Path to hash file

Example of adding an import xml file:

**Set-SIPwnedDB -FileName "c:\pwned_db.txt"**
