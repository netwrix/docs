# FS\_PeerGroupActivity Job

The FS\_PeerGroupActivity job is designed to report on abnormal activity event information based on peer group analysis from targeted file servers.

## Analysis Tasks for the FS\_PeerGroupActivity Job

View the analysis tasks by navigating to the __FileSystem__ > __5.Activity__ > __Suspicious Activity__ > __FS\_PeerGroupActivity__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_PeerGroupActivity Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/peergroupactivityanalysis.png)

- Summarize Hourly Norms and Deviations – Creates the SA\_FS\_PeerGroupActivity\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS\_PeerGroupActivity job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unusual Peer Group Activity | This report highlights unusual periods of activity based on peer group analysis. When a user accesses an abnormal amount of data from outside of their own department, the failure of separation of duties can indicate a security threat. | None | This report is comprised of one element:   - Table – Provides details on abnormal peer group activity |
