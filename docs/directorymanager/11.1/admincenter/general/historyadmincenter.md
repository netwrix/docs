---
title: "View and Export Admin Center History in Directory Manager"
description: "View, annotate, filter, and export the history of actions performed in Admin Center, such as creating identity stores and changing notification templates."
keywords:
  - Admin Center history
  - history export
  - annotate history
  - Directory Manager auditing
sidebar_position: 60
---

# View and Export Admin Center History in Directory Manager

Directory Manager automatically tracks the following actions performed in Admin Center:

- Creation and deletion of identity stores
- Creation and deletion of SMS gateway accounts
- Creation and deletion of applications, namely the Directory Manager portal, Data service, and Security service
- Addition and removal of security questions in the global question pool
- Changes to global replication settings
- Manual sending and deletion of notifications in the notification queue
- Modifications to notification templates

To view history, use the **History** node in Admin Center. You can:

- Annotate a history action that you performed. An annotation can explain the reason for the action.
- Narrow down the history items using filters.
- Export history data to Microsoft Excel, CSV, and XML formats.

For more information, see [History in Directory Manager](/docs/directorymanager/11.1/admincenter/general/history.md) and [Directory Manager Event Logging](/docs/directorymanager/11.1/admincenter/identitystore/view/eventlogging.md).

## View Admin Center history

Directory Manager automatically tracks history data for high-level actions performed in Admin Center. To view it:

1. In Admin Center, click **History** in the left pane.

    The **Admin Center History** page displays history data in a concise, descriptive format. Items are sorted by date and time, with the most recent at the top.

2. Click a history item to view its details.

    The **History Details** dialog box displays the following:

    - **Object Name:** The name of the object the action was performed on.
    - **Who:** The name of the user who performed the action.
    - **Where:** The name of the computer the action was performed on.
    - **When:** The date and time of the action.
    - **Added Items:** A short description of the action.
    - **Removed Items:** A short description of the action. This box is displayed for actions that show deletion.

3. To add a note, click **Add Note**. This button is available only if you performed the action. To manage notes, see [Annotate History Items](/docs/directorymanager/11.1/admincenter/identitystore/view/details.md#annotate-history-items).
4. Click **Close**.

### Filter history data

The filters on the **Admin Center History** page are similar to those on the **Identity Store History** page. To apply them, see [Filter History Data](/docs/directorymanager/11.1/admincenter/identitystore/view/view.md#filter-history-data).

### Navigate the history data

The navigation options on the **Admin Center History** page are similar to those on the **Identity Store History** page. For help, see [Navigate Through History Items](/docs/directorymanager/11.1/admincenter/identitystore/view/view.md#navigate-through-history-items).

## Annotate history items

1. In Admin Center, click **History** in the left pane.
2. On the **Admin Center History** page, click a history item and add a note. For details, see [Annotate History Items](/docs/directorymanager/11.1/admincenter/identitystore/view/details.md#annotate-history-items).

## Export Admin Center history

You can export Admin Center history to Microsoft Excel, CSV, and XML formats.

**To export history:**

1. In Admin Center, click **History** in the left pane.
2. On the **Admin Center History** page, click **Export History**.
3. In the **Export History** dialog box, enter a name for the history file in the **Name** box, or leave the default.
4. In the **Format** dropdown list, select a format for the history file: Excel, CSV, or XML.
5. Click **Export History**.

    The file is saved at the download location set in your browser settings.

6. In the message that confirms the export, click **OK**.
