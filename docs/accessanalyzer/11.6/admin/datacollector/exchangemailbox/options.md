---
title: "ExchangeMailbox: Options"
description: "ExchangeMailbox: Options"
sidebar_position: 50
---

# ExchangeMailbox: Options

The Options page provides different configuration options for the search. It is a wizard page for
the following categories:

- Mailboxes
- Mailbox contents
- Mailbox permissions
- Mailbox sensitive data discovery

![Exchange Mailbox Data Collector Wizard Options page](/images/accessanalyzer/11.6/admin/datacollector/exchangemailbox/options.webp)

The following options can be configured:

:::note
Options available vary based upon the category selected.
:::


- Message size units:

    - KB
    - MB

- Folders

    - All Folders – Select to include all folders in the query. When deselected, the other options
      of the category become available.
    - Include root folder – Include root folders of the selected folders in the query

        -   - – Enter the name of a folder to include and click **+** to add it to the list of
              included folders
        -   - – Select a folder from the list of included folders ad click **–** to remove it

    - Include subfolders in message counters – Include messages contained in subfolders of the
      selected folders in the message count

- Attachment Types

    - Count attachment types – Counts attachment types as part of the query. When selected, this
      enables the following options:

        - Add New – Adds another line to the list of attachment types which is manually edited
        - Load Defaults – Reverts the list to default attachment types
        - Remove – Remove selected attachment type from the list

- Large Attachment Threshold (KB) – Default is 500
