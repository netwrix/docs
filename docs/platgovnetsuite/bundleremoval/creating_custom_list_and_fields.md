---
title: "Creating a Custom List and Fields"
description: "Creating a Custom List and Fields"
sidebar_position: 20
---

# Creating a Custom List and Fields

Seven custom fields and one custom list needs to be created for the bundle’s customization records.
The custom list holds six different values to view the different scenarios that are covered. The
customization records have one custom field to show the name of the scenario that the customization
belongs to and six different check boxes, one for each scenario.

## Create a Custom List

1. Open **Customization** > **Lists, Records, & Fields** > **Lists** > **New**
2. Enter a **Name** for the list, for example, **Bundle Removal Scenarios**
3. On the Values tab add these values:

    1. Outside bundle with no relationships to the bundle
    2. In bundle with no outside relationships
    3. Outside bundle referenced by inside
    4. In bundle referencing record outside
    5. Outside bundle referencing inside
    6. In bundle referenced by outside

        ![Create a Custom List](/images/platgovnetsuite/bundle_removal/customlist.webp)

## Create Custom Fields

1. Open **Customization** > **Lists, Records, & Fields** > **Record Types**
2. Click on **Customization** in the record type list.
3. Click **New Field** on the **Fields** tab.
4. Add the new Field information:

    - **Label**: Removal Scenario
    - **Type**: List/Record
    - **List/Record**: the name of your new list, for example **Bundle Removal Scenarios**

5. Add the six removal scenario (Removal Scenario 1 ... Removal Scenario 6) check boxes:

    - **Label**: Removal Scenario 1
    - **Type**: List/Record
    - **List/Record**: Checkbox

6. Click **Save**

**Next Step:** [Categorizing Customizations](/docs/platgovnetsuite/bundleremoval/categorizing_customizations.md)
