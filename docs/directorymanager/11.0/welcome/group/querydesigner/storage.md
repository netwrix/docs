---
title: "Query Designer Storage Tab in Directory Manager"
description: "Filter messaging system recipient queries by Exchange server or mailbox store using the Storage tab in the Query Designer."
keywords:
  - Query Designer
  - Storage tab
  - Messaging System Recipients
  - mailbox store
  - mailbox filter
sidebar_position: 60
---

# Query Designer Storage Tab in Directory Manager

Settings on the Storage tab are available when the 'Messaging System Recipients' option is selected
in the **Find** list.

For the 'Messaging System Recipients' option, the default settings on the Storage tab retrieve all
mailboxes, irrespective of any server or mailbox store. You can apply a filter to mailboxes you want
the query to return.

If filters are specified, the query returns only mailboxes on the specified server or mailbox
store. This filter doesn't affect custom recipients, public folders, and distribution lists.

**Mailbox on any Server**

Returns all mailboxes. No filters apply with this selection.

**Mailbox on this Server**

Returns mailboxes from the server you select from the dropdown list.

**Mailbox on this MailStore**

Returns mailboxes from the mailbox store you select from the dropdown list.

**Preview**

Preview the results returned with the criteria specified on all tabs of the Query Designer dialog
box. This checks the accuracy of data before you commit changes to the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer in the Directory Manager portal](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
