# Suspicious Activity Job Group

The Suspicious Activity Job Group identifies areas and times of abnormal activity by analyzing
typical activity patterns and identifying outliers based on factors such as amount of activity or
time of day.

![Suspicious Activity Job Group in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The Suspicious Activity Job Group is comprised of:

- [Box_FailedLogins Job](box_failedlogins.md) – Identifies failed logon events that have occurred
  over the last 30 days
- [Box_FirstTimeFolderAccess Job](box_firsttimefolderaccess.md) – Identifies the first time a user
  performs any activity on a folder or a file over the past 30 days
- [Box_UnusualDownloadActivity Job](box_unusualdownloadactivity.md) – Highlights unusual download
  activity for a user on a specific day by analyzing the download activity for a given user and
  looking for outliers
- [Box_UnusualUserActivity Job](box_unusualuseractivity.md) – Highlights unusual activity for a user
  on a specific day by analyzing the activity for a given user and looking for outliers
- [Box_WeekendActivity Job](box_weekendactivity.md) – Identifies Box activity events which have
  occurred on weekends over the last 30 days
