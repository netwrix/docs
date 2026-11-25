---
title: "Configure Directory Manager Portal Settings"
description: "Customize your portal display options, such as identity store mode, notification language, time zone, start page, and group ownership views."
keywords:
  - portal settings
  - Identity Store Mode
  - notification language
  - user time zone
  - additional group ownership
  - Reset Defaults
sidebar_position: 50
---

# Configure Directory Manager Portal Settings

You can fine-tune your portal pages by customizing display options. With these options, you can
personalize the Directory Manager portal.

The portal saves these settings for each user per identity store. When this user signs in to
another Directory Manager portal for the same identity store, the settings apply there too.

## Set Identity Store mode

The Directory Manager portal works with a single identity store. However, Directory Manager also enables administrators to
link different identity stores. If an administrator creates a portal and associates it with
the linked identity stores, the portal users can view the data from the linked identity stores at
the same time, rather than having to switch identity stores.

To choose a mode in portal settings:

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – From the **Identity Store Mode** list, select one of the following modes:

- Stand-alone mode
- Linked mode

Step 3 – Click **Save**.

## Set a language for notifications

By default, Directory Manager sends notifications to users in English. However, a user can receive notifications in a different language by personalizing
the language settings from the **User Settings** panel in the portal.

A few notifications are exceptions. See the
[How Directory Manager Email Notifications Work](/docs/directorymanager/11.1/admincenter/notification/overview.md) topic for more information.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – From the **Notification Language** list, select a language for receiving the notifications.

Step 3 – Click **Save**.

## Set the time zone

You can set the portal's date and time for your time zone.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – In the **User Time Zone** list, select the time zone for your region.

Step 3 – Click **Save**.

## Set a default start page

You can set the first page you see when you sign in to the portal.

1. Click the **Settings** icon at the top of the page.
2. From the **Default Startup Page** list, select a page to set as your start page.
3. Click **Save**.

## Set the number of history items to show on the home page

You can specify the number of history items to display in the History section on the portal's home
page.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – In the **History items to display on home page** box, set the maximum number of history
items to display on the portal's home page.

Step 3 – Click **Save**.

The portal displays history if the administrator has enabled history tracking for the identity store.

## Set the number of history items to show for objects

Set the number of history items to display on the History tab. This tab appears when you view
the properties of a User, Group, Contact, or Mailbox.

This setting also controls the number of history items that appear on the
[View My History in the Directory Manager Portal](/docs/directorymanager/11.1/portal/history/myhistory.md), [View My Direct Reports' History in Directory Manager](/docs/directorymanager/11.1/portal/history/mydirectreport.md),
and [View and Filter History of Groups You Own](/docs/directorymanager/11.1/portal/history/mydirectorygroup.md) pages.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – In the **History items to display** box, set the number of history items to display on the
pages that display history data.

Step 3 – Click **Save**.

The portal displays history if the administrator has enabled history tracking for the identity store.

## Set the number of recent objects to show

The Directory Manager portal keeps a list of recently viewed objects on the left navigation bar. This provides
a convenient way to navigate back to objects later. You can specify the number of recent objects to
show on the navigation bar.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – In the **Most recent objects** box, enter the number of recent objects to display on the
navigation bar.

Step 3 – Click **Save**.

## Set the default domains for search lists

You can specify the default domains to search when you search in the portal. If
the portal is running in:

- **Stand-alone mode**: the portal lists the domain of the associated identity store.

- **Linked mode**: the portal lists the domains of all the linked identity stores.

To select domains for searches:

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – In the **Domains to Search** list, select the domains that you use frequently in your
searches.

Step 3 – Click **Save**.

## Set the number of results to show on a page

You can specify the number of search results to display on a portal page.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – In the **Search results per page** box, enter the number of search results to
display on a page, or select it from the list.

Step 3 – Click **Save**.

## Show additional group ownership in My Groups

By default, the **My Groups** page displays the groups that you are a primary owner of. You can
also set this page to display groups for which you are an additional owner.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display additional group ownership in My Groups** checkbox.

Step 3 – Click **Save**.

Selecting this option also displays the history of these groups in the **My Groups
History** view.

## Show additional group ownership in My Expiring Groups

By default, the **My Expiring Groups** page displays the soon-to-expire groups that you are the
primary owner of. You can also set this page to display expiring groups for which you
are an additional owner.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display additional group ownership in My Expiring Groups** checkbox.

Step 3 – Click **Save**.

## Show additional group ownership in My Expired Groups

By default, the **My Expired Groups** page displays the expired groups that you are the primary
owner for. You can also set this page to display expired groups for which you are an
additional owner.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display additional group ownership in My Expired Groups** checkbox.

Step 3 – Click **Save**.

## Show additional group ownership in My Deleted Groups

By default, the **My Deleted Groups** page displays the deleted groups that you are the primary
owner for. You can also set this page to display deleted groups for which you are an
additional owner.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display additional group ownership in My Deleted Groups** checkbox.

Step 3 – Click **Save**.

## Display additional group ownership in Smart Groups

By default, the **My Smart Groups** page displays the Smart Groups that you are the primary owner
for. You can also set this page to display Smart Groups for which you are an
additional owner.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display additional group ownership in My Smart Groups** checkbox.

Step 3 – Click **Save**.

## Display additional group ownership in Dynasties

By default, the **My Dynasties** page displays the Dynasties that you are the primary owner for. You
can also set this page to display Dynasties for which you are an additional owner.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display additional group ownership in My Dynasties** checkbox.

Step 3 – Click **Save**.

## Display additional manager direct reports

By default, the **My Direct Reports** page displays the users that you are the primary manager for.
You can also set this page to display users for whom you are an additional manager.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display Additional Manager Direct Reports** checkbox.

Step 3 – Click **Save**.

## Display exchange co-managed groups

By default, the **My Groups** page displays the groups that you are the primary owner for. You can
also set this page to display groups for which you are an Exchange co-managed owner.
A co-managed owner is an additional owner added in Microsoft Exchange. Exchange lists such owners in
the `msExchCoManagedByLink` attribute of the group.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – Select the **Display exchange co-managed groups** checkbox.

Step 3 – Click **Save**.

:::note
This option is available only for Active Directory identity stores, and it works only if the
identity store's messaging provider supports Exchange additional owners.

The administrator can also enable **Display Co-Managed Groups in My Groups** in the portal's
[advanced settings](/docs/directorymanager/11.1/admincenter/applications/portal/server/advanced.md#listings-display).
When the administrator enables it, the portal displays co-managed groups for all users, regardless of
whether this checkbox is selected. The portal displays co-managed groups if either setting is enabled.
:::

## Reset default user options

You can reset the settings on the **User Settings** panel to their default values.

Step 1 – Click the **Settings** icon at the top of the page.

Step 2 – On the **User Settings** page, click **Reset Defaults**.

The following table lists the default values that **Reset Defaults** restores:

| Option                                         | Default Value                                    |
| ---------------------------------------------- | ------------------------------------------------ |
| Identity Store Mode                            | Stand-alone                                      |
| Notification Language                          | English                                          |
| User Time Zone                                 | The time zone set on the Directory Manager server machine. |
| Default Startup Page                           | Welcome                                          |
| History items to display on home page          | 10                                               |
| History items to display                       | 10                                               |
| Most recent objects                            | 5                                                |
| Domains to Search                              | Entire Directory                                 |
| Search results per page                        | 25                                               |
| Display additional group ownership checkboxes | Not selected                                     |
| Display Additional Manager Direct Reports      | Not selected                                     |
