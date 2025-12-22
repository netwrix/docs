---
title: "Identity Store History"
description: "Identity Store History"
sidebar_position: 70
---

# Identity Store History

In Admin Center, you can view the history data that the GroupID history-tracking function collects
for changes made to the configurations, workflows, and security roles in an identity store.

This data represents the events that history-tracking is configured to track. For example, history
is logged when a user enables enrollment for the identity store, removes an approver from a
workflow, modifies a policy for a security role, and more. History is not logged when a user
refreshes a page or previews any information.

Furthermore, if history tracking is not enabled or has been lately disabled, the **Identity Store
History** page is blank or it displays data that was logged before history-tracking was turned off.

What do you want to do?

- [View Identity Store History](#view-identity-store-history)
- [Filter History Data](#filter-history-data)
- [Navigate Through History Items](#navigate-through-history-items)
- [Annotate History Items](#annotate-history-items)
- [Export History Data](#export-history-data)

## View Identity Store History

Changes made to identity store configurations, security roles, and workflows can be tracked and
viewed in Admin Center.

**To view identity store history:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.

    The **Identity Store History** page displays history data in a descriptive and concise manner.
    Items are sorted according to the date and time they were last updated, with the most recent at
    the top.  
    Click a history item to view its details. See the
    [History Item Details](/docs/directorymanager/11.0/signin/identitystore/view/details.md)
    topic.

## Filter History Data

GroupID provides filters to limit the history results displayed on the **Identity Store History**
page. You can define a criterion to filter history data by action, machine name, new value, old
value, and more.

**To define a filter:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.  
   On the **Identity Store History** page, use the **History Filters** area to specify a filter.
4. In the _Select a Filter_ drop-down list, select an attribute to use for filtering history
   records. Options are:

    - Action
    - Machine Name
    - Modified On
    - New Value
    - Old Value
    - User Name

5. In the _Select an Operator_ drop-down list, select an operator to apply to the selected
   attribute. This drop-down displays the operators on the basis of the selected attribute.
   Available operators are:

    (missing or bad snippet)

6. In the _Select a Value_ box, specify a value for the attribute. The selected attribute and
   operator determine the kind of value that can be entered in this box.  
   For some operators, such as _Present_ and _Not Present_, this field is not available. These
   operators check if a value for the attribute is present or not.

    **Add more filters** - On adding a filter, the next row is displayed, so you can add another
    filter.  
     **Remove a filter row** - To remove a filter row, click **Remove** for it.  
     **Remove the filter** - To remove all the filter rows, click **Clear**.

7. To apply the filter, click **Apply**. With multiple filters, history items that satisfy all the
   filters are displayed.

## Navigate Through History Items

By default, the page size for the **Identity Store History** page is set to 10, indicating that ten
history items are displayed per page. You can set the page size to a maximum of 100 items.

To move through pages and navigate the records, use the page numbers and arrows given at the bottom
of the listing.

**Set the page size:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.
4. On the **Identity Store History** page, use the Items per page drop-down list to specify the
   number of items to be displayed per page.

**Navigate through records:**

Navigation options are displayed at the bottom of the history records. You can view the history
items count along with the range of items you are currently viewing.

- Click **First** to jump to the first page, containing the latest history records.
- Click **Last** to jump to the last page, containing the oldest history records.
- Use the arrows to move to the previous or next page.
- Click a page number to jump to that page.

## Annotate History Items

GroupID enables a user to add notes to history actions that he or she performed. A note may explain
the reason for an action, such as why he or she changed the security type for a group. Only the user
who added a note can update it. Other users can view it, but they cannot edit it or add comments.

**To annotate history items:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.
4. On the **Identity Store History** page, click a history item.
5. On the **History Details** dialog box, manage notes for the history item. See the
   [Annotate History Items](/docs/directorymanager/11.0/signin/identitystore/view/details.md#annotate-history-items)
   topic.

## Export History Data

You can export identity store history to Microsoft Excel, CSV, and XML formats.

**To export history:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **History** under **Settings** in the left pane.
4. On the **Identity Store History** page, click **Export History**.
5. On the **Export History** dialog box, enter a name for the history file in the **Name** box or
   leave it to default.
6. Select a format for the history file in the Format drop-down list. Available formats are Excel,
   CSV, and XML
7. Click **Export History**. The file is saved at the download location specified in browser
   settings.
8. A message is displayed that history data is successfully exported. Click **OK**.

**See Also**

- [Configure History Tracking](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md)
- [History in GroupID](/docs/directorymanager/11.0/signin/concepts/history.md)
- [Event Logging](/docs/directorymanager/11.0/signin/identitystore/view/eventlogging.md)
