# Oracle_SecurityAssessment Job

The Oracle_SecurityAssessment Job is designed to summarize and categorize the security findings from
the Oracle Solution into HIGH, MEDIUM, LOW, and NO FINDING categories base on severity.

![Oracle Security Assessment Job](/img/product_docs/accessanalyzer/12.0/solutions/databases/oracle/jobgroup46.webp)

## Analysis Tasks for the Oracle_SecurityAssessment Job

Navigate to the **Databases** > **Oracle** > **Oracle_SecurityAssessment** > **Configure** node and
select Analysis to view the analysis tasks.

![Analysis Selection](/img/product_docs/accessanalyzer/12.0/solutions/databases/oracle/jobgroup47.webp)

The default analysis task is:

- Summarize Audit Findings – Aggregates all security issues in the Oracle environment. Creates the
  #scopeOfAudit table used to create the Oracle Security Assessment report under the Configure >
  Reports node

In addition to the tables and views created by the analysis task, the Oracle_SecurityAssessment Job
produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags        | Report Elements                                                                                                                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Security Assessment | This report summarizes security related results from the Oracle solution set. | Security Assessment | This report is comprised of four elements: - Table – Provides information on the scope of the audit - Pie Chart – Displays remote OS authentication - Table – Displays findings by category - Table – Provides details of the security assessment |
