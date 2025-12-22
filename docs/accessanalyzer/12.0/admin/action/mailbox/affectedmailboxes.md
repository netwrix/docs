---
title: "Mailbox: Affected Mailboxes"
description: "Mailbox: Affected Mailboxes"
sidebar_position: 100
---

# Mailbox: Affected Mailboxes

Use the Affected Mailboxes page to select the mailboxes to target for the action. It is a wizard
page for the following operations:

- Add/Change Permissions
- Remove Permissions
- Add Delegates, Remove Delegates
- Remove Stale SIDs

![New Mailbox Action Wizard Affected Mailboxes page](/images/accessanalyzer/12.0/admin/action/mailbox/affectedmailboxes.webp)

Select mailboxes to process using the following options:

- Users found in the following column – Select this option to identify users via a data table column

    - Use the drop-down menu to select a data table column containing either the Mailbox display
      name or email address
    - Select a data type for the selected field using the following options:

        - Exchange (Direct and Faster) – Connects to Exchange Mailboxes using the following data
          types:

            - Legacy Exchange DN
            - Display Name

        - Active Directory (Cross-Call and Slower) – Connects to Exchange mailboxes using the Active
          Directory Data Collector with the following data types:

            - User DN
            - Account Name
            - SID
            - SMTP Email Address

- The list of users – Identifies users in one of the following ways:

    - Click **Select** to choose from the global address list (GAL)
    - Manually enter a user name and click **Add**. Repeat for additional users.
    - To restore anonymous permissions to folders, enter `anonymous` and click **Add**
    - To remove a user, select it and click **Remove**
