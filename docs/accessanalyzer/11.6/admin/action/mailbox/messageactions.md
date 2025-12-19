---
title: "Mailbox: Message Actions"
description: "Mailbox: Message Actions"
sidebar_position: 80
---

# Mailbox: Message Actions

Use the Message Actions page to specify the action to take with the messages that meet the search
criteria. It is a wizard page for the **Delete Mailbox Contents** operation.

![New Mailbox Action Wizard Message Actions page](/images/accessanalyzer/11.6/admin/action/mailbox/messageactions.webp)

To select a message action, use the following options:

- Select an action – Select the checkbox next to a message action to apply it to the search. The
  selected action displays in the Edit Actions box. Possible actions include:

    - Delete – Items can be recovered via the Deleted Contents table (folder dumpster)
    - Permanent Delete – Items are not recoverable
    - Move to Deleted Items folder
    - Delete Attachment (Append Text Options) – Deletes attachment and adds **Append Text Options**
      to the Edit Conditions box
    - Delete Body Text (Append Text Options) – Deletes body text and adds **Append Text Options** to
      the Edit Conditions box

- Edit conditions – Any selected conditions populate here

    - To edit a filter condition, click the underlined portion of the condition to open the
      corresponding window

## Options Window

Use the Options window to add an appended text. The Options window opens if **Append Text Options**
is selected in the Edit Conditions box.

![Options Window](/images/accessanalyzer/11.6/admin/action/mailbox/optionswindow.webp)

To append text to the attachment or body, select the checkbox to enable editing and enter the
desired text to append in the textbox.
