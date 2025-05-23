---
sidebar_position: 6681
title: Enterprise Password Enforcer (EPE) APIs
---

# Enterprise Password Enforcer (EPE) APIs

You can use APIs to perform functions related to Threat Prevention's Enterprise Password Enforcer (EPE) solution. These functions pertain to the [EPE Settings Window](../Admin/Configuration/EPESettings "Navigates to the EPE Settings window. ") and the [Password Rules Filter](../Admin/Policies/EventType/PasswordEnforcement#Password "Password Rules Filter") of the Password Enforcement event type.

* Password Validation Test Against EPE Rules
* Import Character Substitutions
* Export Character Substitutions
* Import Character Substitution Words
* Export Character Substitution Words
* Import Passwords Dictionary
* Export Passwords Dictionary
* Set the Pwned Database

## Password Validation Test Against EPE Rules

The `Test-ValidatePassword` command checks if a user supplied password passes the Enterprise Manager Enforcer (EPE) rules configured in the Password Rules event filter and the global settings in the [EPE Settings Window](../Admin/Configuration/EPESettings "EPE Settings Window").

The following parameters are required:

* Server – Domain controller with the Threat Prevention Agent that will be used to check the password value. Supply the server in one of the following formats:
  * Domain\ServerName
  * ServerName
  * IP Address
* User – The user account testing the password
* Password – Password value to be validated

Example of a password validation command:

Test-ValidatePassword –Server “domain\server” –User “Username” –Password “Passwordvalue”

## Import Character Substitutions

The `Import-SICharacterSubstitution` command imports the EPE Character Substitution Dictionary to the Enterprise Manager. Imported file content is displayed in the [Substitutions Editor Window](../Admin/Configuration/EPESettings#_Substitutions_Editor_Window "Substitutions Editor Window") accessed through the EPE Settings window.

The following parameter is required:

* FileName [string] – Path to valid XML content

Example of adding an import xml file:

Import-SICharacterSubstitution -FileName "c:\Import\CharacterSubstitution.txt"

## Export Character Substitutions

The `Export-SICharacterSubstitution` command exports the character substitution data currently being used by the Enterprise Manager. The content exported is the same as displayed in the [Substitutions Editor Window](../Admin/Configuration/EPESettings#_Substitutions_Editor_Window "Substitutions Editor Window").

Example:

Export-SICharacterSubstitution

## Import Character Substitution Words

The `Import-SICharacterSubstitutionWords` command imports the EPE words subject to character substitution to the Enterprise Manager. Imported file content is added to the [Words List Dictionary Window](../Admin/Configuration/EPESettings#_Words_List_Dictionary "Words List Dictionary Window") accessed through the EPE Settings window.

The following parameter is required:

* FileName [string] – Path to valid XML content

Example of adding an import xml file:

Import-SICharacterSubstitutionWords -FileName "C:\Import\CharacterSubstitutionWords.xml"

## Export Character Substitution Words

The `Export-SICharacterSubstitutionWords` command exports the EPE Words subject to character substitution currently being used by the Enterprise Manager. The content exported is the same as displayed in the [Words List Dictionary Window](../Admin/Configuration/EPESettings#_Words_List_Dictionary "Words List Dictionary Window").

Example:

Export-SICharacterSubstitutionWords

## Import Passwords Dictionary

The `Import-SIPasswordsDictionary` command imports the EPE Password Dictionary to the Enterprise Manager from the specified file. Imported file content is displayed in the [Password Dictionary Window](../Admin/Configuration/EPESettings#_Password_Dictionary_Window_1 "Password Dictionary Window") accessed through the EPE Settings window.

The following parameter is required:

* FileName [string] – Path to valid XML content

## Export Passwords Dictionary

The `Export-SIPasswordsDictionary` command exports the EPE Password Dictionary currently being used by the Enterprise Manager. The content exported is the same as displayed in the [Password Dictionary Window](../Admin/Configuration/EPESettings#_Password_Dictionary_Window_1 "Password Dictionary Window").

Example:

Export-SIPasswordsDictionary

## Set the Pwned Database

The `Set-SIPwnedDB` command converts the single specified hash file to the internal files used by the Enterprise Manager and/or Threat Prevention Agents.

The following parameter is required:

* FileName [string] – Path to hash file

Example of adding an import xml file:

Set-SIPwnedDB -FileName "c:\pwned\_db.txt"