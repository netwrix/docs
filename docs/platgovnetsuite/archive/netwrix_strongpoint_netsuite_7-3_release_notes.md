---
title: "Core 7.3.2"
description: "Core 7.3.2"
sidebar_position: 10
---

# Core 7.3.2

Netwrix Strongpoint for Netsuite 7.3 Release Notes

## Core 7.3.2

April 15, 2024

- Improved evaluation for handling customizations in Change Logs that are included in normal bundles
  to ensure they are set to Compliant. Managed and 3rd party Bundle handling is unchanged.
- Improved handling of Strongpoint Bundle Change Level Processing, ensuring consistency between
  Change Types.
- Added a legend to the Environment Compare results.
- Included User Name in the Change Log for User Provisioning Change Request for role
  assignment/removal.

## Core 7.3.1

March 18, 2024

- Improved handling of fields that are Platform changes not user changes.
- Improved handling of changes to standard NetSuite roles:

    - Changes to Standard role permissions (internal id < 1000) are flagged as platform changes.
    - Changes to Custom role permissions are evaluated based on the policy.
    - User Role assignment changes are evaluated based on policy.

- Streamlined searching for changes for Chart of Accounts.
- Increased flexibility for routing Agent Change Request approvals to make the process-based
  approvals similar to ITGC change requests.
- Updated library to SuiteScript 2.x to support customization audit tags.
- Updated Strongpoint bundle component changes to be flagged as Managed Bundle instead of
  nonmaterial SP Bundle Change.
- Updated the Search results link for **Strongpoint** > **Change Management Reports** > **Policy
  Changes** to open **Strongpoint Policy Changes**. This is the same report as the one available in
  the **Reminders** portlet.
- Updated the Strongpoint _customscript_flo_create_error_proc_issue_ script to be a maximum of 4000
  characters to avoid a field length error.

## Core 7.3.0.1

March 1, 2024

- Added a saved search **Strongpoint Config Value Changes**
  (_customsearch_cofgstat_jira_value_changes_) to view fields updated by users.

## Core 7.3

February 26, 2024

New: **Formula Update in Searches**

The **Strongpoint Open Noncompliant Changes**, **Strongpoint What Changed**, and **Open Noncompliant
Changes - Audit** searches criteria has been updated.

As part of an ongoing effort to minimize non-material change logs and save time on reporting, we
have reviewed and updated some of the filters in our non-compliant and what changed compliance
reports.

A filter was discovered in the search criteria that could cause change logs to be excluded. This
filter was used during the implementation of change detection through the autospider portlet, to
filter out duplicate logs caused by late reconciliation of changes done by our processes. With the
improved process scheduling, the filter is no longer needed.

For some accounts, this may result in additional change logs from previous periods in these reports.
These logs were always available on the customization records and the original change log
information will not have changed.

New: Jira On-Prem

Atlassian is discontinuing support for the Jira On-Prem solution. Jira Cloud will be the only
supported option. You can use the Strongpoint [Integration API](/docs/platgovnetsuite/ticketingintegrations/apioverview/api_overview.md) to create
your own integration with your ticketing system.

**Resolved Issues**

These issues have been resolved in this release:

- _New Fields not detected by scheduled spiders_. A usage limit error was fixed so the new fields
  are now documented.
- _Change log for Role changes are showing as Could Not Be Determined_. An error was occurring if
  the access history was blank for an employee.

## SoD 1.6.5

March 27, 2024

- Improved processing workflow for **Reevaluate Employee SoD Violations** and **Strongpoint Create
  SoD Entity Record**.

## SoD1.6.4

February 23, 2024

- The Preview SoD pop-up box can now be re-sized.
- Streamlined the process workflow for Pending Employee Evaluations related to the SoD Processing
  Status records, to avoid rules getting stuck in the state **Retroactive Check in Progress**.

## User Access Review 1.0.4

February 16, 2024

- Reviews can become stuck if non-compliant changes occur on a change request created for role
  modification. If this occurs, the UAR administrator can override the status. A **Submit** button
  is available for the Admin and the Owner for the stuck review. The **Review Notes** status is
  **Admin Change** instead of **Mark Complete**.

## User Access Review 1.0.3

January 25, 2024

- Added **Supervisor** column to the Membership Review.

    ![UAR Membership Review](/images/platgovnetsuite/release_notes/uar_review_supervisor.webp)

- New filters are available. **Permission Reviews** now have a **Status** filter. Membership Reviews
  now have **Status** and **Supervisor** filters.
