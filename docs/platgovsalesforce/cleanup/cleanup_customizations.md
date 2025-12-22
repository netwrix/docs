---
title: "Cleaning Up Customizations"
description: "Cleaning Up Customizations"
sidebar_position: 20
---

# Cleaning Up Customizations

Use these processes to Clean up Individual Customization or Clean Up Multiple Customizations.

## Clean up Individual Customization

1. Open the customization.
2. Open the **Improvement** tab.
3. Under **Clean Up Status**, select a status:

    - **To Be Cleaned Up**
    - **Send Request Info Emails**
    - **Under Investigation**
    - **Disabled / Hidden**
    - **Archived**
    - **Deleted**
    - **Ignore**
    - **Fix ScriptID**
    - **Reassign Owner**
    - **Closed**

4. Under **Clean Up Comments**, add notes to help with clean up.
5. Attach to a **Change Request** associated with the customization (optional).
6. Assign a **Change/Approval Policy** if there is an object specific policy (optional).
7. Under **Clean-Up Classification**, add an overview of the clean up.

![improvementtab](/images/platgovsalesforce/clean_up/improvementtab.webp)

## Clean Up Multiple Customizations

1. Go to the **Customizations** tab.
2. Create a new list view for clean up by clicking on **Create New View**.
3. Enter a **View Name** and a **View Unique Name**.
4. Specify the filter criteria:

    - **Filter By Owner**: choose All Customizations or My Customizations.
    - **Filter By Additional Fields**: choose Salesforce Type equals Report and Record Type equals
      Report.

5. Select fields to display:

    - **Clean Up Classification**
    - **Clean Up Comments**
    - **Clean Up Status**

    ![createlist_view_for_cleanup](/images/platgovsalesforce/clean_up/createlist_view_for_cleanup.webp)

6. Restrict Visibility. You can choose to have the list view:

    - Only visible to you,
    - Visible to all users or
    - Visible to certain groups of users.

7. Click **Save**.
8. Once your list view has been created, you can multi-select customizations for clean up by
   checking the box beside **Action**.

    ![multi_select_cleanup](/images/platgovsalesforce/clean_up/multi_select_cleanup.webp)

9. You can now choose what you want to edit for the multiple customizations selected.
   For example, if you want to change the clean up status:
10. Go to **Edit Clean Up Status**.
11. Select a status such as To Be Cleaned Up.
12. Choose to **Apply changes to: All the selected records**.
13. Click **Save**.

    ![flagging_mass_customizations](/images/platgovsalesforce/clean_up/flagging_mass_customizations.webp)
