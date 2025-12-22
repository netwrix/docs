---
title: "Find Dialog Box"
description: "Find Dialog Box"
sidebar_position: 20
---

# Find Dialog Box

This dialog box enables you to search **User**, **Group**, and **Contact** objects in the connected
identity store.

The object types available for search may vary, depending on the page you launch the **Find** dialog
box from.

1. From the **Look For** list, select one or more object types that you want to search for.

    - **Users** - to search for users only.
    - **Groups** - to search for groups only.
    - **Contacts** - to search for contacts only.

2. The **Search In** list shows all organizational units or containers in the connected identity
   store. Select the check boxes for the required containers to search in. To search all containers,
   select the **Entire Directory** check box.
3. In the **Search** box, type a search parameter. Below are some tips to get the best out of your
   searching:

    - You can type the complete string as a search parameter.

        For example, you can type **Administrator** in this box to find all objects with the display
        name '_Administrator'_.

    - You can type a part of the string as a search parameter.

        For example, you can type **Ad** in this box to find all objects with the display name
        beginning with '_Ad'_.

    - You can use wildcard search if you do not remember the exact search criteria.

        For example, you can type **\*** in this box to find all objects with any display name or
        you can type **\*d** in this box to find all objects containing '_d'_ anywhere in their
        display name.

4. Click the **Advanced Search** link to display additional search fields (such as description,
   first name, last name, and company) to search for objects using attributes other than the
   object's display name.

    NOTE: The fields available for Advanced Search may vary, depending on the portal's
    configuration.

5. Click the **Search** button to display the search results.
6. The **Search Results** section displays a list of objects matching the search criteria.

    From the search results, select the required objects and click the right-arrow to move them to
    the **Selected Results** list.

7. The **Selected Results** section displays the objects that you have selected from the **Search
   Results** list.

    Click the left-arrow to move the selected objects from the **Selected Results** list to the
    **Search Results** list.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
