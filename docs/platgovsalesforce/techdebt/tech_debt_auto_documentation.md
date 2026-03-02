---
title: "Automated Documentation"
description: "Automated Documentation"
sidebar_position: 20
---

# Automated Documentation

Great documentation is easy with Platform Governance for Salesforce. Install the managed package in
a sandbox or production org and start the scanners.Platform Governance for Salesforce continuously
maintains automated digital documentation of each Salesforce org and provides easy to understand
diagrams and clean up tools. You can print or export results for offline reference.

:::tip
**Learning About the Scanners**: Review the [Running the Scanner](/docs/platgovsalesforce/installingstrongpoint/running_scanner.md) topic or reach out to the  Customer Success team. It takes half an hour or so to get set up and on your way.

The scanning process is a function of size: smaller orgs index in only a few hours, while large orgs can take up to 5 days.

Platform Governance for Salesforce is a 100% native Salesforce App. Our records and code usage DO NOT count against your governance limits. Moreover, once the initial scan is complete, Platform Governance for Salesforce automatically updates documentation relating only to things that have changed, greatly reducing the amount of time required to scan.
:::

Once your orgs are documented, understanding the downstream dependencies of any change is a
straightforward, simple process. There are a number of ways to do this:

- Dependency Relationship Diagram (DRD)
- Customization Record
- Finder
- Object Exporter
- Reports and List Views

## Dependency Relationship Diagram (DRD)

The [DRD](/docs/platgovsalesforce/tools/viewing_drd.md) is a graphical presentation of an object to help you visualize
the dependencies.

1. The DRD can be launched from both the Home tab and the Tools menu. Open **Netwrix Dashboard** >
   **Tools** > **Dependency Relationship Diagram**, and select an object from the list.

    ![Opening an item in the DRD](/images/platgovsalesforce/tech_debt/tech_debt_10.webp)

    From the **Netwrix Dashboard** tab, use the **DRD Generator** to launch the DRD for a particular
    Customization. You can search by **Name** or **API Name**.

    ![Opening an item in the DRD](/images/platgovsalesforce/tech_debt/tech_debt_1.webp)

2. Click an attribute to expand the metadata record and view all the dependencies. Drill down for
   details so you can fully understand the downstream dependencies.

    ![Viewing dependencies in the DRD](/images/platgovsalesforce/tech_debt/tech_debt_13.webp)

3. The DRD exposes other critical metadata such as the Owner, API Name, Data Type, Date Last
   Used (DLU), Compliance Group and Security Classification. This data expedites clean up, enabling you to filter and group Customizations in List
   Views or Reports.

    ![Drilling into a dependency in the DRD](/images/platgovsalesforce/tech_debt/tech_debt_11.webp)

4. Click **Open Record** to open the full Customization Record with complete access to the detailed
   metadata and change history for the Customization.

:::tip
Read more about the [Customization Record](/docs/platgovsalesforce/customizations/customizations_overview.md).

Click **Show/Hide Standard Fields** to toggle displaying Standard Fields in the DRD.
:::

## Customization Record

The Customization record is the central element of Platform Governance for Salesforce documentation. It consolidates technical, operational, and governance-related metadata into a single, structured view that helps administrators, architects, and change agents fully understand a customization, its context, and its impact.

Each Customization record is organized into sections and tabs, allowing users to easily navigate between metadata, dependencies, change controls, and historical activity.

- **Main Customization Record Sections**

1. Header and Overview

At the top of the Customization record, you can see key identifying information:

- Customization Name
- Owner
- Salesforce Type (for example, CustomField)
- API Name
- Description (if provided)

The header also provides quick access to actions such as Rescan and Go To Record, allowing authorized users to open the underlying Salesforce record directly.

![Header and Overview](/images/platgovsalesforce/tech_debt/customization_record_header.webp)

2. Related Objects Panel

This panel summarizes the main dependency categories for the customization and provides quick navigation to them:

- Data-Model – Objects, fields, and data structures related to the customization
- Display-UI – Layouts and UI elements where the customization is exposed

Each category shows a count, indicating how many related items are associated.

![Related Objects Panel](/images/platgovsalesforce/tech_debt/customization_record_related_objects.webp)

- **Customization Tabs**

1. Metadata Tab

The Metadata tab provides the foundational details of the customization, including:

- Customization name and Salesforce type
- Active status and manageability state
- Data type and package information
- Created by / Last modified by
- Creation and last modification dates
- Whether a value is required (for applicable types)

This tab answers the question: "What is this customization?"

![Metadata Tab](/images/platgovsalesforce/tech_debt/customization_record_metadata_tab.webp)

2. Custom Tab

The Custom tab displays usage and lifecycle-related data gathered through scanning, such as:

- Last scan date
- First detected (join) date
- Last used date (when available)
- Percentage populated (for data fields)
- DLU (Data Lifecycle Usage) status
- Parent last update date
- Track History Field enablement status

This information helps assess data relevance, usage, and technical debt.

![Custom Tab](/images/platgovsalesforce/tech_debt/customization_record_custom_tab.webp)

3. DRD Tab

The DRD tab provides a visual representation of how the customization relates to other components in Salesforce.
It shows dependencies grouped by category, such as:

- Data-Model – Objects and fields using or referenced by the customization
- Display-UI – Layouts and UI elements where it appears

This tab answers: "What does this customization depend on, and what depends on it?"

![DRD Tab](/images/platgovsalesforce/tech_debt/customization_record_drd_tab.webp)

4. Change Enablement Tab

The Change Enablement tab displays governance and control-related configuration, including:

- Associated Change / Approval Policy
- Whether the customization is added to a Change Request
- Data Tracking settings (when enabled)

This tab is available when Intelligent Change Enablement or Enterprise Compliance is licensed and helps control how changes to this customization are governed.

![Change Enablement Tab](/images/platgovsalesforce/tech_debt/customization_record_change_enablement_tab.webp)

5. Clean-Up Tab

The Clean-Up tab supports technical debt management by allowing classification and status tracking:

- Clean-up status
- Clean-up classification

This tab helps teams identify candidates for remediation, optimization, or removal.

![Clean-Up Tab](/images/platgovsalesforce/tech_debt/customization_record_cleanup_tab.webp)

6. Related Tab

The Related tab provides historical and operational context, including:

- Change Logs: A list of all detected changes related to the customization.
- Notes & Attachments: Any supporting files or documentation associated with the customization.
- Customization History: A record of lifecycle events over time.

![Related Tab](/images/platgovsalesforce/tech_debt/customization_record_related_tab.webp)

### Additional Customization Record Actions

Two key actions are available in the Customization Record:

1. **ReScan Button**: 
   - Click the "ReScan" button to manually trigger a new scan of the customization.
   - This helps detect any recent changes that might not have been captured in the previous scan.
   - Useful for ensuring you have the most up-to-date information about the customization.

2. **Go To Record Button**:
   - Click the "Go To Record" button to directly navigate to the original Salesforce record for this customization.
   - Provides immediate access to the full Salesforce configuration of the component.
   - Requires appropriate user permissions in Salesforce.

![Customization Record Actions](/images/platgovsalesforce/tech_debt/customization_record_actions.webp)

## Finder

The Customization Finder is a powerful search and filtering tool that helps you locate and analyze Customization records across your Salesforce instance. It enables users to quickly find specific customizations, understand ownership and usage, and export results for further analysis.

Finder is especially useful for audits, clean-up initiatives, impact analysis, and documentation reviews.

### Finder Filters

The upper section of the Finder page provides a comprehensive set of filters to refine search results.

#### Text and API Name Search

**Search by text / API Name**
Allows free-text searching across customization names and API names.

#### Date Filters

**Created After**
Filters Customizations created after a specific date.

**Modified After**
Filters Customizations modified after a specific date.

#### Package Filtering

**Include components from packages**
When enabled, Finder includes managed package components in the results. When disabled, only custom (non-package) components are returned.

#### Customization Type Filtering

This section allows you to narrow results by customization type.

**Search Types**
Quickly filter the list of available customization types.

**Select Types**
Choose one or more customization types (for example, Apex Classes, Apex Pages, Custom Fields, Reports, etc.) to include in the search.

Only selected types are included in the results.

#### Created By Filtering

This section allows filtering Customizations based on the user who created them.

**Search Users**
Quickly locate users by name.

**Select Users to filter**
Choose one or more Salesforce users to include as creators in the results.

#### Search Actions

At the bottom of the filter section, Finder provides the following actions:

- **Search** – Executes the search using the selected filters
- **Export to PDF** – Exports the current result set to a PDF file
- **Export to XLS** – Exports the current result set to an Excel file

### Search Results

Search results are displayed in a tabular format and include key information for each Customization, such as:

- Name
- Type
- API Name
- Direct / Dependency – Indicates whether the customization is directly selected or included as a dependency
- Last Modified Date / DLU
- Created By
- Modified By

Pagination controls and page size options allow you to navigate large result sets efficiently.

![Customization Finder Results](/images/platgovsalesforce/tech_debt/customization_finder_results.webp)

## Object Exporter

Object Exporter enables exporting information about entire objects, profiles or users into Excel for
further research. Read more on [Exporting Objects](/docs/platgovsalesforce/tools/export_objects.md),
[Exporting Profiles](/docs/platgovsalesforce/tools/export_profiles.md) and [Exporting Users](/docs/platgovsalesforce/tools/export_users.md).

## Reports and List Views

Platform Governance for Salesforce is fully built into Salesforce so you can take advantage our our
libraries of List Views and Reports or build your own.

**Next Technical Debt Topic:** [Change Monitoring](/docs/platgovsalesforce/techdebt/tech_debt_change_monitoring.md)
