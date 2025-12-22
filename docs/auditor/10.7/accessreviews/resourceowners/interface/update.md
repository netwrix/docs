---
title: "Update Resource Wizard"
description: "Update Resource Wizard"
sidebar_position: 20
---

# Update Resource Wizard

The Update resource wizard is opened with the **Update** button in the Resource Owners interface.

![Update Resource wizard showing 1. Select Owners page](/images/auditor/10.7/access/reviews/resourceowners/wizard/selectowners.webp)

It contains three pages:

-   1. Select Owners — Lists the current owner(s). Modify by adding new owners, removing owners, or
       changing owner priority order (primary, secondary, etc.)
-   2. Description — Enter or modify a note describing the resource
-   3. Summary — Provides a preview of the settings selected within the wizard

See the Update a Resource topic for additional information.

## Update a Resource

Follow the steps to update ownership configuration for a resource.

**Step 1 –** In the Resource Owners interface, select the desired resource and click **Update**. The
Update resource wizard opens.

![Update resource wizard showing 1. Select Owners page](/images/auditor/10.7/access/reviews/resourceowners/wizard/selectowners.webp)

**Step 2 –** The Select Owners page lists the currently assigned owner(s). Modify as desired and
click **Next** to continue.

- Add new owners — Click **Add** to browse for a new owner. See the
  [Add Owner Window](/docs/auditor/10.7/accessreviews/resourceowners/interface/addowner.md) topic for additional information.
- Remove an owner — Select an owner and click **Remove**
- Change owner priority — Select an owner and use the arrow buttons to change the order

_Remember,_ the first owner in the list is the primary owner. The table has several columns with
information on the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested.

![Update resource wizard showing 2. Description page](/images/auditor/10.7/access/reviews/resourceowners/wizard/description.webp)

**Step 3 –** The Description page displays any description that has been provided by either the
Ownership Administrator or the assigned owner(s) for the resource. Modify as desired by typing in
the textbox. Then click **Next** to continue.

![Update resource wizard showing 3. Summary page](/images/auditor/10.7/access/reviews/resourceowners/wizard/summary.webp)

**Step 4 –** On the Summary page, review the settings and click Finish. The Access Reviews
application begins to process the ownership changes.

![Update resource wizard with 3. Summary page showing action status 100% complete](/images/auditor/10.7/access/reviews/resourceowners/wizard/summarytaskcompleted.webp)

**Step 5 –** The action status displays on the page. When the update has completed (100%), click
**Close**. The Update resource wizard closes.

This updates to ownership configuration have been processed.
