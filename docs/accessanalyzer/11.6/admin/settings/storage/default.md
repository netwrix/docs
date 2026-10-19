---
title: "Set a Default Storage Profile"
description: "Set a Default Storage Profile"
sidebar_position: 30
---

# Set a Default Storage Profile

You can create multiple Storage Profiles, but you can set only one as the default. A green
checkmark next to the profile name indicates the default Storage Profile. To change
the default Storage Profile at the global level:

![Set as Default option on Storage page](/images/accessanalyzer/11.6/admin/settings/storage/default.webp)

**Step 1 –** Select the profile to be the new default, and click **Set as default**. The Change
storage profile window opens.

![Change storage profile window](/images/accessanalyzer/11.6/admin/settings/storage/changestorageprofile.webp)

**Step 2 –** There are three options for host management data migration. Select the option you want,
choose whether to apply the secondary option, and click **OK**.

- Merge your host management data with data in the destination table (Recommended) – This option
  keeps existing hosts and host discovery tasks in the destination and updates the tasks based on
  the information found in the source database

    - Use destination value on conflict – If selected, any conflicting information between the
      destination table and the source database is resolved in favor of the destination table

- Overwrite data in the destination table – This option replaces existing hosts and host discovery
  tasks with ones found in the source database

    - Also overwrite shared host inventory data – If selected, host inventory data is also replaced
      with data found in the source database

- Don’t copy your host management data to destination table – This option doesn't copy, update, or
  overwrite information between databases

    - Clear data in destination table – If selected, all host management data in the destination
      table is deleted

![Change storage profile window when transfer is complete](/images/accessanalyzer/11.6/admin/settings/storage/changestorageprofilefinish.webp)

**Step 3 –** When the host management data migration has completed, click **Finish**.

![Storage page with new default storage profile](/images/accessanalyzer/11.6/admin/settings/storage/defaultsave.webp)

**Step 4 –** A blue arrow now points to the new default Storage Profile. However, the arrow also
indicates that Enterprise Auditor hasn't fully recognized the new default. Click **Save** and
then **OK** to confirm the changes.

**Step 5 –** Finally, to ensure these changes take effect, exit the Enterprise Auditor application
and relaunch it.

The green checkmark replaces the blue arrow, indicating that Enterprise Auditor now recognizes the
new default Storage Profile.
