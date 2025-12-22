---
title: "Object properties - History tab"
description: "Object properties - History tab"
sidebar_position: 140
---

# Object properties - History tab

This tab displays the object's history, which includes all changes to the object since its creation.

History is available if the administrator has enabled history tracking for the identity store in
GroupID Management Console. See
[History](/docs/directorymanager/11.0/welcome/history/overview.md).

What do you want to do?

- [View History](#view-history)
- [Export History Data](#export-history-data)
- [Add notes to history items](#add-notes-to-history-items)

## View History

The **History** area displays the history for the object. History items in the view are arranged
according to date, showing the most recent at the top.

This view is also called the detailed view.

### Switch to Administrative View

Click the **Switch to Administrative View** link to switch to the administrative view. This view is
only available if you have administrative privileges.

It displays history data in a tabular form. History items are grouped by date. Each date group
displays changes made to the object during that period.

You can expand an item to view more details, such as the names of the attributes modified in an
action along with their old and new values.

## Export History Data

You can export history data displayed on this page to an external file.

1. Click the **Export History** button and select the file type to export history data to. Supported
   formats are:

    - Excel
    - CSV
    - XML

2. The file is created at the download location specified in the browser settings.

## Add notes to history items

GroupID enables a user to add notes to history items that were logged as a result of any change they
made. A note may explain the reason for making a certain change, such as why they changed the
security type for a group.

Only the user who added the note can update it. Other users can only view this note; they cannot
edit or add comments.

- The **Add Note** button is available next to a history item listed.
- Once you add a note, the **Add Note** button changes to **View Note**. All portal users can use
  this button to view the note.

### Add a note

The option to add a note is available on the My Account History card on Dashboard, and all History
pages i.e.[My History](/docs/directorymanager/11.0/welcome/history/myhistory.md),
[My Direct Reports' History](/docs/directorymanager/11.0/welcome/history/mydirectreport.md)
and [My Groups' History](/docs/directorymanager/11.0/welcome/history/mydirectorygroup.md)
pages.

1. Click the **Add Note** button next to a history item to add a note to it.
2. On the **Add Note** dialog box, write a note and click **Add Note** to save it.

    Your note can have a maximum of 500 characters.

### Edit a note

You can only edit the note that you have added.

1. Click the **View Note** button next to a history item to view or edit the note for it.
2. On the **Note** dialog box, click the **Edit Note** button and update the note.
3. Click **Update Note** to save the changes.

### View a note

Once a note is added, other users can view it, but they cannot edit it or add comments to it.

- In the Detailed view:

    Click the **View Note** button next to a history item to view the note for it.

- In the Administrative view:

    The **Note** column displays the note.

### Remove a note

You can only remove the note that you have added.

1. Click the **View Note** button next to a history item to view or remove the note for it.
2. Click the **Edit Note** button and remove the note.
3. Click **Update Note**.

See Also

- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
- [History](/docs/directorymanager/11.0/welcome/history/overview.md)
- [Portal Settings](/docs/directorymanager/11.0/welcome/generalfeatures/portal.md)
