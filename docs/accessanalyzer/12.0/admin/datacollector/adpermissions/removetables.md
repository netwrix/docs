---
title: "Remove ADPermissions Tables"
description: "Remove ADPermissions Tables"
sidebar_position: 80
---

# Remove ADPermissions Tables

If it becomes necessary to clear the ADPermissions Data Collector tables and views to resolve an
issue, create a new job using it as the query source and select the Remove Tables category. The
Connection Profile applied should be the same as the one used for the associated **Active Directory
Permissions Analyzer** > **0.Collection** Job. Follow the steps.

:::warning
Using this query task results in the deletion of collected data.
:::


**Step 1 –** Create a new job and assign a query using the **ADPermissions** Data Collector.

**Step 2 –** In the Active Directory Permissions Data Collector Wizard, on the Category page select
the **Remove Tables** category and click **Next**.

**Step 3 –** On the Results page, make sure all the Available Properties are selected and click
**Next**.

**Step 4 –** Click **Finish** to close the Active Directory Permissions Data Collector Wizard. Click
**OK** to close the Query Properties window.

When the job is run, all of the ADPermissions standard reference tables are removed from the
database.

:::tip
Remember, this job deletes data from the Access Analyzer database. Ensure the job has been
configured correctly prior to executing the job.
:::


:::warning
Never leave the query task selected after the job has been executed. Accidental data
loss can occur.

:::
