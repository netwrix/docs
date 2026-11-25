---
title: "Query Designer General tab"
description: "Choose which object types and sub-types, such as users, computers, or mail-enabled groups, a Directory Manager query includes."
keywords:
  - Query Designer
  - object type selection
  - messaging system recipients
  - Smart Group query
sidebar_position: 30
---

# Query Designer General tab

Use this tab to specify the type of objects to include in your search. Options vary according to the
object type selected in the **Find** list.

Select the sub-types of the selected object type to include in your search.

The following table lists the options available on the **General** tab for each object type in the
**Find** list.

| Find list option            | Objects available for selection                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Messaging System Recipients | - **Users with mailboxes** - Includes users with messaging system mailboxes - **Users with External Email Address** - Includes users with email addresses that are external to your organization - **Contacts with External Email Address** - Includes contacts with email addresses that are external to your organization - **Mail-Enabled Groups** - Includes mail-enabled groups - **Mail-Enabled Folders** - Includes mail-enabled folders |
| Computers                   | - **Workstations and Servers** - Includes workstations and servers - **Domain Controllers** - Includes domain controllers                                                                                                                                                                                                                                                                                                                       |
| Custom                      | By default, it includes all object options for Messaging System Recipients, Computers, and Users, Contacts, and Groups. For this reason, the General tab doesn't display any option for this object type.                                                                                                                                                                                                                                       |
| Users, Contacts and Groups  | - **Users** - Includes users - **Contacts** - Includes contacts - **Groups** - Includes groups                                                                                                                                                                                                                                                                                                                                                  |

:::note
The Computer and Contact object types aren't supported in a Microsoft Entra ID identity
store.
:::

**Preview**

Use this button to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before you commit changes to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer in the Directory Manager portal](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
