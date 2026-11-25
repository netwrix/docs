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

The **Find** dialog box lets you search **User**, **Group**, and **Contact** objects in the connected identity store.

The object types available for search can vary, depending on the page you launch the **Find** dialog box from.

To find objects:

1. From the **Look For** list, select one or more object types to search for.

   - **Users**: search for users only.
   - **Groups**: search for groups only.
   - **Contacts**: search for contacts only.

2. The **Search In** list shows all organizational units or containers in the connected identity store. Select the checkboxes for the containers to search in. To search all containers, select the **Entire Directory** checkbox.

3. In the **Search** box, enter a search parameter. These tips help you get the best results:

   - You can enter the complete string as a search parameter.

     For example, you can enter **Administrator** in this box to find all objects with the display name '_Administrator_'.

   - You can enter a part of the string as a search parameter.

     For example, you can enter **Ad** in this box to find all objects with the display name beginning with '_Ad_'.

   - You can use a wildcard search if you don't remember the exact search criteria.

     For example, you can enter **\*** in this box to find all objects with any display name. You can also enter **\*d** in this box to find all objects containing '_d_' anywhere in their display name.

4. Click the **Advanced Search** link to display additional search fields (such as description, first name, last name, and company). Use them to search for objects by attributes other than the object's display name.

   :::note
   The fields available for Advanced Search can vary, depending on the portal's configuration.
   :::

5. Click the **Search** button to display the search results.

6. The **Search Results** section lists the objects matching the search criteria. Select the objects you want and click the right-arrow to move them to the **Selected Results** list.

7. The **Selected Results** section displays the objects you selected from the **Search Results** list. Click the left-arrow to move selected objects from the **Selected Results** list back to the **Search Results** list.
