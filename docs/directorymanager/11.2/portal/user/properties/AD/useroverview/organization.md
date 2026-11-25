---
title: "Organization Tab for Users and Contacts"
description: "Set the primary and additional managers for a user or contact in Directory Manager, and view, transfer, or terminate direct reports."
keywords:
  - user organization tab
  - additional manager
  - dotted-line manager
  - direct reports
  - Managed By Life Cycle job
sidebar_position: 70
---

# Organization Tab for Users and Contacts

Use this tab to add, change, or remove the primary manager of a user or contact. You can also specify additional managers, who have the same privileges as the primary manager.

The tab also shows the direct reports of the user or contact. Direct reports are groups, users, or contacts that report directly to the user or contact. You can add direct reports, and you can transfer or terminate a direct report.

:::note
Users can also manage their direct reports and change their primary manager while validating their profile in the portal. See the [Validate your profile in Directory Manager](/docs/directorymanager/11.2/portal/user/manage/validateprofile.md) topic.
:::

## Dotted line management

Each user can have one primary manager and one or more dotted-line managers, also called additional managers. Users can add, change, or remove their primary and dotted-line managers.

When users change their primary or additional manager, Directory Manager emails the primary manager to accept or reject the request. If the primary manager accepts, the user's manager changes. If the primary manager rejects the request, the user keeps the current manager.

:::note
This is the default flow for the 'Workflow to Change manager' workflow, with the primary manager set as the approver. If the administrator disables the workflow or changes the workflow approver, the flow changes accordingly. See the [Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.2/portal/request/overview.md) topic.
:::

**Manager**

Displays the primary manager of the user or contact, if specified. The user or contact can change their primary manager.

Click the ellipsis button to open the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.2/portal/generalfeatures/find.md), where you can search for and select a user to set as the manager.

**Reports**

Displays a list of objects that report directly to this user or contact. These objects can include users, groups, and contacts.

- To add a direct report, click **Add**. Enter a search string to locate the object, or click **Advanced** to search with the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.2/portal/generalfeatures/find.md).
- To transfer a direct report, select it and click **Transfer**.

  When you transfer a direct report, Directory Manager emails the direct report to accept or reject the transfer. If the direct report accepts, they must select another primary manager and validate their profile. If the direct report rejects the transfer, they return to the old manager, meaning you.

  :::note
  This is the default flow for the 'Workflow to Transfer a User' workflow, with the direct report set as the approver. If the administrator disables the workflow or changes the approver, the flow changes accordingly. See the [Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.2/portal/request/overview.md) topic.
  :::

- To terminate a direct report, select it and click **Terminate**.

  If the 'Workflow to Terminate a User' workflow is disabled, the termination takes effect immediately. If the workflow is enabled, Directory Manager sends a request to an approver. If the approver approves it, the direct report is terminated. If the approver denies it, the direct report remains with the manager (you).

**Additional Manager**

This section lists the additional managers of the user or contact.

- To add a manager, click **Add**. Enter a search string to locate the object, or click **Advanced** to search with the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.2/portal/generalfeatures/find.md).
- To remove an additional manager, select it and click **Remove**.

| Column Name | Description |
| --- | --- |
| Type | The object type of the additional manager, such as user or group. |
| Name | The name of the additional manager. |
| Manager Type | Indicates whether the object is a temporary or permanent additional manager of this user/contact. The available manager types are: <ul><li>Perpetual - To make the object a permanent additional manager of the user/contact.</li><li>Temporary Manager - To make the object a temporary additional manager of the user/contact for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed as manager.</li><li>Addition Pending - Indicates that the object becomes a temporary additional manager of the user/contact for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s manager type is displayed as ‘Addition Pending’. On the beginning date, the manager type changes to ‘Temporary Owner’. <br />Example: <br />You add Smith as a temporary additional manager of User A on May 15, 2025 for future dates, May 20-30, 2025. Smith is listed with User A’s additional managers with ‘Addition Pending’ as its manager type from May 15 to 19, 2025. <br />On May 20, Smith becomes a temporary additional manager of User A and its manager type changes to ‘Temporary Manager’ from May 20 to 30, 2025. <br />After May 30, Smith is removed as User A’s additional manager.</li><li>Removal Pending - Indicates that the object is temporarily removed as an additional manager of the user/contact for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object’s manager type is displayed as ‘Removal Pending’. On the beginning date, the manager type changes to ‘Temporary Removed’. <br />Example: <br />You remove Smith as an additional manager of User A on May 15, 2025 for future dates, May 20-30, 2025. Smith appears as User A’s additional manager with ‘Removal Pending’ as manager type from May 15 to 19, 2025. <br />On May 20, Smith’s manager type in Directory Manager changes to ‘Temporary Removed’ until May 30, 2025. After May 30, Smith is added back as a permanent additional manager of User A.</li><li>Temporary Removed - Indicates that the object is temporarily removed as the user/contact’s additional manager for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back as a permanent additional manager of the user/contact.</li></ul> When the object is a perpetual additional manager, the **Manager Type** column is blank. Click anywhere in the row to make it editable for changing the manager type of the additional manager. You can't change the manager type when the additional manager is a group. |
| Beginning | Shows the beginning date of the temporary addition or removal. |
| Ending | Shows the ending date of the temporary addition or removal. |

:::note
For each column, a filter is also available that lets you filter records based on a criterion. For example, to show objects whose display names start with D, enter D in the box under the Name header and press Enter.
:::

The Managed By Life Cycle job updates the temporary managers of users and contacts. It adds and removes temporary additional managers on the specified dates.

Consider a scenario where the Managed By Life Cycle job runs once a week, for example on Mondays. An object is to be a user's temporary additional manager for three days, Wednesday through Friday. The object isn't added, because the job doesn't run on those days to update temporary managers.
