---
title: "SG_Sessions Job"
description: "SG_Sessions Job"
sidebar_position: 30
---

# SG_Sessions Job

The SG_Sessions job lists sessions and logged on users from all targeted hosts. These active
sessions and logged on users may have their hashes stored in memory on the target machine, which
could be leveraged in a Pass the Hash attack.

## Queries for the SG_Sessions Job

The SG_Sessions job uses the SystemInfo Data Collector for the following queries:

:::warning
The queries) are preconfigured for this job. Never modify the queries.
:::


![Queries for the SG_Sessions Job](/images/accessanalyzer/12.0/solutions/windows/privilegedaccounts/localadministrators/sessionsqueries.webp)

The queries for the SG_Sessions job are:

- Logged on Users – Returns info for logged on users of local and remote machines
- Sessions – Returns info for local and remote sessions

## Analysis Tasks for the SG_Sessions Job

Navigate to the **Windows** > **Privileged Accounts** > **Local Administrators** > **SG_Sessions** >
**Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the SG_Sessions Job](/images/accessanalyzer/12.0/solutions/windows/privilegedaccounts/localadministrators/sessionsanalysis.webp)

The default analysis tasks are:

- Active Sessions – Lists all sessions and logged on users for local and remote machines. Creates
  the SA_SG_Sessions_Details table accessible under the job’s Results node.
- Active Sessions Summary – Summarizes active sessions by host and user
- Logged on Users – Analyzes and retains logged on user data. Creates the SA_SG_Sessions_UserLogons
  table accessible under the job’s Results node.
- Logged on Users Summary – Summarizes user logon activity by host and admins
- LoggonOnUsers and Sessions – Joins LoggedOnUsers and Sessions data. Creates the
  SA_SG_Sessions_AdminSessions table accessible under the job’s Results node.
- Sessions Scope – Summarizes the scope of the SG_Sessions job

In addition to the tables created by the analysis tasks, the SG_Sessions job produces the following
pre-configured report.

| Report   | Description                                                                                         | Default Tags                                                        | Report Elements                                                                                                                                                                                                                                              |
| -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sessions | This report identifies domain administrators that may have credentials in memory on member servers. | CCPA, GDPR, SOX, HIPAA, PCI-DSS, GLBA, ITAR, FERPA, FISMA, ISO27001 | This report is comprised of four elements: <ul><li>Table – Details the scope of the SG_Sessions job</li><li>Pie Chart – Displays LAPS status by host</li><li>Table – Provides LAPS policy details</li><li>Table – Provides details on all sessions</li></ul> |
