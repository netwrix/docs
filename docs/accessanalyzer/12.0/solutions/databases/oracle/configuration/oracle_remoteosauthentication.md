---
title: "Oracle_RemoteOSAuthentication Job"
description: "Oracle_RemoteOSAuthentication Job"
sidebar_position: 50
---

# Oracle_RemoteOSAuthentication Job

The Oracle_RemoteOSAuthentication Job is designed to discover if remote OS authentication is enabled
for the targeted Oracle database servers.

## Analysis Tasks for the Oracle_RemoteOSAuthentication Job

Navigate to the **Jobs > Databases > Oracle > 4.Configuration > Oracle_RemoteOSAuthentication >
Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/configuration/analysisremoteosauth.webp)

The default analysis tasks are:

- Find Instances With Remote OS Authentication Enabled – Finds database instances with remote OS
  authentication setting set to “TRUE”. Creates the SA_Oracle_RemoteAuthenticationEnabled_Details
  table accessible under the job’s Results node.
- Remote OS Authentication Summary – Counts the number of database instances where the
  ‘remote_os_authent’ parameter is set to “TRUE” and also those that are set to “FALSE”. Creates the
  SA_Oracle_RemoteOSAuthentication_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_RemoteOSAuthentication
Job produces the following pre-configured report.

| Report                          | Description                                                                                | Default Tags | Report Elements                                                                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Remote OS Authentication | This report shows the number of instances that have remote_os_auth parameter set to “TRUE” | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays remote OS authentication</li><li>Table – Provides information on remote OS authentication details</li></ul> |
