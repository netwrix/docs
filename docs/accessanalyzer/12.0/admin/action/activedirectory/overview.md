# Active Directory Action Module

Use the Active Directory Action Module to make bulk changes to objects in Microsoft Active Directory
(AD) such as deleting users or changing group memberships. It is available with a special Access
Analyzer license.

**CAUTION:** Be careful when using this action module. Make sure that only the changes required are
applied and only to those target systems desired. Actions perform their functions on all rows in a
table.

Access Analyzer action modules contain one or more selectable operations. Each operation performs
its function on a single object per row from the source table defined in the action.

## Source Table Configuration

Individual action modules, including the Active Directory Action Module, may have their own
requirements for the type of data contained in the columns in the source table. To take action on an
Active Directory object, group, user, or computer, the source table columns must contain values that
uniquely identify each Active Directory object referenced. Active Directory objects correspond to
rows in a Access Analyzer source table. Active Directory object attributes correspond to columns.
Once the source table has been scoped, use the Target page to specify the field that identifies the
target objects along with the field type to indicate the type of data contained in the field.

The Operations page lists the operations that may be performed by the Active Directory Action
Module. Each operation may have its own source table column requirements as follows:

| Operation                                       | Requirements                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clear/Set SID History                           | Column containing SID History information                                                                                                                                                                                                                                                          |
| Computer Details                                | No specific columns required                                                                                                                                                                                                                                                                       |
| Disable/Enable Computers                        | No specific columns required                                                                                                                                                                                                                                                                       |
| Create Groups                                   | No specific columns required                                                                                                                                                                                                                                                                       |
| Create Users                                    | Column containing the user logon name **_RECOMMENDED:_** It is recommended that the source table has columns containing the following information: - First Name - Last name - Initials - Full name - Password - OU in which to create the user (This can also be created on the Create Users page) |
| Delete Objects (Users, Groups, Computers, etc.) | No specific columns required                                                                                                                                                                                                                                                                       |
| Disable/Enable Users                            | No specific columns required                                                                                                                                                                                                                                                                       |
| Group Details                                   | No specific columns required                                                                                                                                                                                                                                                                       |
| Group Membership                                | Column containing the target group OU or the target group NT style name                                                                                                                                                                                                                            |
| Groups Remove All Members                       | No specific columns required                                                                                                                                                                                                                                                                       |
| Move Objects                                    | Column containing an OU (Alternatively, type in the OU or click the ellipsis (…) to select an OU)                                                                                                                                                                                                  |
| Set/Reset Users Password                        | No specific columns required                                                                                                                                                                                                                                                                       |
| Unlock Users                                    | No specific columns required                                                                                                                                                                                                                                                                       |
| User Details                                    | No specific columns required                                                                                                                                                                                                                                                                       |

## Configuration

The Active Directory Action module is configured through the Active Directory Action Module Wizard,
which contains the following wizard pages:

- Welcome
- [Active Directory Action Target](/docs/accessanalyzer/12.0/admin/action/activedirectory/target.md)
- [Active Directory Action Operations](/docs/accessanalyzer/12.0/admin/action/activedirectory/operations.md)
- [Active Directory Action Options](/docs/accessanalyzer/12.0/admin/action/activedirectory/options.md)
- [Active Directory Action Summary](/docs/accessanalyzer/12.0/admin/action/activedirectory/summary.md)

The Welcome page displays first in the Active Directory Action Module Wizard. Review the
introductory and caution information about the Active Directory Action Module.

![Active Directory Action Module Wizard Welcome page](/img/product_docs/accessanalyzer/12.0/admin/action/activedirectory/welcome.webp)

The navigation pane contains links to the pages in the wizard. Note that the operations added on the
Operations page will affect the list of pages in the navigation pane. Several operations have
associated configuration pages.
