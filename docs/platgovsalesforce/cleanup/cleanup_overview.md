---
title: "Clean Up Overview"
description: "Clean Up Overview"
sidebar_position: 90
---

# Clean Up Overview

Clean up involves some or all of the following steps:

1. Identify and remove unused customizations (either individual or multiple):

    - Completely unused
    - Useless or inefficient

2. Identify and fix improperly set-up customizations (for example, no help text, inactive owner).
3. Describe each object and its clean up task (under the improvements tab.)
4. Assign change/approval policy.

## Clean Up Tools

Platform Governance for Salesforce provides a series of built-in Clean Up Tools to enable Administrators to clean up their account in
an organized and efficient manner. There are many types of clean up, but they generally follow the
same steps:

1. Select the approach
2. Analyze and organize the results
3. Create a Change Request (if required)
4. Manage the clean up as appropriate
5. Run the scanner

:::note
Always check the Last Date Scanned on any object and re-scan that object if necessary to ensure the
information about that object is up to date.
:::

### Select the Approach

Clean up:

- Unused Customizations
- Unused Custom Fields
- Unused Scripts
- Unused Reports

Customizations that don't follow best practices:

- Customizations with No Related Process
- Customizations with No Description
- Customizations with No Help Text
- Customizations with No Active Owner

To view clean up reports, open the Netwrix Lightning app and go to **Reports** > **Clean Up**. You can also find the clean up reports at the bottom of the Strongpoint Home Page under **Strongpoint Features and Reports**.

You can clean up individual or multiple customizations by going to the Customization tab and
selecting **Create New View**. Use the filters to generate your list.

:::note
Before moving on to other clean up activities, delete unused
customizations that are safe to delete, such as fields that have not been used in
years or that are not used by any other customization.
:::

### Analyze and Organize the Results

After selecting the customizations to clean up and creating a New View, analyze the results. Sort and filter the results and group and
manage the output for subsequent steps. You can clean up based on Salesforce type and
record type (among other options).

Every Customization record has a Clean-Up Status field that tracks the status of the
clean-up process for that object.

The statuses are:

- **To Be Cleaned Up**: Flags the customization to be cleaned up.
- **Send Request Info Emails**: Triggers an email warning that the customization is about to be
  deleted.
- **Under Investigation**: Flags the customization as under investigation.
- **Disabled/Hidden**: Tracks that the customization has been disabled.
- **Archived**: Tracks that the data / set-up was archived.
- **Deleted**: Tracks that the customization has been deleted. The doc is inactivated.
- **Ignore**: Removes it from the searches.
- **Fix ScriptID:** Changes the ID of the script.
- **Reassign Owner**: Changes the owner.
- **Closed**: Flags the clean up status as closed.

### Create Change Requests (if required)

Some changes, such as deletion and changes to scriptID and Help, impact the customization itself. For
these types of changes, Netwrix recommends creating a Change Request. For clean up, you can create
new change requests and assign them to the customizations. In the results view, **Create Change
Request** creates a new change request. After that is added to that customization it appears under
**Related Change Requests**. You can have multiple customizations assigned to multiple change
requests as appropriate.

### Manage the Change or Clean Up

You can find more information about how to use the Change Request under
[Managing Change](/docs/platgovsalesforce/changemanagement/change_management_overview.md). After the appropriate
investigations are conducted and approvals are obtained the customization can be changed as
appropriate based on company policies and procedures.

Some of the items being changed, such as the description or owner, can be direct list edited or bulk
edited like any other Salesforce data directly in a Platform Governance for Salesforce view such as
**Unused Fields**.

### Run the Scanner

After updating customization records, scan the account to
update the documentation for the customization changes. You can re-scan for the specific
record type that changed.
