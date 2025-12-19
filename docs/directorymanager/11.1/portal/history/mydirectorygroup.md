---
title: "My Groups' History"
description: "My Groups' History"
sidebar_position: 30
---

# My Groups' History

To view a detailed list of the actions that you have performed on the groups that you own using the
following, click **History** on the left navigation bar:

- Directory Manager portal
- Directory Manager Management Shell cmdlets
- Directory Manager APIs

History page opens with the **My History** tab in view. On the displayed page, click the **My Groups
History** tab.

History is logged for groups that have you as the primary or additional owner.

## History view modes

History data can be viewed in two modes:

### Detailed view

Displays history data in a descriptive and user-friendly manner. Items are sorted according to the
date and time of modification, showing the most recent at the top.

This is the default view of history data.

### Administrative view

This view is only available if you have administrative privileges.

Click **Switch to Administrative View** to view history data in administrative mode. It displays
history data in a tabular form. History items are grouped by date. Each date group displays changes
made to your groups during that period.

You can expand an item to view more details, such as the names of the attributes modified in an
action along with their old and new values.

## Filter history data

Step 1 – Click **My Groups History Grid Filter** to specify a criteria for filtering history data.

Step 2 – Click **Add Filter** to add the filter criteria.

Step 3 – From the **Select a filter** list, select attributes to filter history data on the basis of
the attribute modified.

Step 4 – Two more boxes get displayed next to **Select a filter** box upon selecting a filter.

- **Select an Operator**: Select an operator from the first list.
- **Select a Value**: Specify a value for the selected operator in the second box.

For example, if you select '_Modified on_' from the first list, '_is exactly_' from the second list,
and specify a date in the third box, then history items that were modified on the specified date
will be displayed.

Step 5 – Click **Apply Filter**.

History items that match the specified criteria are displayed.

Step 6 – Use the **Search In** list to load history data from the entire directory or a domain.

This list shows a tree view of all the domains in the connected identity store. Select the required
domains or select **Entire Directory** to view objects' history from all domains.

Step 7 – Click **Refresh** to reload history data for the domains selected in the **Search In**
list.

## Add notes to history items

Directory Manager enables a user to add notes to history items that were logged as a result of any
change they made. A note may explain the reason for making a certain change, such as why they
changed the security type for a group.

Only the user who added the note can update it. Other users can only view this note; they cannot
edit or add comments.

- The Add Note button is available next to a history item listed.
- Once you add a note, the Add Note button changes to View Note. All portal users can use this
  button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and all History
pages i.e.[My History](/docs/directorymanager/11.1/portal/history/myhistory.md), [My Direct Reports' History](/docs/directorymanager/11.1/portal/history/mydirectreport.md) and My Groups'
History pages.

Step 8 – Click the **Add Note** button next to a history item to add a note to it.

Step 9 – On the Add Note dialog box, write a note and click **Add Note** to save it.

Your note can have a maximum of 500 characters.

### Edit a note

You can only edit the note that you have added.

Step 1 – Click the **View Note** button next to a history item to view or edit the note for it.

Step 2 – On the Note dialog box, click the **Edit Note** button and update the note.

Step 3 – Click **Update Note** to save the changes.

### View a note

Once a note is added, other users can view it, but they cannot edit it or add comments to it.

- In the Detailed view:

    Click the **View Note** button next to a history item to view the note for it.

- In the Administrative view:

    The Note column displays the note.

### Remove a note

You can only remove the note that you have added.

Step 1 – Click the **View Note** button next to a history item to view or remove the note for it.

Step 2 – Click the **Edit Note** button and remove the note.

Step 3 – Click **Update Note**.

## Export history data

You can export history data displayed to an external file.

Click the **Export History** button and select the file type to export history data to. Supported
formats are:

- Excel
- CSV
- XML

The file is created at the download location specified in the browser settings.
