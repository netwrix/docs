---
title: "Add New Resource Wizard"
description: "Add New Resource Wizard"
sidebar_position: 10
---

# Add New Resource Wizard

The Add new resource wizard is opened with the **Add** button in the Resource Owners interface.

![Add new resource wizard showing 1. Select Resources page](/images/auditor/10.7/access/reviews/resourceowners/wizard/selectresource.webp)

It contains four pages:

-   1. Select Resource — Select the resource or group to be managed by the owner
-   2. Select Owners — Select Owners from Active Directory
-   3. Description — Optionally enter a note describing the resource
-   4. Summary — This page provides a preview of the settings selected within the wizard

See the Add a Resource topic for additional information.

## Add a Resource

Follow the steps to add resources one at a time and assign owners.

**Step 1 –** In the Resource Owners interface, click **Add**. The Add new resource wizard opens.

![Add new resource wizard page showing 1. Select Resources page](/images/auditor/10.7/access/reviews/resourceowners/wizard/selectresource.webp)

**Step 2 –** On the Select Resource page, select the resource to be managed. Then click **Next**.

- Search field – Begin typing the name of the resource:
    - For File System, enter a share UNC path starting with “\\”
        - For example, \\example\share
    - For SharePoint, enter the site URL starting with “http://”
        - For example, http://farm.corp.com
    - For groups, enter the group name in NTAccount format [DOMAIN\GROUP]
        - For example, acme\app.group
- Browse option – Navigate through the resource tree to select the desired File System or SharePoint
  resource.

![Add new resources wizard showing 2. Select Owners page](/images/auditor/10.7/access/reviews/resourceowners/wizard/selectowners_1.webp)

**Step 3 –** On the Select Owners page, click **Add** to browse for an owner. Repeat this Step to
add multiple owners. See the [Add Owner Window](/docs/auditor/10.7/accessreviews/resourceowners/interface/addowner.md) topic for additional
information.

![Add new resources wizard with the 2. Select Owners page showing multiple owners selected](/images/auditor/10.7/access/reviews/resourceowners/wizard/selectownerswithowners.webp)

**Step 4 –** When only one owner is assigned, the owner will be the Primary by default. When
multiple owners are assigned, the first owner in the list is the Primary owner. Use the arrow
buttons to order the owners. Use the **Add** and **Remove** buttons to modify the list of owners.
When the owners list is complete, click **Next**.The table has several columns with information on
the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested.

![Add new resource wizard showing 3. Description page](/images/auditor/10.7/access/reviews/resourceowners/wizard/description_1.webp)

**Step 5 –** On the Description page, optionally add a description for the resource in the textbox.
Then click **Next**.

![Add new resource wizard showing 4. Summary page](/images/auditor/10.7/access/reviews/resourceowners/wizard/summary_1.webp)

**Step 6 –** On the Summary page, review the settings and click Finish. The Access Reviews
application begins to process the ownership configuration.

![Add new resource wizard with 4. Summary page showing action status 100% completed](/images/auditor/10.7/access/reviews/resourceowners/wizard/summarytaskcompleted.webp)

**Step 7 –** The action status displays on the page. When the task has completed (100%), click
**Close**. The Add new resource wizard closes.

This resource is now being managed through the Access Reviews application.
