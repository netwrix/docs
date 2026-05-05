---
title: "Automated Search Clean Up"
description: "Automated Search Clean Up"
sidebar_position: 60
---

# Automated Search Clean Up

The Automated Search Clean Up feature runs as scheduled, or on demand, using custom rules to find
and manage Saved Searches. Accumulated searches contribute to inefficiency in NetSuite accounts.

:::note
Review the [Automated Search Clean Up Considerations](/docs/platgovnetsuite/automatedsearchcleanup/automated_search_cleanup_considerations.md)
before using this feature.
:::

Saved Searches are powerful customizations used throughout NetSuite and interconnected to other
customizations. As user-created Saved Searches proliferate, NetSuite accounts become inefficient and
overall performance degrades. This rules-based tool enables administrators to identify and archive Saved Searches and keep NetSuite accounts organized, efficient, and easy to understand. Archived searches can be restored with limitations.

The **Automated Search Clean Up** tool has two operating modes:

- **Automatic** - scheduled automated search cleanup that runs continuously and completes within 14
  days.
- **Run Now** - adhoc run of automated search cleanup that triggers once and completes within 7 days
  of notifying owners and users. If you choose to not send notifications, searches are archived
  immediately.

These searches are excluded from clean up:

- Searches from managed bundles
- Searches from 3rd party bundles
- Searches with script/script deployment dependencies, workflow dependencies, field/data sourcing
  dependencies, and documented integration dependencies
- Searches with role dependencies
- Searches with group dependencies
- Agent control searches
- Searches with Change/Approval Policy requiring a Change Record
- Search record types not in Suitescript Supported Records

Menu options are available to access the rules and lists:

- Search Clean Up Rules
- Search Clean Up Status
- Archived Searches
- Retained Searches
- Searches To Be Archived

## Search Clean Up Rules

Search Clean Up rules are created by the administrator and used to locate Saved Searches matching
the rule criteria. Search Clean Up rules are used for both Automatic and Run Now.

To create or edit rules, access **Strongpoint**> **Automated Search Clean Up** > **Search Clean Up
Rules**

![autocleanup](/images/platgovnetsuite/clean_up/autocleanup.webp)

- **Name** is the assigned name for the **Search Clean Up Rule Record**.
- **Rule Owners** is the administrator or owners for the rule record.
- **Description** is the purpose of the rule record. An informative description helps administrators
  maintain and identify rules.
- **Notify Search Owners Before Archive** check to send email to search owners before archive.
  Default is checked.
- **Notify Search Users Before Archive** check to send email to search users before archive.
  Default is checked.
- **Notify Supervisor for Inactive Owners** check to send email to an inactive owner's supervisor.
  Default is checked.
- **Automatic** is used to include the rule in the automated search. This option isn't available
  until the **Preview** function has been used.
- **Inactive** check to exclude this Search Clean Up Rule from the automated search.
- **Filter Summary** displays all of the current filters for the rule.
- **Notes** displays information about the Search Clean Up for this rule.

**Schedule**

This section is available when **Automatic** is checked.

![autocleanupscheduler](/images/platgovnetsuite/clean_up/autocleanupscheduler.webp)

- **Weekly Event**: check and enter the **Repeat** frequency to schedule clean up weekly.
- **Monthly Event**: check and enter the **Repeat** frequency to schedule clean up monthly.
- **Yearly Event**: check to schedule a yearly run.
- **Next Run Date**: this field is populated by the system, and can't be edited. The date is added
  when the schedule is saved.
- **End By**: pick a date to stop running automatic clean up.
- **No End Date**: check to never stop the scheduled clean up.

**Basic Filters**

- **Search Name** filters searches to clean-up by name. Filter operator is _startswith_ and the
  wildcard _%_ may be used. Default is blank.
   Example: _Custom % Search%_ returns all searches with a name starting with '_Custom_ ' followed
  by any character and the name must contain '_Search_' such as _Custom Inventory Detail Search_.
- **Search ScriptID** filters searches to clean-up by ID. Filter operator is _startswith_ and the
  wildcard _%_ may be used. Default is blank.
   Example: _%testing_ returns all searches with an ID containing the word '_testing_' such as
  _customsearch_testing_1_.
- **Months Since Date Last Used, Retained/Restored** filters searches by the last run date of the
  search or the restore/retain date, whichever is the most recent. Searches that have been used,
  restored, or retained within the specified timeframe are excluded from the search. Default is
  **6** months.
- **Exclude Private Searches** excludes searches set as **Private** by search owners. Default is
  checked.
- **Exclude Scheduled Searches** excludes searches set to run on a schedule. Default is checked.
- **Exclude Searches That Send Triggered Emails** excludes searches that send scheduled results
  reports. Default is checked.
- **Exclude Searches Less Than A Month Old** excludes new searches that have not been run. Default
  is checked.
- **Exclude Searches Available As Sublist** excludes searches available as a sublist in a Record.
  Default is checked.

**Advanced Filters**

- **Search Owners** filters searches by matching selected owners or if **Exclude Owners** is
  checked, to exclude matching owners for the rule. Multiple owners can be selected. Default is
  blank and unchecked.
- **Owner's Departments** filters searches by matching departments to the rule or if **Exclude
  Departments** is checked, to exclude matching departments for the rule. Multiple departments can
  be selected. Default is blank and unchecked.
- **Owner's Subsidiary** filters searches by matching subsidiaries to the rule or if **Exclude
  Subsidiary** is checked, to exclude matching subsidiaries for the rule. Multiple subsidiaries can
  be selected. Default is blank and unchecked.
- **Inactive Owners** filters searches by matching inactive owners. Default is blank.
- **All Inactive Owners** filters searches by all inactive owners. Default is unchecked. A maximum
  of 1000 inactive users are loaded. The system displays a warning if additional inactive users exist.

**Excluded Searches From Preview**

Lists any searches excluded after the **Preview** function is used.

### Rule Preview

The **Preview** function provides a method to mark Saved Searches to be retained or to
include for clean up. The Run Now feature begins an immediate run for the rule.

1. Click **Preview** on a Search Clean Up Rule. **Preview** displays the rule, filters, and conditions.
2. Review the Search List.
   Check **Include** to trigger a final notification email to be sent to the owner/user.
   Check **Retain Search** to keep the search.
3. Click Run Now to begin a Search Clean Up for the rule.
4. Click **Confirm**.
5. After previewing, you can click **Automatic** on the Search Clean Up Rule to include the rule for
   automatic searches.

![cleanup_preview](/images/platgovnetsuite/clean_up/cleanup_preview.webp)

### Run Now

This option immediately begins a Search Clean Up using the current rule.

If a Saved Search matches the Clean Up Rule:

1. The system sends a summary notification of all matching saved searches to the rule owner.
2. The system sends an immediate notice to all search owners and search users about their searches that are about to be
   archived. Notifications include a **Retain this Search** link. A **Preview** link is available
   for the user to view the Search.
3. If the **Retain Search** link isn't used and the Saved Search has not been used, the system sends final
   notifications to all search owners and search users seven calendar days after the **Run
   Now** option was used. The notification includes the date the search is to be archived.
4. If the **Retain Search** link isn't used and the Saved Search has not been used by the archive
   date:

    - The system archives the Saved Search.
    - The system sends Archive notifications to the rule owner and all search owners/users.
    - The system adds the search to the administrator's Archived Searches list.
    - The system sends a summary notification of all auto-archived searches to the rule owner.

## Automated Run Workflow

**Automated Search Clean Up** runs continuously comparing searches to all rules marked
**Automatic**. Administrators receive weekly summary information containing: **identified
searches**, **retained searches**, **scheduled to be archived searches** and **archived searches**.

1. When a Saved Search matches a Clean Up Rule:

    - The system emails a notification to the rule owner and includes the Saved Search in the summary
      notification to the rule owner.
    - The system sends notifications on the first closest Sunday since the rule was marked **Automatic**.
    - The system emails a notification to the search owners unless **Notify Search Owners Before Archive**
      is turned off for the rule.
    - The system emails a notification to the search users unless **Notify Search Users Before Archive** is
      turned off for the rule.
    - All email notifications include a **Retain this Search** link. A **Preview** link is available
      for the user to view the Search.
    - The system adds the Saved Search to the **Automated Search Clean Up** > **Searches To Be Archived
      (Auto)** list.

2. If the **Retain Search** link isn't used and the Saved Search has not been used, the system sends second
   notifications the following Sunday after the first notification date. The notification
   includes the date the search is to be archived.
3. If the **Retain Search** link isn't used and the Saved Search has not been used by the archive
   date:

    - The system archives the Saved Search.
    - The system sends Archive notifications to the rule owner and all search owners/users.
    - The system adds the search to the administrator's Archived Searches list.

![cleanup_tab](/images/platgovnetsuite/clean_up/cleanup_tab.webp)

## Search Clean Up Status

Open **Strongpoint**> **Search Auto Clean Up** > **Search Clean Up Status** to view current status.

- **Job Type**: **Run Now** or **Automatic**.
- **Status**:
  **Pending** - initial status for the run.
  **Pending Notification** - searches have been identified, no notifications sent.
  **In Notice Period** - at least one notification has been sent.
  **Processing** - search is being auto-archived.
  **Completed** - all identified searches have been archived, and email sent to rule owner and
  administrator.
  **Canceled** - **Automatic** checkbox was turned off for the rule.

![cleanup_status](/images/platgovnetsuite/clean_up/cleanup_status.webp)

Click **Notification Tracker** on the **Notifications** tab to launch the tracker.

![cleanup_notifications_tab](/images/platgovnetsuite/clean_up/cleanup_notifications_tab.webp)

### Notification Tracker

Accesses all communications and history for search clean ups. List all notifications sent by rule or by job. Provides traceability between the clean up rules, clean up jobs, and email notifications.

![cleanup_notification_tracker](/images/platgovnetsuite/clean_up/cleanup_notification_tracker.webp)

## Retaining a Search

Notification emails contain a link to **Retain this search** for each listed search or **Retain
All** to keep all of them. Use the **Preview** link to view each Search.

![cleanup_warning](/images/platgovnetsuite/clean_up/cleanup_warning.webp)

**Retain this search** prevents archiving an individual search. The system displays the **Retain Search** form so you can add the **Reason for Retaining** the search. Click **Save and Exit** when
complete.

![Provide a reason to retain an individual search](/images/platgovnetsuite/clean_up/clean_up_retain_search.webp)

**Retain All** opens a page where you can provide the **Reason** to retain each search. Check the
Apply box for each search. When finished, click **Retain Search**.

![Retain All dialog to provide retention Reason](/images/platgovnetsuite/clean_up/clean_up_retain_all.webp)

The Retain process:

- Updates the **Date Last Used, Retained/Restored** to the current date.
- Adds the search to the **Automated Search Clean Up** > **Retained Searches** report. The **Search
  Retain Reason** is shown on this report.
- Notifies the owners/users that the search is retained.

## Auto Archiving a Search

If search owners or users don't click **Retain this search** in the email notifications, the system archives the search. The Archive process:

- Archives the search.
- Adds the search to the **Automated Search Clean Up** > **Archived Searches** report.
- Marks Customization record for the search **Inactive**.
- A **Restore** button appears on the **Clean Up** tab on the customization record for the search.
- The system sends Auto Archive notifications to the rule owner and administrators. The email includes a **Restore** link.

## Restoring an Auto Archived Search

A NetSuite Administrator can restore an auto archived search with some limitations. Open the **Clean Up** tab of the Customization record for the search, or the **Automated Search Clean Up** > **Archived Searches** report. Click **Restore**, or use the **Restore** link in the email sent to the rule owner and administrators.

- The system restores the search with limitations. Restored searches have a different internal ID from the original version, resetting the audit trail.
- Updates the **Date Last Used, Retained/Restored** to the current date.
- Adds the search to the **Automated Search Clean Up** > **Retained Searches** list.

![cleanup_restore](/images/platgovnetsuite/clean_up/cleanup_restore.webp)

### Limitations to Restoring Auto Archived Searches

The system restores items from the **Criteria** and **Results** tabs, with the exception of **Public**
searches with the **Period** filter. Auto archiving doesn't occur with **Private** searches with
the **Period** filter, as they can't be deleted or archived.

The system does not restore the following check boxes on the Search form if they were checked:

- Available as List View
- Available as Dashboard View
- Available as SubList View
- Available for Reminders
- Show in Menu

The system doesn't retain items from the following tabs on the Search form when restoring an auto archived search:

- Highlighting
- Available Filters
- Audience
- Email
- Audit Trail: the system assigns the restored search a new Internal ID. The audit trail only contains
  entries for the new Internal ID.

![Search form](/images/platgovnetsuite/clean_up/limitation_restoring_searches.webp)
