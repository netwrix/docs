# Box\_WeekendActivity Job

The Box\_WeekendActivity Job highlights unusual download activity for a user on a specific day by analyzing the download activity for a given user and looking for outliers. Unusual download activity could indicate a compromised account or a malicious insider.

## Analysis Tasks for the Box\_WeekendActivity Job

Navigate to __Box__ >  __1.Activity__ >  __Suspicious Activity__ >  __Box\_WeekendActivity__ >  __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_WeekendActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/activity/suspiciousactivity/weekendactivityanalysis.png)

The following analysis tasks are selected by default:

- Weekend Activity – Creates the Box\_WeekendActivity\_Details table accessible under the job’s Results node
- Weekend Activity Summary – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_WeekendActivity Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Weekend Activity | This report highlights the activity occurring on weekends in the target Box environment over the last 30 days. | None | This report is comprised of three elements:   - Bar Chart – Displays last 30 days of weekend activity for top 5 users - Table – Provides summary top 30 days of weekend activity - Table – Provides details on weekend Activity Details |
