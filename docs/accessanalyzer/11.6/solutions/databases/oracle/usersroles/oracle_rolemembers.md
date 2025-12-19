---
title: "Oracle_RoleMembers Job"
description: "Oracle_RoleMembers Job"
sidebar_position: 20
---

# Oracle_RoleMembers Job

The Oracle_RoleMembers Job is designed to analyze and provide information about role members across
all targeted Oracle database servers.

## Analysis Tasks for the Oracle_RoleMembers Job

Navigate to the **Oracle** > **1.Users and Roles** > **Oracle_RoleMembers** > Configure node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/usersroles/jobgroup22.webp)

The default analysis tasks are:

- Role Member Details – Creates the SA_Oracle_RoleMember_Details table accessible under the job’s
  Results node
- Role Membership Instances Summary – Creates the SA_ Oracle_RoleMember_Summary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the Oracle_RoleMembers Job
produces the following pre-configured report.

| Report          | Description                                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                              |
| --------------- | --------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Role Membership | This report shows details on the roles and role membership in the audited Oracle environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top roles by role membership</li><li>Table – Provides details on roles by role membership</li><li>Table – Provides information on role membership details</li></ul> |
