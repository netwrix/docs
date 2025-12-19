---
title: "Date Last Used"
description: "Date Last Used"
sidebar_position: 50
---

# Date Last Used

Date Last Used (DLU) enables you to see what customizations have not been used recently and could be
deleted.

Date Last Used (DLU) is captured for changes triggered by users or other customizations. Platform
Governance for NetSuite uses a System Notes search to retrieve the date last used for Fields, Saved
Searches and Records. DLU values are intended to be reasonably accurate. Complete accuracy for some
objects would require excessive processing.

:::note
DLU is not available for display only fields.
:::

DLU is not reliable for fields with no parent record.
DLU is not reliable in sandbox accounts as fields do not get actively used.
DLU is not reliable until the initial spider is complete, including the Make Joins.

Date Last Used is intended to be used for clean up and is set up to be accurate within a month.
Higher levels of accuracy would require significantly more processing capacity. **The Last Used
Status** displays additional information:

| Last Used Status                       | Description                                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------- |
| Use Not Checked Yet                    | Initial Value when a script has not yet run for a new customization.                      |
| Managed Bundle Object                  | Customization is from a Managed Bundle, not monitored in the Unused Customization Report. |
| Use Date Not Supported for This Object | DLU cannot be determined because of API limitations.                                      |
| Used in the last 6 months              | Retrieved DLU is on or after last 6 months.                                               |
| No Use Detected                        | Retrieved DLU is prior to last 6 months.                                                  |

Date Last Used for customizations is calculated in a number of different ways:

Each night it checks all of the fields and scripts that were actually used and updates the Date Last
Used field.

**Fields**:

- Either the actual date of the last write to that field or date last modified of the last record
  that has this populated. Can search all fields that don’t store the value.
- If it cannot find a date for a field anywhere in the database, it puts in a default date
  (12/31/1969) to show that this was checked. This makes searching easier
- Periodically it checks all fields that have no date last used or a date last used of more than 1
  month ago and updates the date with an approximate date based on the date last modified of the
  last record with that field used.
- DLU for fields should not be blank, so a blank DLU indicates that some scripts may not have run or
  Platform Governance for NetSuite was unable to retrieve the missing data. Please contact Netwrix
  Support.

**Searches**:

- For searches the DLU is the last time search was used that is listed in search metadata.
- Blank DLU indicates a search that have not been used since the time when NetSuite started
  capturing in 2009.
- Search “Date Last Used” are checked depending upon the Time To Live specified for searches.
- Searches run in Dashboard Portlets does not update the DLU. DLU cannot be determined for searches
  only used through Portlets.

**Scripts:**

- For scripts the DLU is the last execution date as determined by audit, error or debug logs in
  server execution log. In order to get accurate data while maximizing performance, Netwrix
  recommends setting all deployments to AUDIT logging status and setting at least one Audit tag. See
  [Script Management](/docs/platgovnetsuite/scriptmgmt/script_mgmt_overview.md) for details.
- Blank DLU for scripts indicates that it has not been used since Platform Governance for NetSuite
  was installed OR it is set in error mode and has not thrown an error.

**Workflows**:

- DLU is captured nightly for workflows if **Keep Instance and History** is set to **Always**
  (default is **Only When Testing**) and **Enable Logging** is selected (default is **Off**) for
  each workflow.

The Saved Search **Strongpoint Unused Workflow Customizations** (customsearch_flo_unused_wf) finds
workflows and displays the **Keep Instance and History** value, enabling you to quickly see which
workflows can track the DLU. To edit the value, open the Customization record and change the value.

Key columns in the search results:

- **Keep Instance and History** - Must be **Always** for the DLU Spider to detect the workflow's
  instance from the last 6 months.
- **Release Status** - Normally workflows in Released status are actively used. Other statuses are
  Suspended, Not Initiating, and Testing.
- **Date Last Used Spidering Complete** (For the Last 6 Months) - Value is **Yes** when the DLU
  spider has finished from at most 6 months previous. **No** means the DLU spider has not finished
  yet. The DLU spider can take several days to finish It executes daily on a subset of dates until
  it reaches 6 months.

![Unused Workflow Customizations Search Results](/images/platgovnetsuite/clean_up/unused_workflow_results.webp)
