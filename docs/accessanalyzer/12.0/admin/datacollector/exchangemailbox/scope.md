---
title: "ExchangeMailbox: Scope"
description: "ExchangeMailbox: Scope"
sidebar_position: 20
---

# ExchangeMailbox: Scope

Use the Scope page to define which mailboxes to query. It is a wizard page for all of
the categories.

![Exchange Mailbox Data Collector Wizard Scope page](/images/accessanalyzer/12.0/admin/datacollector/exchangemailbox/scope.webp)

At the top, configure which mailboxes to query. The selected option determines how Access Analyzer
identifies mailboxes for scoping.

- All mailboxes – Searches all mailboxes
- Selected mailboxes from server – Retrieves all mailboxes in the Exchange organization, making them
  visible within the **Available mailboxes on connected server** list. The following options
  display:

    ![Scope page with Selected mailboxes from server selected](/images/accessanalyzer/12.0/admin/datacollector/exchangemailbox/scopeselectedmailboxes.webp)

    - Retrieve – Enter the server and select Retrieve to display the list of mailboxes on that
      server
    - Add – Select the mailboxes to add to the query. The added mailboxes display in the
      **Selected mailboxes** list.
    - Remove – Deletes selected mailboxes from the list
    - Select All – Click the Select All icon to select all mailboxes in the list
    - Clear All – Click the Clear All icon to clear all current selections in the list

- Selected table – Populates the **Available tables** list with tables from the Access Analyzer
  database

    ![Scope page with Selected table selected](/images/accessanalyzer/12.0/admin/datacollector/exchangemailbox/scopeselectedtable.webp)

    - Table – Filters this list by tables. Select the table which hosts the list of mailboxes for
      which this query will be scoped.
    - Field containing EmailAddressDNs – This list will be populated with columns from the selected
      table. Select the appropriate column from the list.
