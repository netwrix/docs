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
Using this query task deletes collected data.
:::


**Step 1 –** Create a new job and assign a query using the **ADPermissions** Data Collector.

**Step 2 –** In the Active Directory Permissions Data Collector Wizard, on the Category page select
the **Remove Tables** category and click **Next**.

**Step 3 –** On the Results page, ensure all the Available Properties are selected and click
**Next**.

**Step 4 –** Click **Finish** to close the Active Directory Permissions Data Collector Wizard. Click
**OK** to close the Query Properties window.

When you run the job, Enterprise Auditor removes all of the ADPermissions standard reference tables
from the database.

:::tip
Remember, this job deletes data from the Enterprise Auditor database. Ensure you configure the job
correctly before running it.
:::


:::warning
Never leave the query task selected after you execute the job. Accidental data
loss can occur.

:::
