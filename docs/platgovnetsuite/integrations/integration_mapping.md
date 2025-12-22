---
title: "Integration Mapping"
description: "Integration Mapping"
sidebar_position: 10
---

# Integration Mapping

The Integration Mapping tool maps customizations between External Systems and NetSuite.

Here is the basic process.

1. Create the External System Customization record. (optional)
2. Create a **.csv** file.
3. Open Integration Mapping tool.
4. Select or Enter the External System.
5. Upload your **.csv** file.
6. Review and Finish.
7. View the Summary and ERD.

## Create the External System Customization Record

You can create the External System before using the mapping tool. If you do not create the External
System, it can be automatically created by the tool.

1. Open **Strongpoint** > **Customizations** > **Customization** > **New**
2. Enter a **Name** for the External System, for example: _Salesforce_. (External System) is
   appended to the Name. For example, _Salesforce (External System)_.
3. Enter a **Description**.
4. Select **External System** from the **Type** list.
5. Click **Save**.

## Create a .csv file

The **.csv** file is where you specify the customization mapping between the External System and
NetSuite. The file is uploaded when you run the tool. You can create a file with the specified
headings, or download the template with the link on the first page of the Integration Mapping tool.
Do not change the specified headings. Here is the template:

![int_map_csv_template](/images/platgovnetsuite/integrations/int_map_csv_template.webp)

- **External Name** is the Object’s **Name** in the external system.
- **External Script ID** is the Object’s **Identifier** in the external system.
- **External Type** is the Object’s **Customization Type** in the external system.
- **Relationship(DataSource or Dependent Object)** specifies where the object originates.
  **DataSource** indicates an object from the external system translates into NetSuite.
  **Dependent** indicates the object translates from NetSuite to the external system.
- **Target Object Name or ScriptID** is the Object’s **Name** or **ScriptID** in NetSuite.
- **NS Parent** is the **Parent** of the **Target Object** in NetSuite.

## Open Integration Mapping tool

The Mapping Tool menu item is hidden by default. If you do not see the option in your menu, refer to
the [Managing Menus](/docs/platgovnetsuite/installation/managing_menus.md) topic for information on making it
available.

Open **Strongpoint** > **Integrations** > **Mapping Tool**

**![int_mapping_menu](/images/platgovnetsuite/integrations/int_mapping_menu.webp)**

## Select or Enter the External System

1. Select an existing External System from the list if you created it during Step 1, or Enter a new
   name to have the tool automatically create a new External System, for example: _Salesforce_.
   Strongpoint appends (External System) to the Name. For example, _Salesforce (External System)_.

    ![int_map_ext_sys](/images/platgovnetsuite/integrations/int_map_ext_sys.webp)

2. You can use the link to download the **.csv** template if you have not already created the file.
3. Click **Next** to continue.

## Upload your .csv file

1. Click **Choose File**.

    ![int_map_upload_csv](/images/platgovnetsuite/integrations/int_map_upload_csv.webp)

2. Navigate to the**.csv file** containing your mappings.
3. Click **Next** to continue.

## Review and Finish

1. Review customization mappings. If you entered a **ScriptID** in your **.csv**, the associated
   **Link Object** is shown.

    ![int_map_map_cust](/images/platgovnetsuite/integrations/int_map_map_cust.webp)

2. Click **Search** to open the search form and select or research additional **Link Objects**.

    ![int_map_search](/images/platgovnetsuite/integrations/int_map_search.webp)

3. Search by all or part of a **Name**, **Type** or all or part of a **ScriptID**. For example,
   enter _cust_ for **Name** and click **Search** to find all customizations containing the search
   term:

    ![int_map_search_results](/images/platgovnetsuite/integrations/int_map_search_results.webp)

    - Click in the **Add** column to select one or more objects.
    - Click **Select**.
    - Close the form when complete.

4. Click [X] to remove a **Link Object**.
5. Click **Finish** to begin the mapping.

## View the Summary and ERD

1. Check the Summary for any **Import Errors**.

    ![int_map_summary](/images/platgovnetsuite/integrations/int_map_summary.webp)

2. Click the linked **Internal ID** to display the ERD for each mapped customization.

Here is an example of an expanded ERD showing **Integrations**, **Sources**, and **External
Dependent Fields**. Note the **External Dependent Fields** is highlighted with a green header.

![int_mapping_ext_erd](/images/platgovnetsuite/integrations/int_mapping_ext_erd.webp)
