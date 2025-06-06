# FS\_SensitiveDataActivity Job

The FS\_SensitiveDataActivity job is designed to report on activity event information on resources identified to contain sensitive information from targeted file servers.

## Analysis Tasks for the FS\_SensitiveDataActivity Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Suspicious Activity__ > __FS\_SensitiveDataActivity__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_SensitiveDataActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/sensitivedataactivityanalysis.png)

The following analysis tasks are selected by default:

- Summarize Hourly Norms and Deviations – Creates the SA\_FS\_SensitiveDataActivity\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS\_SensitiveDataActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Sensitive Data Activity | This report highlights periods of abnormally high activity involving sensitive data. | GDPR  SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Bar Chart – Displays abnormal sensitive data activity - Table – Provides details on sensitive data activity |
