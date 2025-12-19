---
title: "Access Review Assistant"
description: "Access Review Assistant"
sidebar_position: 90
---

# Access Review Assistant

The Access Review Assistant creates a comprehensive display of permissions and profiles for a
selected **Object**, **User**, or **Profile / PermissionSet**. The results can be exported to Excel.
The Access Review Assistant feature is available with the Intelligent Change Enablement and
Enterprise Compliance [licenses](/docs/platgovsalesforce/installingstrongpoint/features_by_license_type.md).

:::note
Run the scanners before you perform comparisons to ensure you have the latest data.
:::

There are three Access Assistance search types:

- Search By Object
- Search By User
- Search By Profile / Permission Set

## Search By Object

1. Select **Tools** > **Access Review Assistant** from the Netwrix Dashboard page. Click the
   expansion indicator u to expand the **Access Assistance** panel. Make sure **Search By Object**
   is selected.

    ![Open the Access Review Assistant](/images/platgovsalesforce/tools/access_review_assistant.webp)

2. Start typing the name of the **Search Object**. You can pick your object from the displayed
   completion list.
3. Set the **Permission Type Filters**: **All Permissions**, **Permission Set**, **Permission Set
   Group**, or **Profile**.
4. Set the **Object Permissions Filters**: **Create**, **Edit**, **Read**, **Delete**, **View All**,
   and **Modify All**.
5. Click **Search**.

    ![access_assistance](/images/platgovsalesforce/tools/access_assistance.webp)

6. Click **View Details** to see **System Permissions** and **User Assignments** for the object.

    ![Details for the object](/images/platgovsalesforce/tools/access_assist_view_details_permission.webp)

    ![Details for the object](/images/platgovsalesforce/tools/access_assist_view_details_users.webp)

7. Review the permissions and users for the object.
8. Click **Export Data** to create an Excel file containing the comparison. The
   **StrongpointObjectPermissionsExport (#).xlsx** file is saved to your default download directory.

## Search By User

1. Select **Tools** > **Access Review Assistant** from the Netwrix Dashboard page. Click the
   expansion indicator u to expand the **Access Assistance** panel. Make sure **Search By User** is
   selected.

    ![Search By User](/images/platgovsalesforce/tools/access_assist_user.webp)

2. Start typing the user name. Pick from the completion list.
3. Click **Search**.

    ![Search by User](/images/platgovsalesforce/tools/access_assist_user2.webp)

4. Click **View Details** to see **System Permissions** and **User Assignments** for the permission.
5. Review the permissions for the user.
6. Click **Export Data** to create an Excel file containing the comparison. The
   **StrongpointUserPermissionsExport (#).xlsx** file is saved to your default download directory.

## Search By Profile / Permission Set

1. Select **Tools** > **Access Review Assistant** from the Netwrix Dashboard page. Click the
   expansion indicator u to expand the **Access Assistance** panel. Make sure **Search By Profile /
   Permission Set** is selected.

    ![Search by Profile / Permission Set](/images/platgovsalesforce/tools/access_assist_profile.webp)

2. Start typing the Profile / Permission Set name. Pick from the completion list.
3. Click **Search**.

    ![Search by Profile / Permission Set](/images/platgovsalesforce/tools/access_assist_profile2.webp)

4. Review the **System Permissions** and **User Assignments**.
5. Click **Export Data** to create an Excel file containing the comparison. The
   **StrongpointPermissionsExport (#).xlsx** file is saved to your default download directory.
