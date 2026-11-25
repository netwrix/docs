---
title: "View and Annotate History Item Details"
description: "Read the details of an identity store history item and add, edit, or remove a note on an action you performed."
keywords:
  - history details
  - annotate history
  - history note
  - identity store history
  - attribute changes
sidebar_position: 20
---

# View and Annotate History Item Details

The **History Details** dialog box shows the details of a history item. If the target attribute is
single-valued, the dialog box shows the old and new values of the attribute. For multi-valued
attributes, it shows the lists of added items and removed items.

The dialog box includes the following information:

- **Attribute Modified** – The name of the target attribute.
- **Object Name** – The name of the Directory Manager function this history item pertains to. For
  example, if it pertains to a workflow, this field shows the name of the workflow.
- **Who** – The name of the user who performed the action.
- **Where** – The name of the computer the action was performed on.
- **When** – The date and time of the action.

When the target attribute is multi-valued, the following lists are available:

- **Added Item** – A list of values that were added to the multi-value attribute.
- **Removed Items** – A list of values that were removed from the multi-value attribute.

When the target attribute is single-valued, the following lists are available:

- **Old Value** – The value before the action was performed.
- **New Value** – The value after the action was performed.

## Annotate history items

Directory Manager lets a user add notes to the history actions that the user performed. A note
might explain the reason for an action, such as why the user changed the security type for a group.
Only the user who added a note can update it. Other users can view it, but they can't edit it or
add comments.

On the **History Details** dialog box, you see one of the following:

- **The Add Note button** – When you're the user who performed the action that logged this history
  item, and you haven't added any note yet.
- **The Save Note button** – When you're the user who performed the action that logged this history
  item and you have already added a note.
- **The note text** – When the user who performed the action has added a note.
- **None of the above** – When you aren't the user who performed the action and the user performing
  the action hasn't added any note.

### Add a note

You can add notes to history items logged for an identity store. Only the user who performed the
action can add and update notes.

**To add a note:**

1. Click **Add Note** to add a note to the history item. The **Note** text box appears.
2. Enter a note for the history item. Your note can have a maximum of 500 characters.
3. Click **Save Note**. On the **History** page, the annotated item appears with a **View Note**
   button next to it. This button distinguishes annotated items from non-annotated items.

### Edit a note

1. On the **History Details** dialog box, the **Note** box shows your note for the history item.
   Make the required changes to the text.
2. Click **Save Note**.

### Remove a note

On the **History Details** dialog box, the **Note** box shows your note. Remove the text and click
**Save Note**.
