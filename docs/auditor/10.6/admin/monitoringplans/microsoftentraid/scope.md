---
title: "Microsoft Entra ID Monitoring Scope"
description: "Microsoft Entra ID Monitoring Scope"
sidebar_position: 10
---

# Microsoft Entra ID Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Microsoft
Entra ID (formerly Azure AD) monitoring scope or modify the way it will be displayed.

**NOTE:** Omitting user accounts does not decrease the license consumption count for Microsoft Entra
ID.

Follow the steps to exclude data from the Microsoft Entra ID monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Entra ID Auditing_ folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                    | Description                                                                                                                                                                                                                                                                                                                                    | Syntax                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| omituserlist.txt        | Contains a list of users you want to exclude from Microsoft Entra ID search results, Azure AD Changesreports and Activity Summaries.                                                                                                                                                                                                           | user@tenant.com                                                                                     |
| adomiteventuserlist.txt | Contains a list of users whose user names you want to exclude from Microsoft Entra ID search results, reports and Activity Summaries. The rest of change details (action, object type, etc.) will be reported, but the Who value will be "system".                                                                                             | user@tenant.com                                                                                     |
| exomiteventuserlist.txt | Contains a list of Exchange whose user names you want to exclude from Microsoft Entra ID search results, reports and Activity Summaries. The rest of change details (action, object type, etc.) will be reported, but the Who value will be "system". This list omits changes made by users through Exchange admin center.                     | user@tenant.com                                                                                     |
| maapioperationtypes.txt | Contains an overall list of object types that will be displayed in search results, reports, and Activity Summaries for each particular operation. By default, the list contains mapping for the most frequent operations (e.g., add user, update policy, remove member). The rest will be reported with Microsoft Entra ID object object type. | operation = object type For example: add owner to group = Group                                     |
| omitproplist.txt        | Contains a list of object classes and attributes to be excluded from Microsoft Entra ID search results, reports and Activity Summaries.                                                                                                                                                                                                        | classname.attrname If there is no full stop, the entire line is considered a class name.            |
| propnames.txt           | Contains a list of human-readable names for object types and attributes to be displayed in search results, reports, and Activity Summaries.                                                                                                                                                                                                    | object=friendlyname object.property=friendlyname For example: \*.PasswordChanged = Password Changed |
| proptypes.txt           | Defines how values will be displayed in the Details columns in Microsoft Entra ID search results, reports, and Activity Summaries.                                                                                                                                                                                                             | For example: \*.Role.DisplayName = MultiValued                                                      |
