---
title: "Creating Two Mass Updates"
description: "Creating Two Mass Updates"
sidebar_position: 10
---

# Creating Two Mass Updates

## First Mass Update

The first mass update flags all the bundle components to be cleaned up and set the status on the
Customization to **To Be Cleaned Up**. It identifies everything needing removal.

To create the first mass update:

1. Open **Lists** > **Mass Update** > **Mass Updates**.
2. Open **General Updates** > **Custom Records** > **Customization**.
3. Check **Use Expressions** on the **Criteria** tab.

    ![Select Use Expressions](/images/platgovnetsuite/bundle_removal/bundle_removal_use_expressions.webp)

4. Add the following filters on the **Criteria** tab:

|  | Parens | Filter | Description | Parens | And/Or |
| --- | :---: | --- | --- | :---: | --- |
| Filter 1 | | Inactive | Is false | | and |
| Filter 2 | ( | Bundle | Bundle ID | | or |
| Filter 3 |  | Bundle | Bundle ID | ) | or |

:::note
You can remove more than one bundle at a time.
:::

![Mass Update Filters](/images/platgovnetsuite/bundle_removal/mass_update_filters.webp)

1. Open the **Mass Update Fields** tab.
2. Scroll down and check the box for **Clean Up Status**.
3. Enter the **Clean Up Status**: **To Be Cleaned Up**.

    ![Set Clean Up Status](/images/platgovnetsuite/bundle_removal/clean_up_status.webp)

4. Click **Save**.

## Second Mass Update

The second mass update flags all the objects related to the bundle and sets a status on the
Customization to **To Be Investigated**. It identifies everything needing investigation.

1. Open **Lists** > **Mass Update** > **Mass Updates**
2. Open **General Updates** > **Custom Records** > **Customization**
3. Check **Use Expressions** on the **Criteria** tab.
4. Add the following filters on the Criteria tab:

|  | Parens | Filter | Description | Parens | And/Or |
| --- | :---: | --- | --- | :---: | --- |
| Filter 1 | | Inactive | Is false | | and |
| Filter 2 | | Clean-Up Status | Is Not To Be Cleaned Up | | and |
| Filter 3 | ( | Data Sources: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 4 | | Scripts: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 5 | | Forms: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 6 | | Workflows: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 7 | | List: Clean-Up Status | Is To Be Cleaned Up | | or |
| Filter 8 | | Searches/Mass Updates: Clean-Up Status | Is To Be Cleaned Up | ) |  |

![Adding filters](/images/platgovnetsuite/bundle_removal/mass_update_filters2.webp)

5. Open the **Mass Update Fields** tab.
6. Scroll down and check the box for **Clean Up Status**
7. Enter the **Clean Up Status**: **Under Investigation**
8. Click **Save**

**Next Step:** [Creating a Custom List and Fields](/docs/platgovnetsuite/bundleremoval/creating_custom_list_and_fields.md)
