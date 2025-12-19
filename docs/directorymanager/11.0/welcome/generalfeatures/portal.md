---
title: "Portal Settings"
description: "Portal Settings"
sidebar_position: 50
---

# Portal Settings

You can fine-tune your portal pages by customizing display options. This also enables you to
personalize the GroupID portal.

These settings are saved for a user with respect to the identity store. When this user logs on to
another GroupID portal for the same identity store, the settings apply there too.

What do you want to do?

- [Set Identity Store mode](#set-identity-store-mode)
- [Set a language for notifications](#set-a-language-for-notifications)
- [Set the time zone](#set-the-time-zone)
- [Set a default start page](#set-a-default-start-page)
- [Set the number of history items to show on the home page](#set-the-number-of-history-items-to-show-on-the-home-page)
- [Set the number of history items to show for objects](#set-the-number-of-history-items-to-show-for-objects)
- [Set the number of recent objects to show](#set-the-number-of-recent-objects-to-show)
- [Set the default domains for search lists](#set-the-default-domains-for-search-lists)
- [Set the number of results to show on a page](#set-the-number-of-results-to-show-on-a-page)
- [Show additional group ownership in My Groups](#show-additional-group-ownership-in-my-groups)
- [Show additional group ownership in My Expiring Groups](#show-additional-group-ownership-in-my-expiring-groups)
- [Show additional group ownership in My Expired Groups](#show-additional-group-ownership-in-my-expired-groups)
- [Show additional group ownership in My Deleted Groups](#show-additional-group-ownership-in-my-deleted-groups)
- [Display additional group ownership in my Smart Groups](#display-additional-group-ownership-in-my-smart-groups)
- [Display additional group ownership in my Dynasties](#display-additional-group-ownership-in-my-dynasties)
- [Display Additional Manager Direct Reports](#display-additional-manager-direct-reports)
- [Reset default user options](#reset-default-user-options)

## Set Identity Store mode

GroupID portal works with a single identity store. However, GroupID also enables administrators to
link different identity stores. If an administrator creates a GroupID Portal and associates it with
the linked identity stores, the portal users can view the data from the linked identity stores at
the same time, rather than having to switch identity stores.

Via Portal settings, you can choose either of the two modes by following these steps:

1. Click the **Settings** icon at the top of the page.
2. From the **Identity Store Mode** list, select one of the following mode:

    - Stand-alone mode
    - Linked mode

3. Click **Save**.

## Set a language for notifications

GroupID generates a number of notifications that are, by default, sent to users in the English
language. However, a user can opt to receive notifications in a different language by personalizing
the language settings from the **User Settings** panel in the portal.

However, there are a few exceptions to it. See the
[Localization](/docs/directorymanager/11.0/signin/notification/overview.md#localization)
topic for more information.

1. Click the **Settings** icon at the top of the page.
2. From the **Notification Language** list, select a language for receiving the notifications in.
3. Click **Save**.

## Set the time zone

You can set the portal's date and time for your time zone.

1. Click the **Settings** icon at the top of the page.
2. In the **User Time Zone** list, select the time zone for your region.
3. Click **Save**.

## Set a default start page

You can set the first page you see when you log into the portal.

1. Click the **Settings** icon at the top of the page.
2. From the **Default startup page** list, select a page to set as your start page.
3. Click **Save**.

## Set the number of history items to show on the home page

You can specify the number of history items to display in the History section on the portal's home
page.

1. Click the **Settings** icon at the top of the page.
2. In the **History items to display on home page** box, set the maximum number of history items to
   be displayed on the portal's home page.
3. Click **Save**.

History is displayed if the administrator has enabled history tracking for the identity store.

## Set the number of history items to show for objects

Set the number of history items to display on the History tab. This tab is displayed when viewing
the properties for a User, Group, Contact or Mailbox.

This setting also controls the number of history items displayed on the
[My History](/docs/directorymanager/11.0/welcome/history/myhistory.md),
[My Direct Reports' History](/docs/directorymanager/11.0/welcome/history/mydirectreport.md),
and [My Groups' History](/docs/directorymanager/11.0/welcome/history/mydirectorygroup.md)
pages.

1. Click the **Settings** icon at the top of the page.
2. In the **History items to display** box, set the number of history items to display on the pages
   that display history data.
3. Click **Save**.

History is displayed if the administrator has enabled history tracking for the identity store.

## Set the number of recent objects to show

The GroupID portal keeps a list of recently viewed objects on the left navigation bar. This provides
a convenient way to navigate back to objects later. You can specify the number of recent objects to
be shown on the navigation bar.

1. Click the **Settings** icon at the top of the page.
2. In the **Most recent objects** box, type the number of recent objects to display on the
   navigation bar.
3. Click **Save**.

## Set the default domains for search lists

You can specify the default domains to be searched when you perform a search using the portal. If
portal is running in:

- **Stand-alone mode**: domain of the associated identity store is listed.

- **Linked mode**: domains of all the linked identity stores are listed.

To select domain(s) for searches:

1. Click the **Settings** icon at the top of the page.
2. In the **Domains to search** list, select the domains that you use frequently in your searches.
3. Click **Save**.

## Set the number of results to show on a page

You can specify the number of search results to be displayed on a portal page.

1. Click the **Settings** icon at the top of the page.
2. In the **Search results per page** box, type or select the number of search results to display on
   a page.
3. Click **Save**.

## Show additional group ownership in My Groups

By default, the **My Groups** page displays the groups that you are a primary owner for. You can,
however, set this page to display those groups too for which you are an additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Groups** check box.

    Selecting this option also displays the history of these groups in the **My Groups History**
    view.

3. Click **Save**.

## Show additional group ownership in My Expiring Groups

By default, the **My Expiring Groups** page displays the soon-to-expire groups that you are the
primary owner of. You can, however, set this page to display those expiring groups too for which you
are an additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Expiring Groups** check box.
3. Click **Save**.

## Show additional group ownership in My Expired Groups

By default, the **My Expired Groups** page displays the expired groups that you are the primary
owner for. You can, however, set this page to display those expired groups too for which you are an
additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Expired Groups** check box.
3. Click **Save**.

## Show additional group ownership in My Deleted Groups

By default, the **My Deleted Groups** page displays the deleted groups that you are the primary
owner for. You can, however, set this page to display those deleted groups too for which you are an
additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Deleted Groups** check box.
3. Click **Save**.

## Display additional group ownership in my Smart Groups

By default, the **My Smart Groups** page displays the Smart Group that you are the primary owner
for. You can, however, set this page to display those Smart Groups too for which you are an
additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Smart Groups** check box.
3. Click **Save**.

## Display additional group ownership in my Dynasties

By default, the My Dynasties page displays the Dynasties that you are the primary owner for. You
can, however, set this page to display those Dynasties too for which you are an additional owner.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display additional group ownership in My Dynasties** check box.
3. Click **Save**.

## Display Additional Manager Direct Reports

By default, the **My Direct Reports** page displays the users that you are the primary manager for.
You can, however, set this page to display those users too for which you are an additional manager.

1. Click the **Settings** icon at the top of the page.
2. Select the **Display Additional Manager Direct Reports** check box.
3. Click **Save**.

## Reset default user options

You can reset the settings on the **User Settings** panel to their default values.

1. Click the **Settings** icon at the top of the page.
2. On the **User Settings** page, click **Reset Defaults**.

    The following table lists the default values that are reset:

    | Option                                         | Default Value                                    |
    | ---------------------------------------------- | ------------------------------------------------ |
    | Identity Store Mode                            | Stand-alone                                      |
    | Notification Language                          | English                                          |
    | User Time Zone                                 | The time zone set on the GroupID server machine. |
    | Default startup page                           | Welcome                                          |
    | History items to display on home page          | 10                                               |
    | History items to display                       | 10                                               |
    | Most recent objects                            | 5                                                |
    | Domains to Search                              | Entire Directory                                 |
    | Search results per page                        | 25                                               |
    | Display additional group ownership check boxes | Not selected                                     |
    | Display Additional Manager Direct Reports      | Not selected                                     |

**See Also**

- [My History](/docs/directorymanager/11.0/welcome/history/myhistory.md)
- [My Groups' History](/docs/directorymanager/11.0/welcome/history/mydirectorygroup.md)
- [My Groups](/docs/directorymanager/11.0/welcome/group/mygroups/mygroups.md)
- [My Expiring Groups](/docs/directorymanager/11.0/welcome/group/mygroups/myexpiringgroups.md)
- [My Expired Groups](/docs/directorymanager/11.0/welcome/group/mygroups/myexpiredgroups.md)
- [My Deleted Groups](/docs/directorymanager/11.0/welcome/group/mygroups/mydeletedgroups.md)
