---
title: "Manage Advanced Portal Settings in Directory Manager"
description: "Customize a Directory Manager portal's landing page, logo, search behavior, group listings, and help link from the Advanced Settings page."
keywords:
  - Directory Manager portal
  - advanced settings
  - default startup page
  - portal logo
  - search defaults
  - Admin Center
sidebar_position: 70
---

# Manage Advanced Portal Settings in Directory Manager

Advanced settings customize the functionality and appearance of a portal. For example, you can set the default landing page, change the portal logo, turn the help link on or off, and display enrollment reminders.

:::note
Advanced settings are available for a standard Directory Manager portal, not for a Self-Service Password Reset portal.
:::

Each portal has default values for all advanced settings. You can update any setting as needed. You can also import the advanced settings for a portal from GroupID 10 SR2. See step 14 in [Create a Portal in Native IIS](/docs/directorymanager/11.2/admincenter/applications/portal/create.md#create-a-portal-in-native-iis).

You can manage the following groups of advanced settings for a portal:

- Portal & Search
- Listings Display
- Miscellaneous

## Portal & Search

| Setting | Description |
| --- | --- |
| Portal Logo | Use the default Directory Manager portal logo or a logo of your choice. <ul><li>Click **Change** to select and upload a logo.</li><li>Click **Reset** to revert to the default logo.</li></ul> |
| Default Startup Page | Specify a landing page for the portal. By default, the start page is the _Welcome_ page. You can change it to a page your users visit often. Choose from these pages: <ul><li>Welcome</li><li>My Groups</li><li>My Memberships</li><li>My Expired Groups</li><li>My Expiring Groups</li><li>My Deleted Groups</li><li>My Smart Groups</li><li>My Dynasties</li><li>Search</li><li>My Profile</li><li>My Direct Reports</li><li>Change My Password</li><li>Reset Password</li><li>Request Inbox</li><li>My Requests</li><li>Link Account</li><li>Entitlement</li><li>History</li><li>Reports</li><li>Synchronize</li></ul> Individual users can change this setting in the Settings panel in the portal. |
| Search Default | Set the default selection in the portal's _Search Directory_ box. This box is on the _Groups_, _Users_, and _Advanced Search_ pages and in the _Find_ dialog box. The options are: <ul><li>**Global Catalog:** The _Search Directory_ box shows "_Entire Directory_" as selected. When you expand the list, the Entire Directory checkbox is selected instead of the signed-in domain. Select this option when most portal searches are based on the global catalog.</li><li>**Domain:** The _Search Directory_ box shows the domain of the identity store that the portal connects to. Users can expand the list to select any other option.</li></ul> Individual users can change this setting in the Settings panel in the portal. |
| Sort Search | Set the field name (column header) for sorting listings and search results in the portal. This applies to listings such as the All Groups, My Groups, and Users pages, and to searches in Advanced Search and the Find dialog box. In the **Sort Search** field, specify the attribute to sort by. By default, the portal sorts listings and search results by the displayName attribute in ascending order. <br />If you specify an attribute that doesn't appear as a column header in a listing or in search results, Directory Manager sorts by the default attribute, _displayName_. |
| Find Dialog / Look For | Select any or all of the **Users**, **Groups**, and **Contacts** checkboxes to set the object types that users can search for in the portal's _Find_ dialog box. Users open the _Find_ dialog box from several portal pages to search for objects to designate as owners, managers, additional owners, members, and more. <br />By default, the _Find_ dialog box searches for all object types, including users, contacts, and groups. Use this setting to limit the search to specific object types. For example, select the **Users** checkbox to let users search for _User_ objects only. |
| Request Inbox Page Size | Specify a value in the 5 to 1000 range to set how many workflow request items appear on the portal's **All Requests**, **My Requests** and **Request Inbox** pages. A value of zero or a negative number displays all workflow requests. <br />By default, these pages display 20 request items at a time. When you set the page size, consider the volume of requests your users generate. Showing all or many workflow requests increases page load time and response time. |
| Toolbar Default Most Recent Used Object Count | Specify a value in the 1 to 9 range to set how many recently used objects appear in the portal's _quick search_ box. <br />The _quick search_ box appears at the top of each page in the portal. When a user clicks in it, it shows the objects the signed-in user recently viewed. Clicking an object opens its properties. <br />Individual users can change this setting in the Settings panel in the portal. |
| Default Search Page Size | Specify a value in the 5 to 1000 range to set the maximum number of list objects on a portal page. <br />Many portal pages list objects, such as the **My Groups** and **Users** pages. By default, all list views display 25 objects per page. When you set the page size, consider the available network bandwidth and server resources. A larger page size can increase page load time and slow response time. <br />Individual users can change this setting in the **Settings** panel in the portal. |
| Autocomplete Quick Search | Specify whether to turn on search predictions for the portal's _quick search_. The _quick search_ box appears at the top of every page in the portal. Search predictions are possible search terms related to the term the user is entering. <ul><li>Enable the toggle button to turn on search predictions for quick search. The portal shows matching items as users enter a search string.</li><li>Disable the toggle button to turn off search predictions.</li></ul> |

## Listings Display

| Setting | Description |
| --- | --- |
| Display Nested Ownership | Controls whether the portal's **My Groups** page displays nested ownership. It applies to all listings on the page except **My Memberships**. <ul><li>When the toggle button is disabled, the **My Groups** page displays groups for which the signed-in user is the primary owner, additional owner, or Exchange additional owner.</li><li>When the toggle button is enabled, the **My Groups** page also displays groups with nested ownership. For example, the signed-in user is a member of Group A, and Group A is an owner of Group B. With this setting enabled, the **My Groups** page also shows Group B because the signed-in user is its nested owner.</li></ul> |
| Display Groups in My Groups | Controls whether the portal's **My Groups** tab displays the groups for which the signed-in user is an additional owner. By default, the tab displays the groups for which the signed-in user is the primary owner. Enable this setting to include groups for which the signed-in user is an additional owner. |
| Display Co-Managed Groups in My Groups | Controls whether co-managed groups appear on the portal's **My Groups** tab and on the **My Deleted Groups**, **My Expired Groups**, and **My Expiring Groups** tabs. A co-managed group is a group in which the signed-in user is an Exchange additional owner. That is, the group's `msExchCoManagedByLink` attribute lists the user. Exchange stores owners added in Microsoft Exchange this way, because the `managedBy` attribute holds only one owner. <ul><li>When the setting is enabled, co-managed groups appear for all portal users who are Exchange additional owners.</li><li>When the setting is disabled (default), co-managed groups don't appear, unless a user turns on their own **Display exchange co-managed groups** option in the portal's **Settings** panel.</li></ul> The setting works together with the user option. Co-managed groups appear if either one is enabled. Disabling this setting doesn't hide co-managed groups from users who enabled the user option. <br />This setting takes effect only if the identity store's messaging provider supports Exchange additional owners. Groups for which the user is the primary owner (`managedBy`) always appear, regardless of this setting. See [Configure Directory Manager Portal Settings](/docs/directorymanager/11.2/portal/generalfeatures/portal.md#display-exchange-co-managed-groups). |
| Display Groups in My Deleted Groups | Controls whether the portal's **My Deleted Groups** tab displays the deleted groups for which the signed-in user is an additional owner. By default, the tab displays the groups for which the signed-in user is the primary owner. Enable this setting to include deleted groups for which the signed-in user is an additional owner. |
| Display Groups in My Expired Groups | Controls whether the portal's **My Expired Groups** tab displays the expired groups for which the signed-in user is an additional owner. By default, the tab displays the groups for which the signed-in user is the primary owner. Enable this setting to include expired groups for which the signed-in user is an additional owner. |
| Display Groups in My Expiring Groups | Controls whether the portal's **My Expiring Groups** tab displays the expiring groups for which the signed-in user is an additional owner. By default, the tab displays the groups for which the signed-in user is the primary owner. Enable this setting to include expiring groups for which the signed-in user is an additional owner. |
| Display Groups in My Smart Groups | Controls whether the portal's **My Smart Groups** tab displays the Smart Groups for which the signed-in user is an additional owner. By default, the tab displays the groups for which the signed-in user is the primary owner. Enable this setting to include Smart Groups for which the signed-in user is an additional owner. |
| Display Groups in My Dynasties | Controls whether the portal's **My Dynasties** tab displays the Dynasties for which the signed-in user is an additional owner. By default, the tab displays the Dynasties for which the signed-in user is the primary owner. Enable this setting to include Dynasties for which the signed-in user is an additional owner. This setting applies individually to parent, middle, and leaf Dynasties. |
| Display Additional Manager Direct Reports | Controls whether the portal's **My Direct Reports** tab displays the direct reports for whom the signed-in user is an additional manager. By default, the tab displays the direct reports for whom the signed-in user is the primary manager. Enable this setting to include direct reports for whom the signed-in user is an additional manager. |

:::note
Individual users can change all of these settings except _Display Nested Ownership_ in the **Settings** panel in the portal. For _Display Co-Managed Groups in My Groups_, the user's own option is **Display exchange co-managed groups**. Either one is enough to display co-managed groups.
:::

## Miscellaneous

| Setting | Description |
| --- | --- |
| Use Contains Filter | Controls the filter that the search function on the portal's _Advanced Search_ page and in the _Find_ dialog box uses to search for objects. <ul><li>By default, the setting is disabled, and the portal searches the directory on a "starts with" basis when a user enters a search string. For example, if a user enters "Sam" in the _First Name_ box on the Advanced Search page, the portal finds all objects with first names starting with "Sam".</li><li>When you enable the setting, the filter changes to "Contains". It returns objects with the string "Sam" anywhere in the first name.</li></ul> |
| Hide Help Link | Controls whether the Help icon appears in the portal. This icon opens the portal help in a new browser window, where portal users can find support content or report their problems. <ul><li>Enable the setting to display the **Help** icon in the portal.</li><li>Disable the setting to hide the **Help** icon. Users can't then access the portal's help pages.</li></ul> |
| Enrollment Reminder | Controls whether unenrolled users see a reminder, with a redirect to the **Enroll My Account** page, when they sign in to the portal. Enabling the setting starts these events: <ol><li>When the user signs in, the landing page displays an information bar that asks the user to enroll their account. (The user can ignore the request.)</li><li>Clicking the bar redirects the user to the **Enroll My Account** page.</li></ol> Disabling the setting doesn't display the information bar for account enrollment. |
| Suggest Owner/Manager | Sets the portal to suggest owners for orphan groups and managers for users without managers. Enable the setting to let Directory Manager suggest a primary owner for an orphan group (on the **Owner** tab in group properties) and a primary manager for a user without one (on the **Organization** tab in user properties). <ul><li>Directory Manager suggests a manager based on the user's department (say, User A). If the department isn't specified, manager suggestion doesn't work. Directory Manager checks the primary managers of all users who have the same department as User A. It suggests the user who appears most often as a manager as User A's primary manager.</li><li>Directory Manager suggests an owner based on the group's membership. It checks the managers of group members and suggests the user who appears most often as a manager as the group owner. This user may or may not be a member of the group. For example, when 40 members of Group A have User A as their manager and 38 members have User B as manager, Directory Manager suggests User A as Group A's primary owner.</li></ul> Disable the setting to turn off the owner and manager suggestion function. |

## Update a setting

To update an advanced setting:

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, the card for each portal displays its information.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Advanced Settings** under **Server Settings**.
4. On the **Advanced Settings** page, go to the setting you want and update it.

   - To change general portal settings, see the Portal & Search table.
   - To change display settings for groups, see the Listings Display table.
   - To manage other settings, see the Miscellaneous table.

5. Click **Save**.
