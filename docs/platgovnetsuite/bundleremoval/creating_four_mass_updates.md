---
title: "Creating Four Mass Updates"
description: "Creating Four Mass Updates"
sidebar_position: 40
---

# Creating Four Mass Updates

Once you have created the first two mass updates and the two saved searches, you need to follow a
similar process to make sure the rest of the objects have been included for the bundle removal.

## Mass Update Scenario 3

This mass update captures all the outside bundle components referenced by inside bundle components.

1. Open **Lists** > **Mass Update** > **Mass Updates**
2. Open **General Updates** > **Custom Records** > **Customization**
3. Check **Use Expressions** on the **Criteria** tab.
4. Add the following filters on the **Criteria** tab:

| | Parens | Filter | Description | Parens | And/Or |
| --- | :---: | --- | --- | :---: | --- |
| Filter 1 | | Inactive | Is false | | and |
| Filter 2 | | Clean-Up Status | Is Under Investigation | | and |
| Filter 3 | ( | Scripts:  Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 4 | | Workflows: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 5 | | Forms: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 6 | | Searches/Mass Updates: Clean-Up Status | Is To Be Cleaned Up | ) | |

5. Open the **Mass Update Fields** tab.
6. Scroll down and check the box for **Removal Scenario**
7. Choose **Outside bundle referenced by inside** from the drop down menu.
8. Check the box for **Removal Scenario 3**
9. Click **Save**

## Mass Update Scenario 4

This mass update captures all the bundle objects that are referencing non bundle components.

1. Open **Lists** > **Mass Update** > **Mass Updates**
2. Open **General Updates** > **Custom Records** > **Customization**
3. Check **Use Expressions** on the **Criteria** tab.
4. Add the following filters on the **Criteria** tab:

| | Filter | Description | Formula |
| --- | --- | --- | --- |
| Filter 1 | Inactive | Is false | |
| Filter 2 | Clean-Up Status | Is to Be Cleaned Up | |
| Filter 3 | Formula (Numeric) | Is 1 | CASE WHEN `custrecord_flo_data_source.custrecord_flo_cleanup_status}` != 'To Be Cleaned Up' OR `{custrecord_flo_list.custrecord_flo_cleanup_status}` != 'To Be Cleaned Up' OR `{custrecord_flo_cust_parent.custrecord_flo_cleanup_status}` != 'To Be Cleaned Up' OR THEN 1 ELSE 0 END |

5. Open the **Mass Update Fields** tab.
6. Scroll down and check the box for **Removal Scenario**
7. Select **In bundle referencing record outside** from the drop down menu.
8. Check the box for **Removal Scenario 4**
9. Click **Save**

## Mass Update Scenario 5

This mass update flags all Non bundle components dependent on bundle components.

1. Open **Lists** > **Mass Update** > **Mass Updates**
2. Open **General Updates** > **Custom Records** > **Customization**
3. Check **Use Expressions** on the **Criteria** tab.
4. Add the following filters on the **Criteria** tab:

| | Parens | Filter | Description | Parens | And/Or |
| --- | :---: | --- | --- | :---: | --- |
| Filter 1 | | Inactive | Is false | | and |
| Filter 2 | | Clean-Up Status | Is Under Investigation | | and |
| Filter 3 | ( | Data Source(s): Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 4 | | List: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 5 | | Parent: Clean-Up Status | Is To Be Cleaned Up | ) | |

5. Open the **Mass Update Fields** tab.
6. Scroll down and check the box for **Removal Scenario**
7. Choose **Outside bundle referencing inside** from the drop down menu.
8. Check the box for **Removal Scenario 5**
9. Click **Save**

## Mass Update Scenario 6

This mass update captures all the bundle components referenced by non bundle components.

1. Open **Lists** > **Mass Update** > **Mass Updates**
2. Open **General Updates** > **Custom Records** > **Customization**
3. Check **Use Expressions** on the **Criteria** tab.
4. Add the following filters on the **Criteria** tab:

| | Filter | Description | Formula |
| --- | --- | --- | --- |
| Filter 1 | Inactive | Is false | |
| Filter 2 | Clean-Up Status | Is to Be Cleaned Up | |
| Filter 3 | Formula (Numeric) | Is 1 | CASE WHEN `{custrecord_flo_searches.custrecord_flo_cleanup_status}` != 'To Be Cleaned Up' OR `{custrecord_flo_scripts.custrecord_flo_cleanup_status}` != 'To Be Cleaned Up' OR `{custrecord_flo_wflws.custrecord_flo_cleanup_status}` != 'To Be Cleaned Up' OR `{custrecord_flo_cust_forms.custrecord_flo_cleanup_status}` != 'To Be Cleaned Up' THEN 1 ELSE 0 END |

5. Open the **Mass Update Fields** tab.
6. Scroll down and check the box for **Removal Scenario**
7. In **bundle referenced by outside** from the drop down menu.
8. Check the box for **Removal Scenario 6**
9. Click **Save**

**Next Step:**
[Investigating Through Saved Searches](/docs/platgovnetsuite/bundleremoval/investigating_through_saved_searches.md)
