---
title: "View My History in the Directory Manager Portal"
description: "View, filter, annotate, and export the log of actions you performed in the identity store, plus changes others made to your profile."
keywords:
  - My History
  - my account actions log
  - My History Grid Filter
  - profile change history
  - export my history
sidebar_position: 10
---

# View My History in the Directory Manager Portal

The My History tab logs all actions you have performed in the identity store.

To view your history:

1. Click **History** on the left navigation bar.
2. On the History page, click the **My History** tab.

The log also tracks any change that another user makes to your profile using the portal.

## History view modes

History data is available in two modes.

### Detailed view

This view displays history data in a descriptive and user-friendly manner. Items are sorted by the
date and time of modification, with the most recent at the top.

This is the default view of history data.

### Administrative view

This view is only available if you have administrative privileges.

Click **Switch to Administrative View** to view history data in administrative mode. It displays
history data in a tabular form. History items are grouped by date. Each date group displays changes
made to directory objects during that period.

You can expand an item to view more details, such as the names of the attributes modified in an
action along with their old and new values.

## Filter history data

To filter history data:

1. Click **My History Grid Filter** to specify criteria for filtering history data.
2. Click **Add Filter** to add the filter criteria.
3. From the **Select a filter** list, select attributes to filter history data on the basis of the
   attribute modified. Two more boxes are displayed next to the **Select a filter** box after you
   select a filter.

   - **Select an Operator**: Select an operator from the first list.
   - **Select a Value**: Specify a value for the selected operator in the second box.

   For example, if you select '_Modified on_' from the first list, '_is exactly_' from the second
   list, and specify a date in the third box, then history items that were modified on the specified
   date are displayed.

4. Click **Apply Filter**. History items that match the specified criteria are displayed.
5. Click **Reset Filter** to remove all the filters.

## Add notes to history items

Directory Manager enables a user to add notes to history items that were logged as a result of any
change they made. A note may explain the reason for making a certain change, such as why they
changed the security type for a group.

Only the user who added the note can update it. Other users can only view this note. They can't
edit it or add comments.

- The Add Note button is available next to a listed history item.
- After you add a note, the Add Note button changes to View Note. All portal users can use this
  button to view the note.

### Add a note

The option to add a note is available on the My Account History card on the Dashboard and on all
History pages: My History,
[View My Direct Reports' History in Directory Manager](/docs/directorymanager/11.1/portal/history/mydirectreport.md), and
[View and Filter History of Groups You Own](/docs/directorymanager/11.1/portal/history/mydirectorygroup.md).

To add a note:

1. Click the **Add Note** button next to a history item to add a note to it.
2. On the Add Note dialog box, write a note and click **Add Note** to save it. Your note can have a
   maximum of 500 characters.

### Edit a note

You can only edit notes you have added.

To edit a note:

1. Click the **View Note** button next to a history item to view or edit the note for it.
2. On the Note dialog box, click the **Edit Note** button and update the note.
3. Click **Update Note** to save the changes.

### View a note

After a note is added, other users can view it, but they can't edit it or add comments to it.

- In the Detailed view, click the **View Note** button next to a history item to view the note for
  it.
- In the Administrative view, the Note column displays the note.

### Remove a note

You can only remove notes you have added.

To remove a note:

1. Click the **View Note** button next to a history item to view or remove the note for it.
2. Click the **Edit Note** button and remove the note.
3. Click **Update Note**.

## Export history data

You can export the displayed history data to an external file.

Click the **Export History** button and select the file type to export history data to. Supported
formats are:

- Excel
- CSV
- XML

The file is created at the download location specified in the browser settings.
