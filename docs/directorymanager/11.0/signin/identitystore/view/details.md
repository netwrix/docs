---
title: "History Item Details"
description: "History Item Details"
sidebar_position: 20
---

# History Item Details

Details of a history item are displayed on the **History Details** dialog box. If the target
attribute is single-valued, the old and new values of the attribute are shown. For multi-valued
attributes, the lists of added items and removed items are displayed.

Information includes:

- **Attribute Modified** - The name of the target attribute.
- **Object Name** - The name of the GroupID function this history item pertains to. For example, if
  it pertains to a workflow, the name of the workflow is displayed here.
- **Who** - The name of the user who performed the action.
- **Where** - The name of the computer the action was performed on.
- **When** - The date and time of the action.

The following lists are available when the target attribute is multi-valued:

- **Added Item** - A list of values that were added to the multi-value attribute.
- **Removed Items** - A list of values that were removed from the multi-value attribute.

The following lists are available when the target attribute is single-valued:

- **Old Value** - The value before the action was performed.
- **New Value** - The value after the action was performed.

## Annotate History Items

GroupID enables a user to add notes to history actions that he or she performed. A note may explain
the reason for an action, such as why he or she changed the security type for a group. Only the user
who added a note can update it. Other users can view it, but they cannot edit it or add comments.

On the **History Details** dialog box, one of the following is available to you:

- **The Add Note button** - When you are the user who performed the action that logged this history
  item, and you haven’t added any note yet.
- **The Save Note button** - When you are the user who performed the action that logged this history
  item and you have already added a note.
- **The note text** - When the user who performed the action has added a note.
- **None of the above** - When you are not the user who performed the action and the user performing
  the action has not added any note.

### Add a Note

Notes can be added to history items logged for an identity store. Only the user (i.e., the doer of
the action) can add and update notes.

**To add a note:**

1. Click **Add Note** to add a note to the history item. The **Note** text box is displayed.
2. Type a note for the history item. Your note can have a maximum of 500 characters.
3. Click **Save Note**. On the **History** page, the annotated item is displayed with a **View
   Note** button next to it. This helps distinguish annotated items from non-annotated items.

### Edit a Note

1. On the **History Details** dialog box, the **Note** box displays your note for the history item.
   Make the required changes to the text.
2. Click **Save Note**.

### Remove a Note

On the **History Details** dialog box, the **Note** box displays your note. Remove it and click
**Save Note**.

**See Also**

- [Identity Store History](/docs/directorymanager/11.0/signin/identitystore/view/view.md)
- [Admin Center History](/docs/directorymanager/11.0/signin/concepts/history_1.md)
