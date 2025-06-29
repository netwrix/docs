# Predefined Investigations Page

The Predefined Investigations page in the Investigations interface provides a list of saved
out-of-the-box investigations with applied filters for Computers, Groups, iNetOrgPerson, and User
activity reports.

Click **Investigate** in the application header bar to open the Investigations interface. Then click
**Predefined Investigations** in the navigation pane. This expands the menu to display the folders
containing predefined investigations. Expand a folder to view the investigations under it. To get a
list of all the predefined investigations in the adjacent pane, hover your mouse over the Predefined
Investigations option and click the icon that is displayed.

![Investigations interface on the Predefined Investigations page](/img/versioned_docs/threatprevention_7.4/threatprevention/reportingmodule/investigations/predefinedinvestigations.webp)

The table displays the list of investigations with the following columns:

- Name – The name of the investigation
- Favorite – The check mark indicates that the investigation has been tagged as a favorite for the
  logged in user

Click an investigation to view it. You can run the query, modify the configuration, add a
subscription, or export the report. See the
[Investigation Options](/docs/threatprevention/7.4/reportingmodule/investigations/options/overview.md)
topic for additional information on saved investigation options.

Every report generated by an investigation query displays the same type of information. See the
[Investigation Reports](/docs/threatprevention/7.4/reportingmodule/investigations/reports.md)
topic for additional information.

By default, these investigations are grouped in subfolders. Each subfolder page has the same table
as the Predefined Investigations page, scoped to the investigations within that folder.

## Computers Folder

By default, this folder contains the following saved investigations:

| Investigation             | Description                                 | Filters                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computer Added            | Created when a computer is added            | Two filter statements set: - Attribute 1 = Event Operation - Operator 1 = Equals - Filter 1 = Active Directory Create AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = computer |
| Computer Deleted          | Created when a computer is deleted          | Two filter statements set: - Attribute 1 = Event Operation - Operator 1 = Equals - Filter 1 = Active Directory Delete AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = computer |
| Computer Disabled         | Created when a computer is disabled         | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Disabled AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = computer    |
| Computer Enabled          | Created when a computer is enabled          | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Enabled AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = computer     |
| Computer Password Changed | Created when a computer password is changed | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Password Changed AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = computer    |

You can save additional investigations to this folder.

## Groups Folder

By default, this folder contains the following saved investigations:

| Investigation        | Description                                                | Filters                                                                                                                                                                                           |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Added          | Occurs when a group of any type is created                 | Two filter statements set: - Attribute 1 = Event Operation - Operator 1 = Equals - Filter 1 = Active Directory Create AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = group   |
| Group Deleted        | Created when a group is removed / deleted                  | Two filter statements set: - Attribute 1 = Event Operation - Operator 1 = Equals - Filter 1 = Active Directory Delete AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = group   |
| Group Member Added   | Created when a member is added to a group                  | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Group Members Added AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = group   |
| Group Member Removed | Created when one or more members of a group are removed    | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Group Members Removed AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = group |
| Group Moved          | Occurs when a group is moved from one container to another | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Object Move AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = group           |

You can save additional investigations to this folder.

## iNetOrgPerson Folder

By default, this folder contains the following saved investigations:

| Investigation                 | Description                                                       | Filters                                                                                                                                                                                                 |
| ----------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iNetOrgPeson Account Disabled | Created when an iNetOrgPerson account is disabled                 | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Disabled AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = inetOrgPerson    |
| iNetOrgPeson Account Enabled  | Created when an iNetOrgPerson account is enabled                  | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Enabled AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = inetOrgPerson     |
| iNetOrgPeson Added            | Created when an iNetOrgPerson User account is added               | Two filter statements set: - Attribute 1 = Event Operation - Operator 1 = Equals - Filter 1 = Active Directory Create AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = inetOrgPerson |
| iNetOrgPeson Deleted          | Created when an iNetOrgPerson is deleted                          | Two filter statements set: - Attribute 1 = Event Operation - Operator 1 = Equals - Filter 1 = Active Directory Delete AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = inetOrgPerson |
| iNetOrgPeson Password Changed | Created when the password is reset or changed by an administrator | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Password Changed AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = inetOrgPerson    |

You can save additional investigations to this folder.

## Users Folder

By default, this folder contains the following saved investigations:

| Investigation                  | Description                                                                               | Filters                                                                                                                                                                                                                                                                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Account Disabled          | Created when a user account is disabled                                                   | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Disabled AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = user                                                                                                                    |
| User Account Enabled           | Created when a user account is enabled                                                    | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Enabled AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = user                                                                                                                     |
| User Account Locked            | Created when a user account is locked                                                     | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Locked AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = user                                                                                                                      |
| User Account Unlocked          | Created when a user account is unlocked                                                   | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Account Unlocked AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = user                                                                                                                    |
| User Password Change           | Created when a user performs a password reset                                             | Three filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Active Directory Password Changed AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = user AND - Attribute 3 = Perpetrator - Operator 3 = Equals - Filter 3 = nt authority\anonymous logon |
| User Password Reset and Change | Created when a user resets their password or when an administrator changes their password | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Password Changed AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = user                                                                                                                    |
| User Primary Group Changed     | Created when a user's group is changed typically from Domain Users to another group       | Two filter statements set: - Attribute 1 = Event Sub-Operation - Operator 1 = Equals - Filter 1 = Primary Group Changed AND - Attribute 2 = Object Class - Operator 2 = Equals - Filter 2 = user                                                                                                               |

You can save additional investigations to this folder.
