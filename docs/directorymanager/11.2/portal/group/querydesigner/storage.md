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

Use the Storage tab to filter messaging system recipient queries by server or mailbox store. Its settings are available when you select the 'Messaging System Recipients' option in the **Find** list.

By default, the tab retrieves all mailboxes, irrespective of any server or mailbox store. You can apply a filter to the mailboxes you want the query to return.

If you specify filters, the query returns only mailboxes on the specified server or mailbox store. The filter doesn't affect custom recipients, public folders, and distribution lists.

## Storage tab options

- **Mailbox on any Server**: Returns all mailboxes. No filters apply with this selection.
- **Mailbox on this Server**: Returns mailboxes from the server you select from the dropdown list.
- **Mailbox on this MailStore**: Returns mailboxes from the mailbox store you select from the dropdown list.

## Query Designer buttons

- **Preview**: Previews the results that the criteria on all tabs of the Query Designer dialog box return. Use it to check the accuracy of data before you commit changes to the directory.
- **OK**: Saves settings and closes the dialog box.
- **Cancel**: Discards settings and closes the dialog box.
- **LDAP Query**: Views the provider query in the LDAP Query box.
