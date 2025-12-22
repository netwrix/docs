---
title: "Report Cleanup when Deleting a Job or Job Group"
description: "Report Cleanup when Deleting a Job or Job Group"
sidebar_position: 80
---

# Report Cleanup when Deleting a Job or Job Group

When deleting a job or job group, the Delete Job and Delete Group wizards allow you to delete any
published reports contained in the jobs that are being deleted. Follow the steps to delete a job or
job group that contains published reports.

:::warning
Deleted objects cannot be restored.
:::


![Delete Group on right-click menu](/images/accessanalyzer/12.0/admin/report/jobstree.webp)

**Step 1 –** In the Jobs tree, right-click on the job or group that you want to delete and select
**Delete Job/Group**.

![Delete Group wizard page](/images/accessanalyzer/12.0/admin/report/deletegroup.webp)

**Step 2 –** On the Delete Job/Group page of the wizard, confirm it shows the correct job or group
that you want to delete, then click **Next**.

:::note
If there are no published reports, clicking **Next** starts the deletion (skip to step 4).
:::


![Delete Published Reports wizard page](/images/accessanalyzer/12.0/admin/report/reporttree.webp)

**Step 3 –** The Delete Published Reports page of the wizard shows the tree of published reports.
Select the checkboxes next to all the reports you want to delete. You can also select reports by job
group or job. Click **Next** to proceed with the deletion.

![Progress wizard page](/images/accessanalyzer/12.0/admin/report/progress.webp)

**Step 4 –** The Progress page shows you the status of the deletion process. When it has completed,
click **Finish** to exit the wizard.

The job or job group and all of the selected published reports have been deleted. If you chose not
to delete any of the published reports contained in any of the deleted jobs, then those remaining
reports can still be viewed in the Web Console, even though the parent has been removed from the
Access Analyzer Console.

![Delete Published Reports page with a report from previous deletion](/images/accessanalyzer/12.0/admin/report/reportfrompreviousdeletion.webp)

The remaining published reports that weren't deleted are shown in the wizard if you are deleting the
parent group of the previously deleted job or group.
