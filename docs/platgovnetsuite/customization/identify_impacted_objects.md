---
title: "Identifying Impacted Objects"
description: "Identifying Impacted Objects"
sidebar_position: 40
---

# Identifying Impacted Objects

You can find impacted objects in several ways:

- [Customization List](#customization-list)
- [Customization Quick Search](#customization-quick-search)
- [ERD View](#erdview)
- [ERD Search Form](#erd-search-form)
- [Customization Impact Search](#customization-impact-search)
- [Other Customizations](#other-customizations)
- [Process Documentation](#process-documentation)

## Customization List

The customization list provides a complete list of all the customization records.

It enables you to:

- Filter the view.
- Access the Customization Record.
- Access the actual customization record by clicking on the **Link** column on the right.

Changing the view enables you to access many clean up tools, which can also be accessed by going to
**Clean Up** located under the **Strongpoint** tab.

To access the customization list:

1. Open **Strongpoint**> **Customizations** > **Customization**
2. The recommended view is **Strongpoint Filter** to enable the filters to narrow down your search.

![customization-list](/images/platgovnetsuite/customizations/customization-list.webp)

## Customization Quick Search

To access a customization quick search, open **Strongpoint** > **Customizations** > **Customization
Quick Search**

You can search using several factors and submit. When looking up by **Name**, using **Contains**
helps if you do not have the exact name.

![custquicksearch](/images/platgovnetsuite/customizations/custquicksearch.webp)

## ERD View

The ERD provides a way to look at customizations by record type. A left click on the customization
name brings up the customization record.

1. Open **Strongpoint**> **Customizations** > **ERD View**
2. Select a **Record Type** from the list.
3. Add any options:

    - **Field Name Filter**: enter all or part of a field name to filter the results.
    - **Date Last Used Filter**: enter a date range to filter the results.
    - **Hide standard fields without relationships**: check this box to hide all standard fields
      that do not have relationships from the results.
    - **Hide all standard fields**: check this box to hide all standard fields from the results.
    - **Hide all fields without custom relationships**: check this box to hide all unused fields
      that do not have custom relationships from the results.
    - **Hide Unused fields**: check this box to hide all unused fields from the results, based on
      the DLU.

4. Click **Show Record ERD**.

    ![erd-view](/images/platgovnetsuite/customizations/erd-view.webp)

5. Click on any item to expand the view. For large lists, click **More** to see the additional
   items.
   External sources headers are highlighted in green.

    ![ERD with an External Source](/images/platgovnetsuite/customizations/celigo_erd.webp)

6. Click **Open Record** on any Customization to open the actual record.

## ERD Search Form

The ERD search form enables you to search by different record types. You can also use it to create a
Process Issue or a Change Request. Refer to [Enabling the ERD Search](/docs/platgovnetsuite/customization/using_erd.md).

From the ERD Search Form, you can search by:

- Customization Type
- Script ID
- Name
- Parent
- Quick Add

![erdsearchform-2](/images/platgovnetsuite/customizations/erdsearchform-2.webp)

Once you have finished your search, you can create a Process Issue or a Change Request from the
results.

![erdsearchform-3](/images/platgovnetsuite/customizations/erdsearchform-3.webp)

## Customization Impact Search

The Customization Impact Search displays customizations and the other customizations that are
impacted by those customizations. For example, it will show if a field is used in a script or a
search.

To access a customization quick search:

1. Select **Strongpoint** > **Customizations** > **Customization Impact Search Form**.
2. Enter any criteria to narrow the results as required.

![impactsearchform](/images/platgovnetsuite/customizations/impactsearchform.webp)

## Other Customizations

Often looking at one customization leads to more questions about what other related customizations
are linked to the one you are looking at. The tabs in the customization record provide links to
other customizations by type.

## Process Documentation

Linking customizations to processes is a powerful way of understanding the function and impact of
any customizations. The detailed step information in the **Process Assistant** shows the links to
customizations for that process.
