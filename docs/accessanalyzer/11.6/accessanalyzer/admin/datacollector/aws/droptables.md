# Drop AWS Tables

Sometimes when troubleshooting an AWS issue, it becomes necessary to clear the AWS DC data and
tables from the Enterprise Auditor database. Follow the steps to configure a job to remove tables.

**Step 1 –** Create a new job.

**Step 2 –** Configure the target host as **Local host**.

**Step 3 –** Assign a query using the **AWS** Data Collector.

![Drop AWS DC Tables option on Amazon Web Services Data Collector Wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/fsaa/droptables.webp)

**Step 4 –** In the Amazon Web Services Data Collector Wizard on the Category page, select the
**Drop AWS DC Tables** category task. Click **Next**.

**Step 5 –** Click **Next** and then click **Finish** to close the Amazon Web Services Data
Collector Wizard. Click **OK** to close the Query Properties window.

**CAUTION:** When the job is run, all of the AWS DC data and tables are removed from the database.

The job is now configured and ready to run.

**NOTE:** An AWS connection profile is not required for the Drop AWS DC Tables task.
