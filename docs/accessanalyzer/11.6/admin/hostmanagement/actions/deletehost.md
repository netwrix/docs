---
title: "Delete Host(s)"
description: "Delete Host(s)"
sidebar_position: 30
---

# Delete Host(s)

Use the **Delete Host(s)** option at the **Host Management** node to permanently delete a host from
the master host table, or at an individual host list node to remove the host from the selected list.

## Delete From Host Management Node

Follow the steps to delete a host from the Host Management node.

**Step 1 –** In the Host Management node, select the host in the data grid and click **Delete
Host(s)** on the Activities pane.

![Confirm dialog box](/images/accessanalyzer/11.6/admin/hostmanagement/actions/confirmdeletehost.webp)

:::warning
A deletion from the host master table at the Host Management node cannot be undone, as
it deletes it from the host management database tables. It also removes the host from any host list
to which it has been assigned. Click **Cancel** to stop the deletion.
:::


**Step 2 –** A dialog box asks for confirmation of the action. Click **OK** to proceed with the
deletion.

The host is no longer in the master host table.

## Delete From Individual Host List

Follow the steps to delete a host from an individual host list.

**Step 1 –** In the host list, select the host in the data grid and click **Delete Host(s)** on the
Activities pane.

![Confirm dialog box](/images/accessanalyzer/11.6/admin/hostmanagement/actions/confirmdeletehost.webp)

**Step 2 –** A dialog box asks for confirmation of the action. Click **OK** to proceed with the
deletion.

Enterprise Auditor checks to see if the host exists in any other static host lists. If so, the
deletion is limited to removing the selected host from the current host list.

![Confirm deletion from master host table dialog box](/images/accessanalyzer/11.6/admin/hostmanagement/actions/confirmdeletehostmaster.webp)

:::warning
A deletion from the host master table cannot be undone, as it deletes it from the host
management database tables.
:::


**Step 3 –** If the host is not found in another static host list, Enterprise Auditor asks if you
also want to remove the host from the Host Master Table. On the Confirm dialog, select the desired
action.

- Click **Yes** to remove the host from all dynamic host lists and from the host master table
- Click **No** to remove only the host for the current host list

The host is no longer in the host list.
