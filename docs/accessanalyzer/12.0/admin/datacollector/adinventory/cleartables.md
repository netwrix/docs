---
title: "Clear ADInventory Tables"
description: "Clear ADInventory Tables"
sidebar_position: 90
---

# Clear ADInventory Tables

Sometimes when troubleshooting an ADInventory issue, it becomes necessary to clear the standard
reference tables. Follow the steps.

:::warning
Be careful when using this query task. It will result in the deletion of collected
data.
:::


**Step 1 –** Create a new job and assign a query using the **ADInventory** Data Collector.

![Remove Tables task selected on Active Directory Inventory DC Wizard Category page ](/images/accessanalyzer/12.0/admin/datacollector/adinventory/categoryremovetables.webp)

**Step 2 –** In the Active Directory Inventory DC Wizard on the Category page, select the **Remove
Tables** category task.

**Step 3 –** Click **Next** and then **Finish** to close the Active Directory Inventory DC Wizard.
Click **OK** to close the Query Properties window.

When the job is run, all of the ADInventory standard reference tables are removed from the database.

:::warning
Never leave the query task selected after job execution. Accidental data loss can
occur.
:::


:::tip
Remember, this job deletes data from the Access Analyzer database. Check the job has been
configured correctly prior to job execution.
:::
