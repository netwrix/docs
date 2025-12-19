---
title: "Understanding the Customization Record"
description: "Understanding the Customization Record"
sidebar_position: 10
---

# Understanding the Customization Record

Customization records are the documentation about each customization. They are normally built and
maintained by the Spiders. They enable you to search the customizations and attach them to
processes.

Customization records tell you:

- What customizations exist (or used to exist) in an account.
- Who is using the customizations.
- Which customizations are being used.
- What joins exist between customizations.
- Detailed automated documentation (search filters and formulas, related fields, scripts, searches
  and records).

A Customization is a meta record of the NetSuite customization that is created by the spider
process. Links to other customizations and processes are captured and managed in this record.

## Understanding the Customization Record

Selecting **Strongpoint**> **Customizations** > **Customization** opens a list of customization
records, or move the mouse further right to create a **New** customization or to **Search** for a
customization.

### Fields

The main section of the Customization Record summarizes the key information for the object.

- **Base Record**: Displays the linked parent record. For Saved Searches it displays the Object
  Type.
- **Owner**: Displays the current owner of the record.
- **Description**: Displays the record description. If description is blank, you can click **Edit**
  to manually enter it.
- **Type**: Displays the record's NetSuite Object Type.
- **Internal Id**: Displays the record’s internal ID.
- **Scriptid**: Displays the record’s Script ID.
- **Related Objects**: Summarizes the related object dependencies by object type. Click links to
  open detailed view. For example, there could be multiple scripts and workflows that depend on this
  object. Click links to open detailed view as shown.

![cust_ui_related_objects](/images/platgovnetsuite/customizations/cust_ui_related_objects.webp)

### Buttons

- **Edit**: Opens the record for editing.
- **Back**: returns to the customization list.
- **Respider** **Now**: This button triggers the Spider and updates the documentation for this
  specific record.
- **Go to Record**: Displays the actual record from NetSuite.
- **Create Test**: Opens a new Test Record for the customization.

### Tabs

The tabs provide detailed information about the customization:

- **Detailed Metadata**: Details about the customization including Fields, Values, Bundle / SuiteApp
  information, [Date Last Used](/docs/platgovnetsuite/cleanup/date_last_used.md), Last Used Status, and who uses the
  customization. Information varies depending on the customization type. For example, Workflow
  customizations include States, Actions, and Workflow Fields not applicable when viewing Field
  customizations.
- **ERD**: Displays the Entity-Relationship Diagram centered around this customization.
- **Clean Up**: Comments, classification and clean up status associated with the customization.
  Search records have additional fields for Automated Search Clean Up alerts, rules, and status.
- **Change Log**: Displays the change log for the customization.
- **Related Change Log**: Displays any related change logs for the customization.
- **SoD**: Displays Segregation of Duties details for user role customizations.
- **Controls**: Displays searches enabling you to set the search as a Control.

#### Bundle / SuiteApp Information

This information is available on the Detailed Metadata tab for all customization types. They appear
on the
[Managed Bundle/App Updates](/docs/platgovnetsuite/change_management_reports.md#managed-bundleapp-updates)
report.

- _Managed Bundle/SuiteApps_ are pushed to target accounts by a third-party provider.
- _Third-Party Bundle/SuiteApps_ are third-party products that can be updated on demand for target
  accounts. These components have the same change evaluation as managed bundle/apps. Unmanaged
  third-party bundles or apps must meet these conditions:

    1. Installed from a **Production** account.
    2. Have a valid **Abstract Description**.
    3. Have a valid **Version Number**.

#### Detailed Metadata tab

![cust_ui_detailed_metadata](/images/platgovnetsuite/customizations/cust_ui_detailed_metadata.webp)

#### Detailed Metadata tab for Script Customizations

![cust_ui_detailed_metadata_scripts](/images/platgovnetsuite/customizations/cust_ui_detailed_metadata_scripts.webp)

#### Detailed Metadata tab with Data Sources Integration

![cust_ui_detailed_metadata_data_sources](/images/platgovnetsuite/customizations/cust_ui_detailed_metadata_data_sources.webp)
