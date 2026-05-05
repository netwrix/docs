---
title: "Categorizing Customizations"
description: "Categorizing Customizations"
sidebar_position: 30
---

# Categorizing Customizations

Categorizing all customizations in your account is part of the bundle removal process. Use saved searches and CSV imports and exports, because mass updates don't have summary criteria for this type of search.

Flag bundle components that don't have relationships outside the bundle, or customizations that aren't related to the bundle, with CSV imports and exports.

## Create First Saved Search

1. Open **Lists** > **Search > Saved Searches**
2. Click **Outside bundle with no relationships to the bundle** saved search.
3. On the **Criteria** tab, click **Standard** and add the following filters:

| | Filter | Description |
| --- | --- | --- |
| Filter 1 | Inactive | Is false |
| Filter 2 | Clean-Up Status | Isn't To Be Cleaned Up |

4. On the **Criteria** tab, click **Summary** and add the following:

| Summary Type | Field | Description | Formula |
| --- | --- | --- | --- |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN `{custrecord_flo_data_source.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN `{custrecord_flo_scripts.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
   | Sum | Formula (Numeric) | Is less than 1 | CASE WHEN `{custrecord_flo_cust_forms.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN `{custrecord_flo_wflws.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
|Sum | Formula (Numeric) | Is less than 1 | CASE WHEN  `{custrecord_flo_list.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END | |
   Sum | Formula (Numeric) | Is less than 1 | CASE WHEN `{custrecord_flo_searches.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END
   |

5. On the **Results** tab, click **Columns** and fill in the following:

| Field | Summary Type | Formula |
| --- | --- | --- |
| Internal ID | Group | |
| Name | Group | |
| Parent | Group | |
| Formula (Numeric) | Sum | CASE WHEN `{custrecord_flo_data_source. custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN `{custrecord_flo_scripts.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN `{custrecord_flo_cust_forms.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN `{custrecord_flo_wflws.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN `{custrecord_flo_list.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN `{custrecord_flo_searches.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' THEN 1 ELSE 0 END |

6. Click **Preview**.This step takes some time.Troubleshooting:
   [Saved Search Times Out](/docs/platgovnetsuite/reportabug/saved_search_times_out.md)

## Export and Import the CSV File

1. Export as a CSV file.

    ![Export to a CSV file](/images/platgovnetsuite/bundle_removal/export_csv.webp)

2. Open the CSV file and delete the **Overall Total row**.
3. **Save** the CSV.
4. Open **Setup** > **Import/Export** > **Import CSV Records**
5. On the Import Assistant enter the following:

- **Import Type**: **Custom Records**
- **Record Type**: **Customization**

6. Click **Select** and select the CSV file you just exported.
7. Click **Next**.
8. Under **Import Options**, choose **Update**.
9. Click **Next**.
10. Under **Field Mapping**, add:

- Internal ID
- Customization: Removal Scenario
- Customization: Removal Scenario 1

11. Click **Next** and **Start the Import.**
12. Choose **Save & Run**.

## Create the Second Saved Search

1. Open **Lists** > **Search** > **Saved Searches**
2. Find the **In bundle with no outside relationships** saved search.
3. Under the **Criteria** tab, click **Standard** and add the following filters:

| | Filter | Description |
| --- | --- | --- |
| Filter 1 | Inactive | Is false |
| Filter 2 | Clean-Up Status
   | Isn't To Be Cleaned Up |

4. On the **Criteria** tab, click **Summary** and add the following:

| Summary Type | Field | Description | Formula |
| --- | --- | --- | --- |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN`{custrecord_flo_data_source.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_data_source}`,0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN`{custrecord_flo_cust_forms.custrecord_flo_cleanup_status}` != 'Under Investigation' OR TO_NUMBER(NVL(`{custrecord_flo_cust_forms}`,0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN`{custrecord_flo_scripts.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_scripts}`,0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN`{custrecord_flo_wflws.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_wflws}`,0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN`{custrecord_flo_list.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_list}`,0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN`{custrecord_flo_searches.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_searches}`,0)) < 1 THEN 0 ELSE 1 END |

5. On the **Results** tab, click **Columns** and fill in the following:

| Field | Summary Type | Formula |
| --- | --- | --- |
| Internal ID | Group | |
| Name | Group | |
| Parent | Group | |
| Formula (Numeric) | Sum | CASE WHEN`{custrecord_flo_data_source.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_data_source}`,0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN`{custrecord_flo_cust_forms.custrecord_flo_cleanup_status}` != 'Under Investigation' OR TO_NUMBER(NVL(`{custrecord_flo_cust_forms}`,0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN`{custrecord_flo_scripts.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_scripts}`,0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN`{custrecord_flo_wflws.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_wflws}`,0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN`{custrecord_flo_list.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_list}`,0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN`{custrecord_flo_searches.custrecord_flo_cleanup_status}` = 'To Be Cleaned Up' OR TO_NUMBER(NVL(`{custrecord_flo_searches}`,0)) < 1 THEN 0 ELSE 1 END |

6. Click **Preview**.This step takes some time.Troubleshooting:
   [Saved Search Times Out](/docs/platgovnetsuite/reportabug/saved_search_times_out.md)

## Export and Import the CSV File

1. Export as a CSV file.
2. Open the CSV file and delete the **Overall Total row**.
3. **Save** the CSV.
4. Open **Setup** > **Import/Export** > **Import CSV Records**
5. On the Import Assistant enter the following:

- **Import Type**: **Custom Records**
- **Record Type**: **Customization**

6. Click **Select** and select the CSV file you just exported.
7. Click **Next**.
8. Under **Import Options**, choose **Update**.
9. Click **Next**.
10. Under **Field Mapping**, add:

- Internal ID
- Customization: Removal Scenario
- Customization: Removal Scenario 2

11. Click **Next** and **Start the Import.**
12. Choose **Save & Run**.

**Next Step:**
[Creating Four Mass Updates](/docs/platgovnetsuite/bundleremoval/creating_four_mass_updates.md)
