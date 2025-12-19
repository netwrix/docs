---
title: "Using the ERD"
description: "Using the ERD"
sidebar_position: 20
---

# Using the ERD

The Entity Relationship Diagram, **ERD** is a visual representation of your Customizations where you
can easily review the relationships and dependencies. The ERD is easily accessible:

- **Strongpoint** > **Customizations** > **ERD View**
- ERD Search, refer to [Enabling the ERD Search on the Dashboard](#enabling-the-erdsearch-on-the-dashboard)
- Tabs on various pages, for example, Customization record, Change Requests, and Process Issues.

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

## Enabling the ERD Search on the Dashboard

To enable the ERD Search:

1. From NetSuite **Home**, go to **Personalize** (On the right-hand side of the page.)
2. Select **Custom Portlet**. (If it shows many Custom Portlets, you can pick any one of them.)
3. Choose **Set Up**
4. Under **Custom Content**, select **Strongpoint ERD Search Form**
5. Click **Save**

![erdsearchform-1](/images/platgovnetsuite/customizations/erdsearchform-1.webp)

From the ERD Search Form, you can search by:

- Customization Type
- Script ID
- Name
- Parent
- Quick Add
