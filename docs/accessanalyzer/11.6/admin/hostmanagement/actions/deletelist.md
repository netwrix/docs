---
title: "Delete List"
description: "Delete List"
sidebar_position: 40
---

# Delete List

Use the **Delete List** option to remove the selected list. This option is available only at an
individual host list node.

:::info
Before deleting a host list, first ensure no job uses it.
:::


**Step 1 –** In the Navigation pane, select the host list to delete and click **Delete List**.

![Confirm dialog box](/images/accessanalyzer/11.6/admin/hostmanagement/actions/confirmdeletelist.webp)

:::warning
This action can't be undone. Click **Cancel** to stop the deletion.
:::


**Step 2 –** On the Confirm dialog box, click **OK** to continue with the deletion.

Enterprise Auditor checks to see if any hosts within the host list exist in any other static
host lists.

![Confirm deletion of orphaned hosts from master host table dialog box](/images/accessanalyzer/11.6/admin/hostmanagement/actions/confirmdeletelistmaster.webp)

**Step 3 –** If Enterprise Auditor doesn't find any hosts in another host list, it asks if you want
to remove the host from the master host table. On the Confirm dialog box, select the option you want.

- Yes – Deletes the specified host from the master host table
- No – Doesn't delete the specified host from the master host table
- No to All – Doesn't delete other hosts that aren't found in another static host list from the
  master host table
- Yes to All – Deletes other hosts not found in any other static host list from the master host
  table

When the operation is complete, the list is no longer visible under the Host Management node in the
Navigation pane and you can't use it to execute jobs against.
