---
title: "Mailbox: Mailbox Identification"
description: "Mailbox: Mailbox Identification"
sidebar_position: 40
---

# Mailbox: Mailbox Identification

The Mailbox Identification page specifies the mailboxes the action targets. It is a wizard page for
the Delete Mailbox Contents operation.

Depending on the data in the source table, users must specify a data table column containing either
the Mailbox display name or email address.

![New Mailbox Action Wizard Mailbox Identification page](/images/accessanalyzer/12.0/admin/action/mailbox/identification.webp)

Select which mailboxes to target using the following options:

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
