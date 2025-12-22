---
title: "Directory Search"
description: "Directory Search"
sidebar_position: 30
---

# Directory Search

Using the GroupID portal, you can search and manage different directory objects (users, groups,
contacts and mailboxes).

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

What do you want to do?

- [Search directory objects (Quick Search)](#search-directory-objects-quick-search)
- [Search directory objects (Advanced Search)](#search-directory-objects-advanced-search)
- [Search directory objects (Query Based Advanced Search)](#search-directory-objects-query-based-advanced-search)
- [View Search Results](#view-search-results)

## Search directory objects (Quick Search)

Use Quick Search to quickly locate objects in the identity store. You can search the entire
directory or specific OU(s) within the directory, depending on search permissions granted to your
role in the identity store.

1. In the Quick Search box in the top-of the page, enter the display name, first name, or email
   address of an object to search for it.

    A list of matched objects is displayed as you type the search string.

2. Select your required object or click magnifying glass icon.

    Matches are displayed on the **Search Results** page.

NOTE: Display name, first name and email address are the default schema attributes for Quick Search.
If the GroupID administrator specifies different attributes, you will not get the desired results
when you perform a search with the display name, first name or email address.

## Search directory objects (Advanced Search)

Use the portal's Advanced Search to search for directory objects (users, mailboxes, contacts,
groups) in the identity store. You can search the entire directory or specific OU(s) within the
directory, depending on search permissions granted to your role in the identity store.

Multiple filters are available to search for objects. You can use them individually or in
combination to get the most appropriate search results.

NOTE: In portal's linked mode, you cannot search contacts in linked Azure / Google Workspace /
Generic LDAP store as contact object is not available in these providers.

1. Click **Advanced Search** at the top. The **Advanced Search** page is displayed.
2. In the **Search** box:

    In **Stand-alone** mode: select the check boxes for the entire directory or the OUs that you
    want to search in. You can also specify the default search OUs using the **Domains to Search**
    setting on the User Settings panel.

    NOTE: In **Linked** mode: the **Search** and the **Domains to Search** boxes will list all the
    domains of the linked identity stores. You can select domain(s) or OUs you want to search in.

3. In the **Objects** box, select the objects (User, mailboxes, contact, group) you want to search
   for.

    In **Linked** mode: If you log into the portal with an AD primary store, you can search a
    contact object and if you log in with any of the other providers i.e., Microsoft Entra ID,
    Google Workspace or Generic LDAP, you cannot search as they do not support the contact object
    type.

4. Enter search criteria as needed:

    - Type the display name, first name, last name, title, alias, company, department, office,
      and/or city of an object to search for it.
    - You can select a custom attribute from the **Select a field** list and type a search string in
      the box next to the list.

5. Click **Search**.

    Objects matching the search criteria are displayed on the **Search Results** page.

## Search directory objects (Query Based Advanced Search)

GroupID portal enables you to search directory objects (users, mailboxes, contacts, groups) in the
identity store based on a query. See the
[Query Based Advanced Search](/docs/directorymanager/11.0/welcome/generalfeatures/querysearch.md)
topic.

NOTE: In portal's linked mode, you cannot search contacts in linked Azure / Google Workspace /
Generic LDAP store as contact object is not available in these providers.

## View Search Results

On performing a search, all objects matching your filter criteria are displayed on the **Search
Results** page.

The **Modify Search Directory** box in:

- **Stand-alone** mode: displays Entire Directory option. You can select a specific child domain or
  particular OUs to view search results from.

- **linked** mode: lists all domains of the linked identity stores. You can select domain(s) or OUs
  to view the search result from.

The page has multiple tabs, namely:

- **All**: displays all objects that match the search criterion.
- **Groups**: displays groups that match the search criterion.
- **Users**: displays users and mailboxes that match the search criterion.
- **Contacts**: displays contacts that match the search criterion.

The Search **Results** page displays results against the following columns:

- Type
- Display name
- Department
- Office
- Business
- Email

If portal is running in the Linked mode, the **Identity Store** column is displayed. It displays the
name of the identity store in which the object resides.

**Important**: For performing searches in customized portal using the Linked mode, it is important
that customized portal fields, which are used while creating filter expressions for use and group
objects, are bind with similar attributes of stores. Otherwise, GroupID will not be able to linked
identities.

You can perform multiple actions on objects. See the
[Toolbar](/docs/directorymanager/11.0/welcome/generalfeatures/toolbar.md) topic.

To move through search results, use the page numbers given at the bottom of the listing. You can
also control the number of results per page by modifying the **Search results per page** setting on
the User Settings panel.

See Also

- [Portal Settings](/docs/directorymanager/11.0/welcome/generalfeatures/portal.md)
