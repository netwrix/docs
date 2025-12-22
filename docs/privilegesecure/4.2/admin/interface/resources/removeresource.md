---
title: "Remove Resource Window"
description: "Remove Resource Window"
sidebar_position: 50
---

# Remove Resource Window

Use the Remove Resources window to remove a selected resource from the database.

Follow the steps to remove a resource.

**Step 1 –** Navigate to the **Resources** page.

**Step 2 –** Select the resource(s) to modify.

**Step 3 –** Click **Remove** to open the Remove Resource window.

![Remove Resource Window](/images/privilegesecure/4.2/accessmanagement/admin/policy/window/resources/removeresource.webp)

**Step 4 –** Select the **Remove from Database** checkbox to remove the selected resource(s) from
the database.

:::note
Selecting this checkbox will remove all records of the resource(s) from the database. It
will not prevent the resource from being synced or added again.
:::


**Step 5 –** Click **Remove** to confirm that you want to remove the selected resource(s).

- The Remove from Database checkbox does not change the behavior for Database, Website, Entra ID,
  Domain, and secret vault resources. These resource types will be deleted from the database when
  you click Remove even if the Remove from Database checkbox is not selected.
- The Remove from Database checkbox must be selected and confirmed by clicking **Remove** to remove
  any Active Directory-related resources.
- Any non-Acitve Directory related resource whether **Remove from Database** option is selected or
  not, will be removed from the Database.

**Step 6 –** Click **Okay** to remove the selected resource(s).

The resource has been removed from the Resource page.
