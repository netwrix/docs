---
title: "Archive Fields"
description: "Archive Fields"
sidebar_position: 70
---

# Archive Fields

When cleaning up your account with Platform Governance for NetSuite clean up tools, you may find
fields that are no longer in use and you want to delete them. To do this you need to create a Change
Request and add the fields you want to delete.

## Create a Change Request to Archive Fields

To create a change request:

1. Open Strongpoint > **Change Management** > **Change Request**
2. Fill out all relevant fields and include all the customization you want to delete in the
   **Customizations** field, add the customizations you want to delete.
3. Click **Save**.
4. Click the **Impact Analysis** button.
5. Under the **Impact Analysis tab**, the customizations you selected are listed under one or more
   tabs:

    - Can Be Safely Deleted or Modified
    - Cannot Be Safely Deleted or Modified or
    - Inactive Customizations (Already Deleted)

![archivefields1](/images/platgovnetsuite/clean_up/archivefields1.webp)

6. Click on the **Archive Customizations** if you find your customizations under **Cannot Be Safely
Deleted or Modified** and under **Warning it says Not Archived**

![archivefields2](/images/platgovnetsuite/clean_up/archivefields2.webp)

7. Once your customizations are processed and archived, your customizations are listed under **Can be
Safely Deleted or Modified**. Your [archive folder](/docs/platgovnetsuite/cleanup/set_up_archive_folder.md) has the CSV file you
can download. The file name has the field type and the script ID.
