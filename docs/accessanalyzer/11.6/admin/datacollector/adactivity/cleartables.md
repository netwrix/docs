---
title: "Clear ADActivity Tables"
description: "Clear ADActivity Tables"
sidebar_position: 80
---

# Clear ADActivity Tables

Sometimes when troubleshooting an ADActivity issue, it becomes necessary to clear the standard
reference tables. Follow the steps.

**Step 1 –** Create a new job and assign a query using the ADActivity Data Collector.

![Active Directory Activity DC wizard Category page](/images/accessanalyzer/11.6/admin/datacollector/adactivity/categoryremovetables.webp)

**Step 2 –** In the Active Directory Activity DC Wizard on the Category page, select the **Remove
Tables** category task.

![Active Directory Activity DC wizard Results page for Remove Tables category](/images/accessanalyzer/11.6/admin/datacollector/adactivity/resultsremovetables.webp)

**Step 3 –** Click **Next** to go to the Results page. Optionally, select the **Success** checkbox
to display a confirmation of successful removal in the results after the job is run.

**Step 4 –** Click **Next** and then Click **Finish** to close the Active Directory Activity DC
Wizard. Click **OK** to close the Query Properties window.

:::warning
When the job is run, all of the ADActivity standard reference tables are removed from
the database.

:::
