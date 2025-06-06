# EX\_Mailflow\_Mailbox Job

The EX\_Mailflow\_Mailbox job provides information around each user’s mail flow in the organization. This job is set to analyze the last 30 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The EX\_Mailflow\_Mailbox job has the following configurable parameter:

- Number of days to collect counts for – Sets the number of days for the __User Mailboxes By Message Count__ and __User Mailboxes by Message Size__ analysis tasks. The default is __30__ days.

See the [Analysis Tasks for the EX\_Mailflow\_Mailbox Job](#Analysis-Tasks-for-the-EX_Mailflow_Mailbox-Job) topic for additional information.

## Analysis Tasks for the EX\_Mailflow\_Mailbox Job

View the analysis tasks by navigating to the __Exchange__ > __8. Exchange Online__ > __EX\_Mailflow\_Mailbox__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_Mailflow_Mailbox Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/online/mailflow/mailflowmailboxanalysis.png)

The following analysis tasks are selected by default:

- User Message Metrics By Day – Creates the EX\_MailFlow\_UserByDay table, accessible under the job’s Results node
- User Mailboxes By Message Count – Creates the EX\_MailFlow\_UserByCount table, accessible under the job’s Results node

  - By default, counts are collected for the last 30 days. The number of days can be modified with the ```@Days``` parameter.
  - See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information
- User Mailboxes by Message Size – Creates the EX\_MailFlow\_UserBySize table, accessible under the job’s Results node

  - By default, sizes are selected for the last 30 days. The number of days can be modified with the ```@Days``` parameter.
  - See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information

In addition to the tables and views created by the analysis tasks, the EX\_Mailflow\_Mailbox job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Top Users Message Count by Message ID  (Top User Traffic By Message ID) | Displays message counts for users by Message ID. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 users traffic by message ID - Table – Provides details on the last 30 days user traffic by message ID |
| Top Users Message Count By Recipient  (Top Users Traffic By Recipient) | Displays message counts for users by recipient. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 users traffic by recipient - Table – Provides details on the last 30 days user traffic by recipient |
| Top Users Message Size By Message ID  (Top Users Traffic Size By Message ID) | Displays message sizes for users by Message ID. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 users traffic size by message ID - Table –Details on the last 30 days user traffic size by recipient |
| Top Users Message Size By Recipient  (Top Users Traffic Size By Recipient) | Displays message sizes for users by recipient. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 users traffic size by recipient - Table – Provides details on the last 30 days user traffic size by recipient |
