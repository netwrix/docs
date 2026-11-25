---
title: "Find Users, Groups, and Contacts in Directory Manager"
description: "Use the Find dialog box to search for and select users, groups, and contacts in the connected identity store, including wildcard and advanced searches."
keywords:
  - Find dialog box
  - search users groups contacts
  - wildcard search
  - Advanced Search
  - Directory Manager portal
sidebar_position: 20
---

# Find Users, Groups, and Contacts in Directory Manager

The **Find** dialog box lets you search **User**, **Group**, and **Contact** objects in the connected
identity store.

The object types available for search can vary, depending on the page you launch the **Find** dialog
box from.

1. From the **Look For** list, select one or more object types that you want to search for.

    - **Users** – to search for users only.
    - **Groups** – to search for groups only.
    - **Contacts** – to search for contacts only.

2. The **Search In** list shows all organizational units or containers in the connected identity
   store. Select the checkboxes for the required containers to search in. To search all containers,
   select the **Entire Directory** checkbox.
3. In the **Search** box, enter a search parameter. The following tips help you get the best results:

    - You can enter the complete string as a search parameter.

        For example, you can enter **Administrator** in this box to find all objects with the display
        name '_Administrator_'.

    - You can enter a part of the string as a search parameter.

        For example, you can enter **Ad** in this box to find all objects with the display name
        beginning with '_Ad_'.

    - You can use a wildcard search if you don't remember the exact search criteria.

        For example, you can enter **\*** in this box to find all objects with any display name or
        you can enter **\*d** in this box to find all objects containing '_d_' anywhere in their
        display name.

4. Click the **Advanced Search** link to display additional search fields (such as description,
   first name, last name, and company) to search for objects using attributes other than the
   object's display name.

    :::note
    The fields available for Advanced Search can vary, depending on the portal's
    configuration.
    :::

5. Click the **Search** button to display the search results.
6. The **Search Results** section displays a list of objects matching the search criteria.

    From the search results, select the required objects and click the right-arrow to move them to
    the **Selected Results** list.

7. The **Selected Results** section displays the objects that you selected from the **Search
   Results** list.

    Click the left-arrow to move the selected objects from the **Selected Results** list to the
    **Search Results** list.

**See Also**

- [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
