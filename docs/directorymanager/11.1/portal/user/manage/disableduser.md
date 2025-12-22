---
title: "Disabled Users"
description: "Disabled Users"
sidebar_position: 70
---

# Disabled Users

In Directory Manager portal, you can view a list of disabled users.

Follow the steps to view the list of disabled users in the Directory Manager portal.

Step 1 – In Directory Manager portal, click **Users** on the left navigation bar and select **My
Direct Reports**. On the displayed page, select the **Disabled Users** tab.

The list consists of:

- Users that have been expired by the User Life Cycle job for not validating their profiles within
  the required period.

    An expired user is disabled in the directory.

- Users that have been terminated or disabled by their respective managers.
- Users that are disabled in the directory.

A disabled user can be reinstated but not extended. An expired user can be extended but not
reinstated. The administrator or a Helpdesk user is responsible for reinstating and extending users.

## View User Properties

To view and modify the properties of a disabled or expired user, select it and click **Properties**
on the toolbar.

Refer to the information for user properties to manage the properties of a disabled/expired user.
See the [User Properties](/docs/directorymanager/11.1/portal/user/properties/overview.md) topic for additional information.

## Reinstate a Disabled User

To reinstate a disabled user, select it and click **Reinstate** on the toolbar.

## Grant extension to an Expired User

To grant an extension period to an expired user, select it and click **Extend** on the toolbar.

The extension period applies to users who did not validate their profiles within the required
period, and were consequently expired.

On extension, the user's account is temporarily unlocked. If they do not validate their profile
information within that extension period either, Directory Manager expires them again. Only the
administrator or Helpdesk users can reactivate these accounts.

The duration of the extension period is set by the administrator in identity store configurations.

## Send Disabled Users list to an Excel file

To export list of disabled users to an Excel file, click **Export Results** on the toolbar.

### Navigate the Disabled Users listing

Use the page numbers under the disabled users listing to page through the records.

You can control the number of records to be displayed per page by modifying the Search results per
page setting on the User Settings panel. You can modify the search results in Modify Search
Directory. You can select entire directory or a domain to search active groups from.
