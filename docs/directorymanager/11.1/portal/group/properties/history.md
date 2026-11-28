---
title: "Directory Manager object properties: History tab"
description: "View an object's change history, export it, and add, edit, or remove notes on history items from the History tab."
keywords:
  - "object history"
  - "export history data"
  - "history notes"
  - "administrative view"
  - "Directory Manager history"
sidebar_position: 140
---

# Directory Manager object properties: History tab

This tab displays the object's history, which includes all changes to the object since its creation.

History is available if the administrator has enabled history tracking for the identity store. See [Directory Manager Portal History Tracking](/docs/directorymanager/11.1/portal/history/overview.md).

## View history

The **History** area displays the history for the object. History items are arranged by date, with the most recent at the top. This view is also called the detailed view.

### Switch to administrative view

Click the **Switch to Administrative View** link to switch to the administrative view. This view is available only if you have administrative privileges.

It displays history data in a table. History items are grouped by date. Each date group shows the changes made to the object during that period.

You can expand an item to view more details, such as the names of the attributes modified in an action and their old and new values.

## Export history data

You can export the history data on this page to an external file.

1. Click the **Export History** button and select the file type to export history data to. Supported formats are:

    - Excel
    - CSV
    - XML

2. The file is created at the download location specified in the browser settings.

## Add notes to history items

Directory Manager lets a user add notes to history items logged as a result of any change they made. A note can explain the reason for a change, such as why they changed the security type for a group.

Only the user who added a note can update it. Other users can only view the note. They can't edit it or add comments.

- The Add Note button is available next to each history item.
- After you add a note, the Add Note button changes to View Note. All portal users can use this button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and on all History pages ([View My History in the Directory Manager Portal](/docs/directorymanager/11.1/portal/history/myhistory.md), [View My Direct Reports' History in Directory Manager](/docs/directorymanager/11.1/portal/history/mydirectreport.md), and [View and Filter History of Groups You Own](/docs/directorymanager/11.1/portal/history/mydirectorygroup.md)).

1. Click the **Add Note** button next to a history item.
2. On the Add Note dialog box, write a note and click **Add Note** to save it.

Your note can have a maximum of 500 characters.

### Edit a note

You can edit only your own notes.

1. Click the **View Note** button next to a history item to view or edit its note.
2. On the Note dialog box, click the **Edit Note** button and update the note.
3. Click **Update Note** to save the changes.

### View a note

After a note is added, other users can view it, but they can't edit it or add comments to it.

- In the detailed view, click the **View Note** button next to a history item to view its note.
- In the administrative view, the Note column displays the note.

### Remove a note

You can remove only your own notes.

1. Click the **View Note** button next to a history item to view or remove its note.
2. Click the **Edit Note** button and remove the note.
3. Click **Update Note**.
