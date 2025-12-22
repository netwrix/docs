---
title: "Mailbox: Trusted Users"
description: "Mailbox: Trusted Users"
sidebar_position: 110
---

# Mailbox: Trusted Users

Use the Trusted Users page to select delegates to add. Users can be added individually or from a
server with a mailbox environment. It is a wizard page for the following operations:

- Add Delegates
- Remove Delegates

![New Mailbox Action Wizard Trusted Users page](/images/accessanalyzer/12.0/admin/action/mailbox/trustedusers.webp)

Select Trusted User delegates using the following options:

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

The following additional options are available for the Remove Delegates operation:

- Remove Permissions for Delegate – Remove Mailbox permissions in addition to removing delegate
  rights
- Remove Permissions from Child Folders – Removes permissions from child folders

    :::note
    This option is only enabled if the **Remove Permissions for Delegate** option is
    selected.

    :::
