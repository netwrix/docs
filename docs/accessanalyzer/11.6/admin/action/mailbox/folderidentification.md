---
title: "Mailbox: Folder Identification"
description: "Mailbox: Folder Identification"
sidebar_position: 50
---

# Mailbox: Folder Identification

Use the Folder Identification page to specify folders to target. It is a wizard page for the Delete
Mailbox Contents operation.

![New Mailbox Action Wizard Folder Identification page](/images/accessanalyzer/11.6/admin/action/mailbox/folderidentification.webp)

Select whether the query results contain a mailbox identification column using the following
options:

- Yes, the query results contain a mailbox folder identification column

    - Select the mailbox identification column using the drop-down menu
    - Folder Identifier Type – Choose which mailbox identifier the selected column uses:

        - Folder Path and Name – Select this option if the specified field contains a fully
          qualified path
        - Entry ID – Select this option if the selected field is an EntryID that is a unique
          identifier for a folder

- No, the query results do not contain a mailbox folder identification column – Selecting this
  enables the Folder Conditions page, used to identify specific folders to target. See the
  [Mailbox: Folder Conditions](/docs/accessanalyzer/11.6/admin/action/mailbox/folderconditions.md)
  topic for additional information.
