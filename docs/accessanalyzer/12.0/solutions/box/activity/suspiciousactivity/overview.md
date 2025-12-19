---
title: "Suspicious Activity Job Group"
description: "Suspicious Activity Job Group"
sidebar_position: 20
---

# Suspicious Activity Job Group

The Suspicious Activity Job Group identifies areas and times of abnormal activity by analyzing
typical activity patterns and identifying outliers based on factors such as amount of activity or
time of day.

![Suspicious Activity Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/jobstree.webp)

The Suspicious Activity Job Group is comprised of:

- [Box_FailedLogins Job](/docs/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/box_failedlogins.md) – Identifies failed logon events that have occurred
  over the last 30 days
- [Box_FirstTimeFolderAccess Job](/docs/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/box_firsttimefolderaccess.md) – Identifies the first time a user
  performs any activity on a folder or a file over the past 30 days
- [Box_UnusualDownloadActivity Job](/docs/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/box_unusualdownloadactivity.md) – Highlights unusual download
  activity for a user on a specific day by analyzing the download activity for a given user and
  looking for outliers
- [Box_UnusualUserActivity Job](/docs/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/box_unusualuseractivity.md) – Highlights unusual activity for a user
  on a specific day by analyzing the activity for a given user and looking for outliers
- [Box_WeekendActivity Job](/docs/accessanalyzer/12.0/solutions/box/activity/suspiciousactivity/box_weekendactivity.md) – Identifies Box activity events which have
  occurred on weekends over the last 30 days
