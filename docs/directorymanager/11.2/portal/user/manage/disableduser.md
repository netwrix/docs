---
title: "View and Manage Disabled Users in Directory Manager"
description: "View disabled and expired users in the Directory Manager portal, then reinstate them, grant extensions, or export the list to Excel."
keywords:
  - disabled users
  - expired users
  - reinstate user
  - user extension
  - User Life Cycle job
sidebar_position: 70
---

# View and Manage Disabled Users in Directory Manager

In the Directory Manager portal, you can view a list of disabled users. The list includes:

- Users that the User Life Cycle job expired because they didn't validate their profiles within the required period. An expired user is disabled in the directory.
- Users that their managers terminated or disabled.
- Users that are disabled in the directory.

You can reinstate a disabled user but not extend it. You can extend an expired user but not reinstate it. The administrator or a Helpdesk user is responsible for reinstating and extending users.

## View the disabled users list

To view the list of disabled users:

1. In the Directory Manager portal, click **Users** on the left navigation bar and select **My
Direct Reports**. On the displayed page, select the **Disabled Users** tab.

## View user properties

To view and modify the properties of a disabled or expired user, select it and click **Properties** on the toolbar.

Refer to the information for user properties to manage the properties of a disabled or expired user. See the [Directory Manager User, Mailbox, and Contact Properties](/docs/directorymanager/11.2/portal/user/properties/overview.md) topic for additional information.

## Reinstate a disabled user

To reinstate a disabled user, select it and click **Reinstate** on the toolbar.

## Grant an extension to an expired user

To grant an extension period to an expired user, select it and click **Extend** on the toolbar.

The extension period applies to users who didn't validate their profiles within the required period and were consequently expired.

On extension, the account of the user is temporarily unlocked. If the user doesn't validate their profile information within the extension period either, Directory Manager expires them again. Only the administrator or Helpdesk users can reactivate these accounts.

The administrator sets the duration of the extension period in the identity store configurations.

## Export the disabled users list to Excel

To export the list of disabled users to an Excel file, click **Export Results** on the toolbar.

## Navigate the disabled users list

Use the page numbers under the disabled users listing to page through the records.

To control the number of records displayed per page, modify the Search results per page setting on the User Settings panel. You can modify the search results in Modify Search Directory. You can select the entire directory or a domain to search active groups from.
