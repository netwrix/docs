---
title: "Search Directory Objects in the Directory Manager Portal"
description: "Use Quick Search or Advanced Search to find users, groups, contacts, and mailboxes, and review the results on the Search Results page."
keywords:
  - Quick Search
  - Advanced Search
  - Search Results page
  - linked mode search
  - directory objects
sidebar_position: 30
---

# Search Directory Objects in the Directory Manager Portal

In the Directory Manager portal, you can search and manage different directory objects (users, groups, contacts, and mailboxes).

:::note
The contact object type isn't supported in a Microsoft Entra ID based identity store.
:::

## Search directory objects (Quick Search)

Use Quick Search to quickly locate objects in the identity store. You can search the entire directory or specific OUs within the directory, depending on search permissions granted to your role in the identity store.

1. In the Quick Search box at the top of the page, enter the display name, first name, or email address of an object to search for it.

   A list of matching objects appears as you enter the search string.

2. Select your required object or click the magnifying glass icon.

   Matches appear on the **Search Results** page.

:::note
The display name, first name, and email address are the default schema attributes for Quick Search. If the Directory Manager administrator specifies different attributes, you won't get the desired results when you search with the display name, first name, or email address.
:::

## Search directory objects (Advanced Search)

Use the portal's Advanced Search to search for directory objects (users, mailboxes, contacts, and groups) in the identity store. You can search the entire directory or specific OUs within the directory, depending on search permissions granted to your role in the identity store.

Multiple filters are available to search for objects. You can use them individually or in combination to get the most appropriate search results.

:::note
In the portal's linked mode, you can't search contacts in a linked Microsoft Entra ID, Google Workspace, or Generic LDAP store because these providers don't support the contact object.
:::

1. Click **Advanced Search** at the top. The **Advanced Search** page appears.

2. In the **Search** box, select where to search.

   - In **Stand-alone** mode: Select the checkboxes for the entire directory or the OUs that you want to search. You can also specify the default search OUs using the **Domains to Search** setting in the **User Settings** panel.

   :::note
   In **Linked** mode: the **Search** and the **Domains to Search** boxes list all the domains of the linked identity stores. You can select domains or OUs you want to search.
   :::

3. In the **Objects** box, select the objects (users, mailboxes, contacts, groups) you want to search for.

   In **Linked** mode, if you sign in to the portal with an Active Directory (AD) primary store, you can search for contact objects. If you sign in with any of the other providers (Microsoft Entra ID, Google Workspace, or Generic LDAP), you can't search for contacts because they don't support the contact object type.

4. Enter search criteria as needed:

   - Enter the display name, first name, last name, title, alias, company, department, office, or city of an object to search for it.
   - Select a custom attribute from the **Select a field** list and enter a search string in the box next to the list.

5. Click **Search**.

   Objects matching the search criteria appear on the **Search Results** page.

## Search directory objects (Query Based Advanced Search)

Use the Directory Manager portal to search directory objects (users, mailboxes, contacts, and groups) in the identity store based on a query. See the [Search Directory Objects With a Saved Query](/docs/directorymanager/11.1/portal/generalfeatures/querysearch.md) topic.

:::note
In the portal's linked mode, you can't search contacts in a linked Microsoft Entra ID, Google Workspace, or Generic LDAP store because these providers don't support the contact object.
:::

## View search results

After you run a search, all objects matching your filter criteria appear on the **Search Results** page.

The **Modify Search Directory** box works as follows:

- **Stand-alone** mode: Displays the **Entire Directory** option. You can select a specific child domain or particular OUs to view search results from.
- **Linked** mode: Lists all domains of the linked identity stores. You can select domains or OUs to view the search result from.

The page has the following tabs:

- **All**: Displays all objects that match the search criterion.
- **Groups**: Displays groups that match the search criterion.
- **Users**: Displays users and mailboxes that match the search criterion.
- **Contacts**: Displays contacts that match the search criterion.

The **Search Results** page displays results in the following columns:

- Type
- Display name
- Department
- Office
- Business
- Email

If the portal is running in Linked mode, the **Identity Store** column appears. It displays the name of the identity store in which the object resides.

:::important
To search in a customized portal in Linked mode, ensure that the customized portal fields match similar attributes across linked stores. Otherwise, Directory Manager doesn't match linked identities correctly.
:::

You can perform multiple actions on objects. See the [Directory Manager Portal Toolbar Buttons](/docs/directorymanager/11.1/portal/generalfeatures/toolbar.md) topic for more information.

To move through search results, use the page numbers at the bottom of the listing. You can also control the number of results per page by modifying the **Search results per page** setting in the **User Settings** panel.
